import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function FlashMessage() {
  const { flash } = usePage().props as any;

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (flash?.success) {
      setMessage(flash.success);
      setType('success');
      setVisible(true);
    }

    if (flash?.error) {
      setMessage(flash.error);
      setType('error');
      setVisible(true);
    }

    if (flash?.success || flash?.error) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [flash]);

  if (!visible || !message) return null;

  return (
    <div
      className={`fixed top-25 right-6 z-50 px-6 py-3 rounded-xl shadow-lg transition-all duration-300
      ${type === 'success' ? 'bg-green-950 border-2 text-green-500 font-semibold border-green-500' : 'bg-red-950 border-2 text-red-500 font-semibold border-red-500'}`}
    >
      {message}
    </div>
  );
}
