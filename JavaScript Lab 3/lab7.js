let array = Array(
    { name: "Egor", age: 20, sallary: 4000, surname: "Kreed" },
    { name: "Tom", age: 18, sallary: 2000, surname: "Thompson" },
    { name: "Ann", age: 19, sallary: 7000, surname: "Hathaway" },
);

var getSortedArray = function (array, key) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i][key] > array[j][key]) {
                var swap = array[i];
                array[i] = array[j];
                array[j] = swap;
                }
            }
        }

    return array;
}