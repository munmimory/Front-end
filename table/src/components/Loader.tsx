import React from 'react';
import './Loader.css';  // Đảm bảo rằng bạn đã tạo đúng file Loader.css

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
