function getProductionCountriesString(productionCountries) {
    if (!Array.isArray(productionCountries) || productionCountries.length === 0) {
        return 'No Data';
    }

    // Извлекаем имена стран из массива
    const countryNames = productionCountries
        .slice(0, 3) // Берем максимум три страны
        .map(country => country.iso_3166_1);

    // Преобразуем массив имен в строку
    const resultString = countryNames.join(', ');

    return resultString;
}

export default getProductionCountriesString;