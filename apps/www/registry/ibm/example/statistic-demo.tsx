import React from "react"

import { Button } from "@/registry/ibm/ui/button"
import { Statistic } from "@/registry/ibm/ui/statistic"

function StatisticNormal() {
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
      {/* First cell: Active Users */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Statistic title="Active Users" value={112893} />
      </div>

      {/* Second cell: Account Balance */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      </div>

      {/* Third cell: Loading state for Active Users */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Statistic title="Active Users" value={112893} loading />
      </div>

      {/* Fourth cell: Recharge button in the bottom-right */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button>Recharge</Button>
      </div>
    </div>
  )
}

export default StatisticNormal
