export default class MapiService{
    //_apiBase="https://api.themoviedb.org/3/movie/popular?api_key=<<api_key_here>>"
    _apiSearch="https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query"
    _apiBase = 'https://api.themoviedb.org/3';
    _apiKey = '49b0dcacecc7a685bebabbb4866a4a5e'; // Пожалуйста, замените на свой ключ API
    /*
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json()
    }

     */

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


    searchMovies = async (query) => {
        const res = await this.getResource(`/search/movie?query=${query}`);
        return res.results;
    };
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
