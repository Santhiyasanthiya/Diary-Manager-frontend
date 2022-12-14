import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {

    let navigate = useNavigate();
    let logout = () => {
        navigate("/")
    }

    return (
             <nav class="navbar navbar-expand-sm bg-success navbar-success"> 

             <Link to="/portal/dairy" class="nav"> MY DAIRY</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
       
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                       <Link to="/portal/home" className='nav'>Home</Link>
                    </li>               
                </ul>
                
            </div>
            <div className='col-1'>
           
                    <div className=' shadow-lg p-1  bg-body rounded btn btn-sm btn-danger'>
                       
                     <button onClick={ logout } className="d-none d-sm-inline-block btn btn-sm btn shadow-lg mr-5"><h6>Log_out</h6></button>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar