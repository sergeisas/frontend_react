

import PropTypes from 'prop-types';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css'; // Material Design theme


const TodoTable = ({ todos, onDelete }) => {
    const columnDefs = [
      { headerName: "Description", field: "description", sortable: false, filter: true, },
      { headerName: "Priority", field: "priority", sortable: true, filter: true, 
      cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} },
      { headerName: "Date", field: "date", sortable: true, filter: true,  },
      {
        headerName: "Actions",
        cellRendererFramework: (params) => (
          <button onClick={() => onDelete(params.rowIndex)}>Delete</button>
        ),
      },
    ];
    return (
        <div className="ag-theme-material" style={{ height: 500, width: 700 }}>
          <AgGridReact
            rowData={todos}
            columnDefs={columnDefs}
            animateRows={true}
            floatingFilter={true}
            domLayout='autoHeight'
          />
        </div>
      );
    };
    
    export default TodoTable;


  TodoTable.propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };