import React from "react"

import { Card } from "@/registry/default/ui/card"
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  Statistic,
} from "@/registry/default/ui/statistic"

type StatisticIncardProps = {
  activeValue: number
  idleValue: number
  precision: number
  activeColor: string
  idleColor: string
  cardBackgroundColor: string
  cardBorderColor: string
}

const StatisticIncard: React.FC<StatisticIncardProps> = ({
  activeValue = 11.28,
  idleValue = 9.3,
  precision = 2,
  activeColor = "#2563EB", // tailwind blue-600
  idleColor = "#DC2626", // tailwind red-600
  cardBackgroundColor = "#F3F4F6", // tailwind gray-100
  cardBorderColor = "#D1D5DB", // tailwind gray-300
}) => {
  const cardStyle: React.CSSProperties = {
    width: "180px",
    height: "95px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: cardBorderColor,
    backgroundColor: cardBackgroundColor,
    borderWidth: "1px",
    borderStyle: "solid",
  }

  const titleStyle: React.CSSProperties = {
    marginTop: "10px",
    textAlign: "center" as "center",
    marginBottom: "6px",
    color: "#333333",
    fontWeight: "bold",
  }

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      {/* Card for "Active" statistic */}
      <Card style={cardStyle}>
        <div style={titleStyle}>Active</div>
        <Statistic
          value={activeValue}
          precision={precision}
          valueStyle={{ color: activeColor }}
          prefix={
            <ArrowUpOutlined
              style={{ fontSize: "1.25rem", color: activeColor }}
            />
          }
          suffix="%"
        />
      </Card>

      {/* Card for "Idle" statistic */}
      <Card style={cardStyle}>
        <div style={titleStyle}>Idle</div>
        <Statistic
          value={idleValue}
          precision={precision}
          valueStyle={{ color: idleColor }}
          prefix={
            <ArrowDownOutlined
              style={{ fontSize: "1.25rem", color: idleColor }}
            />
          }
          suffix="%"
        />
      </Card>
    </div>
  )
}

export default StatisticIncard
