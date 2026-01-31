import { useEffect, useState, useCallback } from "react";
import axios from "../api/axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  
  const fetchUsers = useCallback(async () => {
    try {
      const res = await axios.get("/users");
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      await fetchUsers();
    };
    loadUsers();
  }, [fetchUsers]);

  const actionTemplate = (rowData) => (
    <div className="">
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-warning mr-2"
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button 
        icon="pi pi-trash" 
        className="p-button-sm p-button-danger mr-2" 
      />
    </div>
  );

  return (
    <div className="p-4">
      <div className="flex justify-content-between mb-2 ">
        <h2>User List</h2>
        <Button
          onClick={() => navigate("/add")}
          label="Add User"
          icon="pi pi-plus"
          className="p-button-success"
          size="small"
        />
      </div>
      <DataTable
        value={users}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={5}
        size="small"
        filterDisplay="row"
      >
        <Column
          filter
          filterPlaceholder="search"
          field="name"
          header="Name"
        ></Column>
        <Column
          filter
          filterPlaceholder="search"
          field="username"
          header="Username"
        ></Column>
        <Column
          filter
          filterPlaceholder="search"
          field="email"
          header="Email"
        ></Column>
        <Column
          filter
          filterPlaceholder="search"
          field="age"
          header="Age"
        ></Column>
        <Column
          filter
          filterPlaceholder="search"
          field="Action"
          header="Action"
          body={actionTemplate}
          style={{ width: "13%" }}
        ></Column>
      </DataTable>
    </div>
  );
}