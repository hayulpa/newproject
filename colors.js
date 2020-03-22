
    var Links = {
      setColor:function(color){
        var alist = document.querySelectorAll('a');
        var z = 0;
        while(z<alist.length){
          alist[z].style.color=color;
          z = z+1;
      }
      }
    }
    var Body = {
      setColor:function(color){
        document.querySelector('body').style.color=color;
      },
      setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
      }
    }


    function nightDayHandler(baby){
      var target = document.querySelector('body');
      if(baby.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        baby.value='day';
        Links.setColor('powderblue');
      }
      else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        baby.value='night';
        Links.setColor('blue');
    }
    }
