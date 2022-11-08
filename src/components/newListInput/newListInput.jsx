import './newListInput.scss';

function NewListInput(newList, setNewList) {


    return (
        <form className="newList">

            <input 
            type="text" 
            className='newList__input'
            placeholder='New List' 
            onChange={() => {}} />

            <button type='submit' className='newList__button'>+ Add</button>
        </form>
    );
}

export default NewListInput;
