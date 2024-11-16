import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/sydney/ui/resizable"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border border-charcoal bg-white"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6 bg-ochre text-charcoal">
          <span className="font-sans font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle className="bg-charcoal border-t border-ochre" />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6 bg-charcoal text-ochre">
          <span className="font-sans font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
