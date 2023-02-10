import {NavLink} from "react-router-dom";
import {getColorForStatus, getImageForStatus} from "../../Utils";

function SkillMarkItem({skillMark}) {

    return (
        <NavLink to={`/skillTree/${skillMark.skillDetailsId}`} className='skillmark-item'>
            <div className='skillmark-status-label' style={{backgroundColor: getColorForStatus(skillMark.skillStatus)}}>
                <img src={getImageForStatus(skillMark.skillStatus)} alt="img"/>
            </div>
            <span>{skillMark.skillDetailsTitle}</span>
        </NavLink>
    )
}

export default SkillMarkItem;