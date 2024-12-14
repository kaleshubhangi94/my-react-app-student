import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Pagination } from 'react-bootstrap';

const MembersList = () => {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/students?page=${page}&limit=${limit}`);
            console.log("data---",data);
            
            setStudents(data.students);
            setTotal(data.total);
        };
        fetchData();
    }, [page]);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.student_id}>
                            <td>{student.student_id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                {[...Array(Math.ceil(total / limit)).keys()].map((num) => (
                    <Pagination.Item key={num} active={num + 1 === page} onClick={() => setPage(num + 1)}>
                        {num + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default MembersList;
