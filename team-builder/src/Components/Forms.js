import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


function Form(props) {

    console.log(props)
    const [formData, setFormData] = useState({
        role: '',
        fullName: '',
        email: ''
    })

    console.log(formData)

    const onInputChange = event => {

        const inputThatChanged = event.target.name
        const newValueForInput = event.target.value
        setFormData({
            ...formData,
            [inputThatChanged]: newValueForInput,
        })
    }
    
    
    const onFormSubmit = event => {
        event.preventDefault()

        const newMember = {
            id: uuidv4(),
            role: formData.role,
            fullName: formData.fullName,
            email: formData.email,
        }
        
        props.setMembers([...props.members, newMember])
    }

    return (
    <form onSubmit={onFormSubmit}>

        <label> Role: 
        <select onChange={onInputChange} name="role" value={props.role} defaultValue="">
            <option></option>
            <option>Backend Engineer</option>
            <option>Frontend Engineer</option>
            <option>UX Designer</option>
            <option>IOS Engineer</option>
            <option>Android Engineer</option>
        </select>
        </label><br />

        <label> Full Name:
            <input 
                onChange={onInputChange}
                value={props.fullName}
                name='fullName'
            />
        </label><br />

        <label> E-mail:
            <input 
                onChange={onInputChange}
                value={props.email}
                name='email'
            />
        </label><br />

        <input type='submit' />
    </form>
    )
}

export default Form;