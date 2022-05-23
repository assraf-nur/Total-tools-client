import React from 'react';
import { toast } from 'react-toastify';

const UserList = ({user, refetch}) => {
    const { _id, email, role} = user;

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast.success("New Admin added");
        })
    }

    const deleteUser = (id) =>{
        const proceed = window.confirm("Are you sure ?");
        if(proceed){
            const url = `http://localhost:5000/users/${id}`;
            fetch(url ,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success("Remove user successfully")
            })
        }
    }

    return (
                <tr>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-primary text-white">Make Admin</button>}</td>
                <td><button onClick={() => deleteUser(_id)} class="btn btn-xs btn-error text-white">Remove User</button></td>
              </tr>
    );
};

export default UserList;