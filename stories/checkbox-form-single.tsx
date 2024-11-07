"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/registry/default/ui/form";
import { toast } from "@/registry/default/ui/use-toast";

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

type CheckboxFormSingleProps = {
  defaultChecked?: boolean;
  label?: string;
  description?: string;
  submitMessage?: string;
  linkUrl?: string;
  linkText?: string;
};

export default function CheckboxFormSingle({
  defaultChecked = true,
  label = "Use different settings for my mobile devices",
  description = "You can manage your mobile notifications in the settings page.",
  submitMessage = "You submitted the following values:",
  linkUrl = "/examples/forms",
  linkText = "mobile settings",
}: CheckboxFormSingleProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: defaultChecked,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: submitMessage,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>{label}</FormLabel>
                <FormDescription>
                  {description}{" "}
                  <Link href={linkUrl}>{linkText}</Link>.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
