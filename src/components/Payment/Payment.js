
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise= loadStripe(process.env.REACT_APP_STRIPE_PK)
    const booking =useLoaderData()
    console.log('book data',booking)
    console.log('stripePromise',stripePromise)
    return (
        <div>
          
            <h1 className='mt-24 text-3xl tex-primary'>Payment</h1>
            <h3 className='text-2xl'>Payment for{booking.product_name
}</h3>
            {/* <h3 className='text-xl'>Please pay <strong>${order.price}</strong> for your appointment on {appointmentDate} at {slot}</h3> */}
            <div classname='w-96'>
<Elements stripe={stripePromise}>
    <CheckoutForm
    booking={booking}
    />

</Elements>

</div>
        </div>
    );
};

export default Payment;