var lynfuncs = require("../lynfuncs.js");
var describe = require("mocha").describe;
var it = require("mocha").it;
//var assert = require('chai').assert;
var expect = require("chai").expect;

// Тесты иерархичны. Задаю самый верхний уровень
describe("Извлечение аргументов (extract_args)", function() {
    //Тестовые кейсы
    it("0 аргументов", function(done) {
        var fake_args = [];
        expect(lynfuncs.extract_args(fake_args)).to.eql([]); //ожидаю, что функция вернёт ['5','8']
        done();
    });

    it("2 аргумента", function(done) {
        var fake_args = ["D:/App/nodejs/node.exe", "D:/App/nodejs/node.exe"];
        expect(lynfuncs.extract_args(fake_args)).to.eql([]); //ожидаю, что функция вернёт ['5','8']
        done();
    });

    it("4 аргумента", function(done) {
        var fake_args = [
            "D:/App/nodejs/node.exe",
            "D:/App/nodejs/node.exe",
            "5",
            "8"
        ];
        //assert.equal (lynfuncs.extract_args(fake_args), ["5", "8"]);
        expect(lynfuncs.extract_args(fake_args)).to.eql(["5", "8"]); //ожидаю, что функция вернёт ['5','8']
        done();
    });

    it("4 странных аргумента", function(done) {
        var fake_args = [
            "D:/App/nodejs/node.exe",
            "D:/App/nodejs/node.exe",
            ["дом", "огород"],
            "8"
        ];
        //assert.equal (lynfuncs.extract_args(fake_args), ["5", "8"]);
        expect(lynfuncs.extract_args(fake_args)).to.eql([
            ["дом", "огород"],
            "8"
        ]); //ожидаю, что функция вернёт ['5','8']
        done();
    });
});
describe("Вычисление суммы аргументов (sum_args)", function() {
    //Тестовые кейсы
    it("Массив, 2 элемента, верные", function(done) {
        var fake_args = ["5", "8"];
        expect(lynfuncs.sum_args(fake_args)).to.eql(13);
        done();
    });
    it("Массив, 2 элемента, первый не верный", function(done) {
         var fake_args = ["фы5", "8"];
        // expect(lynfuncs.sum_args(fake_args)).to.throw(TypeError);
        expect(lynfuncs.sum_args(fake_args)).to.throw(TypeError);
        done();

    });
});
