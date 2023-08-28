import { useState, useEffect } from "react";
import { ListClient } from "../../services/ListCliente";

const ListCliente = ()=>{
    
    const [userList, setUserList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ListClient()
        setUserList(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <table className="userList">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Celular</th>
          <th>Correo</th>
          <th>Direccion</th>
        </tr>
        {userList.map((userData, index) => {
          return (
            <tr key={index}>
              <td>{userData.cedula}</td>
              <td>{userData.nombre}</td>
              <td>{userData.numero_celular}</td>
              <td>{userData.correo}</td>
              <td>{userData.direccion}</td>
            </tr>
          );
        })}
    </table>
    </div>
  );
}

export default ListCliente