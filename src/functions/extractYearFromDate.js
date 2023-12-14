function extractYearFromDate(dateString) {
    // Проверяем, определена ли строка даты
    if (!dateString) {
        return ''; // или обработайте случай, когда dateString не определен
    }

    // Разбиваем строку даты по дефисам
    const dateParts = dateString.split('-');

    // Если есть хотя бы три части (год, месяц, день)
    if (dateParts.length >= 3) {
        // Извлекаем год (первая часть)
        const year = parseInt(dateParts[0], 10);

        // Проверяем, успешно ли извлекли год
        if (!isNaN(year)) {
            return year;
        }
    }

    return ''; // Возвращаем значение по умолчанию или обрабатываем ошибку по вашему усмотрению
}
export default extractYearFromDate;