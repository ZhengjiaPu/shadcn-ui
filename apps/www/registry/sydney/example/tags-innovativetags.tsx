import { Badge } from "@/registry/default/ui/badge"

export function InnovativeTags() {
  return (
    <>
      <Badge variant="default">Badge</Badge>
      <Badge variant="secondary" style={{ marginLeft: "10px" }}>
        Secondary
      </Badge>
      <Badge variant="destructive" style={{ marginLeft: "10px" }}>
        Destructive
      </Badge>
      <Badge variant="outline" style={{ marginLeft: "10px" }}>
        Outline
      </Badge>
    </>
  )
}

export default InnovativeTags
