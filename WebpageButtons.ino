/*
  DigitalReadSerial for interacting with a webpage

*/

// digital pin 2 has a pushbutton attached to it. Give it a name:
int pushButton = 2;
int pushButton2 = 9;
int pushButton3 = 12;


// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  // make the pushbutton's pin an input:
  pinMode(pushButton, INPUT);
  pinMode(pushButton2, INPUT);
  pinMode(pushButton3, INPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input pin:
  int buttonState = digitalRead(pushButton);
  int button2State = digitalRead(pushButton2);
  int button3State = digitalRead(pushButton3);

  // print out the state of the button:
  if(buttonState != 0){
    Serial.println("Left");
  }else if(button2State != 0){
    Serial.println("Select");
  }else if(button3State !=0){
    Serial.println("Right");
  }
  delay(150);        // delay in between reads for stability
}
