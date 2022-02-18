import React from 'react';
import CardList from './CardList';
import { friends } from './friends';
import Search from './Search';


export const App = () => {
    return (
        <div className='tc'>
        <h1>Friend List</h1>
        <Search />
        <CardList friends={friends}/>
        </div>
    );
}
export default App;