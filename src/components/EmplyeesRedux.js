import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelected } from '../redux/features/employees.feature'

function EmplyeesRedux() {
    const dispatch = useDispatch()
    
    return (
        <div className="container my-5">
            {/* <pre>{JSON.stringify(employees)}</pre> */}
            <div className="row">
                <div className="col-md-6">

                    <ul className='list-group'>

                        {
                            useSelector(store=>store.employees).employees.map((employee, index) => (
                                <li key={index} className="list-group-item">
                                    <input className='form-check-input mx-2' type="checkbox" onChange={()=>dispatch(updateSelected(employee.id))} checked={employee.selected}/>
                                    {employee.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-6">
                    <ol className="list-group">
                        {
                            useSelector(store=>store.employees).employees.filter(emplo=>emplo.selected===true).map((emp, i) => (
                                <li className="list-group-item" key={i}>
                                    <h1>{emp.name}</h1>
                                    <p>{emp.email}</p>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default EmplyeesRedux