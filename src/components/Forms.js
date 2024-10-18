import React, { useState } from 'react';

export default function Forms() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "", 
        address: "",
        city: "",
        state: "",
        zip: "",
        comments: true,
        candidates: false,
        offers: false,
        notifications: "none"
    });

    function changeHandler(e) {
        const { name, value, checked, type } = e.target;
        const updatedData = {
            ...formData,
            [name]: type === "checkbox" ? checked : value
        };
        setFormData(updatedData);
        console.log(updatedData); // Log updated data
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(formData); // Handle form data here
    };

    return (
        <form onSubmit={handleSubmit} className='shadow-custom w-5/6 max-w-[1080px] mx-auto flex flex-col items-start space-y-2 p-9 rounded-md my-6'>
            <div className='w-full'><div className='text-center uppercase font-bold text-2xl text-blue-700'>Form</div></div>
            <label className='font-bold ' htmlFor='firstName'>First name</label>
            <input value={formData.firstName} onChange={changeHandler} className='w-[90%] p-2 rounded-md border border-blue-300' type='text' name='firstName' placeholder='Anand' />
            <label className='font-bold ' htmlFor='lastName'>Last name</label>
            <input className='w-[90%] p-2 rounded-md border border-blue-300' value={formData.lastName} onChange={changeHandler} type='text' name='lastName' placeholder='Anil' />
            <label className='font-bold ' htmlFor='email'>Email</label>
            <input className='w-[90%] p-2 rounded-md border border-blue-300' value={formData.email} onChange={changeHandler} type='email' name='email' placeholder='anand@duck.com' />

            <label className='font-bold ' htmlFor="country">Country</label>
            <select className='w-[90%] p-2 rounded-md border border-blue-300' value={formData.country} name="country" id="country" onChange={changeHandler}>
                <option value="">Select a country</option> {/* Add a default option */}
                <option value="ind">India</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
            </select>

            <label className='font-bold ' htmlFor='streetAddress'>Street Address</label>
            <input className='w-[90%] p-2 rounded-md border border-blue-300' value={formData.address} onChange={changeHandler} type='text' name='address' placeholder='123, ABC Street' />
            <label className='font-bold ' htmlFor='city'>City</label>
            <input className='w-[90%] p-2 rounded-md border border-blue-300' value={formData.city} onChange={changeHandler} type='text' name='city' placeholder='Asanol' />
            <label className='font-bold ' htmlFor='state'>State / Province</label>
            <input className='w-[90%] p-2 rounded-md border border-blue-300' value={formData.state} onChange={changeHandler} type='text' name='state' placeholder='West Bengal' />
            <label className='font-bold ' htmlFor='zip'>ZIP / Postal code</label>
            <input className='w-[90%] p-2 rounded-md border border-blue-300' value={formData.zip} onChange={changeHandler} type='text' name='zip' placeholder='700156' />

            <div>
            <div className='font-bold mt-5'>By Email</div>
            </div>
            <div className='flex space-x-4 items-baseline p-2'>
                <input name='comments' onChange={changeHandler} id='comments' type='checkbox' checked={formData.comments} />
                <div className='flex flex-col'>
                    <label className='font-bold ' htmlFor='comments'>Comments</label>
                    <p className='text-sm'>Get notified when someone posts a comment on a posting.</p>
                </div>
            </div>
            <div className='flex space-x-4 items-baseline p-2'>
                <input onChange={changeHandler} type='checkbox' id='candidates' name='candidates' checked={formData.candidates} />
                <div className='flex flex-col'>
                    <label className='font-bold ' htmlFor='candidates'>Candidates</label>
                    <p className='text-sm'>Get notified when a candidate applies for a job.</p>
                </div>
            </div>
            <div className='flex space-x-4 items-baseline p-2'>
                <input onChange={changeHandler} type='checkbox' id='offers' name='offers' checked={formData.offers} />
                <div className='flex flex-col'>
                    <label className='font-bold ' htmlFor='offers'>Offers</label>
                    <p className='text-sm'>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
            </div>

            <div className='font-bold'>Push Notification</div>
            <p className='text-sm'>These are delivered via SMS to your mobile phone.</p>

            <div className='flex space-x-3'>
                <input onChange={changeHandler} type='radio' id='all' value="all" checked={formData.notifications === 'all'} name='notifications' />
                <label htmlFor='all'>Everything</label>
            </div>
            <div className='flex space-x-3'>
                <input onChange={changeHandler} type="radio" id='email' value="emails" checked={formData.notifications === 'emails'} name='notifications' />
                <label htmlFor='email'>Same as email</label>
            </div>
            <div className='flex space-x-3'>
                <input onChange={changeHandler} type="radio" value="none" checked={formData.notifications === 'none'} id="none" name='notifications' />
                <label htmlFor='none'>No push notifications</label>
            </div>

            <div className='pb-16'>
            <button className='text-white font-bold mt-5 py-2 px-5 bg-blue-700 cursor-pointer rounded-md ' type='submit'>Save</button>
            </div>
        </form>
    )
}