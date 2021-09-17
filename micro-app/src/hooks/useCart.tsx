import {
    createContext,
    useState,
    useContext,
  } from 'react';
 
  export const CartContext = createContext(
    {} as ICartProvider,
  );

  export interface ICartProvider {
    produtos: any;
    addToCart: any;
    carrinho: any;
  
  }
  
  export const CartProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([
      {
        name: 'Camiseta Masculina',
        price: 45.5
      },
      {
        name: 'Camiseta Feminina',
        price: 20.5
      },
  ]);
    const [carrinho, setCarrinho] = useState([]);


    const addToCart = (produto) => {
      setCarrinho(oldState => [...oldState, produto])
    }
    
    const providerValue: ICartProvider = {
      produtos,
      addToCart,
      carrinho
    };
  
    return (
      <CartContext.Provider value={providerValue}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    const context = useContext(CartContext);
  
    return context;
  };
  