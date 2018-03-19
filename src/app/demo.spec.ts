import { async } from '@angular/core/testing';

describe('hellotest', () => {

// use of variables allows for multiple use
let expected = '';
let notExpected = '';
let expectMatch = null;

// as the number of unit test increase the x and f prefixes will be necessary
//   to determine which test(s) run
beforeEach(() => {
    expected = 'hellotest';
    notExpected = 'hellotest999';
    expectMatch = new RegExp(/^hello/);
});

// clear the variables after testing
afterEach(() => {
    expected = '';
    notExpected = '';
    expectMatch = null;
});


    it('Checks if hellotest is hellotest', () => expect('hellotest').toBe(expected));
    // could also be written in the negative as
    it('Checks if hellotest is not hellotest', () => expect('hellotest').not.toBe(notExpected));
    it('Checks if hellotest starts with hello', () => expect('hellotest').toMatch(expectMatch));
});

