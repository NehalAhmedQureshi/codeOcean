// create custom render function
const customrender = ( reactElement , rootDiv ) => {
    // * 01_problem adding atributes
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
    rootDiv.appendChild(domElement) */
    //* fix problem # 01

    // createDom Element
    const domElement = document.createElement(reactElement.type);
    // set innerHTML
    domElement.innerHTML = reactElement.children;
    // set attributes
    for (const prop in reactElement.props) {
        if(prop === "children") continue
        domElement.setAttribute(prop , reactElement.props.prop)
    }
    // append dom ELement in root div
    rootDiv.appendChild(domElement)
} ;

// create custom react element
const reactElement = {
    type : "p" ,
    props: {
        id: 'google',
        class : 'bank'
    } ,
    children : 'Hey its me Nehal!'
}

// get root div
const containerDiv = document.querySelector("#root")
// call custom render funtion
customrender( reactElement , containerDiv )