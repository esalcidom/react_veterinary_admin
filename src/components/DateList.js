import React from 'react';
import Date from './Date'

const DateList = ({dates}) =>(

    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">Administra las citas aqui</h2>

            <div className="lista-citas">
                {dates.map(date => (
                    <Date 
                        key={date.id}
                        date={date}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default DateList;