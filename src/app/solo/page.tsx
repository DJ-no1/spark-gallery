import { Button } from "@/components/ui/button"
import Link from "next/link"


function page() {
  return (
    <div><Link href={"/solo/up"}>
        <Button variant={"destructive"}>hello</Button>
        </Link></div>
  )
}

export default page