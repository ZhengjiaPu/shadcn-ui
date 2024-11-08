"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/registry/default/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import { toast } from "@/registry/default/ui/use-toast"

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

export default function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full border border-orange-500 focus:border-orange-600 focus:outline-none focus:ring focus:ring-orange-200 hover:bg-orange-100 transition-colors ">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border border-orange-500 mt-1 max-h-60 overflow-y-auto ">
                  <SelectItem
                    value="m@example.com"
                    className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
                  >
                    m@example.com
                  </SelectItem>
                  <SelectItem
                    value="m@google.com"
                    className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
                  >
                    m@google.com
                  </SelectItem>
                  <SelectItem
                    value="m@support.com"
                    className="text-black hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
                  >
                    m@support.com
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
