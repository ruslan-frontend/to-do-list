import './list.scss';

function List({ title, items }) {
    return (
        <div className="list">
            <h2 className='list__title'>{title}</h2>
            <span className='list__itemsCount'>{items}</span>
        </div>
    );
  }
  
  export default List;