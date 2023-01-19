export default class Utils{

static containsAllElement(searched, container){
        return searched.every(r => container.includes(r))
    }
} 
