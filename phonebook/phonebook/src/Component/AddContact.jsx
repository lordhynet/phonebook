import React from 'react'
import styled from 'styled-components'
import apiRequest from '../apiRequest'

function AddContact() {

    const API_URL = "https://localhost:44350/api/Contact";

    const [forminfo, setForminfo] = React.useState( {
        name:'', email:'', phonenumber:'',address:''
    })

    function handleChange(e) {
       // evt.preventDefault();
       
        setForminfo(prevData => {
            return {
                ...prevData,
                [e.target.name] : e.target.value 
            }
        })
}
    async function handleSubmit(event) {
        event.preventDefault();
       
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(forminfo)
        }

        const result = await apiRequest(API_URL, postOptions);
        if (result) console.log(result);
        
        setForminfo( {
            name:'', email:'', phonenumber:'',address:''
        });
    }   

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Contact form</h2>
        <Input
        autoFocus
        type='text'
        name="name"
        placeholder='Fullname'
        onChange={handleChange}
        value={forminfo.name}
        required
        />
       
        <Input
        autoFocus
        type='email'
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={forminfo.email}
        required
        />
       
        <Input
        autoFocus
        type="number"
        name='phonenumber'
        placeholder='phonenumber'
        onChange={handleChange}
        value={forminfo.phonenumber}
        required
        />
       
        <Input
        autoFocus
        type='text'
        name='address'
        placeholder='address'
        onChange={handleChange}
        value={forminfo.address}
        required
        />

        <Button
        >Add Contact</Button>

    </Form>
  )
}

const Input = styled.input`
    margin-bottom:10px;
    height:30px;
    text-indent:10px;
    border:1px solid #444;
    border-radius:5px;
    width:100%;
    
   
`
const Button =styled.button`
    padding:5px;
    width:150px;
    border:none;
    border-radius:5px;
`

const Form = styled.form`
    max-width:250px;
    padding:10px;
    background-color:teal;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    `

export default AddContact