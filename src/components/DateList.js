import React from 'react';
import Date from './Date';
import PropTypes from 'prop-types';

const DateList = ({dates,  deleteDate}) => {

    const message = Object.keys(dates).length === 0 ? 'No hay citas' : 'Administra tus citas'

    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>
    
                <div className="lista-citas">
                    {dates.map(date => (
                        <Date 
                            key={date.id}
                            date={date}
                            deleteDate={deleteDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

DateList.propTypes = {
    dates: PropTypes.array.isRequired,
    deleteDate: PropTypes.func.isRequired
}

export default DateList;