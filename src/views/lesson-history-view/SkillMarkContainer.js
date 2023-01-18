import {useNavigate} from "react-router-dom";

function SkillMarkContainer({skillMark}) {

    const navigate = useNavigate()

    return (
        <div className='skillmark-container' onClick={() => navigate('/skillTree')}>
            <img src="/logo192.png" alt="img"/>
            <span>{skillMark.skillDetailsTitle}</span>
        </div>
    )
}

export default SkillMarkContainer;