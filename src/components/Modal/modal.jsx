import './modal.scss';

function Modal({ setIsModalVisiable, deleteCheckedItems }) {
    
    return (
        <div className="modal" onClick={() => {
            setIsModalVisiable(null);
        }}>
            <div className="modal__window">
                <h2 className="modal__title">Вы хотите удалить все выполненные задания из списка?</h2>
                <input type="checkbox" name="" id="modal" />
                <label for="modal">Не спрашивать меня снова</label>
                <div className="modal__buttons">
                    <button onClick={() => {
                                setIsModalVisiable(null);
                            }}
                            className="modal__buttons-false">Нет</button>
                            
                    <button onClick={deleteCheckedItems} className="modal__buttons-true">Да</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;