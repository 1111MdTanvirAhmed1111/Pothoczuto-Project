import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/components/settings/account-form"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}

