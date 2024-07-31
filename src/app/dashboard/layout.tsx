
import type { Metadata } from "next";
import { Inter } from "next/font/google";


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
AppWindow,
Medal,
ScrollText,
AppWindowIcon,
Settings2,
Flame,
CircleUser
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
import ProfileButton from "@/components/ProfileButton";
import { ModeToggle } from "@/components/Mode";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spark Gallery",
  
};

export default function dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={inter.className}>
      <>
<div className="flex min-h-screen w-full flex-col bg-muted/40">
<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
<nav className="flex flex-col items-center gap-4 px-2 py-4">
<Link
  href="#"
  className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
>
  <Flame className="h-5 w-5  transition-all  group-hover:scale-150" strokeWidth={3} absoluteStrokeWidth />
  <span className="sr-only">Acme Inc</span>
</Link>
<TooltipProvider>
<Tooltip>
  <TooltipTrigger asChild>
    <Link
      href="/dashboard"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
    >
      <Home className="h-5 w-5" />
      <span className="sr-only">Dashboard</span>
    </Link>
  </TooltipTrigger>
  <TooltipContent side="right">Dashboard</TooltipContent>
</Tooltip></TooltipProvider>
<TooltipProvider>
<Tooltip>
  <TooltipTrigger asChild>
    <Link
      href="/dashboard/myWebsites"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"    >
      <AppWindow className="h-5 w-5" />
      <span className="sr-only">My websites</span>
    </Link>
  </TooltipTrigger>
  <TooltipContent side="right">My Websites</TooltipContent>
</Tooltip></TooltipProvider>

<TooltipProvider>
<Tooltip>
  <TooltipTrigger asChild>
    <Link
      href="/dashboard/leaderboard"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"    >
      <Medal className="h-5 w-5" />
      <span className="sr-only">Leaderboard</span>
    </Link>
  </TooltipTrigger>
  <TooltipContent side="right">Leaderboard</TooltipContent>
</Tooltip>
</TooltipProvider>

<TooltipProvider>
<Tooltip>
  <TooltipTrigger asChild>
    <Link
      href="/dashboard/documentation"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
    >
      <ScrollText className="h-5 w-5" />
      <span className="sr-only">Documentation</span>
    </Link>
  </TooltipTrigger>
  <TooltipContent side="right">Documentation</TooltipContent>
</Tooltip></TooltipProvider>

</nav><TooltipProvider>
<nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">

<Tooltip>
  <TooltipTrigger asChild>
    <Link
      href="/dashboard/settings"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
    >
      <Settings className="h-5 w-5" />
      <span className="sr-only">Settings</span>
    </Link>
  </TooltipTrigger>
  <TooltipContent side="right">Settings</TooltipContent>
</Tooltip>

</nav>
</TooltipProvider>
</aside>
<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
<Sheet>
  <SheetTrigger asChild>
    <Button size="icon" variant="outline" className="sm:hidden">
      <PanelLeft className="h-5 w-5" />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="sm:max-w-xs">
    <nav className="grid gap-6 text-lg font-medium">
      <Link
        href="#"
        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
      >
        <Flame className="h-5 w-5 transition-all group-hover:scale-150" strokeWidth={3} absoluteStrokeWidth />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <Link
        href="/dashboard"
        className="flex items-center gap-4 px-2.5 text-foreground"
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="/dashboard/myWebsites"
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      >
        <AppWindowIcon className="h-5 w-5" />
        My Websites
      </Link>
      <Link
        href="/dashboard/leaderboard"
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      >
        <Medal className="h-5 w-5" />
        Leaderboard
      </Link>
      <Link
        href="/dashboard/documentation"
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      >
        <ScrollText className="h-5 w-5" />
        Documentation
      </Link>
      <Link
        href="/dashboard/settings"
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
      >
        <Settings2 className="h-5 w-5" />
        Settings
      </Link>
    </nav>
  </SheetContent>
</Sheet>

<h1 className="  font-bold flex md:text-2xl sm:text-2xl">
    SPARK GALLARY
</h1>

{/* <Breadcrumb className="hidden md:flex">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="#">Dashboard</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="#">Products</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>All Products</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb> */}
<div className="relative ml-auto flex-1 md:grow-0">
  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
  <Input
    type="search"
    placeholder="Search..."
    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
  />
</div>
<ProfileButton />
<ModeToggle />
</header>

{children}
</div>
</div>
</>


        
        
        </body>
    </html>
  );
}
