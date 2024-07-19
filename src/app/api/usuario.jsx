let usuario = { nome: 'Usuário', email: 'usuario@example.com' };

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ usuario });
  } else if (req.method === 'POST') {
    usuario = req.body;
    res.status(200).json({ usuario });
  }
}
