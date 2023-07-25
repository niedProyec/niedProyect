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
    <div>
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
            const valuesArray = userData.user_list.split(',');
            const sanitizedValues = valuesArray.map((value) => value.replace(/[()'"]/g, '').trim());
            const [username, firstName, lastName, email, phone, userType] = sanitizedValues;
            return (
              <tr key={index}>
                <td>{username}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{userType}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default ListTec;
