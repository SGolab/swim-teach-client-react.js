import './SkillTreeView.module.css'
import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import SkillTreePresentation from "../../shared-components/skill-tree-presentation/SkillTreePresentation";

import styles from './SkillTreeView.module.css'

function SkillTreeView() {

    const [progressTree] = useFetch(`/progressTree`)
    const {skillDetailsId} = useParams()

    return (
        <div className="view">
            <div className={styles.skillTreePresentationContainer}>
                {progressTree ?
                    <SkillTreePresentation skillDetailsId={skillDetailsId ? skillDetailsId : null}
                                           stages={progressTree.stages}/>
                    :
                    <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default SkillTreeView;