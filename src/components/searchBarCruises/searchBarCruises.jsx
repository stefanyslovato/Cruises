import DropdownDestination from "../dropdownDestination/DropdownDestination";
import DropdownPort from "../dropdownPort/dropdownPort";
import DropdownDate from "../dropdownDate/dropdownDate";
import { destinationList } from '../dropdownDestination/destinationList';
import {portListAmerica} from '../dropdownPort/portListAmerica';
import '../../App.css';

function searchBarCruises() {
    return (
        <>
        <div className='dd-container'>
        <div>
            <DropdownDestination title="Any Destination" items={destinationList} multiSelect />
        </div>
        <div>
            <DropdownPort title="Any Departure Port" items={portListAmerica} multiSelect />
        </div>
        <div>
            <DropdownDate title="Any Date" items={destinationList} multiSelect />
        </div>
        <div>
        <button className="btn-primary">Search cruises</button>
        </div>
        </div>
        </>
    );
}

export default searchBarCruises;