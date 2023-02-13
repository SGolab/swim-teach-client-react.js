import {useNavigate} from "react-router-dom";

function HomeworkSkillPreview({skill}) {

    const navigate = useNavigate();

    return (
        <div className='homework-skill-preview'>
            {
                skill.url ?
                    <>
                        <div className='video-container'>
                            <iframe
                                src={skill.url}
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen={true}>
                            </iframe>
                        </div>
                        <div className={'full-details-btn'} onClick={() => navigate(`/skillTree/${skill.detailsId}`)}>
                            SEE FULL DETAILS
                        </div>
                    </>
                    :
                    <ul className='custom-skill-preview'>
                        {skill.map(task => <li>{task}</li>)}
                    </ul>
            }
        </div>
    )
}

export default HomeworkSkillPreview;