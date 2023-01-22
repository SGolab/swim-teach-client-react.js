import {NavLink} from "react-router-dom";
import {getImageForStatus} from "../../DataFetching";

function SkillMarkContainer({skillMark}) {

    return (
        <NavLink to={`/skillTree/${skillMark.skillDetailsId}`} className='skillmark-container'>
            <div className='image-container'>
                <img src={getImageForStatus(skillMark.skillStatus)} alt="img"/>
            </div>
            <span>{skillMark.skillDetailsTitle}</span>
        </NavLink>
    )
}

export default SkillMarkContainer;