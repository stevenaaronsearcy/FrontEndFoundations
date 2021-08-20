let idealCar = {
  carStyle: "Mustang",
  color: "Red",
  weightInPounds: 3600,
  myCar: function () {
    console.log(
      "My ideal car is a " +
        this.carStyle +
        " with a color of " +
        "red, " +
        "but I do not want it to be over " +
        this.weightInPounds +
        " pounds."
    );
  },
};
idealCar.myCar();
