import React, { useState } from 'react';
import Cartalogue from '../components/Cartalogue';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, quantity: 2, image: 'https://via.placeholder.com/150' },
    // Add more items as needed
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
  };

  return (
    <div className="Cart">
      <Cartalogue
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
    </div>
  );
};

export default Cart;
