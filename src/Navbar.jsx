import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {

    let navigate = useNavigate();
    let logout = () => {
        navigate("/")
    }

    return (
             <nav className="navbar navbar-expand-sm bg-success navbar-success"> 

                  <Link to="/portal/home" className='nav'>Home</Link>
            

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
       
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/portal/dairy" className="nav"> MY DAIRY</Link>
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