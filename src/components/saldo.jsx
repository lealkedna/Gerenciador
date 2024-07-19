import { useEffect, useState } from 'react';

export default function Saldo() {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    fetch('@/api/saldo')
      .then(response => response.json())
      .then(data => setSaldo(data.saldo));
  }, []);

  return <div>Saldo Atual: R${saldo}</div>;
}