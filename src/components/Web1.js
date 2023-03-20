import React, { Fragment, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useNavigate } from 'react-router-dom';
import './web1.css'


const Web1 = () => {



     const navigate = useNavigate();
   const [user,setUser] = useState({
    flightNo :" " ,airline :" ", destination:" " ,  dptime:" " ,terminal:" " ,gateNo:" "
   });

   let name , value ;

   const handleInputs = (e) =>{
    console.log(e);
    name =  e.target.name;
    value = e.target.value ;

    setUser({...user , [name] : value});


   }

    const PostData = async(e) =>{
    

        const {flightNo,airline,destination,dptime,terminal ,gateNo} = user ;
        
        const res = await fetch("/register" ,{
            method : "POST" ,
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                flightNo,airline,destination,dptime,terminal ,gateNo
            })
        })

        const data = await res.json();

        if(res.status !== 201 || !data){
            console.log("error");
        }else{
            navigate("/web2");
            console.log("successfully submitted data");
        }

    }
  return (
    <Fragment>
    

<section className="mb-4 main">

    
    <h2 className="h1-responsive font-weight-bold text-center my-4">Airplain Details</h2>
  
    <p className="text-center w-responsive mx-auto mb-5">Fill all the details given below</p>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5 ">
            <form method="POST" id="contact-form" name="contact-form"  >

                
                <div className="row">
                
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="flightNo" name="flightNo" className="form-control" 
                            value={user.flightNo} 
                            onChange={handleInputs}
                            />
                            <label for="name" className="">Enter a flightNo</label>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="airline" name="airline" className="form-control" 
                            value={user.airline}
                            onChange={handleInputs}
                            
                            />
                            <label for="email" className="">Enter airline</label>
                        </div>
                    </div>
                    

                </div>
                <div className="row">
                
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="dptime" name="dptime" className="form-control"
                            value={user.dptime} 
                            onChange={handleInputs}
                             />
                            <label for="name" className="">Enter a dptime</label>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="terminal" name="terminal" className="form-control"
                            value={user.terminal}  
                            onChange={handleInputs}
                             />
                            <label for="email" className="">Enter terminal</label>
                        </div>
                    </div>
                    

                </div>

                <div className="row">
             
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="gateNo" name="gateNo" className="form-control" 
                            value={user.gateNo} 
                            onChange={handleInputs}
                            />
                            <label for="name" className="">Enter a gateNo</label>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="destination" name="destination" className="form-control"
                            value={user.destination} 
                            onChange={handleInputs}
                             />
                            <label for="email" className="">Enter destination</label>
                        </div>
                    </div>
                    

                </div>

             

           

            <div className="text-center text-md-left">
                <input type="submit" name="signup" value="save" onClick={PostData} className="btn btn-primary" />
            </div>

            </form>
            <div className="status"></div>
        </div>
     
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Pune , Maharashtra India</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 7588222499</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>bhaiseatharv@gmail.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</section>

    
    
    </Fragment>
  )
}

export default Web1