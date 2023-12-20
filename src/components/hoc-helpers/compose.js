const compose = (...functions) => (component) =>
    functions.reduce((wrapped, fn) => fn(wrapped), component);

export default compose;