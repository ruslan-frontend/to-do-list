import { useState } from 'react';
import Item from '../Item/item';
import './list.scss';
import { v4 as uuidv4 } from 'uuid';

function List({ title, items, setAllLists, allLists, active, id, inputShown, setIsModalVisiable, deleteList  }) {

	const [isCheckActive, setIsCheckActive] = useState(false);
	const [newItem, setNewItem] = useState('');

	return (
        <div>
            <div
				className={`list ${active ? "list_active" : ""}`}
                onClick={() =>
                    setAllLists(
                        allLists.map((list) => ({ ...list, active: list.id === id && !list.active, }))
                    )
                }
            >
                <h2 className="list__title">{title}</h2>
                <span  className="list__itemsCount">{items.length}</span>
                {items.some((item) => item.checked) && <span 
                onClick={(e)=>{
                    e.stopPropagation();
                    setIsModalVisiable(id)
                }} className={`list__cleanBtn ${active ? "list__cleanBtn_active" : ""}`}>Clean</span>}
                
                {items.length === 0 && <img className='list__deleteImg' 
                onClick={(e)=>{
                    e.stopPropagation();
                    deleteList()
                }} src="./images/bin.svg" alt="корзина" />}
            </div>

            {active && (
                <div className="list__itemAdding">
                    <span onClick={() =>
                    setAllLists(
                        allLists.map((list) => ({ ...list, inputShown: list.id === id && !list.inputShown }))
                    )
                } className="list__itemAdding-button">+ Задача</span>

				{inputShown && (
                    <form
						className="list__itemInput"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setAllLists(
                                allLists.map((list) => ({...list, items: list.id === id ? [{title: newItem, checked: false, id: uuidv4()}, ...list.items] : list.items, inputShown: false })));
                                setNewItem('');
                                setIsCheckActive(false);
                            }}
                            >
                        <input
                            value={newItem}
                            autoFocus
                            className="list__itemInput-input"
                            type="text"
                            onChange={(e) => {
                                setNewItem(e.target.value);
                                if (e.target.value !== "" && !isCheckActive) {
                                    setIsCheckActive(true);
                                } else if (e.target.value === "" && isCheckActive) {
                                    setIsCheckActive(false); 
								}
                            }}
                            />
                        <button
                            className="list__itemInput-button"
                            type="submit"
                            >
                            <svg
                                className={`svg ${
                                    isCheckActive ? "svg_active" : ""
                                }`}
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M4.07573 9.8036L0.175729 5.44535C-0.0585762 5.18351 -0.0585762 4.75898 0.175729 4.49711L1.02424 3.54888C1.25854 3.28702 1.63846 3.28702 1.87277 3.54888L4.5 6.48478L10.1272 0.196377C10.3615 -0.0654589 10.7415 -0.0654589 10.9758 0.196377L11.8243 1.14461C12.0586 1.40645 12.0586 1.83098 11.8243 2.09285L4.92426 9.80363C4.68994 10.0655 4.31004 10.0655 4.07573 9.8036Z"
                                    fill="black"
                                    />
                            </svg>
                        </button>
                    </form>
					)}
                    {items.map(
                        (item) =>
                        <Item 
                            key={item.id}
                            item={item}
                            setAllLists={setAllLists}
                            listId={id}
                            allLists={allLists}
                        />)}
                </div>
            )}
        </div>
    );
}

export default List;