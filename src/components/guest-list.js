import React, {Component } from "react"; 
import List from "./list.js"; 

class GuestList extends Component {
    render() {
        return(
            <div>
                <h1>Guest List</h1>
                <List/>
            </div>
        ); 
    }
}

export default GuestList; 