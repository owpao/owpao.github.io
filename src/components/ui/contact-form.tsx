import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
    const [isSending, setIsSending] = useState(false)

  const [state, handleSubmit] = useForm('xeqakevz');

  if (state.succeeded) {
    return <p className="text-green-500 text-center">Thanks for reaching out!</p>;
  }

  return (
    <div className="grid gap-4">
      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            className="min-h-[100px]"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="space-y-2">

          <Button type="submit" className="w-full sm:w-auto" disabled={state.submitting}>
                      <Send className="h-4 w-4 mr-2" />
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
        </div>

        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
