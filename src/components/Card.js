import React, { useState } from 'react'
import {FcLike} from 'react-icons/fc';
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
export default function Card(props) {
  const [readmore,setreadmore]=useState(false);
  function ReadHandler() {
    setreadmore(!readmore);
  }
  let {course}=props;
  let description=course.description.substring(0,140);
  // console.log(description);

  const [likedcourses,setliked]=useState([]);
  function ToastHandler() {
    // console.log(course.id);
    if(likedcourses.includes(course.id)){
      //jab phele like pada hua hai 
      setliked(prev=>prev.filter((chosen)=>(chosen!==course.id)))
      toast.warning("Like Removed")
    }
    else{
      if(likedcourses.length===0){
        setliked([course.id])
      }
      else{
        //non-empty phele se
        setliked((prev)=>[...prev,course.id]);
      }
      toast.success("Liked Successfully")
    }
    console.log(likedcourses);
  
  }
  
  return (
    <div className=' w-[400px]  m-2 bg-gray-600 rounded-lg overflow-hidden relative'>
      <div className='relative'>
        <img className='aspect-auto' src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute bottom-3 right-2 flex items-center justify-center'>
        <button onClick={ToastHandler}>
            {likedcourses.includes(course.id)?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>}
        </button>
        </div>
      </div>
      {/* <div className='absolute top-[52%] right-1 '>
        
      </div> */}
      <div className='text-white  p-3'>
        <p className='text-2xl font-medium'>{course.title}</p>
        <p className=''>{readmore?(course.description):description} <span className='text-green-500 font-semibold ' onClick={ReadHandler}>{readmore?`Show Less`:`Read More`}</span></p>
      </div>
    </div>
  )
}
