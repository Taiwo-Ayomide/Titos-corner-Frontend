import React, {useState} from 'react';
import PaymentCheckout from './payment/Payment';

const CartSummary = ({ items }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-4 ms-4 me-4">
      <h3 className="text-xl font-semibold">Summary:</h3>
      <p className="text-lg">Total: #{totalAmount.toFixed(2)}</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white" onClick={() => setShowCheckout(true)}>Proceed to Checkout</button>
      {showCheckout && (
                <PaymentCheckout
                    totalAmount={totalAmount}
                    open={showCheckout}
                    onClose={() => setShowCheckout(false)}
                />
      )}
    </div>
  );
};

export default CartSummary;
