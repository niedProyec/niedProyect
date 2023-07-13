import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionContext =  React.createContext();

export const SessionProvider = (props)=>{

    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('userName');
        if (!data) navigate('/inicio/login');
    }, []);

    const { children } = props
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [user, setUser] = useState(null)
    const [rol, setRol] = useState(null)
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [cel, setCel] = useState(null)
    const [correo, setCorreo] = useState(null)

    const login = (data)=>{
        setTimeout(() => {
            setUserName(data.usuario)
            setUser(userName.slice(0,2).toUpperCase())
            setRol(data.rol)
            setName(data.nombre)
            setLastName(data.apellido)
            setCel(data.numero_celular)
            setCorreo(data.correo)
            setIsLogedIn(true)
        }, 100);
    }

    const logout = ()=>{
        setUser(null)
        setUserName(null)
        setRol(null)
        setName(null)
        setLastName(null)
        setCel(null)
        setCorreo(null)
        setIsLogedIn(false)
    }

    const sessionContextValue = {
        isLogedIn,
        userName,
        user,
        rol,
        name,
        lastName,
        cel,
        correo,
        login,
        logout,
    }

    return(
        <SessionContext.Provider value={sessionContextValue}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContext