import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { RiDashboardFill, RiShoppingBagFill, RiCoupon2Fill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { FaChartBar, FaChartPie } from 'react-icons/fa';
import Dashboard from './DashBoard';


const Admin: React.FC = () => {
  const [checkDashBoard, setCheck] = useState(true);
  const [prop, setProperties] = useState(false);
  const [cust, setCustomers] = useState(false);
  const [tran, setTransaction] = useState(false);
 prop;cust;tran;

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  const handleProperties = () => {
    setCheck(false);
    setProperties(true);
    setCustomers(false);
    setTransaction(false);
  };

  return (
    <div style={{ background: '#64B5F6', width: '100%', height: '1500px' }}>
      {!sidebarOpen && (
        <button className="toggle-btn" onClick={toggleSidebar} style={{ borderRadius: '20px' }}>
          Admin
        </button>
      )}

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <h4 style={{ marginBlock: '20px', paddingLeft: '40px', color: 'white' }}>Dashboard</h4>
        <Link to="/dashboard" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={RiDashboardFill} style={{ marginRight: '10px' }} />
          Dashboard
        </Link>
        <Link to="/properties" style={{ marginBlock: '20px', paddingLeft: '20px' }} onClick={handleProperties}>
          <Icon as={RiShoppingBagFill} style={{ marginRight: '10px' }} />
          Properties
        </Link>
        <Link to="/customers" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={IoIosPeople} style={{ marginRight: '10px' }} />
          Customers
        </Link>
        <Link to="/transaction" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={AiFillFileText} style={{ marginRight: '10px' }} />
          Transactions
        </Link>
        <h4 style={{ marginBlock: '20px', paddingLeft: '40px', marginTop: '20px', color: 'white' }}>Charts</h4>
        <Link to="/bar" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={FaChartBar} style={{ marginRight: '10px' }} />
          Bar
        </Link>
        <Link to="/pie" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={FaChartPie} style={{ marginRight: '10px' }} />
          Pie
        </Link>
        <h4 style={{ marginBlock: '20px', paddingLeft: '40px', color: 'white' }}>Coupon</h4>
        <Link to="/coupon" style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          <Icon as={RiCoupon2Fill} style={{ marginRight: '10px' }} />
          Coupon
        </Link>
        <button onClick={handleLogout} style={{ marginBlock: '20px', paddingLeft: '20px' }}>
          Logout
        </button>
      </div>
      {checkDashBoard && <Dashboard />}
      {/* {prop && <Properties />} */}
      {/* {cust && <Customers />} */}
      {/* {tran && <Transactions />} */}
    </div>
  );
};

export default Admin;
