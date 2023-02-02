function HomeworkSkillPreview({skill}) {
    return (
        <div className='homework-skill-preview'>
            {
                skill.url ?
                    <div className='video-container'>
                        <iframe
                            src={skill.url}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen={true}>
                        </iframe>
                    </div>
                    :
                    <ul className='custom-skill-preview'>
                        {skill.map(task => <li>{task}</li>)}
                    </ul>
            }
        </div>
    )
}

export default HomeworkSkillPreview;