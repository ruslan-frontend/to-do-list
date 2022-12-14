import { useState } from 'react';
import './newListInput.scss';
import { v4 as uuidv4 } from 'uuid';

function NewListInput( { allLists, setAllLists } ) {

    const [isButtonActive, setIsButtonActive] = useState(false);
    const [newList, setNewList] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setAllLists([{id: uuidv4(), title: newList, items: [], active: false, inputShown: false}, ...allLists])
            setNewList('');
            setIsButtonActive(false);
        }} 
        className="newList">

            <input 
            type="text" 
            className='newList__input'
            placeholder='New List' 
            onChange={(e) => {
                setNewList(e.target.value)

                if (e.target.value !== '' && !isButtonActive) {
                    setIsButtonActive(true)
                } else if (e.target.value === '' && isButtonActive) {
                    setIsButtonActive(false)
                }
            }}
            value={newList}
            />

            <button type='submit' className={`newList__button ${isButtonActive ? 'newList__button_active' : ''}`}>+ Add</button>
        </form>
    );
}

export default NewListInput;
