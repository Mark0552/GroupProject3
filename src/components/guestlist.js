import React, {Component} from "react"; 
import List from "./list"; 
import "./guest-list.css"; 

class Guestlist extends Component {
    render() {
        return (
            <div>
                <h1>
                   <List />
                </h1>
            </div>
        )
    }
}

export default Guestlist; 