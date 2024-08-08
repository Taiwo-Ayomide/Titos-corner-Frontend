import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PaymentVerify = () => {
    const { reference } = useParams();
    const [paymentStatus, setPaymentStatus] = useState(null);

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/checkout/verifyPaystackPayment/${reference}`);
                setPaymentStatus(response.data);
            } catch (error) {
                console.error('Error verifying payment:', error);
            }
        };

        verifyPayment();
    }, [reference]);

    return (
        <div>
            <h2>Payment Verification</h2>
            {paymentStatus ? (
                <div>
                    <p>Status: {paymentStatus.status}</p>
                    <p>Reference: {paymentStatus.reference}</p>
                </div>
            ) : (
                <p>Verifying payment...</p>
            )}
        </div>
    );
};

export default PaymentVerify;
