import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AgencePage from "../../pages/AgencePage";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agence" element={<AgencePage />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </div>
  );
};

export default Main;
