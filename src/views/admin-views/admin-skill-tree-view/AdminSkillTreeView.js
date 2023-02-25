import useFetch from "../../../hooks/useFetch";
import {useParams} from "react-router-dom";
import SkillTreePresentation from "../../shared-components/skill-tree-presentation/SkillTreePresentation";

import styles from './AdminSkillTreeView.module.css'

function AdminSkillTreeView() {

    const {swimmerId, skillDetailsId} = useParams()

    const [progressTree] = useFetch(`/swimmers/${swimmerId}/progressTree`)

    return (
        <div className={'view'}>
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

export default AdminSkillTreeView;