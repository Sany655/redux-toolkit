import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus, plusBy } from '../redux/features/counter.feature'


function CounterRedux() {
    const dispatch = useDispatch();
    const countRef = useRef()
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h2>{useSelector(state=>state.counter.count)}</h2>
                            <div className="d-flex justify-content-between">
                                <input type="text" className="form-control" ref={countRef} type="number" />
                                <button className="btn btn-primary" onClick={()=>dispatch(plusBy(parseInt(countRef.current.value)))}>+</button>
                            </div>
                            <button onClick={()=>dispatch(plus())} className="btn btn-success">+</button>
                            <button onClick={()=>dispatch(minus())} className="btn btn-danger">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterRedux