import React from 'react'
import Card from './Card'
export default function Cards(props) {
    let {courses}=props; 
    let {category}=props;
    console.log(category);
    let allcourse=[]
    function getcourses(){
       if(category==="All"){
        Object.values(courses).forEach((course)=>{
            // console.log(Object.values(courses));
            course.forEach((coursedata)=>{
                allcourse.push(coursedata);
            })
        })
       
   
    }
    else{
        //specific category ka data array pass karunga
        if (Array.isArray(courses[category])) {
            console.log(courses[category]);
            allcourse= courses[category];
        }
    }
    return allcourse;
       }
       
   const coursedata=getcourses();
  return (
    <div className='w-[90%] m-auto flex justify-center items-center flex-wrap'>
        {
            coursedata.length>0?(getcourses().map((course)=>{
                return <Card key={course.id} course={course}/>
            })):(<p>No Courses Found</p>)
             
        }
    </div>
  )
}
