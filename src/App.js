import React from 'react'
import Register from './pages/Register'
import "./App.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Logout from './pages/Logout'

const App = () => {
    const user = useSelector(selectUser);

    return (
        <div>
            {user ? <Logout /> : <Register />}
        </div>
    )
}

export default App
