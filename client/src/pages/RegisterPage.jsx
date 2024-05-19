import { useForm } from "react-hook-form";

import "./RegisterPage.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div className="registerFormContainer">
        <form className="registerForm" onSubmit={onSubmit}>
          <div className="registerInputGroup">
            {registerErrors.map((error, i) => (
              <div className="emailError" key={i}>{error}</div>
            ))}
            <label htmlFor="username">Nombre de usuario</label>
            {errors.username && (
              <p className="textErrors">Nombre de usuario requerido</p>
            )}
            <input
              type="text"
              {...register("username", { required: true })}
              id="username"
              autoComplete="on"
            />
          </div>

          <div className="registerInputGroup">
            <label htmlFor="email">Correo electrónico</label>
            {errors.email && <p className="textErrors">Email requerido</p>}
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="ejemplo@gmail.com"
              id="email"
              autoComplete="on"
            />
          </div>

          <div className="registerInputGroup">
            <label htmlFor="password">Contraseña</label>
            {errors.password && (
              <p className="textErrors">Contraseña requerida</p>
            )}
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="**********"
              id="password"
            />
          </div>

          <button className="registerButton" type="submit">
            Registrarse
          </button>
          <p className="formRedirect">Ya tienes una cuenta? <Link className="redirectLink" to='/login'>Inicia sesión</Link></p>
        </form>

        <div className="registerAbout">
          <div>
            <h1>Task</h1>
            <span>App</span>
          </div>

          <h2>La mejor app de tareas que existe!</h2>

          <p>
            Registrate y maneja tus tareas de forma ordenada y clara, guardamos
            las tareas en una base de datos local, por lo que la rapidez es
            nuestra mayor ventaja!{" "}
          </p>
        </div>
      </div>
    </>
  );
}
