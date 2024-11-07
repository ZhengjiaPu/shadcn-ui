"use client"

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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp"
import { toast } from "@/registry/default/ui/use-toast"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export default function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
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
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-semibold">
                One-Time Password
              </FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  {...field}
                  className="flex items-center gap-2"
                >
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot
                      index={0}
                      className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
                    />
                    <InputOTPSlot
                      index={1}
                      className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
                    />
                    <InputOTPSlot
                      index={2}
                      className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
                    />
                    <InputOTPSlot
                      index={3}
                      className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
                    />
                    <InputOTPSlot
                      index={4}
                      className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
                    />
                    <InputOTPSlot
                      index={5}
                      className="w-12 h-12 bg-white border-2 border-orange-600 text-orange-600 rounded-md text-xl text-center focus:border-orange-700 focus:outline-none transition-colors"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-gray-500">
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
