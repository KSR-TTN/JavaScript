const areaCalculator = {
    PI: Math.PI,
    
    //circle
    circleArea(radius) {
        return this.PI * radius * radius;
    },

    //rectangle 
    rectangleArea(length, width) {
        return length * width;
    },

    //cylinder
    cylinderArea(radius, height) {
        const circleArea = 2 * this.PI * radius * radius;
        const sideArea = 2 * this.PI * radius * height;
        return circleArea + sideArea;
    },
};


export default areaCalculator;
