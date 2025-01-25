import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

async function getSettings() {
  // This would be replaced with a database query in a real application
  return {
    siteName: "My Blog",
    siteDescription: "A blog about web development and technology",
    postsPerPage: "10",
    theme: "light",
  }
}

async function updateSettings(formData) {
  'use server'
  
  const siteName = formData.get('siteName')
  const siteDescription = formData.get('siteDescription')
  const postsPerPage = formData.get('postsPerPage')
  const theme = formData.get('theme')

  // This would be replaced with a database update in a real application
  console.log('Updating settings:', { siteName, siteDescription, postsPerPage, theme })

  // Redirect or refresh the page after updating the settings
  // For now, we'll just return a success message
  return { message: 'Settings updated successfully' }
}

export default async function SettingsPage() {
  const settings = await getSettings()

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Settings</h1>
      <form action={updateSettings}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Blog Settings</CardTitle>
            <CardDescription>Manage your blog settings here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="siteName">Site Name</Label>
                <Input 
                  id="siteName" 
                  name="siteName"
                  defaultValue={settings.siteName}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea 
                  id="siteDescription" 
                  name="siteDescription"
                  defaultValue={settings.siteDescription}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="postsPerPage">Posts Per Page</Label>
                <Input 
                  id="postsPerPage" 
                  name="postsPerPage"
                  type="number"
                  defaultValue={settings.postsPerPage}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="theme">Theme</Label>
                <Select name="theme" defaultValue={settings.theme}>
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Save</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

