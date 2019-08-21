import React, { useState } from "react";


const Form = props => {
    const [member, setMember] = useState({ name: "", role: "", email: "" })
    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value});
    }
    const handleSubmit = event =>{
        event.preventDefault();
        props.addNewMember({...member});
        setMember({ name: "", role: "", email: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                placeholder="your name"
                value={member.name}
                onChange={handleChange}
            />
            <label htmlFor="role">Role: </label>
            <input 
                type="text"
                name="role"
                placeholder="your role"
                value={member.role}
                onChange={handleChange}
            />
            <label htmlFor="email">Email: </label>
            <input 
                type="text"
                name="email"
                placeholder="abc@email.com"
                value={member.email}
                onChange={handleChange}
            />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default Form;