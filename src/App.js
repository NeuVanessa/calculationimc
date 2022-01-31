import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AuthProvider from "./contexts/auth";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="auth-wrapper">
     <div className="auth-inner">
     <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
     </div>
    </div>
  );
}

export default App;
