import {Edit, NumberInput, SimpleForm, TextInput} from "react-admin";

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" multiline minRows={4}/>
            <NumberInput source="price" />
        </SimpleForm>
    </Edit>
)

export default ProductEdit;