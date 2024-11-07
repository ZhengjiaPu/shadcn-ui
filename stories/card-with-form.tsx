import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

type CardWithFormProps = {
  title?: string;
  description?: string;
  buttonTextCancel?: string;
  buttonTextDeploy?: string;
  frameworkOptions?: Array<{ value: string; label: string }>;
};

export function CardWithForm({
  title = "Create project",
  description = "Deploy your new project in one-click.",
  buttonTextCancel = "Cancel",
  buttonTextDeploy = "Deploy",
  frameworkOptions = [
    { value: "next", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "astro", label: "Astro" },
    { value: "nuxt", label: "Nuxt.js" },
  ],
}: CardWithFormProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {frameworkOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">{buttonTextCancel}</Button>
        <Button>{buttonTextDeploy}</Button>
      </CardFooter>
    </Card>
  );
}

export default CardWithForm;
