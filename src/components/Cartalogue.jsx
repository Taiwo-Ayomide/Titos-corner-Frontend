import React from 'react';
import CartItems from './CartItems';
import CartSummary from './CartSummary';

const Cartalogue = ({ items, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div className="pt-32">
      <h2 className="text-2xl font-bold mb-4 ms-5 font">TITO'S CORNER CART</h2>
      <div className='ms-4 me-4'>
        {items.map(item => (
          <CartItems
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
          />
        ))}
      </div>
      <CartSummary items={items} />
    </div>
  );
};

export default Cartalogue;
