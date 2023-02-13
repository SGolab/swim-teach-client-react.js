import {getColorForStatus, getImageForStatus} from "../../../Utils";
import {useNavigate} from "react-router-dom";

function HomeworkSkillList({homeworkItem, skillSelected, setSkillSelected}) {
    return (
        <div className='homework-skill-list'>
            {homeworkItem?.skills
                .concat([homeworkItem?.customSkills])
                .map(skill => <HomeworkSkillItem skill={skill} skillSelected={skillSelected}
                                                 setSkillSelected={setSkillSelected}/>)}
        </div>
    )
}

export default HomeworkSkillList;

function HomeworkSkillItem({skill, skillSelected, setSkillSelected}) {

    return (
        <>
            {
                skill.url ?
                    <div className={'homework-skill-item' + (skillSelected === skill ? ' selected' : '')} onClick={() => setSkillSelected(skill)}>
                        <img src={getImageForStatus(skill.status)} style={{backgroundColor: getColorForStatus(skill.status)}}/>
                        <span>{skill.title}</span>
                    </div>
                    :
                    <div className={'homework-skill-item' + (skillSelected === skill ? ' selected' : '')} onClick={() => setSkillSelected(skill)}>
                        <img src='/custom.png'/>
                        <span>{'CUSTOM TASKS'}</span>
                    </div>
            }
        </>
    )
}