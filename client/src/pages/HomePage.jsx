import './HomePage.css'

export default function HomePage() {
  return (
      <main className='home'>
        <section className='homeSection'>
          <article className='sectionArticle'>
            <h2>Bienvenido</h2>
              <p>Esta es una aplicación de tareas basnteante simple, donde podrás añadir eliminar y editar cualquiera de ellas. <br />
              Cuenta con base de datos y validación de usuarios, por lo que los datos que ingreses aquí solo podrán ser vistos en tu cuenta.</p>
          </article>
          <article className="sectionArticle2">
            <h2>Instrucciones</h2>
            <p>Una vez registrado, no podrás cambiar tu contraseña o correo, así que asegurate de ingresar los datos correctos, presiona el boton 'Añadir tarea' si deseas crear una, a la derecha de cada tarea están los botones de 'Borrar' y 'Editar'. Una vez elminada una tarea ésta no podrá ser recuperada, puedes editarlas cuantas veces quieras.</p>
          </article>
          <article className="sectionArticle3">
            <h2>Desarrollo</h2>
            <h4>Diseño y desarrollo - Angel Manaure.</h4>
            <p>Ésta app está realizada con el fin de mejorar mis habilidades de React, está desarrollada con Node-Express-Prisma(SQLite) y por supuesto React.</p>
            <p>Cualquier crítica es aceptada.</p>
          </article>
        </section>
      </main>
  )
}
