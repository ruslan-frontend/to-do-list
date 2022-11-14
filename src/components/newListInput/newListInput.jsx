import { useState } from 'react';
import './newListInput.scss';

function NewListInput( { allLists, setAllLists } ) {

    const [isButtonActive, setIsButtonActive] = useState(false);
    const [newList, setNewList] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setAllLists([{title: newList, items: []}, ...allLists])
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
