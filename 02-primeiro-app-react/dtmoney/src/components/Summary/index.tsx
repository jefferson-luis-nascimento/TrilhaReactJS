import incoming from '../../assets/income.svg';
import outcoming from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export function Summary () {
  const { transactions } = useTransactions();
  
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
    }
    acc.total = (acc.deposits - acc.withdraws);

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incoming} alt="" />
        </header>
        <strong>
          { 
            new Intl.NumberFormat('pt-BR', {
              style: 'currency', 
                currency: 'BRL',
              }).format(summary.deposits)  
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcoming} alt="" />
        </header>
        <strong>-
          { 
            new Intl.NumberFormat('pt-BR', {
              style: 'currency', 
                currency: 'BRL',
              }).format(summary.withdraws)  
          }
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>
          { 
            new Intl.NumberFormat('pt-BR', {
              style: 'currency', 
                currency: 'BRL',
              }).format(summary.total)  
          }
        </strong>
      </div>
    </Container>
  );
}