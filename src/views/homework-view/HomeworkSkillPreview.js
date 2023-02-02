import {getLoremIpsum} from "../../DataFetching";

function HomeworkSkillPreview({skill}) {
    return (
        <div className='homework-skill-preview'>
            <div className='video-container'>
                <iframe
                    src={skill.url}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen={true}>
                </iframe>
            </div>
        </div>
    )
}

export default HomeworkSkillPreview;