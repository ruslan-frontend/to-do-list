import { useRef } from 'react';
import { setCookie } from '../../helpers/cookies';
import './modal.scss';

function Modal({ setIsModalVisiable, deleteCheckedItems, title }) {

    const checkboxRef = useRef();

    return (
        <div className="modal" onClick={() => {
            setIsModalVisiable(null);
        }}>
            <div className="modal__window" onClick={(e) => {
                e.stopPropagation();
            }}>
                <h2 className="modal__title">Вы хотите удалить все выполненные задания из списка "{title}"?</h2>
                <input
                ref={checkboxRef}
                className='modal__checkbox' type="checkbox" name="" id="checkbox" />
                <label className='modal__checkboxTitle' for="checkbox">Не спрашивать меня снова</label>
                <div className="modal__buttons">
                    <button onClick={() => {
                                setIsModalVisiable(null);
                            }}
                            className="modal__buttons-false">Нет</button>
                            
                    <button onClick={() => {
                            if (checkboxRef.current.checked) {
                                setCookie('modalWindowClosed', '1', 801);
                            }
                        deleteCheckedItems();
                        }
                    } className="modal__buttons-true">Да</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;