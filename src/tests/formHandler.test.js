import { handleSubmit } from '../client/js/formHandler.js';

//creating a Jest test - function must exist in my app
describe('function handleSubmit', ()=> {
    test("function must exist", ()=> {
        expect(handleSubmit).toBeDefined();
    });
});

//second Jest test - function must return typeOf = function
describe('function handleSubmit', ()=> {
    test("function must return a typeOf = function", ()=> {
        expect(typeof handleSubmit).toBe("function");
    });
});

