import React from 'react'
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { env } from "./config";


function EditNotes() {

  const params = useParams()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      title: "",
      notes: ""
    },
    validate: (values) => {
      let errors = {};

      if (values.title === "") {
        errors.title= "Please give the title";
      }

      if (values.notes=== "") {
        errors.notes = "Please write something";
      }

      return errors;

    },
    onSubmit: async (values) => {
      await axios.put(`${env.api}/dairy/${params.id}`, values,{
        headers : {                                                              // Changes Here
          "authorization" : window.localStorage.getItem("app-token")
      }
      })
      alert("Update has been Done")
      navigate("/portal/dairy")
    }
  });

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/dairy/${params.id}`,{
        headers : {                                                          // Changes Here
          "authorization" : window.localStorage.getItem("app-token")
      }
      });
      formik.setValues({
        title: user.data.title,
        notes: user.data.notes,
      })
    } catch (error) {

    }

  }


  return (
    <div className="container mt-5 ">
    <form onSubmit={formik.handleSubmit}>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                <label className='font'>Title</label>
                <input className='form-control' type={"text"} value={formik.values.title} onChange={formik.handleChange} name="title" ></input>
                <span style={{ color: "red" }}>{formik.errors.title}</span>
            </div>
            <div className=" shadow-lg p-3 mb-5 bg-body rounded mb-3">
                <label for="exampleFormControlTextarea1" className="font">Notes</label>
                <textarea id='comment' className='form-control' type={"text"} value={formik.values.notes} onChange={formik.handleChange} name="notes"></textarea>
                <span style={{ color: "red" }}>{formik.errors.notes}</span>
            </div>
            <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-warning mr-2'>
                <input className='btn btn-warning shadow-lg ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
            </div>
        </div>
    </form>
</div>
  )
}

export default EditNotes