import {Datagrid, List, TextField} from "react-admin";

const ListEmployees = () => (
  <List>
    <Datagrid>
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="date_of_birth" />
    </Datagrid>
  </List>
)

export default ListEmployees