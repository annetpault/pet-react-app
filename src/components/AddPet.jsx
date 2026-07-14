import axios from 'axios'
import React, { useState } from 'react'




const AddPet = () => {

    const [input, changeInput] = useState(
        {
            bookId: "",
            petName: "",
            petType: "",
            breed: "",
            age: "",
            weight: "",
            status: "",
            ownerName: "",
            ownerPhone: "",
            ownerEmail: "",
            inDate: "",
            outDate: "",
            kenNum: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-pet", input).then(
            (response) => {
                console.log(response.data)
                alert("Pet added successfully")
            }
        ).catch(
            (error) => {
                console.error("Error adding pet:", error)

                alert("Failed to add pet")
            }
        )
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Booking ID</label>
                                <input type="text" className="form-control" name="bookId" value={input.bookId} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet Name</label>
                                <input type="text" className="form-control" name="petName" value={input.petName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet Type</label>
                                <select name="" id="" className="form-control" name="petType" value={input.petType} onChange={inputHandler} >
                                    <option value="Select">Select</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Bird">Bird</option>
                                </select>
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Breed</label>
                                <input type="text" className="form-control" name="breed" value={input.breed} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number" className="form-control" name="age" value={input.age} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="number" className="form-control" name="weight" value={input.weight} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vaccination Status</label>
                                <input type="text" className="form-control" name="status" value={input.status} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Nme</label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Phone</label>
                                <input type="tel" className="form-control" name="ownerPhone" value={input.ownerPhone} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Email</label>
                                <input type="text" className="form-control" name="ownerEmail" value={input.ownerEmail} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check-in Date</label>
                                <input type="date" className="form-control" name="inDate" value={input.inDate} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check-out Date</label>
                                <input type="date" className="form-control" name="outDate" value={input.outDate} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Kennel Number</label>
                                <input type="text" className="form-control" name="kenNum" value={input.kenNum} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPet