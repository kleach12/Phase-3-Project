import React, {useState} from 'react';
import './MainComponent.css'
import JobForm from './JobForm';
import { DataGrid, GridActionsCellItem, GridRowModes} from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faSave, faCancel} from '@fortawesome/free-solid-svg-icons'



function MainComponent({jobsList, newJob, deleteItem}){
  const [rowModesModel, setRowModesModel] = useState({});


  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = false;
  };

  const handleDelete = (id) => () => {
    deleteItem(id)
  }

  const handleEdit = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }
  const handleSave = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleCancel = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View , ignoreModifications: true} })
  }

  const rows = jobsList.map((row) => ({
    id: row.id,
    position: row.position,
    company: row.company,
    status: row.status,
    applieddate: row.applieddate,
    responsedate: row.responsedate,
    notes: row.notes
  }))

  function processRowUpdate(params){
    console.log(params)
    fetch(`http://localhost:9292/edit/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        position: params.position,
        company: params.company,
        status: params.status,
        applieddate: params.applieddate,
        responsedate: params.responsedate,
        notes:params.notes
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }


  function handleProcessRowUpdateError(){
    console.log('Failed to Edit')
  }

  
  const columns  = [
    { field: 'position', headerName: 'Position', width: 250, editable: true},
    { field: 'company', headerName: 'Company', width: 200, editable: true},
    { field: 'status', headerName: 'Status', width: 150, type: 'singleSelect' , valueOptions: ['Apply','Applied','Contacted', 'Interview', 'Rejected', 'Accepted'], editable: true},
    { field: 'applieddate', headerName: 'Applied Date', width: 150, type: 'date',  editable: true,
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
    { field: 'responsedate', headerName: 'Response Date', width: 150, type: 'date', editable: true }, 
    { field: 'notes', headerName: 'Notes', width: 500, type: 'string', editable: true},
    { field: 'actions', width: 100, type: 'actions',
      getActions: ({id}) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode){
          return[
            <GridActionsCellItem icon={<FontAwesomeIcon icon={faSave}/>} label = "Edit" onClick={handleSave(id)} />,
            <GridActionsCellItem icon={<FontAwesomeIcon icon={faCancel}/>} label = "Delete" onClick={handleCancel(id)} />
          ]
        }
          return[
            <GridActionsCellItem icon={<FontAwesomeIcon icon={faPen}/>} label = "Edit" onClick={handleEdit(id)} />,
            <GridActionsCellItem icon={<FontAwesomeIcon icon={faTrash}/>} label = "Delete" onClick={handleDelete(id)} />
          ]
      }
    }
    
  ];



  return(
    <div className = "grid">
      <JobForm newJob={newJob}/>
      <div style={{ height: 500, width: '80%'}}>
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
              rows={rows}
              columns={columns} 
              editMode = "row"
              processRowUpdate={processRowUpdate}
              onProcessRowUpdateError={handleProcessRowUpdateError}
              rowModesModel = {rowModesModel}
              onRowEditStart={handleRowEditStart}
              onRowEditStop={handleRowEditStop}
              experimentalFeatures={{ newEditingApi: true }}
              initialState ={{sorting:{ sortModel: [{field: "applieddate" , sort: "asc"}]}}}
              />

          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent

// // 	
// Callback fired when the cell changes are committed.

// Signature:
// function(params: GridCellEditCommitParams, event: MuiEvent<MuiBaseEvent>, details: GridCallbackDetails) => void
// params: With all properties from GridCellEditCommitParams.
// event: The event that caused this prop to be called.