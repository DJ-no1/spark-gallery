'use client '
import { Tooltip, TooltipProvider,TooltipTrigger,TooltipContent } from "@radix-ui/react-tooltip"
import { SettingsIcon } from "lucide-react"
import Link from "next/link"
import { Toggle } from "@/components/ui/toggle"


const profile = () => {
  return (
    <div className="">  
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/settings"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            prefetch={false}
          > <Toggle>
            <SettingsIcon className="h-5 w-5" />
            <span className="sr-only">Settings</span>
            </Toggle>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </nav></div>
  )
}

export default profile