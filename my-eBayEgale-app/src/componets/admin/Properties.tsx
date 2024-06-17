import React from 'react';
import Property from './Property';

const Properties: React.FC = () => {
  console.log("Properties");
  return (
    <div style={{ width: "100%", height: "510px" }}>
      <Property />
    </div>
  );
};

export default Properties;
