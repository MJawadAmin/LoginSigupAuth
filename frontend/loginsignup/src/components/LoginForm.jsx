import { useState } from 'react';
import { login } from '../services/api';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            const { token, user } = response.data;

            // Store token in local storage
            localStorage.setItem('authToken', token);
            alert(`Welcome back, ${user.name}!`);
        } catch (err) {
            setError(err.response.data.message || 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white w-1/2 items-center justify-center mx-auto rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
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
            <button type="submit" className="w-24 bg-blue-500 text-white py-2 rounded">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
