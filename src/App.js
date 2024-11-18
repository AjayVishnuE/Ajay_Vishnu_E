import './App.css';
import { KnowMore,  Navbar, OrgLogoSet,  GradientCircle, } from './components';
import { Contact, WhoAmI, Experience, Projects, Skills, Spotlight } from './containers';

function App() {
  return (
    <div className="App">
        <GradientCircle/>
        <Navbar/>
        <Spotlight/>
        <OrgLogoSet/>
        <WhoAmI/>
        <Skills/>
        <Projects/>
        <Experience/>
        <KnowMore/>
        <Contact/>
    </div>
  );
}

export default App;
