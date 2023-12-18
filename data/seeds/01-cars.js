// STRETCH
const cars = [
  {
    vin: "1HGCM82633A123456",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JTEBU5JR1J5555555",
    make: "toyota",
    model: "coralla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "WVWZZZ1JZ3W123456",
    make: "ford",
    model: "focus",
    mileage: 15000,
  },
];

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate()
//     .then(() => {
//       return knex("cars").insert(cars);
//     });
// };
// either or works 
exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
