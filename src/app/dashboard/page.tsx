'use client'

import Image from "next/image"
import Link from "next/link"
import {
File,
Home,
LineChart,
ListFilter,
MoreHorizontal,
Package,
Package2,
PanelLeft,
PlusCircle,
Search,
Settings,
ShoppingCart,
Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbList,
BreadcrumbPage,
BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import {
DropdownMenu,
DropdownMenuCheckboxItem,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"
import {
Tabs,
TabsContent,
TabsList,
TabsTrigger,
} from "@/components/ui/tabs"
import {
Tooltip,
TooltipContent,
TooltipTrigger,
TooltipProvider
} from "@/components/ui/tooltip"
import exp from "constants"

export function dashboard() {
return (<>
<div>
<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
<Tabs defaultValue="all">
  <div className="flex items-center">
    <TabsList>
      <TabsTrigger value="all">All</TabsTrigger>
      <TabsTrigger value="frontend">Frontend</TabsTrigger>
      <TabsTrigger value="fullStack">Full Stack</TabsTrigger>
      <TabsTrigger value="backend" className="hidden sm:flex">
        Backend
      </TabsTrigger>
    </TabsList>
    <div className="ml-auto flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-7 gap-1">
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Sort
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>
            Recent
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Rating</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            View Count
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <Button size="sm" variant="outline" className="h-7 gap-1">
        <File className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Export
        </span>
      </Button> */}
      <Button size="sm" className="h-7 gap-1">
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Website
        </span>
      </Button>
    </div>
  </div>
  <TabsContent value="all">
    <Card >
      <CardHeader>
        <CardTitle>Websites</CardTitle>
        <CardDescription>
        Find the spark you need to ignite your next project on these websites.         </CardDescription>
      </CardHeader>
    </Card>
  </TabsContent>
</Tabs>
</main>
</div>

</>
)
}
export default dashboard
