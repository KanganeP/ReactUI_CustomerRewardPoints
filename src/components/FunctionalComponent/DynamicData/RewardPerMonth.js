import React from 'react';
import { Table } from 'react-bootstrap';

function RewardPerMonth(props) {
    const RewardPerMonth = props.RewardPerMonth;
  return (
    <div>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Rewards of Point Per Month</th>
                    </tr>
                </thead>
                <tbody>
                    {RewardPerMonth.map((permonth, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{permonth}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </div>
  )
}

RewardPerMonth.propTypes = {}

export default RewardPerMonth
