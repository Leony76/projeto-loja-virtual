import AppLayout from "@/layouts/app/AppLayout"
import ProductCard from "@/components/ProductCard"
import { Produto } from '@/hooks/useBuyProductModal';
import { Head, usePage } from "@inertiajs/react";

type PageProps = {
  produtos?: Produto[];
}

const MyProducts = () => {
  const { produtos = [] } = usePage<PageProps>().props;

  return ( 
    <AppLayout> 
      <div className="bg-[#0A0A0A] p-5">

        <Head title="Meus Produtos"/>

        <h2 className="text-center text-3xl font-bold">Meus Produtos</h2>
				<div className='flex flex-wrap rounded-xl justify-evenly items-evenly'>
          {produtos.length === 0 && (
					<div className='p-6 font-bold text-xl'>
						Você não comprou nenhum produto até agora
					</div>
				  )}
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              img={produto.imagem}
              title={produto.nome}
              category={produto.categoria}
              init_day={produto.data_posto_p_venda}
              description={produto.descricao}
              value={produto.valor}
              amount={produto.quantidade_comprada}
              bought={true}
              bought_date={produto.pivot.created_at}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export default MyProducts