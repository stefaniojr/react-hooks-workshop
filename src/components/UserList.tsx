import React, { useState, useEffect } from 'react';
import useUserData from './useUserData';

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserList: React.FC = () => {
    // const { users, loading, error } = useUserData(); // customized hook
    const [users, setUsers] = useState<IUser[]>([]);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        fetchData();

    }, [count]);

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;