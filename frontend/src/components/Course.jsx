import React from 'react'
import Card from './Card'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
    <div className='mt-28 item-center jutify-center text-center'>
        <h1 className='text-2xl md:text-4xl '>
            We're delighted to have you{" "} 
            <span className='text-rose-700'> Here! :) </span>
        </h1>
        <p className='mt-12'>
            blah blah blah blah
        </p>
        <Link to="/">
        <button className='mt-6 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 duration-300'>
            Back
        </button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=>(
                <Card key={item.id} item={item}/>
            ))
        }
    </div>
   </div>
   </>
  )
}

export default Course
