import React, { useState } from 'react';
import users from '../mock/data';

function TransactionPage() {
  const [form, setForm] = useState({ cpf: '', name: '', amount: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users[0]; // Mock: Selecionar o primeiro usuário
    if (form.amount > user.balance) {
      setMessage('Saldo insuficiente!');
    } else {
      user.balance -= form.amount;
      user.transactions.push({
        id: user.transactions.length + 1,
        type: "PIX",
        amount: -form.amount,
        date: new Date().toISOString().split('T')[0],
      });
      setMessage('Transferência realizada com sucesso!');
    }
  };

  return (
    <div>
      <h1>Realizar Transferência</h1>
      <form onSubmit={handleSubmit}>
        <label>
          CPF/CNPJ:
          <input type="text" name="cpf" value={form.cpf} onChange={handleChange} />
        </label>
        <label>
          Nome do Favorecido:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Valor a Transferir:
          <input type="number" name="amount" value={form.amount} onChange={handleChange} />
        </label>
        <button type="submit">Transferir</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default TransactionPage;