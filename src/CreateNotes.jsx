import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { env } from "./config";
import { useNavigate } from 'react-router-dom';


function CreateNotes() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            title: "",
            date: "",
            notes: ""
        },
        validate: (values) => {
            let errors = {};

            if (values.title === "") {
                errors.title = "Please enter title";
            }

            if (values.date === "") {
                errors.date = "Please select Date";
            }

            if (values.notes === "") {
                errors.notes = "Please write somthing";
            }

            return errors;

        },
        onSubmit: async (values) => {
            values.email = localStorage.getItem("email")
            let user = await axios.post(`${env.api}/dairy`, values, {
                headers: {                                                      // Changes Here
                    "authorization": window.localStorage.getItem("app-token")
                }
            })
            alert("New Notes has been Created Done");
            navigate("/portal/dairy")
        }
    });
    return (
        <div className="container mt-2 ">
            <form onSubmit={formik.handleSubmit}>
                <div className="row shadow-lg p-3 mb-5 bg-body rounded">

                    <div className="col-lg-9 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">

                        <label className='font'>Title</label>
                       
                        <input className='form-control' type={"text"} value={formik.values.title} onChange={formik.handleChange} name="title" ></input>


                        <span style={{ color: "red" }}>{formik.errors.title}</span>
                    </div>

                  <div className="col-lg-3 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                      <label className='font'>Date</label>
                      <input className='form-control' type={"date"} value={formik.values.date} onChange={formik.handleChange} name="date" ></input>

                  </div>

                    <div className=" shadow-lg p-3 mb-5 bg-body rounded mb-3">
                        <label for="exampleFormControlTextarea1" className="font">Notes</label>
                        <textarea id="comment" className='form-control' type={"text"} value={formik.values.notes} onChange={formik.handleChange} name="notes"></textarea>
                        <span style={{ color: "red" }}>{formik.errors.notes}</span>
                    </div>
                    <div className='col-lg-1 shadow-lg p-3 bg-body rounded btn btn-sm btn-success mr-2'>
                        <input className='btn btn-success shadow-lg ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateNotes