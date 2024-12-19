import React from "react"

import { Card } from "@/registry/sydney/ui/card"
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  Statistic,
} from "@/registry/sydney/ui/statistic"

function IncardStatistic() {
  const titleStyle: React.CSSProperties = {
    marginTop: "10px",
    textAlign: "center" as "center",
    marginBottom: "6px",
    color: "#333333",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center" as "center",
  }

  const cardStyle: React.CSSProperties = {
    width: "180px",
    height: "95px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Example shadow for styling
    borderRadius: "8px", // Example border radius
  }

  const valueStyleActive = {
    color: "#347300",
    fontSize: "1.2em",
  }
  const valueStyleIdle = {
    color: "#a10f00",
    fontSize: "1.2em",
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
            <span style={{ fontSize: "1.2rem", color: "#347300" }}>
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
            <span style={{ fontSize: "1.2rem", color: "#a10f00" }}>
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
