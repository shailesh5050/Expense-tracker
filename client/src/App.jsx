import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SIgnUp";
import PrivateRoute from "./Components/PrivateRoute";
import Expense from "./Pages/Expense";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/expense" element={<PrivateRoute />}>
          <Route path="/expense" element={<Expense />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
