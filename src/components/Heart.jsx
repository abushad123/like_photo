import React, {useState} from "react";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

 const Heart = (props) => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const handleLike = () => { 
            if(!like){
                setLike(true);
                setCount(count => count + 1)
            }else{
                setLike(false); 
                setCount(count => count - 1)
            }
    }
    return (
        <>
         <div className='basis-1/2 font-bold'>Likes {count == 0 ? "" : count}</div>
           <div className='basis-1/2 flex justify-center items-center'><span>{ like ? (<AiFillHeart   onClick={handleLike} color='red' />) : (<AiOutlineHeart  onClick={handleLike} />) }</span></div>
        </>
    )
}

export default Heart
