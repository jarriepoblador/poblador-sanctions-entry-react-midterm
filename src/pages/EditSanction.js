import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function EditSanction(){

    const navigate = useNavigate()

    const [inputs, setInputs] = useState([])

    const {id} =  useParams()

    useEffect(() => {
        getSanction()
    }, [])

    function getSanction() {
        axios.get(`http://127.0.0.1:5000/sanctiondetails/${id}`).then(function(response) {
            console.log(response.data)
            setInputs(response.data)
        })
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.put(`http://127.0.0.1:5000/sanctionupdate/${id}`, inputs).then(function(response){
            console.log(response.data)
            navigate('/')

        })
    }

    return(
        <div>
            <div className='container h-100'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <h1>Edit Sanction</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label>Student Name</label>
                                <input type='text' value={inputs.student_name} className='form-control' name='student_name' onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label>Sanction Title</label>
                                <input type='text' value={inputs.sanct_title} className='form-control' name='sanct_title' onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label>Sanction Description</label>
                                <textarea className='form-control' value={inputs.sanct_desc} name='sanct_desc' onChange={handleChange} style={{minHeight: '100px'}}></textarea>
                            </div>
                            <div className='mb-3'>
                                <label>Sanction Hours</label>
                                <input type='number' value={inputs.sanct_hours} className='form-control' name='sanct_hours' onChange={handleChange} />
                            </div>
                            <button type="submit" name="update" className='btn btn-primary'>Save</button>
                        </form>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </div>
    )
}