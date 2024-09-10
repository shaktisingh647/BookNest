import React from 'react'
import { Link } from 'react-router-dom'
import list from "../list.json"
import Cards from './Cards'
const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4    my-3 p-3 '>
       <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'> Discover Your Next Great Read at 
        <span className='text-pink-500'> BookNest :)</span></h1>

        <p className='mt-12'>we bring together an extensive collection of titles to inspire, educate, and entertain readers of all kinds. Whether you're a fan of fiction, non-fiction, self-development, or academic works, you'll find something here to spark your curiosity.</p>
        <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'> Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
           {
            list.map((item)=>(
              <Cards key={item.id}  item={item}/>
            ))
           }


        </div>



    </div>
    
    
    </>
  )
}

export default Course
