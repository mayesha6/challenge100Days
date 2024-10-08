import React, { useState } from 'react'
import { Form } from '../Form/Form'
import { UserInformation } from '../UserInformation/UserInformation'

const Register = () => {
    const [userData, setUserData] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleUserData = (data) =>{
        console.log(data)
        setUserData(data)
        setIsFormSubmitted(true)
    }
  return (
    <>
    <section className='register-section'>
        <div className="container mx-auto">
            <div className="register pt-10">
                <h2 className='capitalize text-center text-blue-800 font-bold text-7xl'>mayesha</h2>
                <div className="form-content text-white max-w-[500px] mx-auto py-10 shadow-xl rounded-lg">
                    <div className="p-3 border-b-[1px] border-b-slate-200">
                        <h3 className='text-black font-bold text-2xl text-center'>Create a new account</h3>
                        <p className="text-slate-500 text-center py-1">It&apos;s quick and easy</p>
                    </div>
                    <Form onUserData={handleUserData}/>
                </div>
            </div>
        </div>
    </section>   
    {isFormSubmitted && (
        <section className="user-info-section my-10">
            <div className="container mx-auto">
                <div className="user-info-wrap">
                    <UserInformation showUserData={userData}/>
                </div>
            </div>   
        </section>
    )} 
    </>

  )
}

export default Register