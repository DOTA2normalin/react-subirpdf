import React from 'react';
import AppFileUpload from '../AppFileUpload';
//import Header from '../screens/Header'
import Formulario from '../components/Formulario';
function Login(){
   return(
      <div>
         <Formulario/>
         <h1>Login</h1>
         <AppFileUpload/>
      </div>
   )
}
export default Login;