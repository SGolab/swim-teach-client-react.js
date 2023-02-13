import {getColorForStatus, getImageForStatus} from "../../../Utils";

function PathItemStatus({status}) {
    return (
        <div className='path-item grayed-out' style={{backgroundColor: getColorForStatus(status)}}>
            <img src={getImageForStatus(status)} alt='img'/>
            <span>{status}</span>
        </div>
    )
}

export default PathItemStatus;