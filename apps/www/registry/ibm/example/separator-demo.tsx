import { Separator } from "@/registry/default/ui/separator"

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none text-blue-500">
          Radix Primitives
        </h4>
        <p className="text-sm text-blue-400">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4 bg-blue-500" />
      <div className="flex h-5 items-center space-x-4 text-sm text-blue-500">
        <div>Blog</div>
        <Separator orientation="vertical" className="bg-blue-500" />
        <div>Docs</div>
        <Separator orientation="vertical" className="bg-blue-500" />
        <div>Source</div>
      </div>
    </div>
  )
}
