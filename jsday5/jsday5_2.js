// Import geometry calculation module
const methods = {
    PI: Math.PI,
    
    // Calculate area of circle
    circleArea(radius) {
        return this.PI * radius * radius;
    },

    // Calculate area of rectangle 
    rectangleArea(length, width) {
        return length * width;
    },

    // Calculate surface area of cylinder
    cylinderArea(radius, height) {
        const circleArea = 2 * this.PI * radius * radius;
        const sideArea = 2 * this.PI * radius * height;
        return circleArea + sideArea;
    },


    filterUnique(array) {
        return [...new Set(array)];
    }
};


 


// Export the geometry module
export default methods;
