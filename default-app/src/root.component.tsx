
import { BrowserRouter, Route } from "react-router-dom";
import Modulo1 from './pages/Modulo1';
import Modulo2 from './pages/Modulo2';

export default function Root(props) {

  return (
      <BrowserRouter>
        <Route path="/app-modulo-1" component={Modulo1} />
        <Route path="/app-modulo-2" component={Modulo2} />
      </BrowserRouter>
  );
}
