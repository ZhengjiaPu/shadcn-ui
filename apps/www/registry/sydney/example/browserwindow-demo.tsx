import React, { useState } from "react"
import styled from "styled-components"

// Styled components with updated brand styling
const StyledBrowserWindow = styled.div`
  font-family: "Apercu Pro", "Arial", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 80%;
  background-color: #f9f9f9;
`

const BrowserWindow = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #333333;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px; /* Rounded corners */
  overflow: hidden; /* Ensures that content respects the rounded edges */
`

const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #e66e00;
  border-bottom: 1px solid #333333;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const BrowserButtons = styled.div`
  display: flex;
  gap: 5px;
`

const BrowserButton = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => props.color};
`

const BrowserUrlBar = styled.div`
  flex: 1;
  margin-left: 10px;
  // padding: 5px 10px;
  border: 1px solid #333333;
  border-radius: 3px;
  background-color: #ffffff;
  input {
    width: 100%;
    padding: 6px 12px;
    border: none;
    background: transparent;
    font-family: inherit;
    color: inherit;
    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px #3c59e7;
      border-radius: 3px;
    }
  }
`

const BrowserContent = styled.iframe`
  width: 100%;
  height: calc(100% - 48px);
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: auto;
`

// BrowserMockup Component
const BrowserMockup = () => {
  const [url, setUrl] = useState("https://www.example.com")

  // Explicit type annotation for event
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  return (
    <StyledBrowserWindow>
      <BrowserWindow>
        <BrowserHeader>
          <BrowserButtons>
            <BrowserButton color="#f44336" />
            <BrowserButton color="#ffeb3b" />
            <BrowserButton color="#4caf50" />
          </BrowserButtons>
          <BrowserUrlBar>
            <input type="text" value={url} onChange={handleUrlChange} />
          </BrowserUrlBar>
        </BrowserHeader>
        <BrowserContent src={url} />
      </BrowserWindow>
    </StyledBrowserWindow>
  )
}

export default BrowserMockup
