import * as C from './styles'

export const Calculadora = () => {
return (
    <C.Container>
        <div>
            <h1>Simule sua Antecipação</h1>
            <p>Informe o valor da venda *</p>
            <input type="number" ></input>
            <p>Em quantas parcelas *</p>
            <input type="number" ></input>
            <span>Máximo de 12 parcelas</span>
            <p>Informe o percentual de MDR *</p>
            <input type="number" ></input>
        </div>

        <div>
            <h2>VOCÊ RECEBERÁ</h2>
            <p>Amanhã: R$ 0,00</p>
            <p>Em 15 dias: R$ 0,00</p>
            <p>Em 30 dias: R$ 0,00</p>
            <p>Em 90 dias: R$ 0,00</p>
        </div>
    </C.Container>
)
}