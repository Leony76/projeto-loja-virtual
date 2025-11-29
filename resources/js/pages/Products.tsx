import AppLayout from "@/layouts/app/AppLayout"
import { Head, usePage } from "@inertiajs/react";
import ProductCard from "@/components/ProductCard";
import { useBuyProductModal, Produto } from "@/hooks/useBuyProductModal";
import { queryParams } from "@/wayfinder";

type PageProps = {
	auth: {
		user: {
			id: number,
			name: string,
			saldo: number
		} | null;
	}
}

const Products = ({ produtos } : {produtos:Produto[]}) => {
	const {
		showBuyProductModal,
		selectedProduct,
		openModal,
		closeModal,
		buyProduct
	} = useBuyProductModal();
  
	const { auth } = usePage<PageProps>().props;
	const saldo = auth?.user?.saldo;

  return (
    <AppLayout>
			<div className={`bg-[#0A0A0A] p-5 transition-all ${showBuyProductModal ? 'opacity-10' : 'opacity-100'}`}>			
        <Head title="Produtos"/>
				<h2 className="text-center text-3xl font-bold">Produtos</h2>
				<div className='flex flex-wrap rounded-xl justify-evenly items-evenly'>
				{produtos.length === 0 && (
					<div className='p-6 font-bold text-xl'>
						Não produtos no momento
					</div>
				)}
				{produtos.map((produto) => (
					<ProductCard
						key={produto.id}
						img={produto.imagem}
						title={produto.nome}
						init_day={produto.data_posto_p_venda}
						category={produto.categoria}
						description={produto.descricao}
						value={produto.valor}	
            selectProduct={() => openModal(produto)}		
						wallet={saldo}		
						amount={produto.quantidade}
					/>
				))}
				</div>
      </div>
			{showBuyProductModal && selectedProduct && (
				<ProductCard
					img={selectedProduct.imagem}
					title={selectedProduct.nome}
					category={selectedProduct.categoria}
					init_day={selectedProduct.data_posto_p_venda}
					description={selectedProduct.descricao}
					value={selectedProduct.valor}
					selected={true}
					diselectProduct={() => closeModal()}
					buyProduct={() => buyProduct()}
					wallet={saldo}
					amount={selectedProduct.quantidade}
				/>
			)}
    </AppLayout>
  );
}

export default Products