const users = [
    {
      id: 1,
      name: "Usuário Teste",
      cpf: "123.456.789-10",
      balance: 1000.0,
      password: "senha123",
      transactions: [
        { id: 1, type: "PIX", amount: -100, date: "2024-12-01" },
        { id: 2, type: "TED", amount: 500, date: "2024-12-03" },
      ],
    },
  ];
  
  export default users;