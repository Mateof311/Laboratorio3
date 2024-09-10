import { useState } from "react";

const Login=()=>{
    const [username,setUsername] = useState("");

    const handleUsernameChange=(event)=>{

        setUsername(event.target.value);

        if(event.target.value.includes('o') || event.target.value.includes('O')){
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
        }
    }
    const handleRegisterButton=()=>{
        if(username.includes('o') || username.includes('O') || username == ""){
            alert("Usuario inválido para registrarse");
        } else{
            alert("¡Usuario registrado correctamente!");
        }

    }

    return(
        <>
            <input type="text" placeholder="Nombre de usuario" onChange={handleUsernameChange}  value={username} >
            </input>
            <button onClick={handleRegisterButton}>Registrarse</button>
            <p>{username}</p>
        </>
    )
}
    

export default Login;