import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Forms'

var initialTeam = [
  {id: uuidv4(), fullName: 'Kory Hacker', email: 'kory.hacker@gmail.com', role: 'Da brains'}

]

function App() {

  
  return (
    <div className="App">

      <Form />

      <h1>Team List</h1>
      {initialTeam.map(member => 
        <div key={member.id}> {member.fullName}, {member.email}, {member.role} </div>
        )}
    </div>
  );
}

export default App;
