import React from "react";

function DataGrid(props) {
  return (
    <div className="container-fluid">
      <table className={`table table-hover caption-top ${props.Theme}`}>
        <caption>{props.caption}</caption>
        <thead>
          <tr>
            {props.field.map((field) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item}>
              {Object.keys(item).map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;
