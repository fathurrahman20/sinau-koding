function calculateMotorcycle(hours) {
  if (hours <= 0) return 0;
  return 2000 + (hours - 1) * 1000;
}

function calculateCar(hours) {
  if (hours <= 0) return 0;
  return 5000 + (hours - 1) * 2000;
}

const motorHours = [1, 2, 3];
const motorTotal = motorHours.reduce(
  (acc, h) => acc + calculateMotorcycle(h),
  0
);

const carHours = [1, 2];
const carTotal = carHours.reduce((acc, h) => acc + calculateCar(h), 0);

const totalPendapatan = motorTotal + carTotal;

console.log("Motor:", motorHours, "jam → Rp", motorTotal.toLocaleString());
console.log("Mobil:", carHours, "jam → Rp", carTotal.toLocaleString());
console.log("=================================");
console.log("Total Pendapatan: Rp", totalPendapatan.toLocaleString());
