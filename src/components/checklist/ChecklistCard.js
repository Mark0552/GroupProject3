import './Checklist.css';
import React from 'react';

const ChecklistCard = props =>

    <div className="card" id={props.todo}>        
        <h5>{props.time}</h5>
        <div className="card-body">
            <p className="card-text">{props.todo}</p>
            <a onClick={() => props.handleClick(props.todo, props.username, props.completed)} className="btn btn-primary">{props.completed}</a>
        </div>
    </div>

    
        
export default ChecklistCard;