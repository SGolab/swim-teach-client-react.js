function StageTile({stage, setStage}) {

    return (
    <div className='stage-tile' onClick={() => setStage(stage)}>
            <h1>{stage.title}</h1>
    </div>
    )
}

export default StageTile;