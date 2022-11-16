import { useState } from 'react';
import List from '../../components/List/list';
import NewListInput from '../../components/newListInput/newListInput';
import './main.scss';

function Main() {


    const [allLists, setAllLists] = useState([]);

    return (
        <main className="main">
            <h1 className="main__title"> My Lists </h1>
            <NewListInput 
            setAllLists={setAllLists}
            allLists={allLists}
            />
            {allLists.map(
                ({ title, items }) => 
                <List
                title={title}
                items={items}
                allLists={allLists}
                setAllLists={setAllLists}
            />)}

        </main>
    );
}

export default Main;