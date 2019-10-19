import React, { Component } from "react"; 
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table"; 
import "./guest-list.css"; 

function onInsertRow(guest) {
let newGuest = "; "

for (const prop in guest) {
    newGuest += prop + "" + guest[prop]
}
alert("New guest added" + newGuest)
}

function onDeleteRow(rowKeys) {
alert("Guest deleted" + rowKeys) 
}


class List extends Component {

    render() {
        

        const selectRowProp = {
            mode: "checkbox", 
            clickToSelect: true, 
            bgColor: "gray"
        }; 
        const options = {
            afterInsertRow: onInsertRow, 
            afterDeleteRow: onDeleteRow, 
            
        }; 

        const cellEditProp = {
            mode: "click", 

        }; 

        return(
            <div>
            <h1>Guest List</h1>    
            <BootstrapTable data={this.props.data}
                            selectRow={selectRowProp}
                            insertRow={true}
                            deleteRow={true}
                            options={options}
                            cellEdit={cellEditProp}
                            exportCSV
                            csvFileName="guestlist.csv"
                        
            >
                               
            <TableHeaderColumn isKey dataField="name">
                Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="address">
                Address
            </TableHeaderColumn>
            <TableHeaderColumn dataField="email"> 
                Email 
            </TableHeaderColumn>
            <TableHeaderColumn dataField="invitation">
                Invitation Sent
            </TableHeaderColumn>
            <TableHeaderColumn dataField="rsvp">
                RSVP
            </TableHeaderColumn>
            </BootstrapTable>
            
        </div>
        ); 

    }
}

export default List;  