import React, {useState} from 'react';
import './MainComponent.css'
import Button from '@mui/material/Button';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function MainComponent(){
  const [checkboxSelection, setCheckboxSelection] = useState(true);

  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Company Name', width: 150 , editable: true },
    { field: 'col2', headerName: 'Company Name', width: 150, editable: true  },
    { field: 'col3', headerName: 'Column 2', width: 150, editable: true  },
    
  ];

  return(
    <div class = "grid">
      <div style={{ height: 300, width: '95%',}}>
      <Button sx={{ mb: 2 }} onClick={() => setCheckboxSelection(!checkboxSelection)}/>
        <DataGrid sx={{ m: 1, border:5, borderColor: 'grey.500',borderRadius: '16px', left: '2%',  }} class = 'grid' rows={rows} columns={columns} checkboxSelection={checkboxSelection} experimentalFeatures={{ newEditingApi: true }}/>
      </div>
    </div>
  );
}

export default MainComponent