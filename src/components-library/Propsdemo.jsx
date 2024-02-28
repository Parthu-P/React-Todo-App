import React from "react";
import DataGrid from "./DataGrid";

function Propsdemo() {
  return (
    <div className="container-fluid">
      <DataGrid
        Theme={'table-primary table-striped'}
        caption="Employee Table"
        field={["Firstname", "Lastname", "Designation"]}
        data={[
          { Firstname: "Raj", Lastname: "Kumar", Designation: "Manager" },
          { Firstname: "Raj", Lastname: "Kumar", Designation: "Manager" },
        ]}
      />
      <DataGrid
        Theme={"table-warning table-bordered"}
        caption="Product Table"
        field={["Firstname", "Lastname"]}
        data={[
          { Firstname: "Raj", Lastname: "Kumar"},
          { Firstname: "Raj", Lastname: "Kumar"},
        ]}
      />
    </div>
  );
}

export default Propsdemo;
