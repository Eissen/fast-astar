/*! Project:astar, Create:FWS 2019.10.29 15:21, Update:FWS 2019.10.30 10:56 */ 
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):"function"==typeof define&&(define.cmd||define.hjs)?define(function(require,exports,e){e.exports=n()}):e.Grid=n()}(this,function(){"use strict";var e=function(e,n){return~~(Math.random()*(n-e+1))+e},n=function(e,n){var t=this;t.x=e,t.y=n,t.g=0,t.h=0,t.f=0,t.value=0,t.key=[e,n]};return function(){function t(e){var n=this;n.col=e.col,n.row=e.row,n.grid=n.createGrid(e.col,e.row,e.render)}return t.prototype.obstacle=function(n,t){for(var r,o=this,i=~~(o.col*o.row*n/100),u=[],f={},c=0;c<i;c++)(r=function(){u[0]=e(0,o.col-1),u[1]=e(0,o.row-1);var n=o.get(u);0===n.value?(n.value=t,f[[u[0],u[1]]]=null):r()})();return f},t.prototype.get=function(e){var n=this.grid[e[1]];return n?n[e[0]]:undefined},t.prototype.set=function(e,n,t){var r=this.get(e);r[n]=t,"function"==typeof r.render&&r.render({key:n,val:t})},t.prototype.createGrid=function(e,t,r){for(var o=[],i=0;i<t;i++)!function(t){var i=function(){for(var o=[],i=0;i<e;i++){var u=new n(i,t);"function"==typeof r&&(u.render=r),o[i]=u}return o}();o.push(i)}(i);return o},t.prototype.getData=function(){for(var e=this,n=e.grid,t=[],r=0,o=n.length;r<o;r++)!function(e,r){var o=n[e];t.push(function(){for(var e=[],n=0,t=o.length;n<t;n++)e.push(o[n].value);return e}())}(r);return t},t}()});