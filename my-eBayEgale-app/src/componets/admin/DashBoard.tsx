import React, { useState } from 'react';
import AdminSideBar from './adminSideBar';
import {  Progress } from '@chakra-ui/react';
import './admin.css';

// import { HorizontalGraph } from './Horizontal';
// import { BiAddToQueue, BiMaleFemale } from 'react-icons/bi';
import CountryRatio from './BarChart';
import TableHOC from './Table';
import TransactionandRevenue from './Transactionsandrevenuegraph';
import { HorizontalGraph } from './Horizontal';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {!sidebarOpen && (
        <button className="toggle-btn" onClick={toggleSidebar} style={{ borderRadius: '20px' }}>
          Admin
        </button>
      )}
      <div className="adminContainer">
        <AdminSideBar />
        <section className="TransactionsAndRevenue">
          <div className="RevenueChart" style={{ backgroundColor: 'white', width: '700px' }}>
            <h2>Revenue and Transactions</h2>
            <TransactionandRevenue
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[400, 544, 433, 555, 137, 755, 490]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,155,255)"
              bgColor_2="rgb(53,162,235,0.8)"
            />
            <h2>Booking throughout the Year</h2>
            <HorizontalGraph
              data_1={[3000, 6000, 8000, 2000, 10000, 4367, 19000, 9864, 8734, 29547, 37689, 4534, 10000]}
              title_1="Revenue"
              bgColor_1="rgb(0,155,255)"
              horizontal={true}
              // data_2={[]}
              // title_2=""
              // bgColor_2=""
            />
          </div>
          <div className="Shares" style={{ marginLeft: '40px', marginTop: '40px' }}>
            <h2><b>Shares</b></h2>
            <p>Make My Trip <span><Progress value={60} size='xs' colorScheme='pink' /></span><span> 60%</span></p>
            <p>Afritripmoracco <span><Progress value={40} size='xs' colorScheme='blue' /></span> 40%</p>
            <p>Finology <span><Progress value={65} size='xs' colorScheme='blue' /></span> 65%</p>
          </div>
        </section>
        <section className="CountryRatio" style={{ display: 'flex', marginLeft: '320px' }}>
          <div className="countryChart">
            <h2>Country Ratio</h2>
            <CountryRatio
              labels={['India', 'America', 'United Kingdom', 'Other Countries']}
              data_1={[70, 40, 35, 30]}
              backgroundColor_1={['yellow', 'blue', 'green', 'orange']}
            />
          </div>
          <div>
            <h2>Visitors Table</h2>
            <TableHOC />
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
