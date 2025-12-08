import { useState } from 'react';
import './App.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        if (password.length < 6) {
            setError('El password debe tener al menos 6 caracteres.');
            return;
        }
        setError('');
        alert('Autentificación Exitosa ✅');
    };
    return (
        <main className="login">
            <h1>Login</h1>
            <div className="container-login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </main>
    );
}


export default Login;
