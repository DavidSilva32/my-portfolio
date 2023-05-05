import MainContent from "./components/MainContent.jsx";
import Sidebar from "./components/sidebar.jsx";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>David Teixeira</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
