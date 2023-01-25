import StageTile from "./StageTile";

function StagesContainer({stages, setStage}) {

    return (
            <div className='skills-container'>
                {stages.map(stage => <StageTile stage={stage} setStage={setStage}/>)}
            </div>
    )
}

export default StagesContainer;