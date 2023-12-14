function getGenresString(genres) {
    if (!Array.isArray(genres) || genres.length === 0) {
        return 'No data about Genres';
    }

    console.log(genres)

    // Извлекаем имена жанров из массива
    const genreNames = genres
        .slice(0, 3) // Берем максимум четыре жанра
        .map(genre => genre.name);

    // Преобразуем массив имен в строку
    const resultString = genreNames.join(', ');
    console.log(resultString)
    return resultString;
}

export default getGenresString;