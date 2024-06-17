import React from 'react';
import TransactionandRevenue from './Transactionsandrevenuegraph';


interface TransactionsProps {
  // Define any props you might pass to this component
}

const Transactions: React.FC<TransactionsProps> = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <h2>Transaction and Revenue</h2>
      <TransactionandRevenue
        data_1={[300, 144, 433, 655, 237, 755, 190]}
        data_2={[400, 544, 433, 555, 137, 755, 490]}
        title_1="Revenue"
        title_2="Transaction"
        bgColor_1="rgb(0,155,255)"
        bgColor_2="rgb(53,162,235,0.8)"
      />
    </div>
  );
};

export default Transactions;
