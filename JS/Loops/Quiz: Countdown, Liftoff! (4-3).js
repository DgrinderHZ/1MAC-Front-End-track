/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var s = 60;
while(s >= 0){
    if(s == 50) 
        console.log("Orbiter transfers from ground to internal power");
    else if(s == 31) 
        console.log("Ground launch sequencer is go for auto sequence start");
    else if(s == 16)
        console.log("Activate launch pad sound suppression system");
    else if(s == 10)
        console.log("Activate main engine hydrogen burnoff system");
    else if(s == 6)
        console.log("Main engine start");
    else if(s === 0)
        console.log("Solid rocket booster ignition and liftoff!");
    else 
        console.log("T-"+s+" seconds");
    s--;
}

