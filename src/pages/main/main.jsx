import { useEffect, useState } from 'react';
import List from '../../components/List/list';
import Modal from '../../components/Modal/modal';
import NewListInput from '../../components/newListInput/newListInput';
import './main.scss';

const LOCALSTORAGEKEY = 'lists';
const storageLists = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) || "[]");

function Main() {
    
    const [isModalVisiable, setIsModalVisiable] = useState(null);
    const [allLists, setAllLists] = useState(storageLists);

    const deleteCheckedItems = () => {
        const newAllLists = allLists.map((list) => {
            if (isModalVisiable === list.id) {
                list.items = list.items.filter((item) => !item.checked);
            }
            return list;
        });
        setAllLists(newAllLists);
    };

console.log(allLists);

    const deleteList = () => {
        const AnotherAllLists = allLists.map((list) => {
            if (list.items.lenght === 0) {
                list.items = list.items.filter((items) => items.lenght !== 0);
            }
            return list;
        });
        setAllLists(AnotherAllLists);
    };

    useEffect(() => {
        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(allLists))
    }, [allLists]);

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
                setIsModalVisiable={setIsModalVisiable}
                deleteList={deleteList}
                />)}
            {isModalVisiable && <Modal
            setIsModalVisiable={setIsModalVisiable}
            deleteCheckedItems={deleteCheckedItems}
            
            />}

        </main>
    );
}

export default Main;