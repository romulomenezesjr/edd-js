const stack = []

function push(value){
    stack.push(value)
}
function pop(){
    return stack.pop()
}
function peek(){
    return stack[size()-1]
}
function isEmpty(){
    return size() === 0
}
function size(){
    return stack.length 
}
export {push, pop, peek, isEmpty, size, stack}