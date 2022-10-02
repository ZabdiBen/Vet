import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import Olvidepassword from "./paginas/Olvidepassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";

//Iniciamos el servidor con npm run dev

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>

          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<Olvidepassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
