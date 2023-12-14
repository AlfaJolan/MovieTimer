import React from "react";
import TableRow from "./table-row";
import { MapiServiceConsumer } from "../mapi-service-context";
import { withData } from "../hoc-helpers"; // Замените на фактический путь
import "./table.css"
class Table extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Vote Average</th>
                    <th>Release Date</th>
                    <th>Overview</th>
                </tr>
                </thead>
                <tbody>
                {data.map((movie, index) => (
                    <TableRow key={index} {...movie} />
                ))}
                </tbody>
            </table>
        );
    }
}

// Wrap Table with withData HOC
const TableWithData = withData(Table);

// Wrap TableWithData with MapiServiceConsumer to access context data
const TableWithDataWithContext = () => (
    <MapiServiceConsumer>
        {(mapiService) => (
            <TableWithData getData={mapiService.getRecommendedMovies} />
        )}
    </MapiServiceConsumer>
);

export default TableWithDataWithContext;
