//complete this code
class Rectangle {
    constructor(width,height){
        this._width=width;
        this._height=height;
    
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    getArea(width,height){
        return this._width*this.height;
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side,side);
            this._side=side;
    }
    getPerimeter(side){
        return 4*side;
    }
    
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
