import styles from './SkillPresentation.module.css'

function SkillPresentation({skill}) {
    return (
        <div className={styles.skillPresentation}>

            <div className={styles.title}>
                {skill.title}
            </div>

            <div className={styles.description}>
                {skill.description}
            </div>

            <div className={styles.videoContainer}>
                <iframe
                    src={skill.url}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen={true}>
                </iframe>
            </div>

        </div>
    );
}

export default SkillPresentation;