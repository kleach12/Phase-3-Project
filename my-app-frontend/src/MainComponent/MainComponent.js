import React from "react";
import "./MainComponent.css";
import JobForm from "./JobForm";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function MainComponent({ jobsList, setJobsList, newJob, deleteItem }) {
  const handleDelete = (id) => () => {
    deleteItem(id);
  };

  const jobRows = jobsList.map((row) => ({
    id: row.id,
    position: row.position,
    company: row.company,
    cat: row.cat,
    status: row.status,
    applieddate: row.applieddate,
    responsedate: row.responsedate,
    notes: row.notes,
  }));

  const processRowUpdate = (params) => {
    fetch(`http://localhost:9292/edit/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        position: params.position,
        company: params.company,
        cat: params.cat,
        status: params.status,
        applieddate: params.applieddate,
        responsedate: params.responsedate,
        notes: params.notes,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    const newParams = { ...params, isNew: false };
    setJobsList(
      jobsList.map((row) => (row.id === newParams.id ? newParams : row))
    );
    return newParams;
  };

  function handleProcessRowUpdateError() {
    console.log("Failed to Edit");
  }

  const columns = [
    { field: "position", headerName: "Position", width: 250, editable: true },
    { field: "company", headerName: "Company", width: 200, editable: true },
    {
      field: "cat",
      headerName: "Type",
      width: 150,
      type: "singleSelect",
      valueOptions: ["MANGA", "MidSize", "FinTech", "BioTech", "Startup"],
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      type: "singleSelect",
      valueOptions: [
        "Apply",
        "Applied",
        "Contacted",
        "Interview",
        "Rejected",
        "Accepted",
      ],
      editable: true,
    },
    {
      field: "applieddate",
      headerName: "Applied Date",
      width: 150,
      type: "date",
      editable: true,
      valueFormatter: ({ value }) => {
        if (value === null || value === "Invalid Date") {
          return "";
        } else {
          let newDate = new Date(value);
          const correctDate = new Date(
            newDate.getTime() - newDate.getTimezoneOffset() * -60000
          );
          return correctDate.toLocaleDateString();
        }
      },
    },
    {
      field: "responsedate",
      headerName: "Response Date",
      width: 150,
      type: "date",
      editable: true,
      valueFormatter: ({ value }) => {
        if (value === null || value === "Invalid Date") {
          return "";
        } else {
          let newDate = new Date(value);
          const correctDate = new Date(
            newDate.getTime() - newDate.getTimezoneOffset() * -60000
          );
          return correctDate.toLocaleDateString();
        }
      },
    },
    {
      field: "notes",
      headerName: "Notes",
      width: 400,
      type: "string",
      editable: true,
    },
    {
      field: "actions",
      width: 50,
      type: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<FontAwesomeIcon icon={faTrash} />}
            label="Delete"
            onClick={handleDelete(id)}
          />,
        ];
      },
    },
  ];

  return (
    <div className="grid">
      <JobForm newJob={newJob} />
      <div style={{ height: 500, width: "80%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              sx={{
                height: "100%",
                m: 1,
                bgcolor: "#edede9",
                border: 3,
                Bottom: 20,
                borderColor: "#cacac7",
                borderRadius: "16px",
                left: "12%",
                fontFamily: "Arvo",
                fontColor: "#000000",
              }}
              class="grid"
              rows={jobRows}
              columns={columns}
              processRowUpdate={processRowUpdate}
              onProcessRowUpdateError={handleProcessRowUpdateError}
              experimentalFeatures={{ newEditingApi: true }}
              initialState={{
                sorting: {
                  sortModel: [{ field: "applieddate", sort: "desc" }],
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
