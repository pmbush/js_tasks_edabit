// Функция, которая принимает в качестве аргумента число (шаг) и возвращает количество спичечных палочек в этом шаге
const matchHouses = function(step) {
    // Вычисляем количество спичек
    return step > 0 ? (step * 6) - (step - 1) : 0;
}

export default matchHouses; // Экспорт функции