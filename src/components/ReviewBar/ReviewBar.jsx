import React from "react";
import { Link } from 'react-router-dom';
import "./ReviewBar.css";
import { FaStar } from 'react-icons/fa';

function ReviewBar() {
    return (
        <div className="reviewbar">
            <FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><p>Voted trustworthy and helpful</p>
        </div>
    )
};

export default ReviewBar;