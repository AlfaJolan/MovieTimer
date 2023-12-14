import React from "react";
import {withData} from "../hoc-helpers";
import {withRouter} from "react-router-dom";
import {MapiServiceConsumer} from "../mapi-service-context";

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

    return { directors, producers, composers };
}

/*
Cast:
job : Director
job : Producer
      "job": "Original Music Composer"
 */
class MovieMainInfo extends React.Component {
    render() {
        const {data} = this.props;
        const roundedVote = Math.round(data.vote_average * 10);

        if (!data) {
            return null; // Можно также добавить заглушку, спиннер или другой компонент загрузки
        }
        return (<div id="mainInfo" className="order-2 col-lg-8 col-md-8 col-xl-8 col-8 ps-5">
            <span id="name">
                <h3 className="fw-bold">{data.title} ({extractYearFromDate(data.release_date)})</h3>
            <h5 className="text-muted fw-light">{data.original_title}</h5>
            </span>

            <div id="smallMedia" className="d-block d-lg-none d-md-none d-xl-none">
              <span id="ratingSmMedia">
                <h5 className="mb-0">{roundedVote}%</h5>
              </span>
                <br/>
                <span id="countVotesSmMedia" className="text-muted">
                {data.vote_count}
              </span>
                <span>
              <button id="btnRate" className="btn btn-primary rateSmMedia mt-0">
                Rate
              </button>
              </span>
            </div>

            <div id="info">
              <span>
                <b>About</b>
              </span>
                <div className="row">
                    <div className="order-1 col-4 d-none d-lg-block d-md-block d-xl-block">
                <span id="year" className="fill d-block">
                  Production Year
                </span>
                        <span id="country" className="fill d-block">
                  Country
                </span>
                        <span id="genre" className="fill d-block">
                  Genre
                </span>
                        <span id="director" className="fill d-block">
                  Director
                </span>
                        <span id="writer" className="fill d-block">
                  Writer
                </span>
                        <span id="compositer" className="fill d-block">
                  Compositer
                </span>
                        <span id="art" className="fill d-block">
                  Art
                </span>
                        <span id="montage" className="fill d-block">
                  Montage
                </span>
                        <span id="age" className="fill d-block">
                  Age
                </span>
                        <span id="MPAArating" className="fill d-block">
                  MPAA Rating
                </span>
                        <span id="duration" className="fill d-block">
                  Duration
                </span>
                    </div>
                    <div className="order-2 col-6 d-none d-lg-block d-md-block d-xl-block">
                <span id="yearContent" className="fillContent d-block">
                  {extractYearFromDate(data.release_date)}
                </span>
                        <span id="countryContent" className="fillContent d-block">
                  {getProductionCountriesString(data.production_countries)}
                </span>
                        <span id="genreContent" className="fillContent d-block">
                    {getGenresString(data.genres)}
                </span>
                        <span id="directorContent" className="fillContent d-block">
                  Greta Gerwig
                </span>
                        <span id="writerContent" className="fillContent d-block">
                  Greta Gerwig, Noah Baumbach
                </span>
                        <span id="compositerContent" className="fillContent d-block">
                  Mark Ronson
                </span>
                        <span id="artContent" className="fillContent d-block">
                  Din Klegg
                </span>
                        <span id="montageContent" className="fillContent d-block">
                  Nick Hugh
                </span>
                        <span id="ageContent" className="fillContent d-block">
                  13+
                </span>
                        <span id="MPAAratingContent" className="fillContent d-block">
                  PG-13
                </span>
                        <span id="durationContent" className="fillContent d-block">
                  {data.runtime} min / {minToHours(data.runtime)} hrs
                </span>
                    </div>
                </div>
            </div>

            <div id="movieReviews" className="container">
            </div>
        </div>)
    }
}

const MovieMainInfoWithData = withData(MovieMainInfo);

const MovieMainDataWithDataAndContext = withRouter(({ match }) => (
    <MapiServiceConsumer>
        {(mapiService) => (
            <MovieMainInfoWithData
                getData={() => mapiService.getMovie(match.params.id)}
            />
        )}
    </MapiServiceConsumer>
));

export default MovieMainDataWithDataAndContext