export default function handler(req, res) {
    const transactions = [
      { id: 1, amount: 50, description: 'Payment to John', date: '2024-07-01' },
      { id: 2, amount: 20, description: 'Received from Alice', date: '2024-07-05' },
      // mais transações
    ];
  
    res.status(200).json(transactions);
  }