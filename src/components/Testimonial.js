import React, { useState } from "react";
import Card from "./Card";

import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

const Testimonial=(props)=>{
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function leftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }

    }
    function rightHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }
    function surpriseHandler(){
        let random=Math.floor(Math.random()*reviews.length);
        setIndex(random);

    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 o-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review={reviews[index]}></Card>
           
            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
                <button className="cursor-pointer hover:text-violet-500" onClick={leftHandler} >
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button className="cursor-pointer hover:text-violet-500" onClick={rightHandler}>
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>
            <div className="mt-5" >
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded font-bold text-white text-lg mb-4" onClick={surpriseHandler}>Surprise me</button>
            </div>
        </div>
    )
}
export default Testimonial;