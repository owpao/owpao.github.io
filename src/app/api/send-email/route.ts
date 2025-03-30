import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Simple in-memory rate limiting
const RATE_LIMIT_DURATION = 60 * 1000 // 1 minute
const MAX_EMAILS_PER_IP = 3 // Maximum emails per IP per minute
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const requestData = ipRequestCounts.get(ip)

  if (!requestData) {
    ipRequestCounts.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (now - requestData.timestamp > RATE_LIMIT_DURATION) {
    // Reset if the duration has passed
    ipRequestCounts.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (requestData.count >= MAX_EMAILS_PER_IP) {
    return true
  }

  requestData.count++
  return false
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
console.log('process.env.NEXT_PUBLIC_RESEND_API_KEY', process.env.NEXT_PUBLIC_RESEND_API_KEY)
console.log('process.env.RESEND_API_KEY', process.env.RESEND_API_KEY)

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    // Get client IP
    const ip = req.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { name, email, message } = await req.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      )
    }

    // Check if required environment variable is set
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is missing')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['johnpaoloflores@gmail.com'],
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from: ${ip}
Date: ${new Date().toISOString()}
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
} 