import LessonHistoryTableRow from "./LessonHistoryTableRow";
import styles from './LessonHistoryTable.module.css'
import {useState} from "react";

function LessonHistoryTable({swimmerName, lessons, progressTree}) {

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
        <div className={styles.lessonHistoryTable}>

            <div className={styles.lessonHistoryTableTitle}>
                {lessons.length ?
                    swimmerName ? `${swimmerName}'s Lessons` : 'Lessons'
                    :
                    'No lessons yet!'
                }
            </div>

            {lessons.slice(ranges[rangeIndex].start, ranges[rangeIndex].end).map((lesson) => {
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