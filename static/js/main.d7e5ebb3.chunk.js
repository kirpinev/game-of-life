(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{50:function(e,t,n){e.exports=n(61)},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n.n(l),i=n(31),c=n(32),s=n(46),u=n(44),f=n(15),d=n(16),m=n(62),p=n(80),v=n(81),h=n(26);function g(){var e=Object(f.a)(["\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n"]);return g=function(){return e},e}var w=d.a.div(g()),y=function(e){var t=e.playButton,n=e.pauseButton,a=e.clear,l=e.slow,o=e.fast,i=e.seed,c=e.gridSize;return r.a.createElement(w,null,r.a.createElement(p.a,{variant:"contained",color:"default"},r.a.createElement(m.a,{onClick:t},"Play"),r.a.createElement(m.a,{onClick:n},"Pause"),r.a.createElement(m.a,{onClick:a},"Clear"),r.a.createElement(m.a,{onClick:l},"Slow"),r.a.createElement(m.a,{onClick:o},"Fast"),r.a.createElement(m.a,{onClick:i},"Seed")),r.a.createElement(v.a,{title:"Grid Size",id:"size-menu",onSelect:function(e){return c(e)}},r.a.createElement(h.a.Item,{eventKey:"1"},"20x10"),r.a.createElement(h.a.Item,{eventKey:"2"},"50x30"),r.a.createElement(h.a.Item,{eventKey:"3"},"70x50")))};function x(){var e=Object(f.a)(["\n  display: inline-block;\n  border: 1px solid black;\n  width: 15px;\n  height: 15px;\n  margin-left: -1px;\n  margin-bottom: -1px;\n\n  &:hover {\n    background: #0cf;\n  }\n"]);return x=function(){return e},e}var E=d.a.div(x()),b=function(e){var t=e.boxClass,n=e.boxId,a=e.selectBox,l=e.row,o=e.col;return r.a.createElement(E,{className:t,id:n,onClick:function(){return a(l,o)}})};function B(){var e=Object(f.a)(["\n  width: 150px;\n  line-height: 0;\n  margin: 20px auto auto auto;\n  box-shadow: 0 0 20px white;\n"]);return B=function(){return e},e}var k=d.a.div(B()),S=function(e){for(var t=e.cols,n=e.rows,a=e.gridFull,l=e.selectBox,o=14*t,i=[],c=0;c<n;c+=1)for(var s=0;s<t;s+=1){var u="".concat(c,"_").concat(s);i.push(r.a.createElement(b,{boxClass:a[c][s]?"on":"off",key:u,boxId:u,row:c,col:s,selectBox:l}))}return r.a.createElement(k,{style:{width:o}},i)},F=(n(60),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).selectBox=function(e,t){var n=I(a.state.gridFull);n[e][t]=!n[e][t],a.setState({gridFull:n})},a.seed=function(){for(var e=I(a.state.gridFull),t=0;t<a.rows;t++)for(var n=0;n<a.cols;n++)1===Math.floor(4*Math.random())&&(e[t][n]=!0);a.setState({gridFull:e})},a.playButton=function(){clearInterval(a.intervalId),a.intervalId=setInterval(a.play,a.speed)},a.pauseButton=function(){clearInterval(a.intervalId)},a.slow=function(){a.speed=1e3,a.playButton()},a.fast=function(){a.speed=100,a.playButton()},a.clear=function(){var e=Array(a.rows).fill().map((function(){return Array(a.cols).fill(!1)}));a.setState({gridFull:e,generation:0})},a.gridSize=function(e){switch(e){case"1":a.cols=20,a.rows=10;break;case"2":a.cols=50,a.rows=30;break;default:a.cols=70,a.rows=50}a.clear()},a.play=function(){for(var e=a.state.gridFull,t=I(a.state.gridFull),n=0;n<a.rows;n++)for(var r=0;r<a.cols;r++){var l=0;n>0&&e[n-1][r]&&l++,n>0&&r>0&&e[n-1][r-1]&&l++,n>0&&r<a.cols-1&&e[n-1][r+1]&&l++,r<a.cols-1&&e[n][r+1]&&l++,r>0&&e[n][r-1]&&l++,n<a.rows-1&&e[n+1][r]&&l++,n<a.rows-1&&r>0&&e[n+1][r-1]&&l++,n<a.rows-1&&r<a.cols-1&&e[n+1][r+1]&&l++,e[n][r]&&(l<2||l>3)&&(t[n][r]=!1),e[n][r]||3!==l||(t[n][r]=!0)}a.setState({gridFull:t,generation:a.state.generation+1})},a.speed=100,a.cols=50,a.rows=30,a.state={generation:0,gridFull:Array(a.rows).fill().map((function(){return Array(a.cols).fill(!1)}))},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.seed(),this.playButton()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"The Game of Life"),r.a.createElement(y,{playButton:this.playButton,pauseButton:this.pauseButton,slow:this.slow,fast:this.fast,clear:this.clear,seed:this.seed,gridSize:this.gridSize}),r.a.createElement(S,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectBox:this.selectBox}),r.a.createElement("h2",null,"Generations: ",this.state.generation))}}]),n}(a.Component)),I=function(e){return JSON.parse(JSON.stringify(e))},C=F;o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d7e5ebb3.chunk.js.map