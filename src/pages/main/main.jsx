import { useEffect, useState } from 'react';
import List from '../../components/List/list';
import NewListInput from '../../components/newListInput/newListInput';
import './main.scss';

const LOCALSTORAGEKEY = 'lists';
const storageLists = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) || "[]");

function Main() {

    const [allLists, setAllLists] = useState(storageLists);

    useEffect(() => {
        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(allLists))
    }, [allLists])

    return (
        <main className="main">
            <h1 className="main__title"> Мои Списки </h1>
            <NewListInput 
            setAllLists={setAllLists}
            allLists={allLists}
            />
            {allLists.map(
                ({ title, items, active, id, inputShown }) => 
                <List
                title={title}
                items={items}
                allLists={allLists}
                setAllLists={setAllLists}
                active={active}
                inputShown={inputShown}
                id={id}
                key={id}
            />)}

        </main>
    );
}

export default Main;