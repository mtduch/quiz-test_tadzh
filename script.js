document.addEventListener("DOMContentLoaded", function () {
        // Правильные ответы
        const correctAnswers = {
        q1: "7",
        q2: "ﺭ",
        q3: "ء",
        q4: "Ясность,четкость",
        q5: "Место образование",
        q6: "Ихваъ",
        q7: "Игнорируем",
        q8: "верхней части гортани",
        q9: "нижней части гортани",
        q10: "средней части гортани",
        q11: "Если ر огласована касрой",
        q12: "с ташдидом",
        q13: "15",
        q14: "6",
        q15: "5"

                };

// Обработчик кнопки
document.getElementById("submitBtn").addEventListener("click", function () {
        let correct = 0; // Количество правильных ответов
        let incorrect = 0; // Количество неправильных ответов
        let unanswered = 0; // Количество неотвеченных вопросов
    
        // Проходим по всем вопросам
        for (let question in correctAnswers) {
            const userAnswer = document.querySelector(`input[name="${question}"]:checked`); // Получаем выбранный ответ
    
            if (!userAnswer) {
                // Если пользователь не выбрал ответ
                unanswered++;
            } else if (userAnswer.value === correctAnswers[question]) {
                // Если ответ правильный
                correct++;
            } else {
                // Если ответ неправильный
                incorrect++;
            }
        }
     // Проверяем результат
             console.log("Результат проверки:");
             console.log("Правильных ответов:", correct);
             console.log("Неправильных ответов:", incorrect);
             console.log("Неотвеченных вопросов:", unanswered);
     
        // Отображаем результат
        document.getElementById("score").innerText = `
            Правильных ответов: ${correct}.
            Неправильных ответов: ${incorrect}.
            Неотвеченных вопросов: ${unanswered}.
        `;
    });
});