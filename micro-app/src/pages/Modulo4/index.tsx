
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Wrapper } from './styles';

function Carrinho() {
  const { carrinho, addToCart } = useCart();
  return (
    <Wrapper>
        <h1>Produtos no carrinho</h1>
        <Link to="/micro-app/produtos">Continuar comprando</Link>

        <section>
        {carrinho.length > 0 && carrinho.map((p, i) => (
          <div key={p.name+i}>
            <div>{p.name}</div>
            <div>{p.price}</div>
            <button onClick={() => addToCart(p)}> Excluir</button>
          </div>
        ))}
        </section>

    </Wrapper>
  )
}

export default Carrinho;