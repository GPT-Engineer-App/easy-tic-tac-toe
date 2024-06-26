import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <ThemeProvider attribute="class">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
