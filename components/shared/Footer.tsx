import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
   <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
         <Link href="/">
         <Image
                src="/assets/icons/ticketsphere.svg"
                width={200}
                height={200}
                alt="Evently logo"
                className="h-[40px]"
                />
         </Link>
         <p>2024 ticketsphere. All rights Reserved</p>
      </div>
   </footer>
  )
}

export default Footer