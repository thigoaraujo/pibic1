const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para JSON
app.use(express.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rotas API
app.get('/api/projetos', (req, res) => {
    res.json([
        { id: 1, nome: 'Projeto Asa Norte', descricao: 'Descrição do projeto da Asa Norte' },
        { id: 2, nome: 'Projeto Cruzeiro', descricao: 'Descrição do projeto Cruzeiro' },
        { id: 3, nome: 'Projeto Elefante Branco', descricao: 'Descrição do Elefante Branco' },
    ]);
});

// Rota padrão (fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
