import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export const UsuariosContext = createContext(); //universo. Todo lo que este aqui adentro va a tener acceso a los usuarios

// eslint-disable-next-line react/prop-types
const ContextUsers = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [userLogueado, setUserLogueado] = useState(null); //para que no se borre el usuario logueado cuando se recarga la pagina
  const router = useRouter();

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decode = jwt_decode(token);
        const usuario = {
          nombre: decode.nombre,
          apellido: decode.apellido,
          email: decode.email,
          rol: decode.rol,
        };

        setUserLogueado(usuario);
      } catch (error) {
        // El token no es válido, el usuario debe iniciar sesión
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        {
          email,
          password,
        }
      );

      const jwtToken = response.data.data.token;
      localStorage.setItem("token", jwtToken);

      const decode = jwt_decode(jwtToken);
      const usuario = {
        nombre: decode.nombre,
        apellido: decode.apellido,
        email: decode.email,
        rol: decode.rol,
      };

      Swal.fire({
        icon: "success",
        title: "Bienvenido!",
        showConfirmButton: false,
        timer: 1500,
      });

      setUserLogueado(usuario);

      if (usuario.rol === "admin") {
        router.push("/administracion");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email o contraseña incorrectos",
      });
    }
  };

  const updateUsuarios = async (updateUsuario) => {
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
    Swal.fire({
      icon: "warning",
      title: "Estas seguro?",
      text: "Vas a cerrar sesion",
      showCancelButton: true,
      confirmButtonText: "Si, cerrar sesion",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUserLogueado(null); // Asegura que el estado refleje la ausencia de usuario logueado
      router.push("/"); // Utiliza el enrutamiento de Next.js en lugar de window.location.href
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: "error",
          title: "Cancelado",
          text: "Tu sesion sigue activa",
        });
      }
    });
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
