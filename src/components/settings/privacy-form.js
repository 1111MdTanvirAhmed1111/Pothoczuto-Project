"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

const privacyFormSchema = z.object({
  profileVisibility: z.boolean().default(true),
  activityStatus: z.boolean().default(true),
  searchable: z.boolean().default(true),
  dataCollection: z.boolean().default(true),
  thirdPartySharing: z.boolean().default(false),
})

const defaultValues = {
  profileVisibility: true,
  activityStatus: true,
  searchable: true,
  dataCollection: true,
  thirdPartySharing: false,
}

export function PrivacyForm() {
  const form = useForm({
    resolver: zodResolver(privacyFormSchema),
    defaultValues,
  })

  function onSubmit(data) {
    toast({
      title: "Privacy settings updated",
      description: "Your privacy preferences have been saved.",
    })
  }

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
          <motion.div variants={item}>
            <FormField
              control={form.control}
              name="profileVisibility"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Profile Visibility</FormLabel>
                    <FormDescription>Make your profile visible to other users</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={item}>
            <FormField
              control={form.control}
              name="activityStatus"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Activity Status</FormLabel>
                    <FormDescription>Show when you're active online</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={item}>
            <FormField
              control={form.control}
              name="searchable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Search Visibility</FormLabel>
                    <FormDescription>Allow others to find you in search results</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={item}>
            <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                  Data Collection & Sharing
                </CardTitle>
                <CardDescription>Control how your data is collected and shared</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="dataCollection"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-background p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Data Collection</FormLabel>
                        <FormDescription>Allow us to collect usage data to improve our services</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="thirdPartySharing"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border bg-background p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Third-party Sharing</FormLabel>
                        <FormDescription>Allow sharing of your data with trusted partners</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">You can change these settings at any time</p>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Button type="submit" className="mt-4">
              Save privacy settings
            </Button>
          </motion.div>
        </motion.div>
      </form>
    </Form>
  )
}

