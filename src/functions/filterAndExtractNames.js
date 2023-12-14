function filterAndExtractNames(movies) {
    // Функция для извлечения имен из массива объектов
    const extractNames = (array, position) =>
        array
            .filter(item => item.job === position)
            .slice(0, 3)
            .map(item => item.name);

    // Создаем массивы с именами для каждой должности
    const directors = extractNames(movies, 'Director');
    const producers = extractNames(movies, 'Producer');
    const composers = extractNames(movies, 'Original Music Composer');
    const montage = extractNames(movies,'Editor')
    return { directors, producers, composers, montage};
}
export default filterAndExtractNames;