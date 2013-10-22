$(document).ready(function(){




var scrolee = $('#info ul'),
  zone = $('#info li'),
  zoneWidth,
  link = $('[role="navigation"] a'),
  homeLink = $('[role="banner"] strong a'),
  linkActive = -1,
  self,
  rT;

link.each(function(i){
  self = $(this);
  self.click(function(e){
    linkActive = i;
    e.preventDefault();
    positioner()
  });
});

homeLink.click(function(e){
  e.preventDefault();
  scrolee.css({'left':'0'});
  linkActive = -1;
});

var positioner = function(){
  scrolee.css({'left':-100*(linkActive+1)+'%'});
}




});
