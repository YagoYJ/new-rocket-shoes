import logoImage from "@/assets/images/logo.svg"
import Image from "next/image"
import { Cart } from "./Cart"
import Link from "next/link"

export function Header () {
    return (
        <header className="w-full flex items-center justify-between py-8">
            <Link href='/'>
                <Image src={logoImage} alt="Rocket Shoes" />
            </Link>

            <Link href='/cart'>
                <Cart />
            </Link>
        </header>
    )
}