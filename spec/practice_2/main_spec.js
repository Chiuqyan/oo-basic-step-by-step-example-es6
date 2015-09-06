"use strict";
import _ from "lodash";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
var expect =  chai.expect;

chai.use(sinonChai);
import Person from "../../src/practice_2/person";
import Student from "../../src/practice_2/student";

describe("Person", ()=>{
    it("should have field name and age", ()=>{
        var person = new Person("Tom", 21); expect(person.name).to.equal("Tom");
        expect(person.age).to.equal(21);
    });

    it("should have a method introduce, introduce person with name and age", ()=>{
        var person = new Person("Tom", 21);

        var introduce = person.introduce();

        expect(introduce).to.equal("My name is Tom. I am 21 years old.");

    });

    describe("Student", ()=>{
        it("should have field name, age and class number", ()=>{
            var student = new Student("Tom", 21, 2);
            expect(student.name).to.equal("Tom");
            expect(student.age).to.equal(21);
            expect(student.klass).to.equal(2);

        });

        it("should overwrite Person introduce, introduce student with class", ()=>{
            var student = new Student("Tom", 21, 2);
            var introduce = student.introduce();

            expect(introduce).to.equal("I am a Student. I am at Class 2.");

        });

    })
});
