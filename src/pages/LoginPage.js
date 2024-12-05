import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import users from '../mock/data';

function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.name === form.username && u.password === form.password
    );
    if (user) {
      navigate('/home');
    } else {
      setError('Usuário ou senha inválidos!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="password" value={form.password} onChange={handleChange} />
        </label>
        <button type="submit">Entrar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;