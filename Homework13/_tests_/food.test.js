// task_4

const filterFoodPrice = require('../food');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];
describe('Testing the food filter by price', ()=> {
    test ('expected length of the sorter array is 3', () => {
        expect(filterFoodPrice(food, 12, 40)).toHaveLength(3);
    })
    test ('the sorted array has "pepper" object', () => {
        expect(filterFoodPrice(food, 12, 40)).toContainEqual({kind:'pepper', price:27});
        //expect(filterFoodPrice(food, 12, 40)).toEqual({kind:'pepper', price:27});  // not suitable as it only one object in the array but it has three
    })
    test ('the sorted array contains 2nd, 3rd and 4th elements of the tested array', () => {
        expect(filterFoodPrice(food, 12, 40)).toContainEqual(food[1]);
        expect(filterFoodPrice(food, 12, 40)).toContainEqual(food[2]);
        expect(filterFoodPrice(food, 12, 40)).toContainEqual(food[3]);
    })
    test ('the price of the 1st element is greater than min of 12', () => {
        expect(filterFoodPrice(food, 12, 40)[0].price).toBeGreaterThan(12);
    })
    test ('the price of the 3rd element is less than max of 40', () => {
        expect(filterFoodPrice(food, 12, 40)[2].price).toBeLessThan(40);
    })
    test ('the sorted array does not have "lemon" object', () => {
        expect(filterFoodPrice(food, 12, 40)).not.toContainEqual({kind:'lemon', price:50});
    })
    // own stuff
    test ('the first element of the sorted array is "bred"', () => {
        expect(filterFoodPrice(food, 12, 40)[0]).toEqual({kind:'bred', price:16});    
    })
    test ('the 3rd element of the sorted array has "price" property and it is 32', () => {
        expect(filterFoodPrice(food, 12, 40)[2]).toHaveProperty('price', 32);    
    })
})