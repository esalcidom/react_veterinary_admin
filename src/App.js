import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewDate from './components/NewDate'
import DateList from './components/DateList'

class App extends Component{
  state ={
    dates: []
  }

  // Cuando la app carga obtenemos lo que hay en local storage
  componentDidMount(){
    const datesLS = localStorage.getItem('dates');
    if(datesLS){
      this.setState({
        dates : JSON.parse(datesLS)
      })
    }
  }

  // Cuando eliminamos o agregamos una cita en storage
  componentDidUpdate(){
    localStorage.setItem('dates', JSON.stringify(this.state.dates));
  }

  createNewDate = data => {
    //copiar el state actual
    const citas = [...this.state.dates, data];
    //agregar el nuevo state
    this.setState({dates: citas})
  }


  //elimina las citas del state
  deleteDate = id => {
    //tomar copia de state
    const actualDates = [...this.state.dates];
    //utilizar filter para obtener el elemento del arreglo
    const dates = actualDates.filter(date => date.id !== id);
    //utilizar state
    this.setState({dates});
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
              deleteDate={this.deleteDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
