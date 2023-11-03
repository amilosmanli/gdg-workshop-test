import {
  Create,
  DateInput,
  FormDataConsumer,
  ImageField,
  ImageInput,
  NumberInput,
  SelectInput,
  TabbedForm,
  TextInput
} from "react-admin";


const CreateEmployee = () => {
  const transform = (data) => {
    const sanitizedData = {};
    for (const key in data) {
      if ((typeof data[key] === "string" && data[key].length === 0) || data[key] === undefined) continue;
      sanitizedData[key] = data[key];
    }
    console.log('SANITIZED DATA', sanitizedData)
    return sanitizedData;
  }
  return <Create transform={transform}>
    <TabbedForm>
      <TabbedForm.Tab label="Employee Details">
        <TextInput source="first_name"/>
        <TextInput source="last_name"/>
        <TextInput source="email"/>
        <TextInput source="phone"/>
        <DateInput source="date_of_birth"/>
        <SelectInput source="gender" choices={[
          {id: 'male', name: 'Male'},
          {id: 'female', name: 'Female'},
        ]}/>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Employment Details">
        <TextInput source="employee_number"/>
        <DateInput source="hired_date"/>
        <DateInput source="terminated_date"/>
        <SelectInput source="employment_status" choices={[
          {id: 'active', name: 'Active'},
          {id: 'inactive', name: 'Inactive'},
          {id: 'terminated', name: 'Terminated'},
          {id: 'on_leave', name: 'On Leave'},
        ]}/>
        <TextInput source="job_title"/>
        {/*reference to roles*/}
        <TextInput source="role"/>
        {/*reference to departments*/}
        <TextInput source="department"/>
        <NumberInput source="annual_salary"/>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Employee Address">
        <TextInput source="address_line_1"/>
        <TextInput source="address_line_2"/>
        <TextInput source="city"/>
        <TextInput source="postal_code"/>
        <TextInput source="country"/>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Emergency Contact">
        <TextInput source="emergency_contact_name"/>
        <TextInput source="emergency_contact_phone"/>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Additional Information">
        <ImageInput source="profile_picture" accept="image/*">
          <ImageField source="src" title="title"/>
        </ImageInput>
        <TextInput source="notes" multiline rows={6} fullWidth/>
      </TabbedForm.Tab>
    </TabbedForm>
  </Create>
}
export default CreateEmployee