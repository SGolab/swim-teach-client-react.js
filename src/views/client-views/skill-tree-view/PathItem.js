import useIsMobile from "../../../hooks/useIsMobile";
import {getImageForTitle} from "../../../Utils";

function PathItem({value, setValue, isGrayedOut, isCropped}) {

    return (
        <>
            <div className={'path-item' + (isGrayedOut ? ' grayed-out' : '')}
                 onClick={setValue}>

                <img src={getImageForTitle(value?.title)}/>
                {(isGrayedOut) && <span>{value?.title}</span>}
            </div>
        </>
    )
}

export default PathItem;