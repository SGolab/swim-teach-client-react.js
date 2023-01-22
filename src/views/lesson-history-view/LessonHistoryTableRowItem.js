import {getImageForStatus} from "../../DataFetching";

function LessonHistoryTableRowItem({text, skillMarks}) {
    return (
        <div className='lesson-history-table-row-item'>
            {text ?
                <h1>{text}</h1> : skillMarks.map(sm =>
                    <div className='image-container'>
                        <img src={getImageForStatus(sm.skillStatus)} alt="img"/>
                    </div>
                )}
        </div>
    )
}

export default LessonHistoryTableRowItem;