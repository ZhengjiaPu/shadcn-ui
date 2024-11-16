import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/sydney/ui/resizable"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border border-charcoal bg-white"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6 bg-charcoal text-ochre">
          <span className="font-sans font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className="bg-gray-200 hover:bg-gray-300" />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6 bg-ochre text-charcoal">
          <span className="font-sans font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
