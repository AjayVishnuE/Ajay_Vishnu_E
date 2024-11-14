import './App.css';
import { KnowMore, Navbar, OrgLogoSet } from './components';
import { Spotlight, WhoAmI } from './containers';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Spotlight/>
        <OrgLogoSet/>
        <WhoAmI/>
        <KnowMore/>
    </div>
  );
}

export default App;
