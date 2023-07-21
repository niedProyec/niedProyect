import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// se crea un contexto para manerjar las sesiones

const SessionContext =  React.createContext();

// en las props recibe el children

export const SessionProvider = (props)=>{

    // se crea una constante para navegar

    const navigate = useNavigate();

    // en caso de que no halla una sesion iniciada se direcciona al login

    useEffect(() => {
        const data = localStorage.getItem('userName');
        if (!data) navigate('/inicio/login');
    }, []);

    // se tienen las constantes con sus respectivos estados

    const { children } = props
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [user, setUser] = useState(null)
    const [rol, setRol] = useState(null)
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [cel, setCel] = useState(null)
    const [correo, setCorreo] = useState(null)

    // la funcion de login coloca los datos requeridos en la sesion

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
        }, 20);
    }

    // la funcion logout cierra la sesion y coloca los datos del usuario en nulo

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

    // con esta constante se acceden a los diferentes parametros de la sesion

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

    // se retorna el contexto
    
    return(
        <SessionContext.Provider value={sessionContextValue}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContext