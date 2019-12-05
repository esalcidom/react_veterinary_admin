import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewDate from './components/NewDate'
import DateList from './components/DateList'

class App extends Component{
  state ={
    dates: []
  }

  createNewDate = data => {
    //copiar el state actual
    const citas = [...this.state.dates, data];
    //agregar el nuevo state
    this.setState({dates: citas})
  }

  render(){
    return(
      <div className="container">
        <Header
          titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate 
              createNewDate={this.createNewDate}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <DateList 
              dates={this.state.dates}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
