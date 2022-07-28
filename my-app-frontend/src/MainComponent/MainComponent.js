import React, {useState} from 'react';
import './MainComponent.css'
import JobForm from './JobForm';
import Button from '@mui/material/Button';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function MainComponent(){
  const [checkboxSelection, setCheckboxSelection] = useState(true);

  const rows: GridRowsProp[] = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns: GridColDef = [
    { field: 'col1', headerName: 'Position', width: 200 , editable: true },
    { field: 'col2', headerName: 'Company Name', width: 200, editable: true  },
    { field: 'col3', headerName: 'Status', width: 150, editable: true, type: 'singleSelect' , valueOptions: ['Apply','Applied','Contacted', 'Interview', 'Rejected', 'Accepted']},
    { field: 'col4', headerName: 'Applied Date', width: 150, editable: true, type: 'dateTime' },
    { field: 'col5', headerName: 'Response Date', width: 150, editable: true, type: 'dateTime' },
    { field: 'col6', headerName: 'Notes', width: 500, editable: true, type: 'string' }
    // { field: 'col7', headerName: 'Actions', width: 100, editable: true, type: 'actions'}
    
  ];

  return(
    <div className = "grid">
      <JobForm />
      <div style={{ height: 300, width: '80%', margin : 0}}>
        <Button sx={{ mb: 5 }} onClick={() => setCheckboxSelection(!checkboxSelection)}/>
        <DataGrid 
        sx={{ 
          m: 1,
          bgcolor:'#edede9',
          border:3, 
          borderColor: '#cacac7',
          borderRadius: '16px', 
          left: '12%', bottom: '10%',
          fontFamily:'Arvo',
          fontColor:'#000000'
        }} 
          class = 'grid' rows={rows} columns={columns} checkboxSelection={checkboxSelection} experimentalFeatures={{ newEditingApi: true }
          }/>
      </div>
    </div>
  );
}

export default MainComponent