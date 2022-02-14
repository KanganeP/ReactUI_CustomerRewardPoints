import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Last3MonthLists from './CusLast3MonthLists';
import StaticDataRewardsList from './CusTransactionRewardLists';
import RewardPerMonth from './RewardPerMonth';

function CusRewardCalculation() {
    // useState 
    const [price, setPrice] = useState("")
    const [priceErr, setPriceErr] = useState({})
    const [rewards, setRewards] = useState([]);
    const [cusPrice, setCusPrice] = useState("");
    const [transactionDate, setTransactionDate] = useState();
    const [cusDetails, setcusDetails] = useState([]);
    const [last3MonthsList, setLast3MonthsList] = useState([]);
    const [rewardofMonth, setRewardofMonth] = useState([]);
    const [totalRewards, setTotalRewards] = useState();

    const payDetails = [
        { "price": 120, "rewards": 90, "tran_date": "2022-02-03T17:20:56.738Z" },
        { "price": 154, "rewards": 158, "tran_date": "2022-02-04T21:53:56.738Z" },
        { "price": 96, "rewards": 46, "tran_date": "2022-01-05T17:12:12.738Z" },
        { "price": 51, "rewards": 1, "tran_date": "2022-01-10T17:09:48.738Z" },
        { "price": 49, "rewards": 0, "tran_date": "2021-12-10T13:05:36.738Z" },
        { "price": 204, "rewards": 258, "tran_date": "2021-11-10T17:09:48.738Z" },
        { "price": 156, "rewards": 162, "tran_date": "2021-10-10T13:05:36.738Z" },
        { "price": 68, "rewards": 18, "tran_date": "2021-09-10T10:05:36.738Z" }
    ]


    // Calculate Rewards of Price
    function calculateRewards(price) {
        if (price >= 50 && price < 100) {
            return price - 50;
        } else if (price > 100) {
            return (2 * (price - 100) + 50);
        }
        return 0;
    }

    // Set Text Box Validation
    const formPriceValidation = () => {
        const priceErr = {};
        let isValid = true;

        if (!price.trim()) {
            priceErr.priceEmpty = "Please enter Amount";
            isValid = false;
        }

        setPriceErr(priceErr);
        return isValid;
    }

    // Check Validation
    const checkPrice = (e) => {
        e.preventDefault();
        const isValid = formPriceValidation();
        if (isValid) {
            addTransaction(price);
        }
    }

    // useEffect for load data from database on only one render
    useEffect(() => {
        setcusDetails(payDetails);
        getTotalRewards();
    }, [totalRewards]);

    // Transaction Funcation called on Button with Reward Calculation
    const addTransaction = async () => {
        const currentDate = new Date();
        var Rewardpoints = calculateRewards(price);
        setRewards(Rewardpoints);
        setCusPrice(price);
        setTransactionDate(currentDate);
        
    };

    // Get last 3 Months Lists
    const getLast3MonthsList = () => {
        var today = new Date();
        const threeOldDate = new Date(today.setMonth(today.getMonth() - 3));
        var mostRecentDate = new Date(Math.max.apply(null, cusDetails.map(e => {
            return new Date(e.tran_date);
        })));

        const mostRecentObject = cusDetails.filter(e => {
            var d = new Date(e.tran_date);
            return d <= mostRecentDate && d >= threeOldDate;
        });
        setLast3MonthsList(mostRecentObject);
        
    }

    // Get Total of Customers Reward Points
    const getTotalRewards = async () => {
        let total = cusDetails.length ? cusDetails.reduce((acc, key) => key.rewards + acc, 0) : 0;
        setTotalRewards(total);
    }

    // Get Total of Customers Reward Points of Per Month
    const rewardPerMonth = async () => {
        let rewardPerMonth = [];
        for (let i = 0; i < 6; i++) {
            let filteredList = cusDetails.filter(trans => new Date(trans.tran_date).getMonth() == (new Date).getMonth() - i);
            rewardPerMonth[i] = filteredList.reduce((acc, key) => key.rewards + acc, 0);
        }
        setRewardofMonth(rewardPerMonth);
    }

    return (
        <div style={{ marginTop: "40px" }}>
            <h1>Make a Payment</h1>
            <input type="number" placeholder="Enter amount in price" value={price} onChange={(e) => { setPrice(price => e.target.value) }} /> <br />
            {Object.keys(priceErr).map((key) => {
                return <div style={{ color: "red" }}>{priceErr[key]}</div>
            })}<br />

            <Button variant="success" onClick={checkPrice} type="button">
                Calculate Reward Points of Price
            </Button>
            <StaticDataRewardsList Rewards={cusDetails} Price={cusPrice} CalPoint={rewards} TotalRewards={totalRewards} />
<br />
            <h4>Click for last 3 month lists</h4>
            <Button variant="success" onClick={getLast3MonthsList} type="button">
                Below Table Data is Last 3 Month Lists from All Transaction
            </Button>
            <Last3MonthLists Last3MonthsList={last3MonthsList} />
<br />
            <h4>Click for Reward Per Month</h4>
            <Button variant="success" onClick={rewardPerMonth} type="button">
                Below Table Data is Reward Per Months from All Transaction
            </Button>
            <RewardPerMonth RewardPerMonth={rewardofMonth} />

        </div>
    );
}

export default CusRewardCalculation;
