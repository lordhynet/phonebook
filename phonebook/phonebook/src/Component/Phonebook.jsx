import React from 'react'
import AddContact from './AddContact'
import styled from 'styled-components'

function Phonebook() {
  React.useEffect(() => {
    getContacts();
  },[])

  function handleContacts() {
    getContacts();
  }

  function getContacts() {
    fetch("https://localhost:44350/api/Contact")
    .then(res => res.json())
    .then(data => setContact(data))
  }
  
  const [contact, setContact] = React.useState([])

  
  return (
    <Container>
      <Wrapper>
     <GetButton onClick={handleContacts}>Get Contacts</GetButton>
      <Contacts>
         {contact.map((item) => {
          return(
            <Card>
            <CardDetails key = {item.id}>
            <h1>Id: {item.id}</h1>
            <h2>Name: {item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Number:{item.phonenumber}</p>
            <p>Address: {item.address}</p>
            </CardDetails>
          </Card>
          )
        }) }
        
      </Contacts>
    </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  margin-top:10px;
`

const Wrapper = styled.div`
  border:2px gray solid;
  width:600px;
  min-height:60vh;
  margin:0 auto;
  border-radius:10px;
`
const Contacts = styled.div`
  max-width:550px;
  padding:20px;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  
`

const Card = styled.div`
  width:200px;
  min-height:150px;
  ${'' /* border:2px solid blue; */}
  margin-right:15px;
  margin-bottom:10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const CardDetails = styled.div`
  padding:10px;
`

const GetButton = styled.button`
  border:none;
  width:90%;
  padding:15px;
  margin:10px;
  border-radius:10px;
  align-item:center;
  cursor: pointer;
`
export default Phonebook