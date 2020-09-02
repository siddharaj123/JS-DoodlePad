'use strict';

class Node {
    constructor(element) {
      
      this.element = element;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.flag = false;
      this.size = 0;
    }
  
    add(element) {
      var node = new Node(element);
      var current;
      if (this.head == null) this.head = node;
      else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      
        this.size++;
      }
    }
  }
  
  class Recorder {
    constructor() {
      this.list = new LinkedList();
      this.flag = false;
    }
  
    startRecording() {
      this.flag = true;
      console.log(this.flag);
    }
  
    stopRecording() {
      this.flag = false;
    }
  }

  let lastX;
  let lastY;
  const canvas = document.getElementById("canvas");
  const cxt = canvas.getContext("2d");
  let painting = false;
  
  function startingPosition(event) {
    painting = true;
  
    if (recc === true) {
     
      lastX = event.offsetX;
      lastY = event.offsetY;
      drawing.list.add([
        [lastX, lastY],
        [event.offsetX, event.offsetY],
      ]);
  
      console.log(drawing);
    }
    draw(event.offsetX, event.offsetY);
  }
  
  function endingPosition() {
    painting = false;
    if (recc) {
    }
    cxt.beginPath();
  }
  
  function draw(x, y) {
    if (!painting) {
      console.log("painting is false");
      return;
    }
    cxt.lineWidth = 10;
    cxt.lineCap = "round";
    cxt.strokeStyle = document.getElementById("favcolor").value;
    cxt.beginPath();
    cxt.moveTo(x, y); 
    cxt.lineTo(x, y);
    cxt.closePath();
    cxt.stroke();
  }
  
  function recording(event) {
    draw(event.offsetX, event.offsetY);
    if (recc)
   
      drawing.list.add([
        [lastX, lastY],
        [event.offsetX, event.offsetY],
      ]);
  }
  
  let startbutton = document.getElementById("start recording");
  let savebutton = document.getElementById("save recording");
  let recallbutton = document.getElementById("retrieve recording");
  let clearbutton = document.getElementById("clear canvas");
  let stopbutton = document.getElementById("stop recording");
  let youtubeDiamondPlaybutton = document.getElementById("play");
  let recc = false;
  let drawing = new Recorder();

  canvas.addEventListener("mousedown", startingPosition);
  canvas.addEventListener("mouseup", endingPosition);
  canvas.addEventListener("mousemove", (e) => {
    recording(e);
  });
  clearbutton.addEventListener("click", () => {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
  });
  startbutton.addEventListener("click", () => {
    recc = true;
  });
  
  stopbutton.addEventListener("click", () => {
    recc = false;
  });
  savebutton.addEventListener("click", () => {
    localStorage.setItem("list", JSON.stringify(drawing.list));
  });
  recallbutton.addEventListener("click", () => {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    let g = new LinkedList();
    g = JSON.parse(localStorage.getItem("list"));
    console.log(g);
  });
  
  youtubeDiamondPlaybutton.addEventListener("click", () => {
    let cur = drawing.list.head;
    console.log(drawing.list, cur);
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    while (cur) {
    painting = true;
      console.log("looping");
      // console.log(cur.element[0], cur.element[1])
      draw(cur.element[0], cur.element[1]);
      lastX = cur.element[0];
      lastY = cur.element[1];
      cur = cur.next;
    }
  });





