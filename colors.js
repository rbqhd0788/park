var Links = {
  setColor:function (color){
    // var links = document.querySelectorAll('a');
    // var i = 0;
    // while(i < links.length){
    //   links[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
  // document.querySelector('body').style.color = color;
  $('body').css('color', color);
},
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function WhiGreeHR(self){
var target = document.querySelector('body');
  if(self.value === 'white'){
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'seagreen';

    Links.setColor('black');
  } else {
    Body.setBackgroundColor('seagreen');
    Body.setColor('white');
    self.value = 'white';

    Links.setColor('white');
    }
  }
