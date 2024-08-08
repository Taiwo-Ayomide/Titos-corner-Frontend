import React from 'react';

const CartItems = ({ item, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">#{item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => onDecreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200">-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => onIncreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200">+</button>
        <button onClick={() => onRemoveItem(item.id)} className="ml-4 px-4 py-2 bg-red-500 text-white">Remove</button>
      </div>
    </div>
  );
};

export default CartItems;
