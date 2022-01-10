import React from "react";
import StripeCheckout from "react-stripe-checkout";

const  StripeCheckoutButton = ({ price }) => {
    const  priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KGMuVDSSl4wyk9ueo0fIDAOjEuBqythLtuzY907dmtxf8oXMrBDVym41BuwVL7T3Fnt22WK9DNWc8E8GlLeMk4Y00l9qyEJ98';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="http://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;