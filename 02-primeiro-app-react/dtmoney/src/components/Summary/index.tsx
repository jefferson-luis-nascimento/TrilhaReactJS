import incoming from '../../assets/income.svg';
import outcoming from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { Container } from "./styles";


export function Summary () {
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
          <img src={total} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}