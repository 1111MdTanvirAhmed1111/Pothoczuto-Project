'use client'

import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from '@/hooks/use-toast';

export function SharePost({ slug }) {
  const [copied, setCopied] = useState(false)

  const shareUrl = `https://mukhboddho.vercel.app/blog/${slug}`

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    toast({
      title: "Link copied!",
      description: "The blog post link has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Share this post</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <Button variant="outline" size="icon" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}>
          <Facebook className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, '_blank')}>
          <Twitter className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, '_blank')}>
          <Linkedin className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Input
          value={shareUrl}
          readOnly
          className="max-w-xs"
        />
        <Button variant="outline" size="icon" onClick={copyLink}>
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  )
}

