import React, { useState } from "react"

import { Button } from "@/registry/default/ui/button"

export default function FileUploadComponent() {
  const [selectedFile, setSelectedFile] = useState("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedFile(file ? file.name : "")
  }

  const triggerFileInputClick = () => {
    const fileInput = document.getElementById("file-upload") as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  return (
    <div className="file-upload-wrapper">
      <div className="file-upload-content">
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="file-upload-input"
          style={{ display: "none" }}
        />
        <div className="file-upload-control">
          <Button onClick={triggerFileInputClick}>
            <span>Choose File</span>
          </Button>
          <span className="file-name px-3">
            {selectedFile || "No file chosen"}
          </span>
        </div>
      </div>
      {selectedFile && (
        <div className="file-display-container mt-4">
          <Button variant="default">Upload File</Button>
        </div>
      )}
    </div>
  )
}
