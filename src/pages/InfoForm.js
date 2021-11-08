import React from 'react'
import sendButton from '../img/sendImg.jpg'
import '../css/InfoForm.css'
const InfoForm = () => {
    return (
        <div className="p-5 formcss">
            <form >
                <div className="d-flex">
                    <div className="p-3 col-4">
                        <label className="one">Your LinkedIn</label>
                        <br/>
                        <input className="w-100"></input>
                    </div>
                    <div className="p-3 col-4">
                        <label className="two">Referee LinkedIn</label>
                        <br/>
                        <input className="w-100"></input>
                    </div>
                    <div className="p-3 col-4">
                        <label className="three">Hiring Manager Name</label>
                        <br/>
                        <input className="w-100"></input>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-3 col-4">
                        <label className="four">Your Email</label>
                        <br/>
                        <input className="w-100"></input>
                    </div>
                    <div className="p-3 col-4">
                        <label className="five">Referee Email</label>
                        <br/>
                        <input className="w-100"></input>
                    </div>
                    <div className="p-3 col-4">
                        <label className="six">Hiring Manager Email </label>
                        <br/>
                        <input className="w-100"></input>
                    </div>
                </div>
                <div className="p-3 col-12"> 
                    <label className="seven">Note to Hiring Manager</label>
                    <br/>
                    <textarea className="text w-100"></textarea>
                </div>
                <br/>
                <div className="d-flex">
                    <div className="p-3 col-5">
                        <label className="eight">Company URL</label>
                        <br/>
                        <input className="w-100"></input>
                    </div>
                    <div className="p-3 col-5 ">
                        <label className="nine">Ideal Role </label>
                        <br/>
                        <input className="w-100" placeholder="(e.g Software Engineer)"></input>
                    </div>
                    <div className="mt-5 col-2 d-flex justify-content-end">
                        <img  src={sendButton} className="img-css" alt="img"/>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default InfoForm
