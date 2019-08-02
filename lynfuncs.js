// Сумирует все элементы массива
//
// -> Array
//
// <- Int
module.exports.sum_args = function(args) {
    if (args === undefined || args.length < 2) {
        var err = new Error("Ожидалось 2 и более аргументов");
        throw err;
    }
    var sum = 0;
    args.forEach(element => {
        if (Number.isNaN(Number(element))) {
            //var err = new Error("Аргумент должен быть числом. '"+ element +"' - не похоже на число.");
            throw new TypeError("Аргумент должен быть числом. '"+ element +"' - не похоже на число.");
        }
        sum += Number(element);
    });
    return sum;
};
module.exports.extract_args = function(args) {
    var extracted_args = [];
    for (let index = 2; index < args.length; index++) {
        extracted_args.push(args[index]);
    }
    return extracted_args;
};
