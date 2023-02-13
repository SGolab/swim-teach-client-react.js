import ItemTile from "./ItemTile";

function ItemsContainer({items, setItem}) {

    return (
            <div className='items-container'>
                {items.map(item => <ItemTile key={item.title} item={item} setItem={setItem}/>)}
            </div>
    )
}

export default ItemsContainer;