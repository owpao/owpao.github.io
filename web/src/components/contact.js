import React from "react"

const ContactSection = () => {
    return (
        <div className='contact-form'>
            <form
                action="https://formspree.io/xeqakevz"
                method="POST"
            >
                <div>
                    E-mail Address: <span className='required'>*</span>
                    <div><input type="text" name="_replyto" required/></div>
                </div>
                <div>
                    Name: <span className='required'>*</span>
                    <div><input type="text" name="_name" required/></div>
                </div>
                <div>
                    Subject: <span className='required'>*</span>
                    <div><input type="text" name="_subject" required/></div>
                </div>
                <div>
                    Your message: <span className='required'>*</span>
                    <div><textarea name="message" required/></div>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactSection
