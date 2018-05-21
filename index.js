function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const selectDrivers = driversWithRevenueOver(drivers, revenue);
  return selectDrivers.map(function (driver) {return driver.name; });
}
