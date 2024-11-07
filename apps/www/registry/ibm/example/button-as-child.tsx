import Link from "next/link"

import { Button } from "@/registry/default/ui/button"

export default function ButtonAsChild() {
  return (
    <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
      <Link href="/login">Login</Link>
    </Button>
  )
}
