"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Search, Mail, MessageCircle, Book, ExternalLink } from "lucide-react"

const faqItems = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password.",
  },
  {
    question: "How can I change my email address?",
    answer:
      "You can change your email address in the Account Settings section. You'll need to verify your new email address before the change takes effect.",
  },
  {
    question: "What happens to my data if I delete my account?",
    answer:
      "When you delete your account, all your personal data will be permanently removed from our servers after a 30-day grace period.",
  },
  {
    question: "How do I enable two-factor authentication?",
    answer:
      "Go to Security Settings and look for the Two-Factor Authentication section. Follow the prompts to set up 2FA using your preferred method.",
  },
]

export function HelpContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <motion.div variants={item} className="relative">
        <Input placeholder="Search help articles..." className="pl-10" />
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      </motion.div>

      <motion.div variants={item}>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Get help via email. We typically respond within 24 hours.</p>
              <Button className="mt-4" variant="outline">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Chat with our support team in real-time.</p>
              <Button className="mt-4" variant="outline">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Button variant="outline" className="justify-start">
                <span>User Guide</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-start">
                <span>API Documentation</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-start">
                <span>Video Tutorials</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-start">
                <span>Developer Resources</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <h4 className="mb-4 text-lg font-medium">Frequently Asked Questions</h4>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  )
}

