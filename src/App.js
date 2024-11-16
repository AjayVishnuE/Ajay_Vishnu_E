import './App.css';
import { KnowMore, WhoAmI, Navbar, OrgLogoSet, Experience, Projects, Skills, } from './components';
import { Contact,  Section2,  Section3,  Spotlight } from './containers';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Spotlight/>
        <OrgLogoSet/>
        <Section2/>
        <Section3/>
        <KnowMore/>
        <Contact/>
    </div>
  );
}

export default App;
