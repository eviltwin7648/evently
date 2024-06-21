import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-centre justify-between">
            <Link href="/" className="w-36">
                <Image
                src="/assets/icons/ticketsphere.svg"
                width={2000}
                height={2000}
                alt="Evently logo"
                className="h-[40px]"
                />
            </Link>

            <SignedIn>
                <nav className="md:flex-between hidden">
                    <NavItems/>
                </nav>
            </SignedIn>

            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                    <MobileNav/>
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full " size='lg'>
                    <Link href="/sign-in">
                        Login
                    </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header