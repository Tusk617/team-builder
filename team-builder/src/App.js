import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Forms'

var initialTeam = [
  {id: uuidv4(), fullName: 'Kory Hacker', email: 'kory.hacker@gmail.com', role: 'Frontend'}

]

function App() {
  const [members, setMembers] = useState(initialTeam);
console.log(members);
  
  
  return (
    <div className="App">

      <Form 
        setMembers={setMembers}
        members={members}
      
      />

      <h1>Team List</h1>
      {members.map(mem => 
        <div key={mem.id}> {mem.fullName}, {mem.email}, {mem.role} </div>
        )}
    </div>
  );
}

export default App;
