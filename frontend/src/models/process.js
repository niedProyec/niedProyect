{/**se crea un modelo en el cual se valida el estado de la recuperacion de la contraseña que consta
de tres estados, el inicial es send que se utiliza para enviar el codigo de seguridad
el segundo es validate que se usa para valdiar el codigo se seguridad y
por ultimo si las dos anteriores se realizan con exito se tiene change que es para el cambio de 
contraseña */}

export const process = {
    Send: 'send',
    Validate: 'validate',
    Change: 'change'
}