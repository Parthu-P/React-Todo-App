import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useFormik } from "formik";

function Todo() {
  const [appointments, setAppointments] = useState([]);

  const [toggleAdd, setToggleAdd] = useState({ display: "bllock" });

  const [toggleEdit, setToggleEdit] = useState({ display: "none" });

  const [editAppointment, setEditAppointment] = useState([
    { Title: "", Date: new Date(), description: "" },
  ]);

  const formik = useFormik({
    initialValues: {
      Id: appointments.length+1,
      Titlt: "",
      description: "",
      Date: new Date(),
    },
    onSubmit: (appointment) => {
      axios.post("http://127.0.0.1:4000/addtask", appointment);
      alert("Appointment Added");
    },
  });

  const editFormik = useFormik({
    initialValues: {
      Title: editAppointment[0].Title,
      Date: `${editAppointment[0].Date.slice(
        0,
        editAppointment[0].Date.indexOf("T")
      )}`,
      description: editAppointment[0].description,
    },
    enableReinitialize: true,
    onSubmit: (appointment) => {
      axios.put(
        `http://127.0.0.1:4000/edittask/${editAppointment[0].Id}`,
        appointment
      );
      alert("Appointment modified");
    },
  });

  function LoadAppointments() {
    axios.get("http://127.0.0.1:4000/appointments").then((response) => {
      setAppointments(response.data);
    });
  }

  function handleDeleteClick(event) {
    var id = parseInt(event.target.value);
    var flag = window.confirm("Are you sure\nWant to delete?");
    if (flag === true) {
      axios
        .delete(`http://127.0.0.1:4000/appointments/${id}`)
        .then((response) => {
          setEditAppointment(response.data);
        });
    }
  }

  useEffect(() => {
    LoadAppointments();
  }, []);

  function handleEditClick(id) {
    setToggleAdd({ display: "none" });
    setToggleEdit({ display: "block" });
    axios.get(`http://127.0.0.1:4000/deletetask/${id}`);
  }
  function handleCancelClick() {
    setToggleAdd({ display: "block" });
    setToggleEdit({ display: "none" });
  }

  return (
    <div className="container-fluid">
      <h3 className="text-center">ToDo-App</h3>
      <header>
        <div aria-label="AddAppointment" style={toggleAdd}>
          <label className="form-label fw-bold">Add new Appointment</label>
          <div>
            <form className="w-50" onSubmit={formik.handleSubmit}>
              <div className="d-flex">
                <input
                  name="Title"
                  onChange={formik.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="title name"
                />
                <input
                  name="Date"
                  type="date"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mt-2">
                <lable className="form-lable fw-bold">Description</lable>
                <textarea
                  name="description"
                  className="form-control"
                  onChange={formik.handleChange}
                ></textarea>
                <div className="mt-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div aria-label="EditAppointment" style={toggleEdit}>
          <label className="form-label fw-bold">Edit Appointment</label>
          <div>
            <form className="w-50" onSubmit={editFormik.handleSubmit}>
              <div className="d-flex">
                <input
                  name="Title"
                  value={editFormik.values.Title}
                  onChange={editFormik.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="title name"
                />
                <input
                  name="Date"
                  type="date"
                  className="form-control"
                  value={editFormik.values.Date}
                  onChange={editFormik.handleChange}
                />
              </div>
              <div className="mt-2">
                <lable className="form-lable fw-bold">Description</lable>
                <textarea
                  name="description"
                  className="form-control"
                  value={editFormik.values.description}
                  onChange={editFormik.handleChange}
                ></textarea>
                <div className="mt-2">
                  <button className="btn btn-success">Save</button>
                  <button
                    type="button"
                    onClick={handleCancelClick}
                    className="btn btn-success ms-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <main className="mt-4">
        <div>
          <label className="form-lable fw-bold">Your Appointments</label>
          <div className="d-flex flex-wrap">
            <div>
              {appointments.map((appointment) => {
                <div className="alert alert-success w-25" key={appointment.Id}>
                  <button
                    className="btn btn-close"
                    value={appointment.Id}
                    onClick={handleDeleteClick}
                  ></button>
                  <div className="h4 alert-title">{appointment.Title}</div>
                  <p>{appointment.description}</p>
                  <span className="bi bi-calender"></span>
                  {appointment.Date.slice(0, appointment.Date.indexOf("T"))}
                  <div className="mt-3">
                    <button
                      onClick={() => {
                        handleEditClick(appointment.Id);
                      }}
                      className="bi bi-pen-fill btn btn-warning"
                    ></button>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Todo;
