import React, {useState} from 'react';



function Form(props) {
    return (
    <form>

        <label> Role: 
        <select>
            <option>Backend Engineer</option>
            <option>Frontend Engineer</option>
            <option>UX Designer</option>
            <option>IOS Engineer</option>
            <option>Android Engineer</option>
        </select>
        </label><br />

        <label> Full Name:
            <input 
                name='fullName'
            />
        </label><br />

        <label> E-mail:
            <input 
                name='email'
            />
        </label><br />

        <input type='submit' />
    </form>
    )
}

export default Form;