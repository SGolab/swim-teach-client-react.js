function SkillPresentation({skill}) {
    return (
        <div className='skill-presentation'>
            <h1>{skill.title}</h1>
            <p>{skill.description}</p>
            <iframe
                src={skill.url}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen={true}>
            </iframe>
        </div>
    );
}

export default SkillPresentation;