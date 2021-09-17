import ProdutoLista from "./pages/Modulo3";
import Carrinho from "./pages/Modulo4";
import { CartProvider } from './hooks/useCart';
import { BrowserRouter, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Route path="/micro-app/app-modulo-3" component={ProdutoLista} />
        <Route path="/micro-app/app-modulo-4" component={Carrinho} />
      </BrowserRouter>
    </CartProvider>
    </>
  );
}