/**
 * Truck class
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-10
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  private licensePlate: string
  private airPressure: number

  constructor(
    licensePlate: string,
    color: string,
    maxSpeed: number,
    numberTires: number,
    airPressure: number
  ) {
    super(color, maxSpeed, numberTires)
    this.licensePlate = licensePlate
    this.airPressure = airPressure
  }

  // status
  status(): void {
    super.status()
    console.log(`    → LicensePlate: ${this.licensePlate}
    → Number of tires: ${super.getTires()}`)
  }

  // getter for licensPlate
  getLicensePlate(): string {
    return this.licensePlate
  }

  // setter for licence plate
  setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  // getter for airPressure
  getAirPressure(): number {
    return this.airPressure
  }

  // setter for airPressure
  setAirPressure(airPressure: number): void {
    this.airPressure = airPressure
  }

  // break method replacing airBrake
  break(breakPower: number, breakTime: number): void {
    super.setSpeed(
      super.getSpeed() - breakPower * breakTime - this.airPressure * breakTime
    )

    // reality Check
    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck
