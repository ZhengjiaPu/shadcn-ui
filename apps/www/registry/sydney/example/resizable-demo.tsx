import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/sydney/ui/resizable"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border border-charcoal bg-white"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6 bg-ochre text-charcoal">
          <span className="font-sans font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle className="bg-charcoal border-l border-ochre" />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6 bg-charcoal text-ochre">
              <span className="font-sans font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle className="bg-charcoal border-t border-ochre" />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 bg-ochre text-charcoal">
              <span className="font-sans font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
