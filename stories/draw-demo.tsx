// draw-demo.tsx
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";

const data = [
  { goal: 400 }, { goal: 300 }, { goal: 200 }, { goal: 300 },
  { goal: 200 }, { goal: 278 }, { goal: 189 }, { goal: 239 },
  { goal: 300 }, { goal: 200 }, { goal: 278 }, { goal: 189 },
  { goal: 349 },
];

export interface DrawDemoProps {
  initialGoal?: number;
  minGoal?: number;
  maxGoal?: number;
  step?: number;
  openButtonText?: string;
  title?: string;
  description?: string;
  submitButtonText?: string;
  cancelButtonText?: string;
}

export default function DrawDemo({
  initialGoal = 350,
  minGoal = 200,
  maxGoal = 400,
  step = 10,
  openButtonText = "Open Drawer",
  title = "Move Goal",
  description = "Set your daily activity goal.",
  submitButtonText = "Submit",
  cancelButtonText = "Cancel",
}: DrawDemoProps) {
  const [goal, setGoal] = React.useState(initialGoal);

  function onClick(adjustment: number) {
    setGoal(Math.max(minGoal, Math.min(maxGoal, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{openButtonText}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-step)}
                disabled={goal <= minGoal}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(step)}
                disabled={goal >= maxGoal}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={{
                      fill: "hsl(var(--foreground))",
                      opacity: 0.9,
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>{submitButtonText}</Button>
            <DrawerClose asChild>
              <Button variant="outline">{cancelButtonText}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
