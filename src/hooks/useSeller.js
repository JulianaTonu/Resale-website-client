
import { useEffect, useState } from 'react';
const useSeller =email=>{

    const [isSeller, setIsSeller] = useState(false)
    
    useEffect(()=>{
        if(email){
            fetch(`https://resale-website-serverside.vercel.app/users/sellers/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log('useSeller', data)
                setIsSeller(data.isSeller)
            })
        }

    },[email])
    return [isSeller]
}

export default useSeller