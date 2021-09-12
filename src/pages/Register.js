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

        let errors = {
            fullname: "",
            username: "",
            email: "",
            password: "",
            confirmationPassword: "",
        }

        if(fullname === ""){
            errors.fullname = "Nama tidak boleh kosong"
          }

        const usernameRegex =  /^[a-zA-Z\-]+$/;
        if(username === ""){
            errors.username = "Username tidak boleh kosong"
          }else if(usernameRegex.test(String(username)) === false){
            errors.username = "Username hanya dapat input karakter A-Z, a-z dan '-'"
          }

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email === ""){
          errors.email = "Email tidak boleh kosong"
        }else if(emailRegex.test(String(email).toLowerCase()) === false) {
          errors.email = "Email invalid"
        }

        const passwordRegex = /(?=.*[0-9])/;
        if(password === ""){
          errors.password = "Password tidak boleh kosong"
        }else if(password.length < 8){
          errors.password = "Password minimal memiliki 8 karakter"
        }else if(passwordRegex.test(String(password)) === false){
          errors.password = "Password setidaknya memiliki 1 number"
        }

        if(password === ""){
            errors.password = "Password tidak boleh kosong"
          }else if(confirmationPassword != password){
            errors.confirmationPassword = "Tidak sama dengan password"
        }

        if(errors.fullname != ""){
            alert(errors.fullname)
          }else if(errors.username != ""){
            alert(errors.username)
          }else if(errors.email != ""){
            alert(errors.email)
          }else if(errors.password != ""){
            alert(errors.password)
          }else if(errors.confirmationPassword != ""){
            alert(errors.confirmationPassword)
          }  else if(errors.fullname == "" && errors.username == ""  && errors.email == ""  && errors.password == ""  && errors.confirmationPassword == ""){
              alert("berhasil")
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

        
    }

    return (
        <div className="register"> 
        <form className="register__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Form Register</h1>
                <input type="fullname" 
                placeholder="Fullname" 
                value={fullname} 
                onChange={(e) => setFullname(e.target.value)}/>

                <input type="username" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>

                <input type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

                <input type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />

                <input type="confirmationPassword" 
                placeholder="Confirmation Password" 
                value={confirmationPassword} 
                onChange={(e) => setConfirmationPassword(e.target.value)} />

                <button type="submit" className="submit__btn">Submit</button>
            </form>
            
        </div>
    )
}

export default Register
