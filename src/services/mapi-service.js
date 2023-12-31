export default class MapiService{
    _apiSearch="https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query"
    _apiBase = 'https://api.themoviedb.org/3';
    _apiKey = '49b0dcacecc7a685bebabbb4866a4a5e';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}&api_key=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };
    getPopularMovies = async () => {
        const res = await this.getResource('/movie/popular?');
        console.log(res);
        return res.results;
    };

    getUpcomingMovies = async () => {
        const res = await this.getResource('/movie/upcoming?');
        console.log(res);
        return res.results;
    };

    getRecommendedMovies1 = async() => {
        const res = await this.getResource('/movie/top_rated?');
        console.log(res.results);
        return res.results;
    }

    _transformMovie = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            overview: movie.overview,
            // другие поля по необходимости
        };
    }

    getRecommendedMovies = async () => {
        try {
            const res = await this.getResource('/movie/top_rated?');
            return res.results.map(this._transformMovie);
        } catch (error) {
            console.error('Error fetching recommended movies:', error);
            throw error;
        }
    }



    searchMovies = async (query) => {
        const res = await this.getResource(`/search/movie?query=${query}`);
        return res.results;
    };

    _transformMovieDetails = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            release_date: movie.release_date,
            overview: movie.overview,
            popularity: movie.popularity,
            runtime: movie.runtime,
            original_title:movie.original_title,
            production_countries: movie.production_countries,
            genres: movie.genres,

            /*
            Art, Writer, Genre, AGE, MPAA Rating, Duration, Country, Year, Original Title, Vote,
             */
        };
    }

    getMovieCredits = async (id) => {
        const res = await this.getResource(`/movie/${id}/credits?language=en-US`)
        console.log(res)
        return res;
    }

    getMovie = async (id) => {
        const res = await this.getResource(`/movie/${id}?language=en-US`)
        console.log(res)
        return res;
    }

    getMovieData = async (id) => {
        try {
            // Вызываем обе функции асинхронно
            const [movieRes, creditsRes] = await Promise.all([
                this.getMovie(id),
                this.getMovieCredits(id)
            ]);

            // Объединяем результаты в один объект
            const movieData = {
                movie: movieRes,
                credits: creditsRes
            };

            console.log(movieData);
            return movieData;
        } catch (error) {
            console.error('Error fetching movie data:', error);
            throw error;
        }
    }


    searchMoviesAdvanced = async ({ query, includeAdult, language, primaryReleaseYear, page, year }) => {
        const params = new URLSearchParams();

        if (query) params.append('query', query);
        if (includeAdult !== null && includeAdult !== undefined) params.append('include_adult', includeAdult);
        if (language) params.append('language', language);
        if (primaryReleaseYear !== null && primaryReleaseYear !== undefined) params.append('primary_release_year', primaryReleaseYear);
        if (page !== null && page !== undefined) params.append('page', page);
        if (year !== null && year !== undefined) params.append('year', year);

        const res = await this.getResource(`/search/movie?${params.toString()}`);
        return res.results;
    };

}
