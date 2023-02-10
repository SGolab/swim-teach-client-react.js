import useIsMobile from "../../useIsMobile";

function PathItem({value, setValue, isGrayedOut, isCropped}) {

    const isMobile = useIsMobile();

    return (
        <>
            <div className={'path-item' + (isGrayedOut ? ' grayed-out' : '')} style={{width: ((isMobile && isCropped) ? '50px' : 'auto')}} onClick={setValue}>
                <span>{value?.title}</span>
            </div>
        </>
    )
}

export default PathItem;