function HomeworkList({homeworkList, selectedHomeworkItem,setHomeworkItem}) {
    return (
        <div className='homework-list'>
            {homeworkList.map(homeworkItem => <HomeworkItem homeworkItem={homeworkItem}
                                                            selected={selectedHomeworkItem === homeworkItem}
                                                            setHomeworkItem={setHomeworkItem}/>)}
        </div>
    )
}

export default HomeworkList;

function HomeworkItem({homeworkItem, selected, setHomeworkItem}) {
    return (
        <div className={'homework-item' + (selected ? ' selected' : '')} onClick={() => setHomeworkItem(homeworkItem)}>
            <span>HOMEWORK</span>
            <span style={{fontWeight: "normal"}}>{homeworkItem.date}</span>
        </div>
    )
}