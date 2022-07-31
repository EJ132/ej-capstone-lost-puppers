// @ts-nocheck
import { Route, Routes } from "react-router-dom";

import AboutUs from "./Components/AboutUs/AboutUs";
import Create from "./Components/Create/Create";
import Help from "./Components/Help/Help";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Profile from "./Components/Login/Profile";
import Find from "./Components/LostDogs/Find";
import pupPage from "./Components/LostDogs/pupPage";
import Register from "./Components/Register/Register";
import PrivateRoute from "./Components/Utils/PrivateRoute";
import PublicOnlyRoute from "./Components/Utils/PublicOnlyRoute";
import history from "./Context/history";

import "./App.css";

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
