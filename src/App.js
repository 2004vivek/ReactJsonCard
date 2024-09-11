import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cards from './components/Cards';
import Spinner from './components/Spinner'
import data from './data';

function App() {
  const [courses,setcourses]=useState([]);
  const [loading,setloading]=useState(true);
  const [category,setcategory]=useState(data[0].title);

  
  useEffect(()=>{
    const fetchdata=async()=>{
      setloading(true)
      try{
        const api=await fetch("https://codehelp-apis.vercel.app/api/get-top-courses");
        const result=await api.json();
        setcourses(result.data);
        console.log(result);
        setloading(false); 
      }
      catch(e){
        toast.error("Something went wrong!")
      }
    }
    fetchdata()

  },[]);
  return (
    <>
    <ToastContainer/>
    <div className='min-h-[100vh] flex flex-col bg-gray-400'>
      <div>
      <Navbar/>
      </div>
      <div>
      <Filter courses={courses} category={category} setcategory={setcategory}/>
      </div>
      <div>
        {loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)}
      </div>
    </div>
    </>
    
  );
}

export default App;
