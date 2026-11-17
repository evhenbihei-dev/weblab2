import React, { useState, useEffect } from 'react';
import Header from './components/Header'; 
import Education from './components/Education';
import Reviews from './components/Reviews'; 
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light'); 
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme((hour >= 7 && hour < 21) ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('react_os', navigator.platform);
    localStorage.setItem('react_browser', navigator.userAgent);
    setSysInfo({
      os: localStorage.getItem('react_os'),
      browser: localStorage.getItem('react_browser')
    });
  }, []);

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen py-10 px-4 font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
      <div className={`max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
        
        <ContactForm theme={theme} />
        
        <Header theme={theme} setTheme={setTheme} />

        <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Education isDark={isDark} />

          <section className={`p-6 rounded-xl shadow-sm border ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-slate-50 border-slate-200'}`}>
            <h2 className={`text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Технічні навички</h2>
            <ul className={`space-y-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <li><strong className={isDark ? 'text-white' : 'text-slate-900'}>Мови:</strong> C#, HTML, основи JavaScript.</li>
              <li><strong className={isDark ? 'text-white' : 'text-slate-900'}>Технології:</strong> React Native (Expo Go), Windows Forms.</li>
              <li><strong className={isDark ? 'text-white' : 'text-slate-900'}>Інструменти:</strong> JetBrains Rider, Git, VEGAS Pro, FL studio.</li>
              <li><strong className={isDark ? 'text-white' : 'text-slate-900'}>Кібербезпека:</strong> Аудит інф. безпеки, ISO/IEC 27001.</li>
            </ul>
          </section>

          <div className="md:col-span-2">
            <Reviews theme={theme} />
          </div>
        </main>

        <footer className="bg-slate-800 text-slate-300 text-center p-6 mt-4">
          <p className="mb-2">Контакти: yevhen.bihei.kb.2025@lpnu.ua | <a href="https://github.com/" className="text-blue-400 hover:text-white underline">GitHub</a></p>
          <div className="border-t border-slate-600 pt-3 mt-3 text-sm text-slate-400">
            <p><strong>ОС:</strong> {sysInfo.os}</p>
            <p><strong>Браузер:</strong> {sysInfo.browser}</p>
          </div>
        </footer>
        
      </div>
    </div>
  );
}

export default App;