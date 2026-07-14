import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'


const ViewPet = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-pet").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
    <div className="container">
   <NavigationBar /> 
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Breed</th>
                        <th>Age</th>
                        <th>Weight (kg)</th>
                        <th>Vaccination Status</th>
                        <th>Owner Name</th>
                        <th>Owner Phone</th>
                        <th>Owner Email</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                        <th>Kennel Number</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.bookId}</td>
                                <td>{value.petName}</td>
                                <td>{value.petType}</td>
                                <td>{value.breed}</td>
                                <td>{value.age}</td>
                                <td>{value.weight}</td>
                                <td>{value.status}</td>
                                <td>{value.ownerName}</td>
                                <td>{value.ownerPhone}</td>
                                <td>{value.ownerEmail}</td>
                                <td>{value.inDate}</td>
                                <td>{value.outDate}</td>
                                <td>{value.kenNum}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    </div>
</div>
    )
}

export default ViewPet