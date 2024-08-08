import React, { createContext, useState, useContext } from 'react';

const PaymentMenuContext = createContext();

export const usePaymentMenu = () => {
    return useContext(PaymentMenuContext);
};

export const PaymentMenuProvider = ({ children }) => {
    const [isPaymentMenuVisible, setPaymentMenuVisible] = useState(false);

    const togglePaymentMenu = () => {
        setPaymentMenuVisible((prev) => !prev);
    };

    return (
        <PaymentMenuContext.Provider value={{ isPaymentMenuVisible, togglePaymentMenu }}>
            {children}
        </PaymentMenuContext.Provider>
    );
};
