import {Datagrid, EditButton, List, TextField} from 'react-admin';

const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <EditButton />
        </Datagrid>
    </List>
)

export default ProductList;