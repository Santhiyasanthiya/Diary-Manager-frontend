import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
import { env } from "./config";
import EventNoteIcon from '@mui/icons-material/EventNote';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Dairy() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, []);

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get(`${env.api}/notes/${localStorage.getItem("email")}`, {
            headers: {
                "authorization": window.localStorage.getItem("app-token")
            }
        });
        //Do you know, which place users.data, go Check console before plz code console.log(users) after check
        console.log(users)
        setUsers(users.data)
        setLoading(false)
    }

    let userDelete = async (userid) => {
        try {
            let ask = window.confirm("Are you sure? Do you want to delete this data ?");
            if (ask) {
                await axios.delete(`${env.api}/dairy/${userid}`, {
                    headers: {
                        "authorization": window.localStorage.getItem("app-token")
                    }
                })
                loadData();
            }

        } catch (error) {

        }
    }

    return (

        <div className="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">
            <h4 className='dairy'>Tomorrow is the first blank page of a 365 pages Write a good one</h4>
            {/* Loading code type Here */}
            <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-success mr-2'>
            <Link to="/portal/create-notes" 
                className="d-none d-sm-inline-block btn btn-sm btn shadow-lg">
                    <h6>Create_Notes</h6>
            </Link>
            </div>
            {/* <h3>Date</h3> */}

            <div className="container">
                <div className="shadow-lg p-5  mb-5 bg-body rounded">


                    <div className='row' >

                        <table className="table table-hover">

                            <thead>
                                <tr>
                                    <th className='font'>Title</th>
                                    <th className='font'>Date</th>
                                    <th className='font'>Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => {
                                        return (
                                            <tr>
                                                <td className='fa'>{user.title}</td>

                                                    <td className='fa'>{user.date}</td>

                                                <td className='threebutton'>
                                                    <Link to={`/portal/dairy/view/${user._id}`} >
                                                        <EventNoteIcon color="success" fontSize="medium" />
                                                    </Link>


                                                    <Link to={`/portal/dairy/edit/${user._id}`} >
                                                        <EditIcon color="warning" fontSize="medium" />
                                                    </Link>

                                                    <DeleteIcon color="error" fontSize="medium" onClick={() => userDelete(user._id)} />


                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dairy