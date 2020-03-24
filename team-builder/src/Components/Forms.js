import React, {useState} from 'react';



function Form(props) {
    return (
        <form>
            <label>Full name
                <input 
                    onChange={props.inputThatIsChanging}
                    value={props.formValues.fullName}
                    name='fullName'
                    type='text'
                />
            </label>

            <label>email
                <input 
                    onChange={props.inputThatIsChanging}
                    value={props.formValues.email}
                    name='email'
                    type='text'
                />
            </label>

            <label>role
                <input 
                    onChange={props.inputThatIsChanging}
                    value={props.formValues.role}
                    name='role'
                    type='text'
                />
            </label>
        </form>
    )
}

export default Form;