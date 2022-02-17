import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserListRedux() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div className="container my-5">
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
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserListRedux