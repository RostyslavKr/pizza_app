import { Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { PizzaDetailsPage } from "./pages/PizzaDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<PizzaDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
