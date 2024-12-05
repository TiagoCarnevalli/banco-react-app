import React, { useState, useEffect } from 'react';
import users from '../mock/data';

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = users[0]; // Mock: Selecionar o primeiro usuário
    setUser(loggedInUser);
  }, []);

  if (!user) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Bem-vindo ao Banco React</h1>
      <p>Saldo atual: R$ {user.balance.toFixed(2)}</p>
      <p>
        <strong>Últimas Transações:</strong>
      </p>
      <ul>
        {user.transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: R$ {transaction.amount} em {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;