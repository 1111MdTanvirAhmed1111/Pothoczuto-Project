import { Separator } from "@/components/ui/separator"
import { LanguageForm } from "@/components/settings/language-form"

export default function LanguagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Language & Region</h3>
        <p className="text-sm text-muted-foreground">Set your language and regional preferences.</p>
      </div>
      <Separator />
      <LanguageForm />
    </div>
  )
}

