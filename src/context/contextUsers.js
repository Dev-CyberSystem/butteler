import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const UsuariosContext = createContext(); //universo. Todo lo que este aqui adentro va a tener acceso a los usuarios

// eslint-disable-next-line react/prop-types
const ContextUsers = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [userLogueado, setUserLogueado] = useState({}); //para que no se borre el usuario logueado cuando se recarga la pagina

  const getUsuarios = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/user/usuarios"
      );
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    const response = await axios.post("http://localhost:8080/api/user/login", {
      email,
      password,
    });
    const jwtToken = response.data.data.token;
    const decode = jwt_decode(jwtToken);
    const usuario = {
      nombre: decode.nombre,
      apellido: decode.apellido,
      email: decode.email,
      rol: decode.rol,
    };
    localStorage.setItem("user", JSON.stringify(usuario));
    setUserLogueado(usuario);

    if (usuario.rol === "admin") {
      window.location.href = "/admin";
    } else {
        window.location.href = "/";
    }
  };

  const updateUsuarios = async (updateUsuario) => {
    console.log(updateUsuario, "usuario de context");
    try {
      await axios.put(
        `http://localhost:8080/api/user/usuarios/${updateUsuario._id}`,
        updateUsuario
      );
      await getUsuarios();
    } catch (error) {
      console.log(error, "error de usuarios");
    }
  };

  const deleteUser = async (_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/productos/eliminar/${_id}`
      );
      console.log(response);
      getUsuarios();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <UsuariosContext.Provider
      value={{
        usuarios,
        setUsuarios,
        logout,
        login,
        userLogueado,
        updateUsuarios,
        deleteUser,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default ContextUsers;
