function LessonHistoryTableRowItem({text, skillMarks}) {
    return (
        <div className='lesson-history-table-row-item'>
            {text ?
                <h1>{text}</h1> : skillMarks.map(sm => <img src="/logo192.png"
                                                                alt="img"/>)}
        </div>
    )
}

export default LessonHistoryTableRowItem;