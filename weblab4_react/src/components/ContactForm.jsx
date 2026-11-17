import React, { useState, useEffect } from 'react';

export default function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null; 
  
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className={`p-6 rounded-xl shadow-xl w-full max-w-md ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}`}>
        <h3 className="text-2xl font-bold mb-4">Зворотний зв'язок</h3>
        
        <form action="[https://formspree.io/f/myeebgkz](https://formspree.io/f/myeebgkz)" method="POST" className="space-y-3">
          <input type="text" name="name" placeholder="Ім'я" required className={`w-full p-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white'}`} />
          <input type="email" name="email" placeholder="Email" required className={`w-full p-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white'}`} />
          <input type="tel" name="phone" placeholder="Номер телефону" className={`w-full p-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white'}`} />
          <textarea name="message" placeholder="Ваше повідомлення" required className={`w-full p-2 border rounded h-24 ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white'}`}></textarea>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Надіслати</button>
            <button type="button" onClick={() => setIsOpen(false)} className="flex-1 bg-slate-400 text-white py-2 rounded hover:bg-slate-500 transition">Закрити</button>
          </div>
        </form>
      </div>
    </div>
  );
}