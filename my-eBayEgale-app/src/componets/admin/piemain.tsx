import React from 'react';
import PieChart1 from './pie';

const Piee: React.FC = () => {
    return (
        <div style={{ width: "300px", height: "400px", marginLeft: "300px" }}>
            <PieChart1 labels={["processing", "Register", "Final"]} data_1={[12, 9, 13]} backgroundColor_1={["green", "lightgreen", "yellowgreen"]} />
            <h2 style={{ marginLeft: "90px" }}>Order Fulfilment Ratio</h2>
        </div>
    );
};

export default Piee;
