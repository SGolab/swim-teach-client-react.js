import ItemTile from "./ItemTile";

import styles from './SkillTreePresentation.module.css'

function ItemsContainer({items, setItem}) {
    return (
            <div className={styles.itemsContainer}>
                {items.map(item => <ItemTile key={item.title} item={item} setItem={setItem}/>)}
            </div>
    )
}

export default ItemsContainer;