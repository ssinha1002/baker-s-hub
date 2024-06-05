import React from 'react'

function Card({item}) {
    console.log(item)
  return (
   <>
   <div className='mt-4 my-3 p-3'>
   <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://i.pinimg.com/474x/a6/c3/de/a6c3deb4bed9591b584ed177d25a7352.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer px-2 py-1 rounded full boader-[2px]  hover:bg-rose-700 duration-200 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Card
