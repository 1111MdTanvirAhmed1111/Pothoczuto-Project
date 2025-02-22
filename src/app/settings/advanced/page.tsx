import { Separator } from "@/components/ui/separator"
import { AdvancedForm } from "@/components/settings/advanced-form"

export default function AdvancedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Advanced Settings</h3>
        <p className="text-sm text-muted-foreground">Configure advanced settings and manage your account data.</p>
      </div>
      <Separator />
      <AdvancedForm />
    </div>
  )
}

