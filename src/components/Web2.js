import React, { useEffect } from 'react'
import { useState } from 'react'
import './web2.css'



const Web2 = ({userdata}) => {

  
  const [data,setData] = useState([])
  
  useEffect(() => {
  fetch("/getAllUser" , {
    method : "GET",
  }).then((res) => res.json()).then((data) => {
    console.log(data,"userdata")
    setData(data.data);
  })


}, [])

  return (
    <div className='auth-wrapper'>
    <div className='auth-inner' style={{width :" auto"}} >
     <h3 className='mid'> all Data</h3>
    <table style={{width : 500}}>
    <tr>
     <th> flightNo </th>
     <th> airline </th>
     <th> destination </th>
     <th> dptime </th>
     <th> terminal </th>
     <th> gateNo </th>
    
    </tr>
    {
      data.map( i => {
        return(
          <tr style={{ borderwidth : 500}}> 
          <td> {i.flightNo} </td>
          <td> {i.airline} </td>
          <td> {i.destination} </td>
          <td> {i.dptime} </td>
          <td> {i.terminal} </td>
          <td> {i.gateNo} </td>
          
          </tr>
        )
      } )
    }

    </table>
    </div>
    </div>
  )
}

export default Web2