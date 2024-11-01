import React, { useState } from "react"
import styled from "styled-components"

const StyledBrowserWindow = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const BrowserWindow = styled.div`
  width: 80%;
  height: 70%;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
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
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  input {
    width: 100%;
    border: none;
    background: transparent;
  }
`

const BrowserContent = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

// BrowserMockup
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
