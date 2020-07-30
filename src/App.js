import React, {useState}  from 'react';

import AddBookForm from './components/AddBookForm'
// import AssignBookForm from './components/AssignBookForm'

import { Tabs, Tab } from 'react-bootstrap';


function App() {

  //hook to create state in functional component
      const [key, setKey] = useState('home');

      return(
        <div className="container">
            <h1>Library System</h1>
       
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}>
       
              <Tab eventKey="addBook" title="Add Book">
               
                <AddBookForm />
  
              </Tab>
  
  
              <Tab eventKey="assignBook" title="Assign Book">
  
              {/* <AssignBookForm/> */}
  
              </Tab>
           
            </Tabs>
       
        </div>
    );

  }

export default App;
