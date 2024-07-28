import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { CircleUser } from 'lucide-react'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'
export default async function ProfileButton() {
    
    const {userId} = auth();


  return (<>
                {userId ? 
                <div>
                    <UserButton />
                </div>  :   
                <div>
                <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
                >
            <CircleUser />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Login kor bhai</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/sign-in">
                <DropdownMenuItem>Sign In</DropdownMenuItem>
                </Link>
                <Link href="/sign-up">
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                <Link href={"/fun"}>
                <DropdownMenuItem>Korbo na</DropdownMenuItem>
                </Link>

            </DropdownMenuContent>
            </DropdownMenu>
            </div> }


</>
)
}






