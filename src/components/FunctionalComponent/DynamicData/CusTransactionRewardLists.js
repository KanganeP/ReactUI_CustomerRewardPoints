import React from 'react';
import { Table } from 'react-bootstrap';

function CusTransactionRewardLists(props) {
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

export default CusTransactionRewardLists;
