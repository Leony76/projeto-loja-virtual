import moneyFormatter from '../utils/moneyFormatter';

type Props = {
  img: string;
  title: string;
  category: string;
  init_day: string;
  description: string;
  value: number;
  wallet?: number | undefined;
  selected?: boolean;
  bought?: boolean;
  amount: number;
  bought_date?: string;
  selectProduct?: () => void;
  diselectProduct?: () => void;
  buyProduct?: () => void;
}

const ProductCard = ({ 
  img,
  title,
  category,
  init_day,
  description,
  value,
  selected,
  wallet,
  bought,
  amount,
  bought_date,
  selectProduct,
  diselectProduct,
  buyProduct
} : Props) => {
  return (
    <div className={`flex flex-col transition-all my-6 gap-4 w-[400px] border-2 p-3 rounded-xl ${selected ? 'fixed top-1/2 left-1/2 translate-[-50%] bg-black flex-row w-[1000px]' : ''}`}>
      <img 
        className={`w-100 object-cover rounded-xl ${selected ? 'h-100' : 'h-50'}`} 
        src={`img/${img}`} 
        alt={title} 
      /> 
      <div className="flex flex-col flex-1 gap-2">
        <h3 className='text-2xl'>{title}</h3>
        <div className="flex gap-2">
          <p className='text-gray-500'>{category}</p>
          <span className="text-[#a0a0a0]">●</span>
          <p className='text-md'>{new Date(init_day ?? 'Sem data').toLocaleString('pt-BR')}</p>
        </div>
        <p>{description}</p>
        <div className="mt-auto flex flex-col gap-3">
          <p className='flex items-center justify-between gap-2 text-lg'>
            <div className="flex gap-2">
              <span className='text-gray-500'>Valor:</span>
              <span className='text-green-600 font-bold'>R$ {moneyFormatter(value)}</span>
            </div>
            <span className="text-yellow-500 mr-2">Quantidade: {amount}</span>
          </p>
          {bought && (<p>Data da compra: {new Date(bought_date ?? 'Sem data').toLocaleString('pt-BR')}</p>)}
          {selected && (
            <p className='flex mt-[-10px] items-center gap-2 text-lg'>
              <span className='text-gray-500'>Saldo atual:</span> 
              <span className='text-green-600 font-bold'>R$ {moneyFormatter(wallet ?? 0)}</span>
            </p>
          )}
          {!bought && (
            <div className="flex gap-2">
            {amount > 0 ? (
              <button 
                onClick={!selected ? selectProduct : buyProduct} 
                className='border-2 flex-1 p-2 rounded-xl bg-white text-black font-semibold cursor-pointer transition hover:opacity-80 active:opacity-50'>
                  {selected ? 'Confirmar Compra' : 'Comprar'}
                </button>
            ) : (
              <button className='flex-1 p-2 rounded-xl text-red-500 font-semibold'>{selected ? 'Confirmar Compra' : 'Fora de Estoque'}</button>
            ) }
            {selected && (
              <button onClick={diselectProduct} className='border-2 border-white flex-1 p-2 rounded-xl text-white font-semibold cursor-pointer transition hover:opacity-80 active:opacity-50'>Fechar</button>
            )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;