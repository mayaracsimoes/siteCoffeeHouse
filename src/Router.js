import { Routes } from "react-router-dom";
import Funcionario from "./components/Funcionario";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionario" element={<Funcionario />} />
    </Routes>
  );
}
