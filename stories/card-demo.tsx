import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Switch } from "@/registry/default/ui/switch";

type Notification = {
  title: string;
  description: string;
};

type CardDemoProps = {
  notifications?: Notification[];
  cardTitle?: string;
  cardDescription?: string;
  buttonText?: string;
} & React.ComponentProps<typeof Card>;

export default function CardDemo({
  className,
  notifications = [
    { title: "Your call has been confirmed.", description: "1 hour ago" },
    { title: "You have a new message!", description: "1 hour ago" },
    { title: "Your subscription is expiring soon!", description: "2 hours ago" },
  ],
  cardTitle = "Notifications",
  cardDescription = "You have 3 unread messages.",
  buttonText = "Mark all as read",
  ...props
}: CardDemoProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
