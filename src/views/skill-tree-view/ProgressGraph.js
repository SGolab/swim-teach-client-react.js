function ProgressGraph({progressPercentage}) {
    return (
        <div className='progress-graph'>
            <div className='shape-container'>
                <div className='progress-ring'
                     style={{background: `conic-gradient(darkred ${progressPercentage}%, transparent 0%)`}}>
                </div>
            </div>
            <div className='shape-container'>
                <div className='progress-ring-inner-circle'></div>
            </div>
            <div className='shape-container'>
                <span>{progressPercentage}%</span>
            </div>
        </div>
    )
}

export default ProgressGraph;