// @ts-nocheck
import "./App.css";
import Home from "./Components/MainPage/Main";
import AboutUs from "./Components/AboutUs/AboutUs";
import Find from "./Components/LostDogs/Find";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Login/Profile";
import pupPage from "./Components/LostDogs/pupPage";
import Create from "./Components/Create/Create";
import Help from "./Components/Help/Help";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/Utils/PrivateRoute";
import PublicOnlyRoute from "./Components/Utils/PublicOnlyRoute";
import history from "./Context/history";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/find" element={<Find />} />
        <Route exact path="/help" element={<Help />} />
        {/* <PublicOnlyRoute path="/login" element={<Login />} />
        <PublicOnlyRoute exact path="/register" element={<Register />} />
        <PrivateRoute exact path="/find/:id" element={<pupPage />} />
        <PrivateRoute exact path="/profile" element={<Profile />} />
        <PrivateRoute exact path="/create" element={<Create />} /> */}
      </Routes>
    </div>
  );
}

export default App;
