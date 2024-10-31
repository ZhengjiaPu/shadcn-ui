import React from "react";
import { Meta, Story } from "@storybook/react";
import GalleryDefault from "./image-gallery-demo";
import GalleryWithCarousel from "./image-gallery-with-carousel";
import GalleryWithPreView from "./image-gallery-with-preview";
import GalleryWithTab from "./image-gallery-with-tab";
import GalleryMasonryGrid from "./image-gallery-masonry-grid";

// Storybook: Meta configuration for Image Gallery component
export default {
    title: "Components/ImageGallery",
    component: GalleryDefault,
    argTypes: {
      backgroundColor: { control: "color" },
      padding: { control: "text" },
      borderRadius: { control: "text" },
    },
  } as Meta;
  
  // Template for the Basic Gallery
  const BasicTemplate: Story = (args) => (
    <div style={{ backgroundColor: args.backgroundColor, padding: args.padding }}>
      <GalleryDefault />
    </div>
  );
  
  // Template for Gallery With Carousel
  const CarouselTemplate: Story = (args) => (
    <div style={{ backgroundColor: args.backgroundColor, padding: args.padding }}>
      <GalleryWithCarousel />
    </div>
  );
  
  // Template for Gallery With Preview
  const PreviewTemplate: Story = (args) => (
    <div style={{ backgroundColor: args.backgroundColor, padding: args.padding }}>
      <GalleryWithPreView />
    </div>
  );
  
  // Template for Gallery With Tab
  const TabTemplate: Story = (args) => (
    <div style={{ backgroundColor: args.backgroundColor, padding: args.padding }}>
      <GalleryWithTab />
    </div>
  );
  
  // Template for Gallery Masonry Grid
  const MasonryTemplate: Story = (args) => (
    <div style={{ backgroundColor: args.backgroundColor, padding: args.padding }}>
      <GalleryMasonryGrid />
    </div>
  );
  
  export const Basic = BasicTemplate.bind({});
  Basic.args = {
    backgroundColor: "#ffffff",
    padding: "10px",
    borderRadius: "8px",
  };
  
  export const WithCarousel = CarouselTemplate.bind({});
  WithCarousel.args = {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "8px",
  };
  
  export const WithPreview = PreviewTemplate.bind({});
  WithPreview.args = {
    backgroundColor: "#fafafa",
    padding: "12px",
    borderRadius: "8px",
  };
  
  export const WithTab = TabTemplate.bind({});
  WithTab.args = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
  };
  
  export const MasonryGrid = MasonryTemplate.bind({});
  MasonryGrid.args = {
    backgroundColor: "#f0f0f0",
    padding: "8px",
    borderRadius: "8px",
  };