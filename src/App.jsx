import './App.css';
import SearchBar from "./components/searchbar/SearchBar";
import DropdownDestination from './components/dropdownDestination/DropdownDestination';
import DropdownPort from './components/dropdownPort/dropdownPort';
import { destinationList } from './components/dropdownDestination/destinationList';
import { portListAmerica } from './components/dropdownPort/portListAmerica';



function App() {
    return (
        <>
        {/* <div className='dd-container'>
        <div>
            <DropdownDestination title="Any Destination" items={destinationList} multiSelect />
        </div>
        <div>
            <DropdownPort title="Any Departure Port" items={portListAmerica} multiSelect />
        </div>
        <div>
            <DropdownDestination title="Any Date" items={destinationList} multiSelect />
        </div>
        <div>
        <button className="btn-primary">Search cruises</button>
        </div>
        </div> */}
        <SearchBar /> 
        </>
    );
}

export default App;