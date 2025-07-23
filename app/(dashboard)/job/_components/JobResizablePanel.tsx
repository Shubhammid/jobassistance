"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useSidebar } from "@/components/ui/sidebar";
import React from "react";
import RightSidePanel from "./RightSidePanel";
import ChatLeftPanel from "./ChatLeftPanel";

const JobResizablePanel = (props: { jobId: string }) => {
  const { isMobile } = useSidebar();
  return (
    <ResizablePanelGroup
      direction={isMobile ? "vertical" : "horizontal"}
      className="w-full h-full"
    >
      <ResizablePanel defaultSize={55} collapsible collapsedSize={0}>
        <ChatLeftPanel jobId={props.jobId} />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel
        defaultSize={45}
        className={"pt-2"}
        collapsible
        collapsedSize={0}
      >
        <RightSidePanel jobId={props.jobId} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default JobResizablePanel;
