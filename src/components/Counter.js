import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h1>{count}</h1>
              <button className="btn btn-success" onClick={() => setCount(count + 1)}>+</button>
              <button className="btn btn-danger" onClick={() => setCount(count - 1)}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter