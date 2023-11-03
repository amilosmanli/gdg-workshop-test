import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'

const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" multiline minRows={4}/>
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
)

export default ProductCreate
