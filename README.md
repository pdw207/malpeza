# Malpez
Malpez allows a user to update their facebook status with a flashlight. The app, using a micropocessor called a [Tessel](http://www.tessel.io), receives a signal from an external ambient module that detects light. The Tessel receives the signal by sampling light strength every 10th of a second to distinguish between bursts and sustianed flashes. These signals are then parsed by morse code and sent over wifi to a application that manages authentication, or user login, with facebook.

## Morse Code Alphabet
A : .-
B : -...
C : -.-.
D : -..
E : .
F : ..-.
G : --.
H : ....
I : ..
J : .---
K : -.-
L : .-..
M : --
N : -.
O : ---
P : .--.
Q : --.-
R : .-.
S : ...
T : -
U : ..-
V : ...-
W : .--
X : -..-
Y : -.--
Z : --..

#Generating Morse Code with Light

HELLO WORLD is .... . .-.. .-.. ---

You wake up the device by generating a flash longer than 3 seconds. When you see a steady green light the device is ready to recieve a signal. (A red light means the controller does not have access to wifi.) Use the flashlight to create 4 flashes, or dots '....', to generate the 'H' and wait until you hear the device speak the letter. If the device does not speak the letter or recognize the letter sustain a flash for longer than 3 second to make another attempt. If you don't wait between letters you may continue until you complete the next word.  When you complete the word the the device will spell the word and generate a space to allow you to continue with the next word. When you are ready to send generate a series of bursts for 3 seconds.
