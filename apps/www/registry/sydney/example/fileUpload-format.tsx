import React, { useState } from "react"

import { Button } from "@/registry/sydney/ui/button"
import { toast } from "@/registry/sydney/ui/use-toast"

export default function FileUploadImage() {
  const [selectedFileName, setSelectedFileName] = useState("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].type.startsWith("image/")) {
        setSelectedFileName(event.target.files[0].name)
      } else {
        toast({
          title: "Error",
          description: "Please select an image file!",
          duration: 3000,
        })
        setSelectedFileName("")
      }
    }
  }

  return (
    <div className="image-upload-wrapper">
      <div className="file-upload-content">
        <label htmlFor="image-upload" className="image-upload-label">
          Please upload an image:
        </label>
        <input
          type="file"
          id="image-upload"
          onChange={handleFileChange}
          className="image-upload-input"
          style={{ display: "none" }}
          accept="image/*"
        />
        <div className="image-upload-control">
          <label htmlFor="image-upload" className="cursor-pointer">
            <Button asChild>
              <span>Choose File</span>
            </Button>
          </label>
          <span className="image-file-name px-3">
            {selectedFileName || "No file chosen"}
          </span>
        </div>
      </div>
      {selectedFileName && (
        <div className="file-display-container mt-4">
          <Button variant="default">Upload File</Button>
        </div>
      )}
    </div>
  )
}
