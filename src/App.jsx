import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import "./scss/app.scss";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};
