import React from 'react';
import { Table } from 'react-bootstrap';

function CusRewardLists(props) {
    const point = props.Rewards;
    const TotalReward = props.TotalRewards;
    return <div>
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Reward Points</th>
                        <th>Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{props.Price}</td>
                        <td>{props.CalPoint}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>

        <div>
            <h4>Below Table Data is Static Data for All Transaction</h4>
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
                    {point.map((details, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{details.price}</td>
                            <td>{details.rewards}</td>
                            <td>{details.tran_date}</td>
                        </tr>
                    ))}
                    <tr>
                        <th>Total</th>
                        <td></td>
                        <th>{TotalReward}</th>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>

    </div>;
}

export default CusRewardLists;
