import {getLoremIpsum} from "../../DataFetching";
import ProgressGraph from "./ProgressGraph";

function SubjectTile({subject, setSubject}) {

    return (
        <div className='skill-tile' onClick={() => setSubject(subject)}>
            <div className='skill-overview'>
                <img src='/blocked-icon.png'/>
                <span>{subject.title}</span>
            </div>
            <div className='skill-details'>
                <span>{subject.description ? subject.description : getLoremIpsum()}</span>
            </div>
        </div>
    )
}

export default SubjectTile;