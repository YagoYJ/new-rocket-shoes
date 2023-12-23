import { Header } from "@/components/Header";
import { ProductsList } from "@/components/Product/ProductsList";

export default function Home() {
  return (
    <div className="w-full">
      <Header />

      <ProductsList />
    </div>
  )
}
