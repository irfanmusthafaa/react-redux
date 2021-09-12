import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import "./Logout.css"

const Logout = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()

        dispatch(logout())
    }
    return (
        <div className="logout">
            <h1> Fullname <span className="fullname">{user.fullname}</span></h1>{" "}
            <h1> Username : <span className="fullname">{user.username}</span></h1>{" "}
            <h1> Email :  <span className="fullname">{user.email}</span></h1>{" "}
            <button className="logout__btn" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout
