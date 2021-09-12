import React, {useState} from 'react' //rafce
import { register } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import "./Register.css"

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(
            register({
                fullname:fullname,
                username: username,
                email: email,
                password: password,
                confirmationPassword: confirmationPassword,
                isRegister: true
        })
        )
    }

    return (
        <div className="register"> 
        <form className="register__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Form Register</h1>
                <input type="fullname" 
                placeholder="fullname" 
                value={fullname} 
                onChange={(e) => setFullname(e.target.value)}/>

                <input type="username" 
                placeholder="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>

                <input type="email" 
                placeholder="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

                <input type="password" 
                placeholder="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />

                <input type="confirmationPassword" 
                placeholder="confirmationPassword" 
                value={confirmationPassword} 
                onChange={(e) => setConfirmationPassword(e.target.value)} />

                <button type="submit" className="submit__btn">Submit</button>
            </form>
            
        </div>
    )
}

export default Register
