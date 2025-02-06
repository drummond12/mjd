import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Users = () => {
    const [sqlData, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/data')
            .then((response) => {
                console.log("API Response:", response.data); // Debugging log
                setData(response.data);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className='test'>
            <h1>Users</h1>

            {sqlData.map((i, index) => (<li key={index}>
                    <strong>Description:</strong> {i.description} <br/>
                    <strong>Date:</strong> {i.duedate}
                </li>))}

        </div>);
};

export default Users;
