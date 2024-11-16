import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable";

interface ResizableDemoProps {
  borderColor?: string;
  borderRadius?: string;
  backgroundColor?: string;
  padding?: string;
}

const ResizableDemo: React.FC<ResizableDemoProps> = ({
  borderColor = "#dee2e6",
  borderRadius = "8px",
  backgroundColor = "#ffffff",
  padding = "10px",
}) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div
          style={{
            borderColor,
            borderRadius,
            backgroundColor,
            padding,
            border: "1px solid",
          }}
          className="flex h-[200px] items-center justify-center p-6"
        >
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
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
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
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
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableDemo;
