import React from "react"

import { Card } from "@/registry/default/ui/card"
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  Statistic,
} from "@/registry/default/ui/statistic"

function IncardStatistic() {
  // Style for the title text in each card
  const titleStyle: React.CSSProperties = {
    marginTop: "6px",
    textAlign: "center" as "center",
    marginBottom: "4px",
    color: "#333333",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center" as "center",
    fontSize: "1.1rem", // Increase font size for the title
  }

  // Style for the active statistic value
  const valueStyleActive: React.CSSProperties = {
    color: "#347300",
    fontSize: "1.4rem", // Increase font size for the value
  }

  // Style for the idle statistic value
  const valueStyleIdle: React.CSSProperties = {
    color: "#a10f00",
    fontSize: "1.4rem", // Increase font size for the value
  }

  // Style for each card to reduce padding and bring content closer to edges
  const cardStyle: React.CSSProperties = {
    width: "160px",
    height: "90px",
    padding: "10px", // Reduce padding to bring edges closer to content
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      {/* Card for "Active" statistic */}
      <Card style={cardStyle}>
        <div style={titleStyle}>Active</div>
        <Statistic
          value={11.28}
          precision={2}
          valueStyle={valueStyleActive}
          prefix={
            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              {/* Wrapper to adjust icon size */}
              <ArrowUpOutlined />
            </span>
          }
          suffix="%"
        />
      </Card>

      {/* Card for "Idle" statistic */}
      <Card style={cardStyle}>
        <div style={titleStyle}>Idle</div>
        <Statistic
          value={9.3}
          precision={2}
          valueStyle={valueStyleIdle}
          prefix={
            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              {/* Wrapper to adjust icon size */}
              <ArrowDownOutlined />
            </span>
          }
          suffix="%"
        />
      </Card>
    </div>
  )
}

export default IncardStatistic
