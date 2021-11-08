import React from 'react'
import './SearchPortion.css'
import Uber from '../img/uber.png'
import Activeloop from '../img/Activeloop.png'
import You from '../img/You.png'
import replicate from '../img/replicate.png'
import ZenMl from '../img/ZenMl.png'
import SearchIcon from "@material-ui/icons/Search";
const SearchPortion = () => {
    return (
        <div>
            <p className="d-flex col-8 info justify-content-end ">Can’t find the company you’re looking for? </p>
            <br></br>
            <div class="col-md-8 mb-4  box">
                <SearchIcon aria-hidden="true"/>
                <input className=" searchBar" type="text" placeholder="Search for a company" aria-label="Search" ></input>
            </div>
            <br/>
            <div className="d-flex ">
                <div className="myCard myCard1 p-2 ">
                    <img src={Uber} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Uber</h5>
                </div>
                <div className="myCard p-2 ">
                 <img src={Activeloop} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Activeloop</h5>
                </div>
                <div className="myCard p-2">
                 <img src={You} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">You.com</h5>
                </div>
                <div className="myCard p-2">
                 <img src={replicate} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Replicate AI</h5>
                </div>
                <div className="myCard p-2">
                 <img src={ZenMl} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">ZenMl</h5>
                </div>
            </div>
            <div className="d-flex ">
                <div className="myCard myCard1 p-2 ">
                    <img src={Uber} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Uber</h5>
                </div>
                <div className="myCard p-2 ">
                 <img src={Activeloop} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Activeloop</h5>
                </div>
                <div className="myCard p-2">
                 <img src={You} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">You.com</h5>
                </div>
                <div className="myCard p-2">
                 <img src={replicate} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Replicate AI</h5>
                </div>
                <div className="myCard p-2">
                 <img src={ZenMl} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">ZenMl</h5>
                </div>
            </div>
            <div className="d-flex ">
                <div className="myCard myCard1 p-2 ">
                    <img src={Uber} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Uber</h5>
                </div>
                <div className="myCard p-2 ">
                 <img src={Activeloop} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Activeloop</h5>
                </div>
                <div className="myCard p-2">
                 <img src={You} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">You.com</h5>
                </div>
                <div className="myCard p-2">
                 <img src={replicate} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">Replicate AI</h5>
                </div>
                <div className="myCard p-2">
                 <img src={ZenMl} className="d-flex m-auto images"/>
                    <h5 className="text-center mt-2">ZenMl</h5>
                </div>
            </div>
           
        </div>
    )
}

export default SearchPortion
