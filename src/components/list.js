import React, { Component } from "react"; 
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table"; 
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"; 

function onInsertRow(row) {
let newRow = "; "

for (const prop in row) {
    newRow += prop + "" + row[prop]
}
alert("New guest added" + newRow)
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
            afterDeleteRow: onDeleteRow
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
            >               
            <TableHeaderColumn isKey dataField="id">
                ID    
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name">
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