import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Charts from "./pages/Charts";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="h-screen bg-gray-100 dark:bg-gray-900 relative">
          <Sidebar />
          <div className="ml-64 transition-all duration-300">
            <main className="h-full overflow-y-auto p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
