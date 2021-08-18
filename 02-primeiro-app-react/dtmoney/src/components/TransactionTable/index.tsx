import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Web site</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desevolvimento</td>
            <td>21/07/2021</td>
          </tr>
          <tr>
            <td>Aluguél</td>
            <td className="withdraw"> - R$1.100,00</td>
            <td>Casa</td>
            <td>05/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}