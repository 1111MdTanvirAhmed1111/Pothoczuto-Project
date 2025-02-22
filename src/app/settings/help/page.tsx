import { Separator } from "@/components/ui/separator"
import { HelpContent } from "@/components/settings/help-content"

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Help & Support</h3>
        <p className="text-sm text-muted-foreground">
          Get help with your account and find answers to common questions.
        </p>
      </div>
      <Separator />
      <HelpContent />
    </div>
  )
}

