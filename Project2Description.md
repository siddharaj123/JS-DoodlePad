# Canvas Drawing Recorder Application
## Due Date: Tuesday, June 23rd, 2020 11:59 PM
### Objectives: 
To define Java custom types, data structures, animation, and event manipulation.
### Overview
This project consists of developing a recorder application that relies on a JavaScript singly-linked list.

### Grading
* (20 pts) Singly-linked list implementation
* (80 pts) Drawing Recorder
### Linked List Specifications
Implement a singly-linked list custom type that defines the following operations:

* A constructor that takes a comparison function as parameter that is used to find elements in the list.
* Add element to the front of the list.
* Add element to the end of the list.
* Add element in the middle of the list.
* Find element
* Size of the list
* Any other operation that supports the functionality associated with the recorder application defined below.
### Drawing Recorder Specification
Define a custom type called Recorder. The class defines functionality that allow us to record and play the activity associated with the drawing application presented in class [DrawingPointer.html](../../lectureCodeExamples/week3/ObjsAPISCode/DrawingPointer.html). For example, someone using your system can select a record button, draw a circle, stop the recording process, and then playback the drawing of that circle. The playback process is not just to show the final drawing created; it is animated (as if we were to repeat the drawing ourselves). The class defines methods that control each of the following activities:
* Start recording
* Stop recording
* Play
* Save recording
* Retrieve saved recording
* Change drawing color
* Clear screen

### Drawing Recorder Requirements
* Feel free to add any other methods and / or instance variables you understand you need.
* Use localStorage to store the recordings.
* Your interface must provide access to the functionality specified above (e.g., start recording, stop recording, etc.). It is up to you do decide how to provide access to the functionality.
* Your interface must include a help section that describes how to use the application.
* To keep track of the mouse activity, store the x,y coordinates associated with the mouse position using the linked list you defined above.
* You may not use any program/code from the web in order to complete your recorder.
* Feel free to add any other extra functionality. Surprise us!
* __Do not post your recorder on the web (even after the class is over); do not post it in terpconnect.__
### General Requirements
* You must the html page we have provided (recorder.html) to provide access to the recorder application.
* You need to use the E6 class syntax covered in lecture for any classes you create.
* Do not use var; use let or const for variable definition.
### Submission
Submit your application by commiting your code and pushing it to your repo on the university gitlab server. Make sure you verify that you see your code up on the gitlab server after you have pushed it.