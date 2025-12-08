import { useState } from 'react';
import './App.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        if (password.length < 6) {
            setError('El password debe tener al menos 6 caracteres.');
            return;
        }
        if (password !== confirmPassword) {
            setError('El password y la confirmación deben ser iguales.');
            return;
        }
        setError('');
        alert('Formulario enviado correctamente ✅');
    };
    return (
        <main className="register">
            <h1>Login</h1>
            <div className="container-register">
                <form className="register-form" onSubmit={handleSubmit}>
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
                    <label htmlFor="confirmPassword">Confirmar Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="register-button">Login</button>
                </form>
            </div>
        </main>
    );
}

export default Register;
