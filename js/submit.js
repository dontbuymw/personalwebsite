// review-form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(review-form);

//     fetch('https://getform.io/f/bvrrlkjb', {
//         method: 'POST',
//         body: formData,
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//     .then(response => {
//         if (response.ok) {
//             alert('Сообщение успешно отправлено!');
//             review-form.reset();
//         } else {
//             alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
//         }
//     })
//     .catch(() => {
//         alert('Произошла ошибка. Проверьте подключение к интернету.');
//     });
// });