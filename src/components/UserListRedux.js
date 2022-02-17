import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUsers } from '../redux/features/users.feature'
function UserList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [])
  const loading = useSelector(store => store.users).loading;
  const users = useSelector(store => store.users).users;
  const errors = useSelector(store => store.users).errors;
  return (
    <div className="container my-5">
      <section>
        <h2>User list</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima libero sit quod voluptates? Dolorum ipsum repellendus optio culpa consequatur.</p>
      </section>
      <h3 className="text-danger">{useSelector(store => store.users).errors}</h3>
      {!errors && !loading && (
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>website</th>
              <th>company</th>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default UserList