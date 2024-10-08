
"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Popover, PopoverTrigger } from "@/components/ui/popover"
import PopoverDemo from "@/components/PopoverDemo"
export default function Home() {
  const { setTheme } = useTheme()

  return (<>
    <div>
      <h1>Spark Gallery</h1>
      <Link href={'/sign-up'}>
      <Button variant={"default"} className=" flex justify-center px-4" >Click me</Button></Link>
    </div>
    <div>


    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  


    </div>
    <div>
    {/* <Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover> */}

 </div>
    </>
  );
}
