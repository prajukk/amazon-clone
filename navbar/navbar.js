import react from 'react';
import Navbarbelt from './Navbarbelt/navbarbelt'
import Navbarbanner from './Navbarbanner/navbarbanner';
const Navbar = () => {
    return(
        <div className='navbar'>
            <Navbarbelt/>
<Navbarbanner/>
        </div>
    )
}
export default Navbar