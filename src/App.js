import './App.css';
import { KnowMore, Navbar, OrgLogoSet } from './components';
import { Skills, Spotlight, WhoAmI } from './containers';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Spotlight/>
        <OrgLogoSet/>
        <WhoAmI/>
        <Skills/>
        <KnowMore/>
    </div>
  );
}

export default App;
