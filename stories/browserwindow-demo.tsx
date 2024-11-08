import React, { useState } from "react";
import styled from "styled-components";

const StyledBrowserWindow = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 80%;
`;

const BrowserWindow = styled.div<{ width: string; height: string; backgroundColor: string; borderColor: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

const BrowserButtons = styled.div`
  display: flex;
  gap: 5px;
`;

const BrowserButton = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => props.color};
`;

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
`;

const BrowserContent = styled.iframe`
  width: 100%;
  height: calc(100% - 48px);
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

// BrowserMockup component with adjustable styles
const BrowserMockup = ({ width, height, backgroundColor, borderColor }) => {
  const [url, setUrl] = useState("https://www.example.com");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <StyledBrowserWindow>
      <BrowserWindow width={width} height={height} backgroundColor={backgroundColor} borderColor={borderColor}>
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
  );
};

BrowserMockup.defaultProps = {
  width: "80%",
  height: "70%",
  backgroundColor: "#fff",
  borderColor: "#ccc",
};

export default BrowserMockup;