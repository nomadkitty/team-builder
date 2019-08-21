import React, {useState} from 'react';

import TeamMember from "./components/TeamMember";
import Form from "./components/Form";
import data from './data'
import './App.css';

function App() {
  const [members, setMembers]=useState(data);
  const addNewMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
        <Form addNewMember={addNewMember} />
        <TeamMember memberList={members} />
    </div>
  );
}

export default App;
