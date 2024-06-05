import React from 'react'



function Contact() {
    
  return (
    <>
   
     <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
  <div className="modal-box">
  
    <h3 className="font-bold text-lg">Contact Us</h3>
    <br/>
    <br/>
    <label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" className="grow" placeholder="Daisy" />
</label>
<br/>
<br/>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
<br/>
<br/>
<label className="input input-bordered flex items-center gap-2">
  Message
  <br/>
  <input type="text" className="grow" placeholder="Type here" />
</label>
<div className="flex justify-around mt-6">
    <button className="bg-rose-500 text-white rounded-md px-3 py-1 hover:bg-rose-700 duration-200">
        Submit
    </button>
            
</div>
<br/>
<br/>
</div>
</div>
</div>

    </>
  )
}

export default Contact
