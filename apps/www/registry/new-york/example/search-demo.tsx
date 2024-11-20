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
import { Input } from "@/registry/default/ui/input"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

const FormSchema = z.object({
  searchValue: z.string().min(2, {
    message: "Search content must be at least 2 characters.",
  }),
})

export function BasicSearch() {
  const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchValue: "",
    },
  })

  function onSubmit(data: any) {
    console.log("Search Started")
    toast({
      title: "You are searching the following values:",
      description: <p>{data.searchValue}</p>,
    })

    performGoogleSearch(data.searchValue)
    console.log("Successfully Searched")
  }

  function performGoogleSearch(query: any) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <Toaster />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-md space-y-6"
        >
          <FormField
            control={form.control}
            name="searchValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Search</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Find Anything..."
                    {...field}
                    className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-300"
                  />
                </FormControl>
                <FormDescription className="mt-1 text-sm text-gray-500">
                  This is the basic search component.
                </FormDescription>
                <FormMessage className="mt-1 text-sm text-red-500" />
              </FormItem>
            )}
          />
          <Button type="submit" variant="default" className="mt-4 rounded-md">
            Search
          </Button>
        </form>
      </Form>
    </>
  )
}

export default BasicSearch
