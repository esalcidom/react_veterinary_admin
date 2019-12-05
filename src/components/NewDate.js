import React, {Component} from 'react';
import uuid from 'uuid';

const stateInicial = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}

class NewDate extends Component{

    state = { ...stateInicial }

    //Esto se llama  cuando los input se actualizan
    handleChange = e => {
        //colocar lo que el ususario escribe en el state
        //la variable e es el objecto input por lo que el e.target.name es el atributo name y value lo que contiene el input
        //...this.state.cita realiza una copia todo el objeto state y despues se sobreescribe el valor que necesitamos
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    //Esto se llama cuando el ususario envia el formulario
    handleSubmit = e => {
        e.preventDefault();

        //extraer los valores del state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

        //validar que todos los campos esten llenos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            });
            return;
        }

        //generar objecto con los datos
        const newDate = {...this.state.cita};
        newDate.id = uuid();

        //Agregar la cita al state de App
        this.props.createNewDate(newDate)

        //Reiniciar state con state inicial
        this.setState({
            ...stateInicial
        })
    }

    render(){

        //extraer valor del state
        const {error} = this.state;

        return (
        <div className="card mt-5 py-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">
                    Llena el formulario para crear una nueva cita
                </h2>
                
                { error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                    Todos los camiobs son obligatorios</div> : null }

                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                name="mascota"
                                onChange={this.handleChange}
                                value={this.state.cita.mascota}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño Mascota"
                                name="propietario"
                                onChange={this.handleChange}
                                value={this.state.cita.propietario}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="date"
                                className="form-control"
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.cita.fecha}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="time"
                                className="form-control"
                                name="hora"
                                onChange={this.handleChange}
                                value={this.state.cita.hora}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                placeholder="Escribe los sintomas"
                                name="sintomas"
                                onChange={this.handleChange}
                                value={this.state.cita.sintomas}
                            >

                            </textarea>
                        </div>
                    </div>

                    <input type="submit" 
                    className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />
                </form>
            </div>
        </div>
        );
    }
}

export default NewDate;