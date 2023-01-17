import {separateTableElementsWithLines} from "../../Utils";

function OptionsContainer({children}) {

    // children = separateTableElementsWithLines(children)

    return (
        <div className='options-container'>
            {children}
        </div>
    )
}

export default OptionsContainer;