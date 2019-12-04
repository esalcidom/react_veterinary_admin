import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewDate from './components/NewDate'

class App extends Component{
  state ={

  }

  render(){
    return(
      <div className="container">
        <Header
          titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
