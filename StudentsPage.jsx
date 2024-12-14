import React, { useState } from 'react';
import AddMemberForm from '../components/AddMemberForm';
import MembersList from '../components/MembersList ';

const StudentsPage = () => {
    const [refresh, setRefresh] = useState(false);

    const handleAdd = () => {
        setRefresh(!refresh); 
    };
    

    return (
        <div>
            <h1>Students Management</h1>
            <AddMemberForm onAdd={handleAdd} />
            <MembersList key={refresh} />
        </div>
    );
};

export default StudentsPage;
