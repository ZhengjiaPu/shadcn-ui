import React, { useState } from "react"
import styled from "styled-components"

// Carbon-inspired styled components
const StyledBrowserWindow = styled.div`
  font-family: "IBM Plex Sans", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 80%;
  background-color: #f4f4f4; /* Light gray background for Carbon feel */
`

const BrowserWindow = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #d1d1d1; /* Light border for subtle separation */
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  overflow: hidden;
`

const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #161616; /* Dark header background */
  color: #f4f4f4; /* Light text for contrast */
`

const BrowserButtons = styled.div`
  display: flex;
  gap: 8px;
`

const BrowserButton = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => props.color};
`

const BrowserUrlBar = styled.div`
  flex: 1;
  margin-left: 16px;
  // padding: 6px 12px;
  border: 1px solid #8d8d8d; /* Border color matching Carbon's gray */
  background-color: #f4f4f4;
  input {
    width: 100%;
    padding: 6px 12px;
    border: none;
    background: transparent;
    font-family: inherit;
    color: #161616;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #0f62fe;
    }
  }
`

const BrowserContent = styled.iframe`
  width: 100%;
  height: calc(100% - 48px);
  border: none;
  overflow: auto;
`

// BrowserMockup Component
const BrowserMockup = () => {
  const [url, setUrl] = useState("https://www.example.com")

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  return (
    <StyledBrowserWindow>
      <BrowserWindow>
        <BrowserHeader>
          <BrowserButtons>
            <BrowserButton color="#fa4d56" /> {/* Close button - red */}
            <BrowserButton color="#f1c21b" /> {/* Minimize button - yellow */}
            <BrowserButton color="#42be65" /> {/* Maximize button - green */}
          </BrowserButtons>
          <BrowserUrlBar>
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              placeholder="Enter URL"
            />
          </BrowserUrlBar>
        </BrowserHeader>
        <BrowserContent src={url} />
      </BrowserWindow>
    </StyledBrowserWindow>
  )
}

export default BrowserMockup
