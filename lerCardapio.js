import fs from 'node:fs/promise'

async function lerCardapio() {
    console.log('aguardando pedido...')
try {
    const pedidoFeito = await fs.readFile('pizzas.txt', 'utf-8')
    console.log(`O pedido foi escolhido ${pedidoFeito}`)
} catch (erro) {
    console.log.error(`Deu ruim! ${erro}`)

}}


lerCardapio()
