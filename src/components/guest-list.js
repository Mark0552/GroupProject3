import React, {Component } from "react"; 
import List from "./list.js"; 

class GuestList extends Component {
    render() {
        return(
            <div className="list">
                <List/>
            </div>
        ); 
    }
}

export default GuestList; 