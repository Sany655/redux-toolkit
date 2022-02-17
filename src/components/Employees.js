import React, { useEffect, useState } from 'react'
import employees from '../services/EmployeeService';

function Employees() {
  const [employes, setEmployes] = useState(employees)
  return (
    <div className="container my-5">
      {/* <pre>{JSON.stringify(employees)}</pre> */}
      <div className="row">
        <div className="col-md-6">

          <ul className='list-group'>

            {
              employees.map((emp, index) => (
                <li key={index} className="list-group-item">
                  <input className='form-check-input mx-2' type="checkbox" onChange={() => {
                    setEmployes(employes.map(empl => {
                      if (empl.id === emp.id) {
                        return {
                          ...empl,
                          selected: !empl.selected
                        }
                      } else return empl;
                    }))
                  }} />
                  {emp.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-6">
          <ol className="list-group">
            {
              employes.filter(emp => emp.selected === true).map((emp, i) => (
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

export default Employees