// task_3

const circleArea = require('../calcCircle');
const circleLength = require('../calcCircle');

describe('Testing circles', ()=> {
    test.each([[22, 138.2]])('circle length with radius %i is %i', (radius, result)=> {
        expect(circleLength(radius).toFixed(1)).toBe(result);   //+num.toFixed(2)
    })
    test.each([[9, 254.47]])('circle area with radius %i is %i', (radius, result)=> {
        expect(circleArea(radius)).toBeCloseTo(result);
    })
    test ('circle length without arguments', ()=> {         // --??
        expect(circleLength()).toBeCalled();
    })
    test ('circle area without arguments', ()=> {           // --??
        expect(circleArea()).toBeCalledWith();
    })
})