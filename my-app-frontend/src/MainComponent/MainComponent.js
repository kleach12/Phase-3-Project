import React, {useState} from 'react';
import './MainComponent.css'
import JobForm from './JobForm';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

function MainComponent({jobsList, newJob}){
  const [checkboxSelection, setCheckboxSelection] = useState(true);

  const jobRows = jobsList.map((row) => ({
    id: row.id,
    position: row.position,
    company: row.company,
    status: row.status,
    applieddate: row.applieddate,
    responsedate: row.responsedate,
    notes: row.notes
  }))
  
  const columns: GridColDef[] = [
    { field: 'position', headerName: 'Position', width: 200 , editable: true },
    { field: 'company', headerName: 'Company', width: 200, editable: true  },
    { field: 'status', headerName: 'Status', width: 150, editable: true, type: 'singleSelect' , valueOptions: ['Apply','Applied','Contacted', 'Interview', 'Rejected', 'Accepted']},
    { field: 'applieddate', headerName: 'Applied Date', width: 150, editable: true, type: 'date', 
    valueFormatter: ({ value }) => {
      if(value === null || value === 'Invalid Date'){
        return ""
      } else{
        let newDate = new Date(value)
        const correctDate =  new Date( newDate.getTime() - newDate.getTimezoneOffset() * -60000 );
        return correctDate.toLocaleDateString()
      }
    }
  
    },
    { field: 'responsedate', headerName: 'Response Date', width: 150, editable: true, type: 'date' },
    { field: 'notes', headerName: 'Notes', width: 500, editable: true, type: 'string' }
    // { field: 'cactions', headerName: 'Actions', width: 100, editable: true, type: 'actions'}
    
  ];

  return(
    <div className = "grid">
      <JobForm newJob={newJob}/>
      <div style={{ height: 500, width: '80%'}}>
        <Button sx={{ mb: 5 }} onClick={() => setCheckboxSelection(!checkboxSelection)}/>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
            sx={{ 
              height: '100%',
              m: 1,
              bgcolor:'#edede9',
              border:3,
              Bottom:20,
              borderColor: '#cacac7',
              borderRadius: '16px', 
              left: '12%',
              fontFamily:'Arvo',
              fontColor:'#000000'
            }} 
              class = 'grid' 
              rows={jobRows} 
              columns={columns} 
              checkboxSelection={checkboxSelection} 
              experimentalFeatures={{ newEditingApi: true }}
              initialState ={{
                sorting:{ sortModel: [{field: "applieddate" , sort: "asc"}]}}}
              />

          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent