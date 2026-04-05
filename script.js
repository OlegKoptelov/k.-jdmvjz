// Массив с приятными сообщениями
const messages = [
    "Спасибо, что ты есть! ❤️",
    "Ты — самое прекрасное, что случалось в моей жизни. 🌸",
    "Думаю о тебе каждую минуту. 💭",
    "С тобой любой день становится праздником! 🎉"
];

// Функция, которая меняет текст
function changeText() {
    // Выбираем случайное сообщение из массива
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Находим наш абзац на странице по его ID и меняем текст
    document.getElementById('text').innerText = messages[randomIndex];
}