type ToastProps = {
  type: 'success' | 'error';
  message: string;
}

const Toast = ({type, message}:ToastProps) => {
  return (
    <div
      className={`fixed top-25 right-6 z-50 px-6 py-3 rounded-xl shadow-lg transition-all duration-300
      ${type === 'success' ? 'bg-green-950 border-2 text-green-500 font-semibold border-green-500' : 'bg-red-950 border-2 text-red-500 font-semibold border-red-500'}`}
    >{message}</div>
  )
}

export default Toast