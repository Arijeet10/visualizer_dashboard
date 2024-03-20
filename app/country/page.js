"use client";
import { getData } from "../data"
import CountryChart from "./CountryChart";
import { useState } from "react";


const Country = () => {

    //get large data from api
    const {sample}= getData;
    //get the list of countries from the data sample
    const countryNames=sample.map((val)=>{
      return val.country;//this returns empty strings too
    })
    const names=countryNames.filter((name)=>name!="")//filtering out the empty strings
    const newNames=[...new Set(names)];//removing duplicate values of countries

    const [countryData, setCountryData] = useState([])//to store country data

    const [countryPointer, setCountryPointer] = useState("")//to know which country button is clicked


    const handleClick=(val)=>{
      setCountryPointer(val)//set the value to the particular country button clicked
      setCountryData(
        sample.map((val)=>{
          if(val.country===countryPointer){
            return val;
          }
        })
      )
      
    }

    
    
    
  return (
    <>
        <div>
            Country
        </div>
        {newNames.map((val,i)=>{
          return (
            <button 
              className="m-2 p-2 border"
              onClick={()=>{
                handleClick(val)
                }}
            >
              {val}
            </button>
          )
        })}
        <CountryChart data={countryData} />
    </>
  )
}

export default Country