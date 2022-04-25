import React from 'react'
import styled from 'styled-components'

function DeleteContact() {
    const [forminput, setFormInput] = React.useState("")

    function handleChange(e) {
        setFormInput(e.target.value);
    }
    function handleSubmit(e) {
      //  e.preventDefault();
        console.log(forminput);
        fetch(`https://localhost:44350/api/Contact/${forminput}`,{
            method:'DELETE'
        }).then((res) => {
            res.json().then((res) => {
                console.log(res);
            })
        })

        setFormInput("");
       
    }

  return (
    <Form onSubmit={handleSubmit}>
         <Input
        autoFocus
        type='text'
        name='id'
        placeholder='input contact Id'
        onChange={handleChange}
        value={forminput.id}
        required
        />
        <Button>Delete Contact</Button>
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
    cursor:pointer;
`

const Form = styled.form`
    max-width:250px;
    padding:10px;
    background-color:#bb1200;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    `
export default DeleteContact