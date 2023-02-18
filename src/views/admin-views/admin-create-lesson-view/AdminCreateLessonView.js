import styles from './AdminCreateLessonView.module.css'
import {useRef, useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SkillSelector from "./SkillSelector";
import useFetch from "../../../hooks/useFetch";
import {useParams} from "react-router-dom";
import LocationSelector from "./LocationSelector";

function AdminCreateLessonView() {

    const {swimmerId} = useParams();

    const [progressTree] = useFetch(`/swimmers/${swimmerId}/progressTree`)
    const [locations] = [['Conrada 6', 'Lindego 10', 'Potocka 1']]

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [location, setLocation] = useState('initial location');
    const [selectedSkills, setSelectedSkills] = useState([]);

    const datePicker = useRef();
    const timePicker = useRef();

    const [isSkillSelectorOpened, setIsSkillSelectorOpened] = useState(false);
    const [isLocationSelectorOpened, setIsLocationSelectorOpened] = useState(false);

    const handleSubmit = function () {
        console.log(date)
        console.log(time)
        console.log(location)
    }

    return (
        <div className='view'>
            <div className={styles.contentContainer}>

                <div className={styles.item}>
                    <button onClick={() => datePicker.current.setOpen(true)}>
                        <img src={'/calendar.png'}/>
                    </button>
                    <div>{date.toLocaleDateString('pl', {year: 'numeric', month: '2-digit', day: '2-digit'})}</div>
                </div>

                <div className={styles.item}>
                    <button onClick={() => timePicker.current.setOpen(true)}>
                        <img src={'/clock.png'}/>
                    </button>
                    <div>{time.toLocaleString("pl", {hour: '2-digit', hour12: false, minute: '2-digit'})}</div>
                </div>

                <div className={styles.item}>
                    <button onClick={() => setIsLocationSelectorOpened(prev => !prev)}>
                        <img src={'/location.png'}/>
                    </button>

                    <div>{location}</div>
                </div>

                <div className={styles.item}>

                    {progressTree &&
                        <button onClick={() => setIsSkillSelectorOpened(prev => !prev)}>
                            <img src={'/self-control.png'}/>
                        </button>
                    }

                    <div className={styles.skillList}>
                        {selectedSkills.map(skill => <div className={styles.skillItem}>{skill.title}</div>)}
                    </div>

                </div>

                <button onClick={handleSubmit}>SUBMIT</button>
            </div>

            <div className={styles.customDatepicker}>
                <div className={styles.datePickerContainer}>
                    <DatePicker
                        ref={datePicker}
                        selected={date}
                        maxDate={new Date()}
                        dateFormat="dd-MM-yyyy"
                        withPortal
                        onChange={(date) => setDate(date)}
                    />
                </div>
            </div>

            <div className={styles.customDatepicker}>
                <DatePicker
                    ref={timePicker} //todo open date picker with external button https://github.com/Hacker0x01/react-datepicker/issues/1223
                    selected={time}
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    dateFormat="HH:mm"
                    withPortal
                    onChange={(time) => setTime(time)}
                />
            </div>

            {isLocationSelectorOpened &&
                <LocationSelector
                    locations={locations}
                    setLocation={setLocation}
                    handleClose={() => setIsLocationSelectorOpened(false)}/>
            }

            {isSkillSelectorOpened &&
                <SkillSelector
                    skillTree={progressTree}
                    uploadedSkills={selectedSkills}
                    uploadSelectedSkills={setSelectedSkills}
                    handleClose={() => setIsSkillSelectorOpened(false)}/>
            }
        </div>
    )
}

export default AdminCreateLessonView;