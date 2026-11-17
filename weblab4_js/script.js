// --- 1. LocalStorage (Системна інформація) ---
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;

// Зберігаємо в LocalStorage
localStorage.setItem('os', osInfo);
localStorage.setItem('browser', browserInfo);

// Відображаємо у футері
const footerInfo = document.getElementById('system-info');
footerInfo.innerHTML = `ОС: ${localStorage.getItem('os')}<br>Браузер: ${localStorage.getItem('browser')}`;


// --- 2. Асинхронний JavaScript (Fetch API) ---
async function fetchReviews() {
    try {
        // Використовуємо 2 замість 1 для номера варіанта
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2/comments');
        const data = await response.json();
        
        const container = document.getElementById('reviews-container');
        container.innerHTML = ''; // Очищаємо текст "Завантаження..."
        
        // Відображаємо коментарі
        data.forEach(comment => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<strong>${comment.email}</strong><p>${comment.body}</p>`;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Помилка завантаження:', error);
    }
}
fetchReviews();


// --- 3. Модальне вікно (через 1 хвилину) ---
const modal = document.getElementById('feedback-modal');
const closeModalBtn = document.getElementById('close-modal');

// 60000 мс = 1 хвилина. Для швидкої перевірки можеш змінити на 3000 (3 секунди)
setTimeout(() => {
    modal.style.display = 'flex';
}, 60000);

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


// --- 4. Перехід на нічний/денний режим ---
const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');

// Автоматичне визначення теми за часом
const currentHour = new Date().getHours();
if (currentHour >= 7 && currentHour < 21) {
    body.classList.remove('dark-mode'); // Денна тема
} else {
    body.classList.add('dark-mode'); // Нічна тема
}

// Ручне перемикання теми
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});