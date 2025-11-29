import { useState } from 'react';
import { router } from '@inertiajs/react';

export type Produto = {
  id: number;
  nome: string;
  categoria: string;
  data_posto_p_venda: string;
  descricao: string;
  valor: number;
  imagem: string;
  quantidade: number;
  quantidade_comprada: number;

  pivot: {
    user_id: number;
    produto_id: number;
    created_at: string;
    updated_at: string;
  }
};

export function useBuyProductModal() {
  const [showBuyProductModal, setShowBuyProductModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);

  function openModal(produto: Produto) {
    setSelectedProduct(produto);
    setShowBuyProductModal(true);
  }

  function closeModal() {
    setShowBuyProductModal(false);
    setSelectedProduct(null);
  }

  function buyProduct() {
    if (!selectedProduct) return;
    console.log('comprou', selectedProduct.nome)

    router.post('buy-product', {
      produto_id: selectedProduct.id
    },{
      onSuccess: () => {
        closeModal();
      }
    });
  }

  return {
    showBuyProductModal,
    selectedProduct,
    openModal,
    closeModal,
    buyProduct,
  };
}
