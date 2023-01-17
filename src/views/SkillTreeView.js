import {useEffect} from "react";

function SkillTreeView() {

    useEffect(() => {
        console.log('skill tree view rendered')
    })

    return <h1 className="view">SKILL TREE VIEW</h1>
}

export default SkillTreeView;