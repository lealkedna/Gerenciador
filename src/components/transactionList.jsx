// import React, { useEffect, useState } from 'react';
// import styles from "@/styles/TransactionList.module.css";

// const TransactionList = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/transactions')
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Erro na resposta da API');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setTransactions(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Carregando...</p>;
//   }

//   if (error) {
//     return <p>Erro: {error}</p>;
//   }

//   return (
//     <div className={styles.transactionList}>
//       {transactions.map((transaction) => (
//         <div key={transaction.id} className={styles.transaction}>
//           <p>{transaction.description}</p>
//           <p>{transaction.amount}</p>
//           <p>{transaction.date}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TransactionList;
