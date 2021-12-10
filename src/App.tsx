import "./App.css";
import UsersProvider from "./store/usersContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";
import TablePage from "./components/TablePage/TablePage";

function App() {
  return (
    <UsersProvider>
      <Router basename="/">
        <Routes>
          <Route path="/allusers" element={<TablePage />} />
          <Route path={`/userdetails/:username`} element={<UserDetails />} />
          <Route path="*" element={<Navigate to="/allusers" />} />
        </Routes>
      </Router>
    </UsersProvider>
  );
}

export default App;
