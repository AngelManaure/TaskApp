import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import "./RegisterPage.css";
import { useEffect } from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks')
    }
  }, [isAuthenticated])

  return (
    <div className="registerFormContainer">
      <form className="registerForm" onSubmit={onSubmit}>
        {signinErrors.map((error, i) => (
          <div className="emailError" key={i}>
            {error}
          </div>
        ))}
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
          Iniciar sesión
        </button>
        <p className="formRedirect">
          Aún no tienes una cuenta?{" "}
          <Link className="redirectLink" to="/register">
            Crear una
          </Link>
        </p>
      </form>

      <div className="registerAbout">
        <div>
          <h1>Task</h1>
          <span>App</span>
        </div>

        <h2>La mejor app de tareas que existe!</h2>

        <p>
          Inicia sesión y maneja tus tareas de forma ordenada y clara, guardamos
          las tareas en una base de datos local, por lo que la rapidez es
          nuestra mayor ventaja!{" "}
        </p>
      </div>
    </div>
  );
}
