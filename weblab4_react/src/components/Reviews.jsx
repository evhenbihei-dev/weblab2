import React, { useState, useEffect } from 'react';

export default function Reviews({ theme }) {
  const [reviews, setReviews] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка:', error));
  }, []);

  const isDark = theme === 'dark';

  return (
    <section className={`p-6 rounded-xl shadow-sm border ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-slate-50 border-slate-200'}`}>
      <h2 className={`text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Відгуки роботодавців</h2>
      <div className="space-y-4">
        {reviews.length === 0 && <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>Завантаження...</p>}
        {reviews.map(review => (
          <div key={review.id} className={`p-4 rounded-lg shadow-sm ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
            <strong className="block text-blue-500">{review.email}</strong>
            <p className={`text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}