import { CardElement, useElements, useStripe,} from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({booking}) => {
  // const [loading, setLoading] =useState(true)
  const {price,email,UserName, _id}= booking

    const [clientSecret, setClientSecret] = useState("");

    const [cardError, setCardError]=useState('')
    const [transactionId , setTransactionId]=useState('')
    const [success , setSuccess]=useState('')
    const [processing , setProcessing]=useState(false)

    const stripe =useStripe()
    const elements =useElements()

console.log('clientsecret',clientSecret)

// const price =parseInt(price)

    useEffect(() => {
      
        fetch('http://localhost:5000/create-payment-intent', {
          method: "POST",
          headers: {
            "Content-Type":"application/json" 
        },
        //   authorization:`bearer ${localStorage.getItem('accessToken')}`,
          body: JSON.stringify({ price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
          
          // setLoading(false)
      }, [price]);

const handleSubmit=async (event)=>{
event.preventDefault()

if(!stripe || !elements){
return
}

const card = elements.getElement(CardElement);

if (card == null) {
  return;
}

const {error,paymentMethod}= await stripe.createPaymentMethod({
    type:'card',
    card
})
if(error){
    console.log(error)
    setCardError(error.message)
}
else{
    setCardError('')
}

setSuccess('')
setProcessing(true)

  const {paymentIntent, error:confirmError}= await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name:UserName,
        email:email
      },
    },
  })
  if(confirmError){
    setCardError(confirmError.message)
    return;
  }
  console.log('paymentIntent',paymentIntent)

  if(paymentIntent.status === 'succeeded'){
    console.log('card info', card)
    const payment={
        price,
      transactionId: paymentIntent.id,
      email,
      bookingId:_id
    }
    fetch('http://localhost:5000/payments',{
      method:'POST',
      headers:{
        'content-type':'application/json',

      },
      body:JSON.stringify(payment)
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        setSuccess('Payment completed')
        toast.success('Congrats! Your Payment completed')
    setTransactionId(paymentIntent.id)
      }
    })
    
  }
  setProcessing(false)
        }

    
    return (
        <>
        <form onSubmit={handleSubmit} className='p-4 m-5 bg-sky-200 rounded-xl'>
        <CardElement
          options={{
            style: {
              padding: '10px 20px',
              base: {
                fontSize: '16px',
                color: '#424770',
                backgroundColor:' white',
                
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
       
        <button 
        className='btn btn-sm mt-5 btn-primary' 
        type="submit" 
        disabled={!stripe  || !clientSecret || processing}>
          Pay
        </button>
      </form>
        <p className='text-red-500 font-bold'>{cardError}</p>
        {
          success && <div>
            <p className='text-green-500'>{success}</p>
            <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
            </div>
        }
        </>
    );
};

export default CheckoutForm;