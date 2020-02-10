import { checkForName } from '../client/js/nameChecker.js';

//creating a Jest test - function must exist in my app
describe('function checkForName', ()=> {
    test("function must exist", ()=> {
        expect(checkForName).toBeDefined();
    });
});

//second Jest test - function must return typeOf = function
describe('function checkForName', ()=> {
    test("function must return a typeOf = function", ()=> {
        expect(typeof checkForName).toBe("function");
    });
});

// third Jest test - valid url 
describe('function checkForName', ()=> {
    test("function must return true", ()=> {
        const url = "https://en.wikipedia.org/wiki/Germany_at_the_FIFA_World_Cup";
        const res = checkForName(url);

        expect(res).toBeDefined();
        expect(res).toBe(true);
    });
});

// fourth Jest test - invalid url
describe('function checkForName', ()=> {
    test("function must return false", ()=> {
        const url = "htp://en.wikipedia,org/wikiGermany_attheFIFA_World_Cup";
        const res = checkForName(url);

        expect(res).toBeDefined();
        expect(res).toBe(false);
    });
});
