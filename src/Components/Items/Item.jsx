import React from 'react';
import './Item.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Item = (props) => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleNavigation = (path) => {
    navigate(path); // Navigate programmatically
  };

  return (
    <div className="item">
      <a
        href={`/product/${props.id}`} // Optional: keeps URL for accessibility
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          handleNavigation(`/product/${props.id}`); // Navigate programmatically
        }}
      >
        <img src={props.image} alt={props.name} />
      </a>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${props.new_price}</div>
        <div className="item-prices-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item