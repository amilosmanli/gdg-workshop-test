import {Admin, Resource} from 'react-admin'
import {FirebaseAuthProvider, FirebaseDataProvider} from "react-admin-firebase";

import products from './resources/products'
import {CreateEmployee, ListEmployees} from "./resources/employees";


const firebaseConfig = {
    apiKey: "AIzaSyCU_a_Y7DjNX7UBvJe1NiXguFGnXYhWRKg",
    authDomain: "gdg-workshop-test.firebaseapp.com",
    projectId: "gdg-workshop-test",
    storageBucket: "gdg-workshop-test.appspot.com",
    messagingSenderId: "553840661384",
    appId: "1:553840661384:web:72c8fcec70d156c75a603d",
    measurementId: "G-ZYKFTZBG0V"
};


const options = {
    logging: true,
    rootRef: 'root/gdg_workshop_test',
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);


function App() {
  return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
          <Resource name="products" {...products} />
          <Resource name="employees" create={CreateEmployee} list={ListEmployees}/>
      </Admin>
  )
}

export default App
