import React from "react";

const TableRow = ({ title, vote_average, release_date, overview }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{vote_average}</td>
            <td>{release_date}</td>
            <td>{overview}</td>
        </tr>
    );
};

export default TableRow;
