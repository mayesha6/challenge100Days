import React, { useState } from 'react'

export const Form = (props) => {
    const [user, setUser] = useState({
        fName:"",
        lName:"",
        date:"",
        month:"",
        year:"",
        gender:"",
        email:"",
        password:"",
    })
    const {fName, lName, date, month, year, gender, email, password} = user;
    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(user)
        // eslint-disable-next-line react/prop-types
        props.onUserData(user);
    }
    
  return (
    <form className='p-5' onSubmit={handleSubmit}>
        <div className='flex gap-2'>
            <input type="text" name="fName" placeholder='First name'  className='border rounded-lg p-3 text-black outline-none w-1/2' value={fName} onChange={handleChange}/>
            <input type="text" name="lName" placeholder='Last name'  className='border rounded-lg p-3 text-black outline-none w-1/2' value={lName} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="dateOfBirth" className='text-black font-semibold pt-2 pb-1 inline-block'>Date of birth:</label>
            <br />
            <div className="flex gap-2">
                <input type="text" name="date" id="dateOfBirth" placeholder='DD' className='border rounded-lg p-3 text-black outline-none w-1/3' value={date} onChange={handleChange}/>
                <input type="text" name="month" placeholder='MM' className='border rounded-lg p-3 text-black outline-none w-1/3' value={month} onChange={handleChange}/>
                <input type="text" name="year" placeholder='YY' className='border rounded-lg p-3 text-black outline-none w-1/3' value={year} onChange={handleChange}/>
            </div>
        </div>
        <div>
            <label className='text-black font-semibold pt-2 pb-1 inline-block'>Gender:</label>
            <br />
            <div className="flex gap-2">
                <div className="p-3 border rounded-lg w-1/3 flex justify-between">
                    <label htmlFor="female" className='text-black capitalize'>female</label>
                    <input type="radio" name="gender" id="female" value="female" checked = {gender === "female"} onChange={handleChange}/>
                </div>
                <div className="p-3 border rounded-lg w-1/3 flex justify-between">
                    <label htmlFor="male" className='text-black capitalize'>male</label>
                    <input type="radio" name="gender" id="male" value="male" checked = {gender === "male"} onChange={handleChange}/>
                </div>
                <div className="p-3 border rounded-lg w-1/3 flex justify-between">
                    <label htmlFor="custom" className='text-black capitalize'>custom</label>
                    <input type="radio" name="gender" id="custom" value="custom" checked = {gender === "custom"} onChange={handleChange}/>
                </div>          
            </div>
        </div>
        <div className='pt-3'>
            <input type="email" name="email" placeholder='Email address'  className='border rounded-lg p-3 text-black outline-none w-full' value={email} onChange={handleChange}/>
        </div>
        <div className='pt-3'>
            <input type="password" name="password" placeholder='New password' className='border rounded-lg p-3 text-black outline-none w-full' value={password} onChange={handleChange}/>
        </div>
        <div className='flex justify-center pt-5'>
            <input type="submit" value="Register" className='inline-block bg-blue-800 rounded-lg px-6 py-2 font-semibold cursor-pointer'/>
        </div>
    </form>
  )
}
