"use client"

import { Github, Linkedin, Mail, MapPin, Globe, Code, Server, Database, Terminal, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TechLogo } from "@/components/tech-logo"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setName("")
        setEmail("")
        setMessage("")
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('An error occurred. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="min-h-screen relative">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
      
      {/* Content */}
      <div className="relative">
        <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-8 sm:py-12 md:py-20">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>

          <div className="grid gap-6 md:gap-8">
            {/* Header Section */}
            <div className="grid gap-4 md:grid-cols-[2fr_1fr] items-start">
              <Card className="overflow-hidden">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h1 className="heading-responsive font-bold">John Paolo Flores</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground">Full Stack Developer</p>
                    <p className="text-responsive text-muted-foreground">
                      👋 Full Stack Developer specializing in enterprise applications at DBS Bank Singapore. Experienced in <strong>Java</strong>, <strong>Spring Boot</strong>, and modern JavaScript frameworks. Focused on building scalable microservices and secure systems.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Singapore</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href="mailto:johnpaoloflores@gmail.com" className="hover:underline">
                        johnpaoloflores@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://github.com/owpao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/owpao
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://linkedin.com/owpaoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/owpaoo
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span>(+63) 915 499 6738 | (+65) 9039 5746</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Section */}
            <Card className="overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Tech Stack</h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-blue-500" />
                      <h3 className="font-medium">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="react" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>React</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="angular" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Angular</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="javascript" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>JavaScript</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="typescript" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>TypeScript</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="html" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>HTML</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="css" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>CSS</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Backend</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="java" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Java</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="spring" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Spring Boot</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="nodejs" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Node.js</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="python" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Python</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-purple-500" />
                      <h3 className="font-medium">Database</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="mysql" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>MySQL</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="oracle" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Oracle SQL</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="firebase" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Firebase</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-amber-500" />
                      <h3 className="font-medium">DevOps & Tools</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="docker" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Docker</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="git" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Git</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="jenkins" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Jenkins</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TechLogo name="aws" className="h-10 w-10" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>AWS</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience and Projects Tabs */}
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-muted">
                <TabsTrigger value="experience" className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm">Experience</TabsTrigger>
                <TabsTrigger value="projects" className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm">Projects</TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="mt-4">
                <div className="relative pl-12">
                  {/* Vertical line */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-primary/20"></div>
                  
                  {/* Experience items */}
                  <div className="space-y-8">
                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[55px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-primary"></div>
                      <Card>
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Full Stack Developer</h3>
                              <p className="text-sm text-muted-foreground">U3 InfoTech Pte Ltd (DBS Bank Singapore)</p>
                            </div>
                            <span className="text-sm text-muted-foreground">07/2022 - Present</span>
                          </div>
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            <li>
                              Developed a Trading Portfolio Monitoring Application using <strong>Java Spring Boot</strong> and <strong>microservice
                              architecture</strong>
                            </li>
                            <li>Contributed to frontend migration of Internal Ratings Module using <strong>LitElement</strong> framework</li>
                            <li>Developed a Batch Job Service using <strong>Spring Batch</strong> and <strong>AWS S3</strong> for report generation</li>
                            <li>Enhanced and maintained the Internal Ratings Module using <strong>Angular</strong> and <strong>Java Spring Boot</strong></li>
                            <li>Provided enhancements to a JWT token provider microservice using <strong>OAuth2.0</strong></li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[55px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-primary"></div>
                      <Card>
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Backend Developer</h3>
                              <p className="text-sm text-muted-foreground">Collabera Philippines</p>
                            </div>
                            <span className="text-sm text-muted-foreground">04/2021 - 07/2022</span>
                          </div>
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            <li><strong>Java</strong> developer for GCash, a FinTech company providing mobile wallet and payment services</li>
                            <li>Handled migrations and system replication for QA environments through <strong>DevOps</strong></li>
                            <li>Improved code security through enhanced test case coverage using <strong>JUnit</strong></li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[55px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-primary"></div>
                      <Card>
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Software Engineer</h3>
                              <p className="text-sm text-muted-foreground">OOCL Philippines Inc.</p>
                            </div>
                            <span className="text-sm text-muted-foreground">07/2019 - 04/2021</span>
                          </div>
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            <li>
                              Delivered features for an equipment monitoring system tracking container, train, and vessel
                              movements
                            </li>
                            <li>Full Stack development using <strong>Java Spring Boot</strong>, <strong>ReactJS</strong>, and <strong>Python</strong></li>
                            <li>Applied DevOps practices through <strong>Docker</strong>, <strong>Pivotal Cloud Foundry</strong>, and <strong>Jenkins</strong></li>
                            <li>Created automation tools using <strong>Microsoft Power Platform</strong></li>
                            <li>Developed an application for managing customer service call records</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[55px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-primary"></div>
                      <Card>
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Programmer</h3>
                              <p className="text-sm text-muted-foreground">OOCL Philippines Inc.</p>
                            </div>
                            <span className="text-sm text-muted-foreground">07/2017 - 07/2019</span>
                          </div>
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            <li>Provided application maintenance and enhancements for the <strong>IRIS 4</strong> Shipment Project, ensuring smooth functionality and performance</li>
                            <li>Utilized <strong>ExtJS</strong> for frontend development, delivering dynamic and responsive user interfaces</li>
                            <li>Worked with <strong>Spring MVC</strong> for backend development, implementing robust and scalable web applications</li>
                            <li>Integrated and maintained <strong>TIBCO BW</strong> features to support business workflows and communication with external systems</li>
                            <li>Collaborated with cross-functional teams to troubleshoot, optimize, and enhance application functionality and performance</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="projects" className="mt-4 space-y-4">
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div>
                      <h3 className="font-semibold">No Help Is Too Little Donation Drive Webpage</h3>
                      <p className="text-sm text-muted-foreground">ReactJS</p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      A web platform designed to facilitate donations and connect donors with recipients, built using
                      ReactJS.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div>
                      <h3 className="font-semibold">Stikwel</h3>
                      <p className="text-sm text-muted-foreground">ReactJS + NodeJS over Firebase</p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      A web application built with ReactJS frontend and NodeJS backend, utilizing Firebase for database
                      and hosting.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://stikwel.com/" target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div>
                      <h3 className="font-semibold">GoPapa</h3>
                      <p className="text-sm text-muted-foreground">ReactJS + NodeJS over Firebase</p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      A web service application developed using ReactJS for the frontend and NodeJS for the backend, with
                      Firebase integration.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div>
                      <h3 className="font-semibold">OOCL Recognition System</h3>
                      <p className="text-sm text-muted-foreground">ReactJS + Java Spring Boot</p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      An employee recognition platform built with ReactJS frontend and Java Spring Boot backend.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Education Section */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold">Education</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium flex items-center gap-2">
                            Mapua Malayan Colleges Laguna
                            <span className="text-xs text-muted-foreground">(formerly known as Malayan Colleges Laguna)</span>
                          </h3>
                        </div>
                        <span className="text-sm text-muted-foreground">2013 - 2017</span>
                      </div>
                      <p className="text-sm">B.S. Computer Science (Software Engineering)</p>
                      <p className="text-sm text-muted-foreground">Silver Medalist, Cabuyao, Laguna (Philippines)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Section */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                    <Mail className="h-6 w-6" />
                    Contact Me
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        value={message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        required
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto" disabled={isSending}>
                      <Send className="h-4 w-4 mr-2" />
                      {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 