// sheet-side.tsx
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";

export const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
export type SheetSide = (typeof SHEET_SIDES)[number];

export interface SheetSideProps {
  side?: SheetSide;
  triggerLabel?: string;
  nameLabel?: string;
  nameValue?: string;
  usernameLabel?: string;
  usernameValue?: string;
}

export default function SheetSide({
  side = 'right',
  triggerLabel = 'Open',
  nameLabel = 'Name',
  nameValue = 'Pedro Duarte',
  usernameLabel = 'Username',
  usernameValue = '@peduarte',
}: SheetSideProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((position) => (
        <Sheet key={position}>
          <SheetTrigger asChild>
            <Button variant="outline">{position === side ? triggerLabel : position}</Button>
          </SheetTrigger>
          <SheetContent side={position}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  {nameLabel}
                </Label>
                <Input id="name" value={nameValue} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  {usernameLabel}
                </Label>
                <Input id="username" value={usernameValue} className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
