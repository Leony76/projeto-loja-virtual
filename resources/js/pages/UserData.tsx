import { useState, useEffect } from "react"
import AppLayout from "../layouts/app/AppLayout"
import { router, usePage } from "@inertiajs/react"
import Toast from "@/components/Toast"
import moneyFormatter from "@/utils/moneyFormatter"

type PageProps = {
  auth: {
    user: {
      name: string,
      email: string
      saldo: number,
      password: string
    }
  }
}

const UserData = () => {
  const { auth } = usePage<PageProps>().props;
  const { errors } = usePage().props;

  const saldo = auth?.user?.saldo;
  
  const [username, setUsername] = useState(auth?.user?.name);
  const [email, setEmail] = useState(auth?.user?.email);
  const [toast, setToast] = useState<null | {type: 'success' | 'error'; message:string}>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [viewMode, setViewMode] = useState<'view' | 'edit'>('view');

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if (newPassword != confirmNewPassword) {
      setToast({type: 'error', message: 'Senhas não coincidem!'});
      return;
    };
    
    router.put('/user/profile', {
      name: username,
      email: email,
      password: newPassword
    });
  }

  useEffect(() => {
    if (errors.name) {
      setToast({ type: 'error', message: errors.name });
    } else if (errors.email) {
      setToast({ type: 'error', message: errors.email });
    } else if (errors.password) {
      setToast({ type: 'error', message: errors.password });
    }
  }, [errors]);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <AppLayout>
      {toast && (
        <Toast type={toast.type} message={toast.message}/>
      )}
      <div className="flex w-[60%] m-auto">
        <div className="flex flex-col border-2 rounded-md h-fit w-fit m-7">
          <button onClick={() => setViewMode('edit')} className={`py-2 px-4 border-b-2 rounded-tl-md rounded-tr-md font-semibold cursor-pointer transition-all ${viewMode == 'edit' ? 'bg-white text-black' : ''}`}>Alterar Dados</button>
          <button onClick={() => setViewMode('view')} className={`py-2 px-4 rounded-bl-md rounded-br-md font-semibold cursor-pointer transition-all ${viewMode == 'view' ? 'bg-white text-black' : ''}`}>Visualizar Dados</button>
        </div>
        {viewMode == 'edit' ? (
          <div className="flex flex-col gap-2 border-2 ml-[-10px] overflow-hidden rounded-lg xl:w-[500px] lg:w-[400px] md:w-[400px] sm:w-[400px] m-auto my-7">
            <div className="text-center">
              <h2 className="text-3xl py-3 border-b-2 bg-[#121212] font-bold">Alterar Informações</h2>
              <p className="text-lg pt-4">Preencha com suas informações pessoais novas.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
              <div className="flex flex-col">
                <label className="font-semibold text-lg" htmlFor="name">Nome:</label>
                <input className="border-3 p-2 rounded-lg" value={username} type="text" onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-lg" htmlFor="email">E-mail:</label>
                <input className="border-3 p-2 rounded-lg" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-lg" htmlFor="password">Nova senha:</label>
                <input className="border-3 p-2 rounded-lg" type="password" onChange={(e) => setNewPassword(e.target.value)}/>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-lg" htmlFor="password">Confirmar nova senha:</label>
                <input className="border-3 p-2 rounded-lg" type="password" onChange={(e) => setConfirmNewPassword(e.target.value)}/>
              </div>
              <button type="submit" className="bg-white p-3 mt-2 font-bold text-lg text-black rounded-lg transition-all cursor-pointer hover:opacity-80 active:opacity-50">Salvar Informações</button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col gap-2 border-2 ml-[-10px] overflow-hidden rounded-lg xl:w-[500px] lg:w-[400px] md:w-[400px] sm:w-[400px] m-auto my-7">
            <div className="text-center">
              <h2 className="text-3xl py-3 border-b-2 bg-[#121212] font-bold">Informações Pessoas</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 pt-2">
              <div className="flex flex-col">
                <label className="font-semibold text-lg text-gray-500" htmlFor="name">Nome: <span className="text-white">{username}</span></label>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-lg text-gray-500" htmlFor="email">E-mail: <span className="text-white">{email}</span></label>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-lg text-gray-500" htmlFor="password">Senha: <span className="text-md text-white">●●●●●●●●●</span></label>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-lg text-gray-500" htmlFor="password">Saldo: <span className="text-green-500">R$ {moneyFormatter(saldo)}</span></label>
              </div>
            </form>
          </div>    
        )}
      </div>
    </AppLayout>
  )
}

export default UserData