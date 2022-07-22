
import './index.css';
import Navbar from './Pages/Navbar';
import UsersPage from './Pages/UsersPage';
import HomePage from './Pages/HomePage';
import WeaponsPage from './Pages/WeaponsPage';
import ArmorsPage from './Pages/ArmorsPage';
import ItemsPage from './Pages/ItemsPage';
import EditArmor from './armor/EditArmor';
import EditWeapon from './weapon/EditWeapon';
import EditItem from './item/EditItem';
import AddWeapon from './weapon/AddWeapon';
import AddArmor from './armor/AddArmor';
import AddItem from './item/AddItem';


import User from './user/User';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import Armor from './armor/Armor';
import Item from './item/Item';
import Weapon from './weapon/Weapon';
import { BrowserRouter, Route, browserHistory, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route exact path="/users/:id" element={<User />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/users/update/:id" element={<EditUser />} />
        <Route exact path="/weapons/:id" element={<Weapon />} />\
        <Route exact path="/armors/:id" element={<Armor />} />
        <Route exact path="/items/:id" element={<Item />} />
        <Route exact path="/weapons" element={<WeaponsPage />} />
        <Route exact path="/armors" element={<ArmorsPage />} />
        <Route exact path="/items" element={<ItemsPage />} />
        <Route exact path="/weapons/add" element={<AddWeapon />} />
        <Route exact path="/armors/add" element={<AddArmor />} />
        <Route exact path="/items/add" element={<AddItem />} />
        <Route exact path="/weapons/update/:id" element={<EditWeapon />} />
        <Route exact path="/armors/update/:id" element={<EditArmor />} />
        <Route exact path="/items/update/:id" element={<EditItem />} />





      </Routes>
    </div>
  );
}

export default App;
