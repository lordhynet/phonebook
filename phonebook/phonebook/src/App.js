
import './App.css';
import Phonebook from './Component/Phonebook';
import React from 'react'
import AddContact from './Component/AddContact';
import DeleteContact from "./Component/DeleteContact"
import styled from "styled-components"

function App() {
  return (
    <>
   
    <Section>
    <AddContact />
    <DeleteContact />
    </Section>
   <Phonebook />
   </>
  );
}

const Section = styled.div`
  margin:0 auto;
  display:flex;
  justify-content:space-around;
  width:40vw;
`

export default App;
