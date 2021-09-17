
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Wrapper } from './styles';

function ProdutoLista() {
  const { produtos, addToCart, carrinho } = useCart();
  
  return (
    <Wrapper>
      <header>
        {`${carrinho.length} produtos no carrinho`}
        <Link to="/micro-app/app-modulo-4">Ir para o carrinho</Link>
      </header>

      <section>
        {produtos.map(p => (
          <div key={p.name}>
            <div>{p.name}</div>
            <div>{p.price}</div>
            <button onClick={() => addToCart(p)}> Adicionar no carrinho</button>
          </div>
        ))}
        </section>
    </Wrapper>
  )
}

export default ProdutoLista;