// Define the parent class Transform
function Transform() {
    // Constructor or any methods for Transform
}

// Define the child class Overlap that inherits from Transform
function Overlap() {
    // Call the parent class constructor
    Transform.call(this);
    // Additional properties or methods specific to Overlap
}

// Inherit Transform's prototype methods
Overlap.prototype = Object.create(Transform.prototype);

// Set the constructor back to Overlap (as it was overwritten by the above line)
Overlap.prototype.constructor = Overlap;

// Add additional methods or properties to the Overlap class
Overlap.prototype.someMethod = function() {
    // Method specific to Overlap
};

// Usage of the classes
let overlapInstance = new Overlap();
overlapInstance.someMethod();  // Accessing a method of the Overlap class
