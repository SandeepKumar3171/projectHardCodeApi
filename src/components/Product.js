import React from 'react'

const Product = ({ name, price }) => {

    const addHandler=()=>{
        alert("Add data in cart")
        console.log("name:",name,"\n","price:",price)

    }
    const removeHandler=()=>{
        alert("Remove data from cart")
        console.log("Remove data from cart","\n","name:",name,"\n","price:",price)

    }
    return (

        <div className='flex flex-col bg-slate-500 md:justify-center p-5 justify-evenly md:ml-5 md:mr-5 text-white'>
            <p className='font-semibold'>Name: {name}</p>
            <p className='font-semibold '>Price: <span className='text-green-400'>Rs. {price}</span></p>
            <div className='flex flex-col gap-2 items-center w-full'>
                <button onClick={addHandler} className='border bg-blue-700 p-1 rounded-lg w-full'>Add to the cart</button>
                <button onClick={removeHandler} className='border bg-red-700 p-1 rounded-lg w-full'>Remove from cart</button>
            </div>
        </div>
    )
}

export default Product
