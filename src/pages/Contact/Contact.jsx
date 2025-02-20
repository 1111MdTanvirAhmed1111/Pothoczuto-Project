'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from 'lucide-react'
import { GradientBackground } from '@/components/Gradiant-background'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Define Zod validation schema
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
})

export default function Contact() {
  const { toast } = useToast()

  // Set up React Hook Form with Zod validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
  }

  return (
    <GradientBackground>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" />
                <span>jane@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register('name')}
                    className={`${
                      errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register('email')}
                    className={`${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    {...register('message')}
                    rows={4}
                    className={`${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948534!3d37.75781499229416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1628971600000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </GradientBackground>
  )
}
