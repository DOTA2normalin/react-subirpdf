import React,{Component} from 'react';
import firebase from 'firebase';
//import Formulario from './components/Formulario';
import FileUpload from './FileUpload' ;



class AppFileUpload extends Component{

  
  constructor(){
    super();
    this.state = {
      user: null,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });  
    });
  }
  handleAuth(){
    var provider= new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error=> console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton(){
    if(this.state.user){
      return(
        <div>
          <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p>Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout} className="AppFileUpload-btn">Salir</button>
          <FileUpload />
        </div>
      );
    }else{
      return(
          <button onClick={this.handleAuth} className="AppFileUpload-btn">Iniciar sesion con Google</button>
      );
    }
  }
  render(){
    return(
      <div className="AppFileUpload">
        
        <p className="AppFileUpload-Intro">
              {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}

export default AppFileUpload;
