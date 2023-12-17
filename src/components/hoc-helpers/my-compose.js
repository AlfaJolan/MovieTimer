// Example of myCompose implementation
const myCompose = (...funcs) => (comp) => {
    return funcs.reduce((wrappedComponent, hoc) => hoc(wrappedComponent), comp);
};
export default myCompose;