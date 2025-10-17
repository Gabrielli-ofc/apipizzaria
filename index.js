import express from 'express'


const app = express();

app.use(express.json());

    const PORTA = 3333;

    app.get('/', (request, response) => {

        response.json({ message: "Bem-vindo á API da Pizzaria Senac!"});
    });
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}. Acesse http://localhost:${PORTA}`);
});


const listaDeClientes = [
    {id: 1, nome: 'João Silva', email: 'João.silva@example.com' },
    {id: 2, nome: 'Maria Santos', email: 'Maria.santos@example.com' },
];

app.get('/clientes', (req, res) => {
    res.json(listaDeClientes);
});

app.get('/clientes/:id', (req, res) => {
    
    const idDoCliente = parseInt(req.params.id);

    const cliente = listaDeClientes.find(c => c.id === idDoCliente);

    if (cliente) {
    res.json(cliente);
} else {
    res.status(404).json({ mensagem: 'Cliente não encontrado.' });
}
});

app.post('/clientes', (re1, res) => {

    const novoCliente = req.body;

    console.log('Criamos um novo cliente:', novoCliente);

    res.json({ message: `Cliente ${novoCliente.nome} cadastrado com sucesso!`, data: novoCliente });
});

