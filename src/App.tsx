import Landing from "./pages/Landing";
import { SnapScrollAlign } from "./layout/SnapScrollAlign";
import { Root } from "./layout/Root";
import Projects from "pages/Projects";

export default App;

function App() {
  return (
    <Root>
      <SnapScrollAlign>
        <Landing />
      </SnapScrollAlign>
      <SnapScrollAlign>
        <Projects />
      </SnapScrollAlign>
    </Root>
  );
}
