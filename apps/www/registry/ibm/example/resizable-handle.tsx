import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/ibm/ui/resizable"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md bg-gray-100 font-sans"
      // Removed `border` class
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6 bg-gray-100">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6 bg-gray-100">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
