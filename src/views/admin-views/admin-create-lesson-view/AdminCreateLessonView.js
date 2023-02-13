import styles from './AdminCreateLessonView.module.css'
import {useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AdminCreateLessonView() {

    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(null);

    return (
        <div className='view'>
            <div className={styles.contentContainer}>

                <div className={styles.item}>
                    <div>Date</div>
                    <div className={styles.datePickerContainer}>
                        <DatePicker
                            wrapperClassName="datepickerWrapper"
                            selected={startDate}
                            maxDate={new Date()}
                            shouldCloseOnSelect={false}
                            dateFormat="dd-MM-yyyy"
                            withPortal
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                </div>

                <div className={styles.item}>
                    <div>Time</div>
                    <DatePicker
                        selected={startTime}
                        shouldCloseOnSelect={false}
                        showTimeSelect
                        showTimeSelectOnly
                        dateFormat="hh:mm"
                        withPortal
                        onChange={(time) => setStartTime(time)}
                    />
                </div>

                <div className={styles.item}>
                    <div>Location</div>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <optgroup label="Level Two">
                            <option> A.B.1</option>
                            <option> A.B.2</option>
                        </optgroup>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select></div>
            </div>
        </div>
    )
}

export default AdminCreateLessonView;