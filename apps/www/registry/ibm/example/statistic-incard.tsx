import React from "react"

import { Card } from "@/registry/default/ui/card"
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  Statistic,
} from "@/registry/default/ui/statistic"

function IncardStatistic() {
  const cardStyle: React.CSSProperties = {
    width: "180px",
    height: "95px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D1D5DB", // tailwind gray-300
    backgroundColor: "#F3F4F6", // tailwind gray-100
    borderRadius: "0px", // 直角边框
  }

  const titleStyle: React.CSSProperties = {
    marginTop: "10px",
    textAlign: "center" as "center",
    marginBottom: "6px",
    color: "#333333",
    fontWeight: "bold",
  }

  const valueStyleActive: React.CSSProperties = { color: "#2563EB" } // tailwind blue-600
  const valueStyleIdle: React.CSSProperties = { color: "#DC2626" } // tailwind red-600

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
            <span style={{ fontSize: "1.25rem", color: "#2563EB" }}>
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
            <span style={{ fontSize: "1.25rem", color: "#DC2626" }}>
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
