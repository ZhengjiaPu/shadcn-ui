import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable";

interface ResizableHandleDemoProps {
  borderColor?: string;
  borderRadius?: string;
  backgroundColor?: string;
  padding?: string;
}

const ResizableHandleDemo: React.FC<ResizableHandleDemoProps> = ({
  borderColor = "#dee2e6",
  borderRadius = "8px",
  backgroundColor = "#ffffff",
  padding = "10px",
}) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25}>
        <div
          style={{
            borderColor,
            borderRadius,
            backgroundColor,
            padding,
            border: "1px solid",
          }}
          className="flex h-full items-center justify-center p-6"
        >
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div
          style={{
            borderColor,
            borderRadius,
            backgroundColor,
            padding,
            border: "1px solid",
          }}
          className="flex h-full items-center justify-center p-6"
        >
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableHandleDemo;
