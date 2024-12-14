import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddMemberForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        parent_id: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/students', formData);
            Swal.fire('Success', 'Student added successfully!', 'success');
            onAdd(response.data);
        } catch (error) {
            Swal.fire('Error', 'Failed to add student', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <input name="age" placeholder="Age" onChange={handleChange} required />
            <input name="parent_id" placeholder="Parent ID" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddMemberForm;
