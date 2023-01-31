import {getColorForStatus, getImageForStatus} from "../../DataFetching";

function PathItem({value, setValue, isGrayedOut}) {
    return (
        <>
            <div className={'path-item' + (isGrayedOut ? ' grayed-out' : '')} onClick={setValue}>
                <span>{value?.title}</span>
            </div>
            {value.status && <PathItemStatus status={value.status}/>}
        </>
    )
}

export default PathItem;

function PathItemStatus({status}) {
    return (
        <div className='path-item grayed-out' style={{backgroundColor: getColorForStatus(status)}}>
            <img src={getImageForStatus(status)} alt='img'/>
            <span>{status}</span>
        </div>
    )
}