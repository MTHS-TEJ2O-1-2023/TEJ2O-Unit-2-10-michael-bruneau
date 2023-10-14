/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael
 * Created on: Oct 2023
 * This program tells you the light level
*/

// variables
let neopixelStrip: neopixel.Strip = null
let lightValue: number

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  lightValue = input.lightLevel()
  lightValue = Math.round(lightValue)

  // turn neopixel 0 blue if light value is less than or equal to 0
  if (lightValue <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }

  // turn neopixel 1 yellow if light value is greater than 52 or equal
  if (lightValue >= 52) {
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
  }

  // turn neopixel 2 orange if light value is greater or equal to 104
  if (lightValue >= 104) {
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
  }

  // turn neopixel 3 red if light value is greater or equal to 156
  if (lightValue >= 156) {
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
  }
})
