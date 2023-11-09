// Exercise 1
function bubbleSort(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                }
            }
        }  

    return array;
}

// Exercise 2
function elementCounter(array) {
    var dictElements = new Map();
    
    for (let i = 0; i < array.length; i++) {
      if (dictElements.get(array[i])) {
        dictElements.set(array[i], dictElements.get(array[i]) + 1);
      }
      else {
        dictElements.set(array[i], 1);
      }
    }

    var result = new Map();
    
    for (let [key, value] of dictElements) {
      if (value > 1) {
        result.set(key, value);
      }
    }
    
    return result;
}


// Exercise 3
function elmentOfMatrix(matrix) {
    var maxElementOfMin = 0;
    
    for (let row = 0; row < matrix.length; row++) {
      var minElement = 10 ** 9;
      
      for (let col = 0; col < matrix[row].length; col++) {
        matrix[row][col] < minElement ? minElement = matrix[row][col] : minElement;
      }
      
      minElement > maxElementOfMin ? maxElementOfMin = minElement : maxElementOfMin;
    }
    
    return maxElementOfMin;
}


// Exercise 4
var vectorA = {
    init: function(x, y, z) {
        this.x = x,
        this.y = y,
        this.z = z
    },

    sum: function(vectorB) {
        return [this.x + vectorB.x, this.y + vectorB.y, this.z + vectorB.z];
    }, 

    difference: function(vectorB) {
        return [this.x - vectorB.x, this.y - vectorB.y, this.z - vectorB.z];
    },

    multiplication: function(vectorB) {
        return [this.x * vectorB.x, this.y * vectorB.y, this.z * vectorB.z];
    },

    scalarMultiplication: function(scalar) {
        return [this.x * scalar, this.y * scalar, this.z * scalar];
    },

    vectorLength: function() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    },

    scalarMultiplicationVector: function(vectorB) {
        return this.x * vectorB.x + this.y * vectorB.y + this.z * vectorB.z;
    },
};
  
var vectorB = {
    init: function(x, y, z) {
        this.x = x,
        this.y = y,
        this.z = z
    },

    sum: function(x, y, z) {
        return [this.x + vectorB.x, this.y + vectorB.y, this.z + vectorB.z]; 
    },

    difference: function(vectorB) {
        return [this.x - vectorB.x, this.y - vectorB.y, this.z - vectorB.z];
    },

    multiplication: function(vectorB) {
        return [this.x * vectorB.x, this.y * vectorB.y, this.z * vectorB.z];
    },

    scalarMultiplication: function(scalar) {
        return [this.x * scalar, this.y * scalar, this.z * scalar];
    },

    vectorLength: function() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    },

    scalarMultiplicationVector: function(vectorB) {
        return this.x * vectorB.x + this.y * vectorB.y + this.z * vectorB.z;
    },
};
  

// Exercise 5
function shiftElementsArray(array, k) {
  var shiftedArray = Array();

  for (var i = 0; i < array.length; i++) {
    shiftedArray[i] = array[(i + k % array.length) % array.length];
  }

  return shiftedArray;
}