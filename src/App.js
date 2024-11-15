import './App.css';
import { KnowMore, Navbar, OrgLogoSet } from './components';
import { Projects, Skills, Spotlight, WhoAmI } from './containers';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Spotlight/>
        <OrgLogoSet/>
        <WhoAmI/>
        <Skills/>
        <Projects/>
        <KnowMore/>
    </div>
  );
}

export default App;
