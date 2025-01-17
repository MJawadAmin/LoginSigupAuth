import { useState } from 'react';
import { signup } from '../services/api';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup({ name, email, password });
            alert(response.data.message || 'Signup successful!');
        } catch (err) {
            setError(err.response.data.message || 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded mx-auto w-1/2 items-center justify-center shadow-md">
            <h2 className="text-xl font-bold mb-4">Signup</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-2 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-2 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
                Signup
            </button>
        </form>
    );
};

export default SignupForm;
