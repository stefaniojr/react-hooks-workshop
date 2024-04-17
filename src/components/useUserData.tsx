import { useState, useEffect } from 'react';

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}

const useUserData = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Erro ao buscar usuários');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                //error
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { users, loading, error };
};

export default useUserData;
;
