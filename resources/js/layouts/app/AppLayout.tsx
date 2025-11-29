import { Link } from "@inertiajs/react"
import { ShoppingCart } from "lucide-react"
import { ReactNode } from "react"
import FlashMessage from "@/components/FlashMessage"

const AppLayout = ({children}:{children:ReactNode}) => {

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="bg-[#121212]">
        <nav className="flex justify-between items-center py-5 px-10">
          <div className="flex items-center gap-3 text-xl font-bold">
            <ShoppingCart color="white" size={50}/> Shopping Online
          </div>
          <ul className="flex gap-8">
            <li><Link className="text-white font-semibold text-decoration-none transition-[.5s] hover:opacity-50" href={'/home'}>Home</Link></li>
            <li><Link className="text-white font-semibold text-decoration-none transition-[.5s] hover:opacity-50" href={'/products'}>Produtos</Link></li>
            <li><Link className="text-white font-semibold text-decoration-none transition-[.5s] hover:opacity-50" href={'/my-products'}>Meus Produtos</Link></li>
            <li><Link className="text-white font-semibold text-decoration-none transition-[.5s] hover:opacity-50" href={'/user-data'}>Dados do usuário</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6">
        <FlashMessage/>
        {children}
      </main>
      <footer className=" flex justify-center bg-[#121212] p-10">
        <span>&copy; Leony Leandro Barros </span>
      </footer>
    </div>
  )
}

export default AppLayout

