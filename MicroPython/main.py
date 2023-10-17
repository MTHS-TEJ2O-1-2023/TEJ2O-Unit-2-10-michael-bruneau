"""
Created by: Michael B
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

# setup
np = np = neopixel.NeoPixel(pin16, 5)

display.clear()
display.show(Image.HAPPY)
print(np[0])
np[0] = (0, 0, 0)
print(np[1])
np[1] = (0, 0, 0)
print(np[2])
np[2] = (0, 0, 0)
print(np[3])
np[3] = (0, 0, 0)
np.show()

# loop
while True:
    # button A pressed
    if button_a.is_pressed():
        display.clear()
        light_value = display.read_light_level()

        # <= 51 light level
        if light_value <= 51:
            np[0] = (0, 0, 255)
            np.show()
            sleep(1000)
            np[0] = (0, 0, 0)
            np.show()

        # >= 52 light level
        if light_value >= 52:
            # < 104 light level
            if light_value < 104:
                np[1] = (255, 255, 0)
                np.show()
                sleep(1000)
                np[1] = (0, 0, 0)
                np.show()

        # >= 104 light level
        if light_value >= 104:
            # < 156 light level
            if light_value < 156:
                np[2] = (255, 165, 0)
                np.show()
                sleep(1000)
                np[2] = (0, 0, 0)
                np.show()

        # >= 156 light level
        if light_value >= 156:
            # < 208 light level
            if light_value < 208:
                np[3] = (255, 0, 0)
                np.show()
                sleep(1000)
                np[3] = (0, 0, 0)
                np.show()

        # >= light level
        if light_value >= 208:
            np[3] = (255, 0, 255)
            np.show()
            sleep(1000)
            np[3] = (0, 0, 0)
            np.show()
        display.show(Image.HAPPY)
