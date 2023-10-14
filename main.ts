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

})
