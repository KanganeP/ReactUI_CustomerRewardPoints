import React from 'react';
import { Table } from 'react-bootstrap';

function CusLast3MonthLists(props) {
    const Last3MonthsList = props.Last3MonthsList;
    return (
        <div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Rewards Point</th>
                        <th>Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    {Last3MonthsList.map((last3month, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{last3month.price}</td>
                            <td>{last3month.rewards}</td>
                            <td>{last3month.tran_date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CusLast3MonthLists