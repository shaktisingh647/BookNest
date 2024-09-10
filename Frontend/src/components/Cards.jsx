import React from 'react'

const Cards = ({item}) => {
  return (
    <>
    <div className='mt-4 my-3 p-3 w-72' >
    <div className="card bg-base-100 w-96 shadow-xl p-6 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline cursor-pointer">${item.price}</div>
      <div className="badge badge-outline cursor-pointer p-3 hover:bg-pink-500 hover:text-white duration-200 ">Available</div>
    </div>
  </div>
</div>
    </div>
    
    
    </>
  )
}

export default Cards

