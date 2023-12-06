import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

export default function ListSanctionPage(){

    const [sanctions, setSanctions] = useState([])
    useEffect(() => {
        getSanctions()
    }, [])

    function getSanctions() {
        axios.get('http://127.0.0.1:5000/listsanctions').then(function(response) {
            console.log(response.data)
            setSanctions(response.data)
        })
    }

    const deleteSanction = (id) => {
        axios.delete(`http://127.0.0.1:5000/sanctiondelete/${id}`).then(function(response){
            console.log(response.data)
            getSanctions()
        })
        alert('Successfully Deleted Sanction!')
    }

    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <p><Link to="/sanctionadd" className="btn btn-success">Add Report</Link></p>
                    <h1>List Sanctions</h1>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student</th>
                                <th>Sanction Title</th>
                                <th>Description</th>
                                <th>Hours</th>
                                <th>Date Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sanctions.map((sanction, key) =>
                                <tr>
                                    <td>{sanction.id}</td>
                                    <td>{sanction.student_name}</td>
                                    <td>{sanction.sanct_title}</td>
                                    <td>{sanction.sanct_desc}</td>
                                    <td>{sanction.sanct_hours}</td>
                                    <td>{sanction.date}</td>
                                    <td>
                                        <Link to={`sanctionupdate/${sanction.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
                                        <button onClick={() => deleteSanction(sanction.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}