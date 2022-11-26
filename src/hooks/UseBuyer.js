
import { useEffect, useState } from 'react';
const UseBuyer = email =>{

    const [isBuyer, setIsBuyer] = useState(false)
    
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/buyers/${email}`)
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