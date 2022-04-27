
const Spiderman = require('./../app/spiderman.js')


// describe("test suite dummy description", () => {
//     test("case 1 dummy", () => {
//         const resultOfSomething = 1+2
//         expect(resultOfSomething).toBe(18);
//     });
// })

const { TestWatcher } = require("jest")


describe('Unit test for spiderman class',()=>{

    test('1. create an spiderman object', () =>{

        const andrewGarfield = new Spiderman ("Spiderman Sony", 31, "Andrew Garfield", 2,"Sony")


        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
        
        

    })

    test('2. use the method getInfo',()=>{
        const tomHolland = new Spiderman("Spiderman",25,"Tom Holland",5,"Marvel studio")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
})