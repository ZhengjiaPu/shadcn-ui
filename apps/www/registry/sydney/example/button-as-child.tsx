import Link from "next/link"

import { Button } from "@/registry/default/ui/button"

export default function ButtonAsChild() {
  return (
    <Button asChild className="bg-orange-600 text-white hover:bg-orange-700">
      <Link href="/login">Login</Link>
    </Button>
  )
}
