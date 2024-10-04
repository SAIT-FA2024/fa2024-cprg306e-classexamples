"use client"

import { useState } from "react";

export default function RegistrationForm(){

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [subscription, setSubscription] = useState("");
    const [message, setMessage] = useState("");

    const handleFullNameChange = (event) => {
        console.dir(event.target.value);
        setFullName(event.target.value);
    }
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleBirthDateChange = (event) => setBirthDate(event.target.value);
    const handleSubscriptionChange = (event) => setSubscription(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);

        let regObject = {
            fName: fullName,
            mail: email,
            bday: birthDate,
            plan: subscription,
            msg: message
        }

        alert(`
            Full Name: ${regObject.fName}
            Email: ${regObject.mail}
            Birth Date: ${regObject.bday}
            Subscription: ${regObject.plan}
            Message: ${regObject.msg}
        `);

        setFullName("");
        setEmail("");
        setBirthDate("");
        setSubscription("");
        setMessage("");

    }

 return (
    <form onSubmit={handleSubmit} className="p-5 bg-orange-100">
        <div className="mb-3">
            <label className="inline-block w-40">Full Name:</label>
            <input
                type="text"
                onChange={handleFullNameChange}
                value={fullName}
                className="px-2 py-0.5 rounded bg-blue-100 focus:bg-green-200 border border-teal-600"
            />
        </div>
        <div className="mb-3">
            <label className="inline-block w-40">Email:</label>
            <input type="email" onChange={handleEmailChange} value={email} className="px-2 py-0.5 rounded bg-blue-100 focus:bg-green-200 border border-teal-600"/>
        </div>
        <div className="mb-3">
            <label className="inline-block w-40">Birth Date:</label>
            <input type="date" onChange={handleBirthDateChange} value={birthDate} className="px-2 py-0.5 rounded bg-blue-100 focus:bg-green-200 border border-teal-600"/>
        </div>
        <div className="mb-3">
            <label className="inline-block w-40">Subscription Type:</label>
            <select onChange={handleSubscriptionChange} value={subscription} className="px-2 py-0.5 rounded bg-blue-100 focus:bg-green-200 border border-teal-600">
                <option selected disabled value="">-- Please choose a plan --</option>
                <option value="free">Free Plan</option>
                <option value="basic">Basic Plan</option>
                <option value="premium">Premium Plan</option>
            </select>
        </div>
        <div className="mb-3">
            <label className="inline-block w-40 align-top">Message:</label>
            <textarea onChange={handleMessageChange} value={message} className="px-2 py-0.5 rounded bg-blue-100 focus:bg-green-200 border border-teal-600"></textarea>
        </div>

        <div className="mb-3">
            <button className="px-3 py-2 rounded text-white bg-green-600 hover:bg-green-500 active:bg-green-400" >Submit Registration</button>
        </div>
    </form>
 );   
}