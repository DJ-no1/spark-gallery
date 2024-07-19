import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Spark Gallery</h1>
      <Link href={'/signup'}>
      <Button variant={"default"} className=" flex justify-center px-4" >Click me</Button></Link>
    </div>
  );
}
