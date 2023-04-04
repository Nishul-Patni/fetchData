import React from 'react';

function Card(props) {
  return (
    <div className="card" style={{"border":"2px solid red", "margin":"2px"}}>
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.username}</p>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.address.street}, {props.address.suite}, {props.address.city}, {props.address.zipcode}</p>
        <p className="card-text">Latitude: {props.address.geo.lat}, Longitude: {props.address.geo.lng}</p>
        <p className="card-text">{props.phone}</p>
        <p className="card-text">{props.website}</p>
        <p className="card-text">{props.company.name}</p>
        <p className="card-text">{props.company.catchPhrase}</p>
        <p className="card-text">{props.company.bs}</p>
      </div>
    </div>
  );
}

export default Card;
