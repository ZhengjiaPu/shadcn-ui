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
                  <SelectTrigger className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 hover:bg-gray-200 transition-colors rounded-none">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border border-gray-300 rounded-none mt-1 max-h-60 overflow-y-auto rounded-none">
                  <SelectItem
                    value="m@example.com"
                    className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                  >
                    m@example.com
                  </SelectItem>
                  <SelectItem
                    value="m@google.com"
                    className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                  >
                    m@google.com
                  </SelectItem>
                  <SelectItem
                    value="m@support.com"
                    className="text-black hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
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
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-none px-4 py-2"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
