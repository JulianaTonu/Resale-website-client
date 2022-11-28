
import { useEffect, useState } from 'react';
const UseBuyer = email =>{

    const [isBuyer, setIsBuyer] = useState(false)
    
    useEffect(()=>{
        if(email){
            fetch(`https://resale-website-serverside.vercel.app/users/buyers/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setIsBuyer(data.isBuyer)
            })
        }

    },[email])
    return [isBuyer]
}

export default UseBuyer