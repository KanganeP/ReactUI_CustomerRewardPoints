import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Last3MonthLists from './CusLast3MonthLists';
import DynamicDataRewardsList from './CusTransactionRewardLists';
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

    // Transaction Funcation called on Button with Reward Calculation
    const addTransaction = async () => {
        const currentDate = new Date();
        var Rewardpoints = calculateRewards(price);
        setRewards(Rewardpoints);
        setCusPrice(price);
        setTransactionDate(currentDate);
        if (rewards.length == 0) {
            console.log("Rewards is empty");
        } else {
            customerTransaction();
            
        }
    };

    //Customer Transaction Details Sent to Database with Backend API
    const customerTransaction = async () => {
        const customer_payment_details = {
            customerPrice: cusPrice,
            customerPoint: rewards,
            TransactionDate: transactionDate
        };

        const create_price_url = "http://localhost:8080/api/makepayment";
        const create_price_options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer_payment_details),
        };

        const details_resp = await fetch(create_price_url, create_price_options);
        fetchPaymentDetails();
        getTotalRewards();
    }

    // useEffect for load data from database on only one render
    useEffect(() => {
        fetchPaymentDetails();
        getTotalRewards();
    }, [totalRewards]);

    // Function for load data from database using backend API
    const fetchPaymentDetails = async () => {
        const result = await axios(
            "http://localhost:8080/api/payment/list"
        );
        setcusDetails(result.data);
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
        getTotalRewards();
    }

    // Get Total of Customers Reward Points
    const getTotalRewards = async () => {
        let total = cusDetails.length ? cusDetails.reduce((acc, key) => key.rewards + acc, 0) : 0;
        console.log("total", total)
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
        getTotalRewards();
    }
console.log("totalRewards", totalRewards)
    return (
        <div style={{ marginTop: "40px" }}>
            <h1>Make a Payment</h1>
            <input type="number" placeholder="Enter amount in price" value={price} onChange={(e) => { setPrice(price => e.target.value) }} /> <br />
            {Object.keys(priceErr).map((key) => {
                return <div style={{ color: "red" }}>{priceErr[key]}</div>
            })}<br />
          <p>Click two time on button to add price with rewards point in database and below listed table</p>
            <Button variant="success" onClick={checkPrice} type="button">
                Calculate Reward Points of Price
            </Button>
            <h4>All Transaction Fetch from Database</h4>
            <DynamicDataRewardsList Rewards={cusDetails} TotalRewards={totalRewards} />
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
