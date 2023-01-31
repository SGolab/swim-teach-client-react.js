function ProgressGraph({progressPercentage}) {
    return (
        <div className='progress-graph'>
            <div className='shape-container'>
                <div className='progress-ring'
                     style={{background: `conic-gradient(${getColor(progressPercentage / 100)} ${progressPercentage}%, transparent 0%)`}}>
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

function getColor(value) {
    //value from 0 to 1
    var hue = ((value) * 120).toString(10);
    return ["hsl(", hue, ",70%,50%)"].join("");
}

export default ProgressGraph;