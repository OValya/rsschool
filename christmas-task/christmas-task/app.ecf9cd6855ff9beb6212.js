(()=>{"use strict";const t=function(){function t(t,e,n,o){void 0===e&&(e="div"),void 0===n&&(n=""),void 0===o&&(o="");var r=document.createElement(e);r.className=n,r.innerHTML=o,t&&t.append(r),this.node=r}return t.prototype.destroy=function(){this.node.remove()},t}();var e,n=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)});const o=function(t){function e(e,n,o){return t.call(this,e,"div","page")||this}return n(e,t),e.prototype.updatePage=function(t){throw new Error("Method not implemented.")},e}(t);var r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const i=function(e){function n(n){var o=e.call(this,n)||this;return o.main=new t(o.node,"div","main-start-page"),o.boxBall=new t(o.main.node,"div","box-ball"),o.title=new t(o.main.node,"div","title-start-page",'Новогодняя игра <br/> "Наряди ёлку"'),o.startButton=new t(o.main.node,"button","start-button","Начать"),o.startButton.node.onclick=function(){o.onClick()},o}return r(n,e),n.prototype.onClick=function(){this.destroy(),window.location.href="#toys"},n}(o);var a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const c=function(e){function n(n,o,r,i,a){var c=e.call(this,n,"label","checkbox ".concat(r," ").concat(o))||this;return c.type=o,c.value=i,c.inputCheck=new t(c.node,"input"),c.inputCheck.node.type="checkbox",c.inputCheck.node.checked=a,c.inputCheck.node.onchange=function(){c.onCheck(o,i)},c}return a(n,e),n}(t);var s=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const u=function(t){function e(e,n,o,r,i){var a=t.call(this,e,"div","select-block",n)||this;return r.forEach((function(t,e){var n=i.includes(t.filterType);a.check=new c(a.node,o,t.type,t.filterType,n),a.check.onCheck=function(t,e){a.onCheck(t,e)}})),a}return s(e,t),e}(t);var l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),p=[{type:"ball",filterType:"шар"},{type:"bell",filterType:"колокольчик"},{type:"toy",filterType:"фигурка"},{type:"snowflake",filterType:"снежинка"},{type:"cone",filterType:"шишка"}],f=[{type:"white",filterType:"белый"},{type:"red",filterType:"красный"},{type:"blue",filterType:"синий"},{type:"yellow",filterType:"желтый"},{type:"green",filterType:"зелёный"}],d=[{type:"big",filterType:"большой"},{type:"medium",filterType:"средний"},{type:"small",filterType:"малый"}],h=function(t){function e(e,n,o){var r=t.call(this,e,"div","filter-block")||this;return r.blockTitle=document.createElement("h2"),r.blockTitle.textContent=n,r.node.append(r.blockTitle),r.formFilter=new u(r.node,"Форма:","shape",p,o.shape),r.formFilter.onCheck=function(t,e){r.onCheck(t,e)},r.colorFilter=new u(r.node,"Цвет:","color",f,o.color),r.colorFilter.onCheck=function(t,e){r.onCheck(t,e)},r.sizeFilter=new u(r.node,"Размер:","size",d,o.size),r.sizeFilter.onCheck=function(t,e){r.onCheck(t,e)},r}return l(e,t),e}(t);const y=h;var v=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const m=function(e){function n(n,o,r,i,a,c,s){var u=e.call(this,n,"div","double-range")||this;return u.minValueText=new t(u.node,"span","value-range"),u.containerRange=new t(u.node,"div","container-range"),u.inputUp=new t(u.containerRange.node,"input"),u.inputDown=new t(u.containerRange.node,"input"),u.inputUp.node.type="range",u.inputUp.node.min=r,u.inputUp.node.max=i,u.inputUp.node.step=a,u.inputUp.node.value=c,u.inputDown.node.type="range",u.inputDown.node.min=r,u.inputDown.node.max=i,u.inputDown.node.step=a,u.inputDown.node.value=s,u.maxValueText=new t(u.node,"span","value-range"),u.inputUp.node.oninput=function(){u.setGradient(),u.setValueToSpan(),+u.inputUp.node.value>+u.inputDown.node.value&&(u.inputDown.node.value=u.inputUp.node.value)},u.inputDown.node.oninput=function(){u.setGradient(),u.setValueToSpan(),+u.inputDown.node.value<+u.inputUp.node.value&&(u.inputUp.node.value=u.inputDown.node.value)},u.inputUp.node.onchange=function(){u.onChange(o,u.inputUp.node.value,u.inputDown.node.value)},u.inputDown.node.onchange=function(){console.log("max",u.inputDown.node.value),u.onChange(o,u.inputUp.node.value,u.inputDown.node.value)},u}return v(n,e),n.prototype.setValueToSpan=function(){this.maxValueText.node.textContent=this.inputDown.node.value,this.minValueText.node.textContent=this.inputUp.node.value},n.prototype.setGradient=function(){var t=100*(+this.inputUp.node.value-+this.inputUp.node.min)/(+this.inputUp.node.max-+this.inputUp.node.min),e=100*(+this.inputDown.node.value-+this.inputDown.node.min)/(+this.inputDown.node.max-+this.inputDown.node.min);this.inputUp.node.style.background="linear-gradient(90deg, #fff ".concat(t,"%, #f00 ").concat(t,"%, #f00 ").concat(e,"%, #fff ").concat(e,"%)"),this.inputDown.node.style.background="linear-gradient(90deg, #fff ".concat(t,"%, #f00 ").concat(t,"%, #f00 ").concat(e,"%, #fff ").concat(e,"%)")},n}(t);var w=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),g=function(t){function e(e,n,o){var r=t.call(this,e,"div","filter-block")||this;r.blockTitle=document.createElement("h2"),r.blockTitle.textContent=n,r.node.append(r.blockTitle),r.rangeCount=new m(r.node,"count","0","12","1",o.count[0],o.count[1]);var i=new Event("input");return r.rangeCount.inputUp.node.dispatchEvent(i),r.rangeCount.inputDown.node.dispatchEvent(i),r.rangeCount.onChange=function(t,e,n){r.onChange(t,e,n)},r.rangeYears=new m(r.node,"year","1940","2020","10",o.year[0],o.year[1]),r.rangeYears.inputUp.node.dispatchEvent(i),r.rangeYears.inputDown.node.dispatchEvent(i),r.rangeYears.onChange=function(t,e,n){r.onChange(t,e,n)},r}return w(e,t),e}(t);const _=g;var b=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const O=function(e){function n(n,o){var r=e.call(this,n,"div","card")||this;return r.title=new t(r.node,"h3","card-title","".concat(o.name)),r.num=o.num,r.descriptions=new t(r.node,"ul","card-description"),r.count=new t(r.descriptions.node,"li","","Количество: ".concat(o.count," шт.")),r.shape=new t(r.descriptions.node,"li","","Форма: ".concat(o.shape)),r.year=new t(r.descriptions.node,"li","","Год покупки: ".concat(o.year)),r.color=new t(r.descriptions.node,"li","","Цвет: ".concat(o.color)),r.size=new t(r.descriptions.node,"li","","Размер: ".concat(o.size)),r.favorite=new t(r.descriptions.node,"li","","Любимая: ".concat(o.favorite)),r.node.style.background="rgba(36, 197, 219, 0.15) url('./assets/toys/".concat(o.num,".png') no-repeat 100% 50%/40%"),r.select=new t(r.node,"div","select-img"),1==o.selected?r.select.node.classList.add("selected"):r.select.node.classList.contains("selected")&&r.select.node.classList.remove("selected"),r.node.onclick=function(){r.onSelect(r.num)},r}return b(n,e),n}(t);var T=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const z=function(e){function n(n,o){var r=e.call(this,n,"div","card-box")||this;return r.blockTitle=new t(r.node,"h1","title-card-box","Коробка с игрушками"),0==o.length?new t(r.node,"h3","content-message","Игрушек не найдено."):o.forEach((function(t){r.toyCard=new O(r.node,t),r.toyCard.onSelect=function(t){r.onSelect(t)}})),r}return T(n,e),n}(t);var x=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),P=["По названию от А до Я","По названию от Я до А","Сначала новые","Сначала старые"];const k=function(e){function n(n){var o=e.call(this,n,"div","filter-block")||this;new t(o.node,"h2","","Сортировка и поиск"),o.sortSelect=new t(o.node,"select","sort-select");for(var r=0;r<P.length;r++){var i=document.createElement("option");i.value=r.toString(),i.text=P[r],o.sortSelect.node.add(i)}return o.boxSearch=new t(o.node,"div","box-search"),o.searchInput=new t(o.boxSearch.node,"input","search"),o.searchInput.node.type="search",o.searchButton=new t(o.boxSearch.node,"button","search-button"),o.resetButton=new t(o.node,"button","reset-button","Сбросить фильтры"),o.resetButton.node.onclick=function(){o.onClick()},o}return x(n,e),n}(t);var S=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const j=function(e){function n(n,o){var r=e.call(this,n)||this;return r.filters=new t(r.node,"div","filter-section"),r.filterByValue=new y(r.filters.node,"Фильтр по значению",o.filterValues),r.filterByValue.onCheck=function(t,e){r.onCheck(t,e)},r.filterByRange=new _(r.filters.node,"Фильтр по диапазону:",o.filterValues),r.filterByRange.onChange=function(t,e,n){r.onChange(t,e,n)},r.sortBlock=new k(r.filters.node),r.sortBlock.onClick=function(){r.onReset()},r.cardBox=new z(r.node,o.filterToys),r.cardBox.onSelect=function(t){r.onSelect(t)},r}return S(n,e),n.prototype.updatePage=function(t){var e=this;this.cardBox.destroy(),this.cardBox=new z(this.node,t),this.cardBox.onSelect=function(t){e.onSelect(t)}},n}(o),C=function(){function t(t,e){var n=this;this.el=new Image,this.el.classList.add("picture-icon"),this.el.src=t,this.count=e,this.el.onclick=function(){n.onSelect(n.el.src)},this.el.ondragstart=function(t){t.dataTransfer.setData("text/plain",n.el.src),t.dataTransfer.setData("mouse_position_x",t.offsetX.toString()),t.dataTransfer.setData("mouse_position_y",t.offsetY.toString()),t.dataTransfer.dropEffect="copy"},this.el.onmousedown=function(t){}}return t.prototype.getPosition=function(){},t}();var V=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const D=function(e){function n(n,o,r,i,a){var c=e.call(this,n,"div","pictures-box")||this;c.blockTitle=new t(c.node,"p","title-pictures-box",a);for(var s=1;s<=o;s++)c.picture=new C("".concat(r).concat(s,".").concat(i)),c.picture.el.draggable=!1,c.node.append(c.picture.el),c.picture.onSelect=function(t){c.onSelect(t)};return c}return V(n,e),n}(t);var E=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const M=function(e){function n(n,o,r,i,a){var c=e.call(this,n,"div","toys-box")||this;return c.blockTitle=new t(c.node,"p","title-pictures-box",i),a.forEach((function(e){var n=new t(c.node,"div","contaner-toy-count");c.countView=new t(n.node,"div","count-toy",e.count.toString()),c.picture=new C("".concat(o).concat(e.num,".").concat(r),e.count.toString()),c.picture.el.draggable=!0,n.node.append(c.picture.el),c.picture.onSelect=function(t){c.onSelect(t)}})),c}return E(n,e),n}(t);const I=function(){function e(e){var n=this;this.fon=[],this.tree=[],this.toys=[],this.canvas=new t(e,"canvas","canvas"),this.canvas.node.width=.55*document.body.clientWidth,this.canvas.node.height=.75*document.body.clientHeight,this.ctx=this.canvas.node.getContext("2d"),this.canvas.node.ondrop=function(t){t.preventDefault();var e=t.dataTransfer.getData("text/plain"),o=t.dataTransfer.getData("mouse_position_x"),r=t.dataTransfer.getData("mouse_position_y"),i=t.offsetX-+o/2,a=t.offsetY-+r;n.mask.data[a*(4*n.mask.width)+4*i+3]&&n.setToyValues(e,t.offsetX-+o,t.offsetY-+r)},this.canvas.node.ondragover=function(t){t.preventDefault()},this.canvas.node.onmousedown=function(t){var e=t.offsetX,o=t.offsetY;console.log(n.toys);for(var r=0,i=n.toys.length;r<i;r++){var a=n.toys[r];n.isPointInRange(e,o,a)&&n.startMove(a,e,o)}}}return e.prototype.isPointInRange=function(t,e,n){return!(t<n.sX||t>n.sX+n.widthImage||e<n.sY||e>n.sY+n.heightImage)},e.prototype.startMove=function(t,e,n){var o=this;this.toys.splice(this.toys.indexOf(t),1),console.log("obj",t),console.log("toys",this.toys);var r=t.sX,i=t.sY;this.canvas.node.onmousemove=function(a){var c=a.offsetX,s=a.offsetY,u=c-e,l=s-n;t.sX=r+u,t.sY=i+l,o.render()},this.canvas.node.onmouseup=function(){var e=t.sX,n=t.sY;o.mask.data[n*(4*o.mask.width)+4*e+3]?o.setToyValues(t.image,e,n):o.setToyValues(t.image,r,i),o.canvas.node.onmousemove=function(){}}},e.prototype.setToyValues=function(t,e,n){var o=.07*this.canvas.node.width,r=.1*this.canvas.node.height,i=e,a=n;this.toys.push({image:t,sX:i,sY:a,widthImage:o,heightImage:r}),this.render()},e.prototype.setFonValues=function(t){var e={image:t,sX:0,sY:0,widthImage:this.canvas.node.width,heightImage:this.canvas.node.height};this.fon[0]=e,this.render()},e.prototype.setTreeValues=function(t){var e=.25*this.canvas.node.width,n=.1*this.canvas.node.height,o=.5*this.canvas.node.width,r=this.canvas.node.height-2*n;this.tree[0]={image:t,sX:e,sY:n,widthImage:o,heightImage:r},this.drawMask(this.tree[0]),this.render()},e.prototype.drawPicture=function(t){var e=this;t.forEach((function(t){var n=new Image;n.onload=function(){e.ctx.drawImage(n,t.sX,t.sY,t.widthImage,t.heightImage)},n.src=t.image}))},e.prototype.loadImage=function(t){return new Promise((function(e){var n=new Image;n.onload=function(){e(n)},n.src=t.image}))},e.prototype.draw=function(t){var e=this;this.loadImage(t).then((function(n){e.ctx.drawImage(n,t.sX,t.sY,t.widthImage,t.heightImage)}))},e.prototype.drawMask=function(t){var e=this,n=document.createElement("canvas");n.width=.55*document.body.clientWidth,n.height=.75*document.body.clientHeight;var o=n.getContext("2d");this.loadImage(t).then((function(e){o.drawImage(e,t.sX,t.sY,t.widthImage,t.heightImage)})).then((function(){var t=o.getImageData(0,0,n.width,n.height);e.mask=t}))},e.prototype.render=function(){this.ctx.clearRect(0,0,this.canvas.node.width,this.canvas.node.height),this.fon.length>0&&this.drawPicture(this.fon),this.tree.length>0&&this.drawPicture(this.tree),this.toys.length>0&&this.drawPicture(this.toys)},e}();var A=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const B=function(e){function n(n){var o=e.call(this,n,"div","settings-panel")||this;return o.blockTitle=new t(o.node,"p","title-settings-panel","Добавьте настроения!"),o.audio=new t(o.node,"button","icon-button audio-button"),o.audio.node.onclick=function(){o.playMusic()},o.snowfall=new t(o.node,"button","icon-button snowfall-button"),o.snowfall.node.onclick=function(){o.showSnow()},o}return A(n,e),n}(t);var F=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const U=function(t){function e(e){var n=t.call(this,e,"span","snowflakes","&#10052")||this;return n.node.style.left=Math.random()*(window.innerWidth-100)+"px",n.node.style.animationDuration=3*Math.random()+2+"s",n.node.style.opacity=Math.random().toString(),setTimeout((function(){n.destroy()}),1e3),n}return F(e,t),e}(t);var Y=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const X=function(e){function n(n,o){var r=e.call(this,n)||this;return r.container=new t(r.node,"div","tree-page"),r.settings=new t(r.container.node,"div","settings-section"),r.fonPictures=new D(r.settings.node,10,"./assets/bg/","jpg","Выберите фон"),r.fonPictures.onSelect=function(t){r.onSelectFon(t)},r.treePictures=new D(r.settings.node,6,"./assets/tree/","png","Выберите ёлку"),r.treePictures.onSelect=function(t){r.onSelectTree(t)},r.content=new t(r.container.node,"div","content-section"),r.canvas=new I(r.content.node),r.canvas.setFonValues("./assets/bg/1.jpg"),r.canvas.setTreeValues("./assets/tree/1.png"),r.toys=new t(r.container.node,"div","toys-section"),r.toyPictures=new M(r.toys.node,"./assets/toys/","png","Выберите игрушку",o.selectedToys),r.toyPictures.onSelect=function(t){},r.audioAndSnow=new B(r.toys.node),r.audioAndSnow.showSnow=function(){setInterval(r.createSnow,100)},r.audioAndSnow.playMusic=function(){r.playMusic()},r}return Y(n,e),n.prototype.createSnow=function(){this.snow=new U(document.body)},n.prototype.updatePage=function(){},n}(o);var L=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const R=function(e){function n(n){var o=e.call(this,n,"div","route-box")||this;return o.homeLink=new t(o.node,"a","link","Главная"),o.homeLink.node.href="#home",o.toysLink=new t(o.node,"a","link","Игрушки"),o.toysLink.node.href="#toys",o.treesLink=new t(o.node,"a","link","Ёлочки"),o.treesLink.node.href="#trees",o.selectedToys=new t(o.node,"div","selected-toys-counter","0"),o}return L(n,e),n}(t);var W={shape:[],color:[],size:[],count:["0","12"],year:["1940","2020"]};const G=function(){function t(t){this.toys=t,this.selectedToys=[],this.loadFromLocalstorage()}return t.prototype.filtrateData=function(){var t=this,e=[],n=[],o=[];return 0==this.filterValues.shape.length&&0==this.filterValues.color.length&&0==this.filterValues.size.length?o=this.toys:(e=this.filterValues.shape.length?this.toys.filter((function(e){return!!t.filterValues.shape.includes(e.shape)})):this.toys,n=this.filterValues.color.length?e.filter((function(e){return!!t.filterValues.color.includes(e.color)})):e,o=this.filterValues.size.length?n.filter((function(e){return!!t.filterValues.size.includes(e.size)})):n),o.filter((function(e){return e.count>=+t.filterValues.count[0]&&e.count<=+t.filterValues.count[1]&&e.year>=+t.filterValues.year[0]&&e.year<=+t.filterValues.year[1]}))},t.prototype.selectToy=function(t){var e=this;this.toys.map((function(n){if(n.num==t)if(n.selected=0==n.selected,-1!=e.selectedToys.findIndex((function(e){return e.num===t}))){var o=e.selectedToys.findIndex((function(e){return e.num==t}));e.selectedToys.splice(o,1)}else e.selectedToys.push(n)}))},t.prototype.loadFromLocalstorage=function(){localStorage.getItem("filter")||(this.filterValues=W)},t.prototype.resetFilter=function(){this.filterValues={shape:[],color:[],size:[],count:["0","12"],year:["1940","2020"]}},t.prototype.addFilterValue=function(t,e){this.filterValues[t].push(e)},t.prototype.removeFilterValue=function(t,e){var n=this.filterValues[t].indexOf(e);this.filterValues[t].splice(n,1)},t.prototype.changeFilterValue=function(t,e,n){this.filterValues[t][0]=e,this.filterValues[t][1]=n},t}(),H=[{num:"1",name:"Большой шар с рисунком",count:"2",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"2",name:"Зелёный шар с цветами",count:"5",year:"2000",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"3",name:"Красный матовый шар",count:"3",year:"1990",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"4",name:"Сосулька красная",count:"2",year:"1980",shape:"фигурка",color:"красный",size:"большой",favorite:!1},{num:"5",name:"Красный виноград",count:"4",year:"1980",shape:"фигурка",color:"красный",size:"средний",favorite:!0},{num:"6",name:"Красный шар с рисунком",count:"6",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"7",name:"Молочно-белый шар",count:"12",year:"1960",shape:"шар",color:"белый",size:"средний",favorite:!0},{num:"8",name:"Красный шар",count:"10",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"9",name:"Колокольчик старинный",count:"2",year:"1950",shape:"колокольчик",color:"белый",size:"большой",favorite:!1},{num:"10",name:"Белый шар ретро",count:"7",year:"1960",shape:"шар",color:"белый",size:"большой",favorite:!1},{num:"11",name:"Шишка еловая белая",count:"11",year:"1960",shape:"шишка",color:"белый",size:"малый",favorite:!1},{num:"12",name:"Белый шар с цветами",count:"5",year:"1980",shape:"шар",color:"белый",size:"большой",favorite:!1},{num:"13",name:"Шар расписной Река",count:"3",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:!0},{num:"14",name:"Шар расписной Деревня",count:"4",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:!0},{num:"15",name:"Колокольчик расписной",count:"3",year:"1970",shape:"колокольчик",color:"синий",size:"средний",favorite:!1},{num:"16",name:"Шишка расписная Пейзаж",count:"3",year:"1970",shape:"шишка",color:"синий",size:"средний",favorite:!0},{num:"17",name:"Шишка расписная",count:"7",year:"1970",shape:"шишка",color:"красный",size:"средний",favorite:!1},{num:"18",name:"Желтый шар с бантом",count:"2",year:"2010",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"19",name:"Желтый шар с паетками",count:"12",year:"1980",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"20",name:"Красный шар с бантом",count:"8",year:"1950",shape:"шар",color:"красный",size:"средний",favorite:!0},{num:"21",name:"Красный шар с звёздами",count:"4",year:"1970",shape:"шар",color:"красный",size:"большой",favorite:!0},{num:"22",name:"Шишка еловая золотая",count:"11",year:"1990",shape:"шишка",color:"желтый",size:"малый",favorite:!1},{num:"23",name:"Колокольчик старинный",count:"9",year:"1950",shape:"колокольчик",color:"желтый",size:"большой",favorite:!1},{num:"24",name:"Снежинка изящная",count:"1",year:"1940",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"25",name:"Розовый шар с блёстками",count:"12",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"26",name:"Рубиново-золотой шар",count:"8",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"27",name:"Красный шар с узором",count:"4",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"28",name:"Бордовый шар с узором",count:"10",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"29",name:"Старинный шар с цветами",count:"5",year:"1950",shape:"шар",color:"желтый",size:"большой",favorite:!0},{num:"30",name:"Старинный шар с узором",count:"8",year:"1950",shape:"шар",color:"желтый",size:"большой",favorite:!0},{num:"31",name:"Красный шар с блёстками",count:"8",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"32",name:"Синий шар Вселенная",count:"11",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:!1},{num:"33",name:"Синий шар со снежинкой",count:"6",year:"2010",shape:"шар",color:"синий",size:"средний",favorite:!1},{num:"34",name:"Зелёный  шар с узором",count:"8",year:"2010",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"35",name:"Фигурка Лис в шарфе",count:"8",year:"1950",shape:"фигурка",color:"желтый",size:"средний",favorite:!0},{num:"36",name:"Сиреневый шар Метель",count:"1",year:"2000",shape:"шар",color:"синий",size:"большой",favorite:!1},{num:"37",name:"Зелёный  шар Метель",count:"6",year:"2000",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"38",name:"Голубой  шар Метель",count:"6",year:"2000",shape:"шар",color:"синий",size:"большой",favorite:!1},{num:"39",name:"Красная снежинка",count:"6",year:"1990",shape:"снежинка",color:"красный",size:"большой",favorite:!1},{num:"40",name:"Снежинка золотая",count:"12",year:"2020",shape:"снежинка",color:"желтый",size:"большой",favorite:!1},{num:"41",name:"Снежинка арктическая",count:"11",year:"2020",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"42",name:"Зелёный шар",count:"10",year:"1980",shape:"шар",color:"зелёный",size:"средний",favorite:!1},{num:"43",name:"Снежинка двухцветная",count:"6",year:"1960",shape:"снежинка",color:"красный",size:"большой",favorite:!1},{num:"44",name:"Фигурка Ангела",count:"11",year:"1940",shape:"фигурка",color:"красный",size:"средний",favorite:!0},{num:"45",name:"Снежинка новогодняя",count:"1",year:"1980",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"46",name:"Фигурка Мухомор",count:"10",year:"1950",shape:"фигурка",color:"красный",size:"малый",favorite:!1},{num:"47",name:"Фигурка Колодец",count:"6",year:"1950",shape:"фигурка",color:"красный",size:"малый",favorite:!1},{num:"48",name:"Желтый шар с бантом",count:"6",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"49",name:"Снежинка с бирюзой",count:"4",year:"1980",shape:"снежинка",color:"желтый",size:"большой",favorite:!1},{num:"50",name:"Колокольчик большой",count:"3",year:"2020",shape:"колокольчик",color:"красный",size:"большой",favorite:!1},{num:"51",name:"Шишка с изморозью",count:"12",year:"1970",shape:"шишка",color:"красный",size:"малый",favorite:!1},{num:"52",name:"Красный шар с надписью",count:"12",year:"1990",shape:"шар",color:"красный",size:"большой",favorite:!0},{num:"53",name:"Снежинка серебристая",count:"6",year:"2020",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"54",name:"Зелёный шар с рисунком",count:"6",year:"2010",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"55",name:"Пряничный домик",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"большой",favorite:!1},{num:"56",name:"Пряничный теремок",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"малый",favorite:!1},{num:"57",name:"Пряничная избушка",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"средний",favorite:!1},{num:"58",name:"Фигурка белого медведя",count:"2",year:"1980",shape:"фигурка",color:"белый",size:"средний",favorite:!1},{num:"59",name:"Желтый шар с надписью",count:"10",year:"1990",shape:"шар",color:"желтый",size:"средний",favorite:!1},{num:"60",name:"Фигурка Голубь",count:"12",year:"1940",shape:"фигурка",color:"белый",size:"средний",favorite:!0}];var N=function(){function t(){}return t.prototype.loadData=function(){return H.map((function(t,e){var n=H[e];return{num:n.num,name:n.name,count:Number(n.count),year:Number(n.year),shape:n.shape,color:n.color,size:n.size,favorite:n.favorite,selected:!1}}))},t}(),q=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const J=function(e){function n(n,o){var r=e.call(this,n,"div","popup hidden-popup")||this;return r.popupBody=new t(r.node,"div","popup-body"),r.popupMessage=new t(r.popupBody.node,"p","popup-message",o),r.popupButton=new t(r.popupBody.node,"button","button popup-button","Понятно!"),r.popupButton.node.onclick=function(){r.node.classList.add("hidden-popup")},r}return q(n,e),n}(t);var K=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const Q=function(e){function n(n){var o=e.call(this,n,"div","footer")||this;return o.logoYear=new t(o.node,"span","year-logo","2021"),o.logoGithub=new t(o.node,"a","github-logo","Valentina Frolina"),o.logoRss=new t(o.node,"a","github-logo",'<img src="./assets/svg/footer/rss_logo.svg" alt="rsschool-logo" >'),o.logoGithub.node.href="https://github.com/OValya",o.logoRss.node.href="https://rs.school",o}return K(n,e),n}(t),Z=[{src:"./assets/audio/1.mp3"},{src:"./assets/audio/2.mp3"},{src:"./assets/audio/3.mp3"},{src:"./assets/audio/4.mp3"},{src:"./assets/audio/5.mp3"},{src:"./assets/audio/6.mp3"}],$=function(){function t(t){var e=this;void 0===t&&(t=!1),this.isPlay=t,this.audio=new Audio,this.audio.onended=function(){e.play()}}return t.prototype.play=function(){if(this.isPlay)this.isPlay=!1,this.audio.pause();else{var t=Math.floor(5*Math.random())+1;this.audio.src=Z[t].src,this.isPlay=!0,this.audio.play()}},t}();var tt=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();new(function(t){function e(e){var n=t.call(this,e,"div","main-container")||this;return n.route=new R(n.node),n.popup=new J(n.node,"Больше нельзя добавить игрушек!"),n.pages={"#home":i,"#toys":j,"#trees":X},n.model=new N,n.dataToys=n.model.loadData(),n.filterModel=new G(n.dataToys),window.onpopstate=n.loadWindow.bind(n),n.loadWindow(),n.footer=new Q(n.node),n.footer.node.style.order="10",n.music=new $(!1),n}return tt(e,t),e.prototype.createPage=function(){var t=this;if(0==this.filterModel.selectedToys.length){for(var e=1;e<=20;e++)this.filterModel.selectToy(e.toString());var n=this.filterModel.selectedToys.length;this.route.selectedToys.node.textContent=n.toString()}var o={filterToys:this.filterModel.filtrateData(),filterValues:this.filterModel.filterValues,selectedToys:this.filterModel.selectedToys},r=new(this.pages[window.location.hash]||i)(this.node,o);r.onCheck=function(e,n){t.filterModel.filterValues[e].includes(n)?t.filterModel.removeFilterValue(e,n):t.filterModel.addFilterValue(e,n),r.updatePage(t.filterModel.filtrateData())},r.onChange=function(e,n,o){t.filterModel.changeFilterValue(e,n,o),r.updatePage(t.filterModel.filtrateData())},r.onReset=function(){t.filterModel.resetFilter(),r.destroy(),t.createPage()},r.onSelect=function(e){t.filterModel.selectToy(e);var n=t.filterModel.selectedToys.length;n<=20?(t.route.selectedToys.node.textContent=n.toString(),r.updatePage(t.filterModel.filtrateData())):(t.popup.node.classList.remove("hidden-popup"),t.filterModel.selectToy(e))},r.onSelectFon=function(t){r.canvas.setFonValues(t)},r.onSelectTree=function(t){r.canvas.setTreeValues(t)},r.playMusic=function(){t.music.play()},this.currentPage=r},e.prototype.loadWindow=function(){this.currentPage?(this.currentPage.destroy(),this.createPage()):this.createPage()},e}(t))(document.body)})();