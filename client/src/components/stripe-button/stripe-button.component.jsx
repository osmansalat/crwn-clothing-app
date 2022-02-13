import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const  StripeCheckoutButton = ({ price }) => {
    const  priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KGMuVDSSl4wyk9ueo0fIDAOjEuBqythLtuzY907dmtxf8oXMrBDVym41BuwVL7T3Fnt22WK9DNWc8E8GlLeMk4Y00l9qyEJ98';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment successful.')
            })
            .catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert(
                    'There was an issue with your payment. Please make sure you use the provided credit cart.'
                );
            })
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;