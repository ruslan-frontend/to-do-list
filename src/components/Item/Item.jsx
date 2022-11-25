import './item.scss';

function Item( { items } ) {
    return (
        <div className="item">
            <input className='item__checkbox' type="checkbox" id='item'/>
            <label className='item__description' for="item">{items}</label>
        </div>
    );
}

export default Item;
