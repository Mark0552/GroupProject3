import React from 'react';
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'
const ExpenseList = ({expenses, handleEdit, handleDelete, clearItems}) =>{
    return <div>
      <ul className="list">
    {expenses.map((expense)=>{
return <Item key= {expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit}/>;

    })}


      </ul>
      {expenses.length > 0 && <button className="btn" onClick={clearItems}> Clear Expenses <MdDelete className="btn-icon" />
      </button> }
        </div>

};

export default ExpenseList;