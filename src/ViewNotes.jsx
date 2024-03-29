import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { env } from "./config";


function ViewNotes() {

  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams);

  const [userData, setUserData] = useState({})

  useEffect(() => {
    loadUser();
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/dairy/${params.id}`, {
        headers: {                                                           // Changes Here
          "authorization": window.localStorage.getItem("app-token")
        }
      });
      setUserData(user.data)
    } catch (error) {

    }
  }

  return (
    <div className='container shadow-lg p-3 mb-5 bg-body rounded'>

      <div className='shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-info mr-2'>
        <Link to="/portal/dairy" className="d-none d-sm-inline-block btn btn-sm btn shadow-lg"><h6>Back</h6></Link>
      </div>
        
<div className='row'>
<div className='col-lg-9 shadow-lg p-3 mb-5 bg-body rounded'>
        <h4 className="titlecolor">{userData.title}</h4>
      </div>

      <div className='col-lg-3 shadow-lg p-3 mb-5 bg-body rounded'>
        <h3 className='font'>Date</h3>
        <h4>{userData.date}</h4>
      </div>

      <div className='col-lg-12 shadow-lg p-3 mb-5 bg-body rounded'>
        <h5>{userData.notes}</h5>
      </div>
</div>

    </div>
  )
}

export default ViewNotes