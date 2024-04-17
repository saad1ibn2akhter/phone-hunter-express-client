import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
        <h1>All phones are shown here</h1>
        <h1>Total Phones : {phones.length}</h1>
        {
            phones.map((phone , index) => <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
        }
        </div>
    );
};

export default Phones;