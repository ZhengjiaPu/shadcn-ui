// draw-dialog.tsx
import * as React from "react";
import { Button } from "../../registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../registry/default/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../registry/default/ui/drawer";
import { Input } from "../../registry/default/ui/input";
import { Label } from "../../registry/default/ui/label";


const useMediaQuery = (query: string) => {
  return typeof window !== "undefined" && window.matchMedia(query).matches;
};

export interface DrawDialogProps {
  openButtonLabel?: string;
  dialogTitle?: string;
  dialogDescription?: string;
  emailDefaultValue?: string;
  usernameDefaultValue?: string;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
}

export default function DrawDialog({
  openButtonLabel = "Edit Profile",
  dialogTitle = "Edit profile",
  dialogDescription = "Make changes to your profile here. Click save when you're done.",
  emailDefaultValue = "shadcn@example.com",
  usernameDefaultValue = "@shadcn",
  submitButtonLabel = "Save changes",
  cancelButtonLabel = "Cancel",
}: DrawDialogProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">{openButtonLabel}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <ProfileForm
            emailDefaultValue={emailDefaultValue}
            usernameDefaultValue={usernameDefaultValue}
            submitButtonLabel={submitButtonLabel}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">{openButtonLabel}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{dialogTitle}</DrawerTitle>
          <DrawerDescription>{dialogDescription}</DrawerDescription>
        </DrawerHeader>
        <ProfileForm
          emailDefaultValue={emailDefaultValue}
          usernameDefaultValue={usernameDefaultValue}
          submitButtonLabel={submitButtonLabel}
          className="px-4"
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{cancelButtonLabel}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface ProfileFormProps extends React.ComponentProps<"form"> {
  emailDefaultValue?: string;
  usernameDefaultValue?: string;
  submitButtonLabel?: string;
}

function ProfileForm({
  emailDefaultValue,
  usernameDefaultValue,
  submitButtonLabel,
  className,
}: ProfileFormProps) {
  return (
    <form className={`grid items-start gap-4 ${className}`}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue={emailDefaultValue} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue={usernameDefaultValue} />
      </div>
      <Button type="submit">{submitButtonLabel}</Button>
    </form>
  );
}
