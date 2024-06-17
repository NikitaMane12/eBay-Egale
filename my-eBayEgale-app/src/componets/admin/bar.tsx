import React from 'react';
import { HorizontalGraph } from './Horizontal';
import TransactionandRevenue from './Transactionsandrevenuegraph';


export const ChartBar: React.FC = () => {
    console.log("hi");
    
    return (
        <div style={{ backgroundColor: "white" }}>
            <h2>Revenue and Transactions</h2>
            <TransactionandRevenue
                data_1={[300, 144, 433, 655, 237, 755, 190]} 
                data_2={[400, 544, 433, 555, 137, 755, 490]}
                title_1="Revenue"
                title_2="Transaction"
                bgColor_1="rgb(0,155,255)"
                bgColor_2="rgb(53,162,235,0.8)"
            />
            <br />
            <br />
            <h2>Booking throughout the Year</h2>
            <HorizontalGraph 
                data_1={[3000, 6000, 8000, 2000, 10000, 4367, 19000, 9864, 8734, 29547, 37689, 4534, 10000]}
                title_1="Revenue"
                bgColor_1="rgb(0,155,255)"
                horizontal={true} 
                // data_2={[]} 
                // title_2={""} 
                // bgColor_2={""}
            />
        </div>
    );
};
