import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    localStorage.setItem('react_os', navigator.platform);
    localStorage.setItem('react_browser', navigator.userAgent);
    setSysInfo({
      os: localStorage.getItem('react_os'),
      browser: localStorage.getItem('react_browser')
    });
  }, []);

  return (
    <footer className="bg-slate-800 text-slate-300 text-center p-6 mt-4">
      <p className="mb-2">Контакти: yevhen.bihei.kb.2025@lpnu.ua | <a href="https://github.com/evhenbihei-dev" className="text-blue-400 hover:text-white underline">GitHub</a></p>
      <div className="border-t border-slate-600 pt-3 mt-3 text-sm text-slate-400">
        <p><strong>ОС:</strong> {sysInfo.os}</p>
        <p><strong>Браузер:</strong> {sysInfo.browser}</p>
      </div>
    </footer>
  );
}