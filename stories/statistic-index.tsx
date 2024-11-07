import React from "react"

import { Button } from "@/registry/default/ui/button"
import { Statistic } from "@/registry/default/ui/statistic"

type StatisticNormalProps = {
  title?: string
  value: number
  precision?: number
  loading?: boolean
  buttonText?: string
}

const StatisticNormal: React.FC<StatisticNormalProps> = ({
  title = "Active Users",
  value = 112893,
  precision = 0,
  loading = false,
  buttonText = "Recharge",
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* First row: Active Users and Account Balance */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Statistic title={title} value={value} precision={precision} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Statistic title="Account Balance (CNY)" value={value} precision={2} />
      </div>

      {/* Second row: Active Users (loading) and Recharge Button */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Statistic title={title} value={value} loading={loading} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button className="!bg-black text-white hover:!bg-black active:!bg-black">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default StatisticNormal
