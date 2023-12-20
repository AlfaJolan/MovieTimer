import React from "react";
import {Link} from "react-router-dom";

const TableRow = ({ id, title, vote_average, release_date, overview }) => {
    return (
        <tr>
            <td><p>{title}</p></td>
            <td><p>{vote_average}</p></td>
            <td><p>{release_date}</p></td>
            <td className={"overview-column-content"}><p>{overview}</p></td>
            <td><Link to = {`/movie/${id}#movie`} className = "btn-sm">Link</Link></td>
        </tr>
    );
};

export default TableRow;
