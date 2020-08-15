import React, {Fragment, useState} from 'react';
import "./Formulario.css";
import { useForm } from "react-hook-form";


const Formulario = () => {

   const { register, handleSubmit, errors } = useForm();
   const onSubmit = (data,e) =>{ 
      console.log(data); 
      e.target.reset(); // para campos
   }

   const [datos, setDatos] = useState ({
      nombre: '',
      apellido: ''

   })
   const handleInputChange =( event) => {
      //console.log(event.target.value);
      setDatos({
         ...datos,
         [event.target.name]: event.target.value,
      })
   }
   return (
      <Fragment className="wrappe">
         <div className="for-wrapper">
            <h1>Formulario</h1>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
               <div className="col-md-3">
                  <input 
                  placeholder="Ingrese su Correo"
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  ref={
                     register({
                        required: {
                           value: true,
                           message: 'titulo obligatorio' },
                     })  
                  }
                  ></input>
                  <span className="text-danger text-small d-block mb-2">
                     {errors?.email?.message}
                  </span>
               </div>

               <div className="col-md-3">
                  <input 
                  placeholder="Ingrese su Contraseña"
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  ref={
                     register({
                        required: {
                           value: true,
                           message: 'titulo obligatorio' }
                     })
                  }
                  ></input>
                  <span className="text-danger text-small d-block mb-2">
                     {errors?.password?.message}
                  </span>
               </div>
               <div className="col-mb-3"> 
                  <button className="btn btn-primary" type="submit">
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </Fragment>
   )
}
export default Formulario;