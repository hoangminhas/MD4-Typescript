var money = 10000;
var buyCar = function (car) {
    return new Promise((function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("don't have enough money");
            }
        }, 100);
    }));
};
money = 100001;
var promise = buyCar("Vinfast").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
//# sourceMappingURL=main.js.map