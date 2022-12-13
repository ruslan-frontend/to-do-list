import './Item.scss';

function Item( { item, setAllLists, listId, allLists } ) {


    return (
        <div className="item">
            <input className='item__checkbox' type="checkbox" id={`item-${item.id}`} checked={item.checked} 
            onChange={()=>{
                setAllLists(
                    allLists.map((list)=>(list.id === listId ? {...list, items: list.items.map((itemMap) => {
                        return (itemMap.id === item.id ? {...itemMap, checked : !itemMap.checked} : itemMap)})} : list))
                ) 
            }}/>
            <label className={`item__description ${item.checked ? 'item__description_completed' : ''}`} for={`item-${item.id}`}>{item.title}</label>
        </div>
    );
}

export default Item;
