function minToHours(min) {
    // Проверяем, определено ли значение
    if (min === null || typeof min === 'undefined') {
        return 'No Data';
    }

    // Проверяем, является ли значение числом
    if (typeof min !== 'number') {
        return 'InCorrect Data';
    }

    // Проверяем, является ли значение отрицательным
    if (min < 0) {
        return 'Negative Value';
    }

    // Рассчитываем часы и минуты
    const hours = Math.floor(min / 60);
    const minutes = min % 60;

    // Преобразуем результат в строку с форматированием
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}
export default minToHours;