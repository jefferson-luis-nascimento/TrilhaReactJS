import { useContext, useState } from 'react';
import incoming from '../../assets/income.svg';
import outcoming from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

export function Summary () {
  const { transactions } = useContext(TransactionsContext);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incoming} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcoming} alt="" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}