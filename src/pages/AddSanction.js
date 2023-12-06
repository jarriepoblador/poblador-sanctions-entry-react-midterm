import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddSanction() {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState([])

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('http://127.0.0.1:5000/sanctionadd', inputs).then(function(response){
            console.log(response.data)
            navigate('/')
        })
    }

    return(
        <div>
            <div className="container h-100">
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <h1>Add Report</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label>Student Name</label>
                                <input type='text' className='form-control' name='student_name' onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label>Sanction Title</label>
                                <input type='text' className='form-control' name='sanct_title' onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label>Sanction Description</label>
                                <textarea className='form-control' name='sanct_desc' onChange={handleChange} style={{minHeight: '100px'}}></textarea>
                            </div>
                            <div className='mb-3'>
                                <label>Sanction Hours</label>
                                <input type='number' className='form-control' name='sanct_hours' onChange={handleChange} />
                            </div>
                            <button type="submit" name="add" className='btn btn-primary'>Save</button>
                        </form>
                    </div>
                    <div className='col-2'></div>
                </div>
                
            </div>
        </div>
    )
}