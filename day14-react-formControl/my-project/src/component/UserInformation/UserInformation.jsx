import React from 'react'

export const UserInformation = (props) => {
    console.log("props:", props)
    const {fName, lName, date, month, year, gender, email, password}=props.showUserData;
  return (
    <div className="form-content text-white max-w-[500px] mx-auto p-10 shadow-xl rounded-lg">
        <h2 className='capitalize text-center text-blue-800 font-bold text-7xl pb-6'>user</h2>
        <p className='text-black capitalize'> <span className="font-bold text-xl">First Name:</span> {fName}</p>
        <p className='text-black capitalize'> <span className="font-bold text-xl">Last Name:</span> {lName}</p>
        <p className='text-black capitalize'> <span className="font-bold text-xl">Date of Birth:</span> {date}.{month}.{year}</p>
        <p className='text-black capitalize'> <span className="font-bold text-xl">Email:</span> {email}</p>
        <p className='text-black capitalize'> <span className="font-bold text-xl">Password:</span> {password}</p>
    </div>
  )
}
