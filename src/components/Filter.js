import React from 'react'
import data from '../data.js'
export default function Filter(props) {
  const {setcategory}=props;
  const {category}=props;
  const ClickHandler=(title)=>{
    setcategory(title);
    // console.log(Object.keys(courses));
   
  }
  return (
    <div>
        <div className='w-[90%] m-auto space-x-4 flex justify-center flex-wrap'>{data.map((fil)=>{
             return <button onClick={()=>{ClickHandler(fil.title)}} className={`w-fit p-2 bg-black text-white m-3 rounded-md  font-medium  ${category===fil.title?"border-2":" border-transparent"} `} key={fil.id} >{fil.title}</button>
        })}</div>
      
    </div>
  )
}
