if (Meteor.isClient) {
// 2560 1440 nexus 6
// 1080 1920 nexus 5
// 800 480 s2
// 320 240

// cores
// r230 91 58
// 
MyCron = new Cron(100);
VEL=50;
DANO=0;
MyCron.addJob(2,function(){
    console.log("2 segundos");
    d3.selectAll("circle").attr("cx",function(d){
        TTT=this;
        DDD=d;
        xx=this.cx.animVal.value;
        x=740;
        y=440;
        yy=this.cy.animVal.value;
        tg=(yy-y)/(xx-x);
        cos=1/(1+Math.pow(tg,2))
        sin=tg/(1+Math.pow(tg,2))
        //return 200;
        return String(xx+VEL*cos);
    }).attr("cy",function(d){
        TTT=this;
        DDD=d;
        xx=this.cx.animVal.value;
        x=740;
        y=440;
        yy=this.cy.animVal.value;
        tg=(yy-y)/(xx-x);
        cos=1/(1+Math.pow(tg,2))
        sin=tg/(1+Math.pow(tg,2))
        //return 200;
        return String(yy+VEL*sin);
    }).style("fill",function(){
        x=740;
        y=440;
        var yy=this.cy.animVal.value;
        var xx=this.cx.animVal.value;
        if( Math.pow(Math.pow(xx-x,2)+Math.pow(yy-y,2),0.5) < 100){
           //conta +1 no dano e pisca quadrado
           // se o quadrado tiver mais que 5 de dano, fica vermelho
            DANO+=1;
            if (DANO>19){
                d3.select("#rect2").style("fill","#ff0000");
            }
            console.log(DANO);
        }
});
});
  Template.hello.rendered=function(){
        svgMe=d3.select("#main");
        svgMe.on("click",function(d){                       
                coor=d3.mouse(this);
                xxx=coor[0];
                yyy=coor[1];
                R=200;
                x=60; y=60;
                if( Math.pow(Math.pow(xxx-x,2)+Math.pow(yyy-y,2),0.5) < 200){
                    console.log("dentro");
                svgMe.append("ellipse").attr("cx",xxx).attr("cy",yyy).attr("rx","50").attr("ry","25");
MyCron.addJob(3,function(){
    console.log("3 segundos");
    // solta grunt
        svgMe.append("circle").attr("cx",xxx).attr("cy",yyy).attr("r",20).style("fill","#fff");
});
}
                    
});
}

  Template.hello.events({
    'click #main': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
