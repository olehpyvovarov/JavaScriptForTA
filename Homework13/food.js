// task_4  filters by price

const filterFoodPrice = function filterFoodPrice(food, min, max) {
    return food.filter(element => element.price >= min && element.price <= max);
}

module.exports = filterFoodPrice;