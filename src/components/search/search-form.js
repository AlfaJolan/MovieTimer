

import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchForm = ({ query, changeHandler, searchMovie }) => {
    return (
        <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
            <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
            ></FormControl>
            <Button variant="secondary" type="submit">
                Search
            </Button>
        </Form>
    );
};

export default SearchForm;
