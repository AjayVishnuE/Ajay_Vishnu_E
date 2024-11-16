import './App.css';
import { KnowMore, Navbar, OrgLogoSet } from './components';
import { Experience, Projects, Skills, Spotlight, WhoAmI } from './containers';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Spotlight/>
        <OrgLogoSet/>
        <WhoAmI/>
        <Skills/>
        <Projects/>
        <Experience/>
        <KnowMore/>
    </div>
  );
}

export default App;
