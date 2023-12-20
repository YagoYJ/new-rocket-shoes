import Image from "next/image";

import logoImg from "@/assets/images/logo.svg"

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Image src={logoImg} alt="Rocket Shoes"/>
    </main>
  )
}
