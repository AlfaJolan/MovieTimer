import React from "react";
import {Link} from "react-router-dom";

const TableRow = ({ id, title, vote_average, release_date, overview }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{vote_average}</td>
            <td>{release_date}</td>
            <td>{overview}</td>
            <td><Link to = {`/movie/${id}#movie`} className = "btn-sm">Link</Link></td>
        </tr>
    );
};

export default TableRow;
