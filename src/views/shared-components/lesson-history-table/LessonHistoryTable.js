import LessonHistoryTableRow from "./LessonHistoryTableRow";
import styles from '../../client-views/lesson-history-view/LessonHistoryView.module.css'
import {useState} from "react";

function LessonHistoryTable({swimmerName, lessons}) {

    const ranges = initRanges(lessons.length, 5)

    const [rangeIndex, setRangeIndex] = useState(0)

    const handleNextClicked = function () {
        setRangeIndex(prev => {
            if (prev + 1 > ranges.length - 1) {
                return prev;
            } else {
                return prev + 1
            }
        })
    }

    const handlePrevClicked = function () {
        setRangeIndex(prev => {
            if (prev - 1 < 0) {
                return prev;
            } else {
                return prev - 1
            }
        })
    }

    return (
        lessons.length ?
            <div className={styles.lessonHistoryTable}>

                <div className={styles.lessonHistoryTableTitle}>
                    {swimmerName ? `${swimmerName}'s Lessons` : 'Lessons'}
                </div>

                {lessons.slice(ranges[rangeIndex].start, ranges[rangeIndex].end).map((lesson, index) => {
                    return <LessonHistoryTableRow lesson={lesson} isFirst={lesson === lessons[0]}/>
                })}

                <div className={styles.rangeInfoContainer}>
                    <div className={styles.prevNextBtn} onClick={handlePrevClicked}>PREVIOUS</div>
                    <div className={styles.rangeInfo}>
                        {
                            ranges[rangeIndex].start + 1 === ranges[rangeIndex].end
                                ?
                                ranges[rangeIndex].start + 1 + ' / ' + lessons.length
                                :
                                ranges[rangeIndex].start + 1 + '-' + ranges[rangeIndex].end + ' / ' + lessons.length
                        }
                    </div>
                    <div className={styles.prevNextBtn} onClick={handleNextClicked}>NEXT</div>
                </div>

            </div>
            :
            <h1>NO LESSONS YET!</h1>

    )

}

export default LessonHistoryTable;

function initRanges(max, rangeSize) {

    const ranges = []

    let currEnd = 0;
    while (true) {
        if (currEnd + rangeSize > max) {
            ranges.push(
                {
                    start: currEnd,
                    end: max
                }
            )
            break
        }

        ranges.push(
            {
                start: currEnd,
                end: currEnd + rangeSize
            }
        )

        currEnd += rangeSize;
    }

    return ranges
}