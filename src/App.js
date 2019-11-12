import React from 'react';
import './App.css';
import Menubar from './component/Menubar'
import Tables from './component/Tables';
import Forms from './component/Forms';

function App() {
  return (
    <React.Fragment>
      <div className="container khoi">
        <div className="">
          <h1 className="display-3">Database Users</h1>
        </div>
       
      </div>
     
      <div className="container-fluid mt-3 pt-3">
      <Menubar></Menubar>
        <div className="row">
          <Tables></Tables>
          <Forms></Forms>
        </div>
      </div>
    </React.Fragment>





  );
}

export default App;
