# Calculator 🧮

This project was made as a part of a uni assignment, that required us to try out **Git**. I decided to build a simple calculator in React.js, but you'll see a bunch of test commits that have nothing to do with the calculator itself and were just a part of the assignment.

### Components
The app consists of only two components - **App.jsx and Button.jsx**.  
The Button component receives 4 props: *value, bg, text and onClick*. That's because I decided to separate the operation buttons from the ones with numbers - hence the different colors. The rest of the project is in App.jsx - the main container, buttons displayed and, of course, the app logic. I put all the button information (values, background and text colors) in an array, then mapped through it in the main container. 

### Logic
I am using a single state variable, which is \[value, setValue\]. The calculations are hnadled inside the handleClick(val) function - depending on the **val*  parameter it receives, it decides what to do with the value. All the buttons are passed this function as the *onClick* prop.
We get the value through the main input box, by clicking on the calculator button (not by typing). 

### Styling
For the styling I used **TailwindCSS**, because I got used to it in the past few months and I find it really great - the only challenge was passing these classes into components dynamically.

### Improvements
This calculator works, but most definitely not optimally. For example, to enter a new calculation, the user must first delete the previous result etc. It also throws an error if the user types in unusual combinations like more than two zeroes on their own. Since this is a test project, I'll just ask you not to do that.

### Screenshot
![Screenshot of the project](/screenshot.png)
