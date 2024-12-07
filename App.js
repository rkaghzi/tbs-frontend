import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import VehicleMaintenance from './components/vehicleMaintainenece';


const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

<Route path="/vehicles/:vehicleId/maintenance" element={<VehicleMaintenance />} />

export default App;
