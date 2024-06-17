import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import 'react-circular-progressbar/dist/styles.css';
import { CircularProgress } from '@chakra-ui/react';

interface PropertyData {
  [key: string]: any[];
}

const AdminSideBar: React.FC = () => {
  const location = useLocation();
  const [dataCount, setDataCount] = useState<number>(0);
  const [userCount, setUserCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  dataCount;location;setDataCount;
  useEffect(() => {
    fetchData();
    fetchUserCount();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: PropertyData[] = await response.json();
      const categories = Object.keys(data[0]);
      let total = 0;
      categories.forEach(category => {
        total += data[0][category].length;
      });
      setTotalCount(total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await fetch('https://koshi-exception-023-1.onrender.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUserCount(data.length);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <aside className="asidebar">
      <div className="count-box" style={{ display: "flex", gap: "20px", fontWeight: "bold", fontSize: "larger", padding: "50px", marginLeft: "330px" }}>
        <div className="count-item" style={{ height: "200px", width: "200px", padding: "20px", borderRadius: "10px", transition: "transform 0.3s", backgroundColor: "#1A237E", color: "white" }}>
          <h4>Total Destinations</h4>
          <h4 style={{ marginTop: "50px" }}>{totalCount} <CircularProgress value={80} /></h4>
        </div>
        <div className="count-item" style={{ height: "200px", width: "200px", padding: "20px", borderRadius: "10px", transition: "transform 0.3s", backgroundColor: "#1A237E", color: "white" }}>
          <h4>Total Users</h4>
          <h4 style={{ marginTop: "70px" }}>{userCount} <CircularProgress value={60} /></h4>
        </div>
        <div className="count-item" style={{ height: "200px", width: "200px", padding: "20px", borderRadius: "10px", transition: "transform 0.3s", backgroundColor: "#1A237E", color: "white" }}>
          <h4>Revenue</h4>
          <h4 style={{ marginTop: "70px" }}>$34000 <CircularProgress value={80} /></h4>
        </div>
        <div className="count-item" style={{ height: "200px", width: "200px", padding: "20px", borderRadius: "10px", transition: "transform 0.3s", backgroundColor: "#1A237E", color: "white" }}>
          <h4>Transactions</h4>
          <h4 style={{ marginTop: "70px" }}>$2500 <CircularProgress value={40} /></h4>
        </div>
      </div>
    </aside>
  );
};

export default AdminSideBar;
