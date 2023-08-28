import React, { useEffect, useState } from "react";
import { ListUser } from "../../services/ListUser";
import './tableStyle.css';

const ListTec = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ListUser();
        setUserList(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table className="userList">
        <tr>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Celular</th>
          <th>Rol</th>
        </tr>
        {userList.map((userData, index) => {
          return (
            <tr key={index}>
              <td>{userData.usuario}</td>
              <td>{userData.nombre}</td>
              <td>{userData.apellido}</td>
              <td>{userData.correo}</td>
              <td>{userData.numero_celular}</td>
              <td>{userData.rol}</td>
            </tr>
          );
        })}
    </table>
  );
};

export default ListTec;
