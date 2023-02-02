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
            {homeworkItem.dateTime}
        </div>
    )
}