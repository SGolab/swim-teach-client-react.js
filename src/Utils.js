export function separateTableElementsWithLines(elements) {

    const lineStyle = {
        width: "90%",
        height: "1px",
        backgroundColor: "darkGray"
    }

    const newElements = [];

    elements.forEach(element => {
        newElements.push(element)
        newElements.push(<div style={lineStyle}/>)
    })

    newElements.splice(newElements.length - 1)

    return newElements;
}