import { StartPage } from "pages";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (<Routes>
      <Route path="/" element={<StartPage />} />
      
    </Routes>)
};
