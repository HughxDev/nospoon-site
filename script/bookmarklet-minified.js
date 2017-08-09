(function(){var numbering=0001,linkColor='',clickOutside=true,showDetails=false,e=['#h5o-outside,#h5o-outside *{background-color:transparent;border:none;border-radius:0;bottom:auto;box-shadow:none;box-sizing:content-box;clear:none;'+(linkColor?'color:'+linkColor+';':'')+'cursor:auto;direction:ltr;float:none;font-family:sans-serif;font-size:small;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:normal;height:auto;left:auto;letter-spacing:normal;line-height:normal;margin:0;opacity:1;outline:none;overflow:visible;padding:0;position:static;right:auto;text-align:left;text-decoration:none;text-indent:0;text-overflow:clip;text-shadow:none;text-transform:none;top:auto;vertical-align:baseline;visibility:visible;white-space:normal;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;zoom:normal;}','#h5o-inside *:not([href]){color:black;}','#h5o-outside{background-color:transparent;box-sizing:border-box;display:block;height:100%;padding:10px;pointer-events:none;position:fixed;right:0px;top:0px;max-width:500px;z-index:2147483647;}','#h5o-inside{background-color:white;border:2px solid black;box-sizing:border-box;display:block;max-width:100%;max-height:100%;opacity:.9;overflow:auto;padding:10px;pointer-events:auto;}','#h5o-inside ol{counter-reset:li;display:block;margin:0;padding:0;}','#h5o-inside li{counter-increment:li;display:list-item;list-style-type:none;margin-left:'+(numbering===2?'2em':'1.5em')+';position:relative;}','#h5o-inside a{display:inline;}','#h5o-inside a:hover{text-decoration:underline;}','#h5o-inside li.h5o-notitle>a{font-style:italic;}'];if(numbering>0)e.push('#h5o-inside li::before{content:'+(numbering===2?'counters(li,".")':'counter(li)')+'".";display:block;left:-10.5em;position:absolute;text-align:right;width:10em;}');else e.push('#h5o-inside>ol>li{margin-left:0;}');function o(a){function t(a){r(a);for(var b=1;b<=6;b++){var c=a.getElementsByTagName('h'+b);if(c.length>0){a.rank=-b;a.text=c[0].textContent;break}}if(a.rank===undefined){a.rank=-1;a.text=''}}function s(a){r(a);a.rank=-parseInt(a.nodeName.charAt(1));a.text=a.textContent}function r(a){m(a);Object.defineProperty(a,'depth',{'get':function(){var s=a.associatedSection;var d=1;if(s!==null)while(s=s.parentSection)++d;return d},"configurable":true,"enumerable":true})}function q(a){o(a);a.sectionType=2}function p(a){o(a);a.sectionType=1}function o(a){m(a);a.sectionList=[];a.firstSection=null;a.lastSection=null;a.appendSection=function(a){this.sectionList.push(a);if(this.firstSection===null)this.firstSection=a;this.lastSection=a}}function m(a){a.associatedSection=null}function l(a){if(a.nodeType===1){switch(a.nodeName.toLowerCase()){case'blockquote':case'body':case'details':case'fieldset':case'figure':case'td':q(a);break;case'article':case'aside':case'nav':case'section':p(a);break;case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':s(a);break;case'hgroup':t(a);break;default:m(a)}}else m(a)}function k(a){return a.rank!==undefined}function j(a){return a.sectionType===2}function i(a){return a.sectionType===1}function h(a){return a.nodeType===1}function g(a,b){b.associatedNodes.push(a);a.associatedSection=b}function f(a){if(h(a)){if(!d.y&&a===d.x)d.w();else if(!d.y&&k(d.x)){}else if(!d.y&&i(a)){b=d.w();c=b.lastSection;for(var e=0;e<a.sectionList.length;e++){c.appendChild(a.sectionList[e])}}else if(!d.y&&j(a)){b=d.w();c=b.lastSection;while(c.childSections.length>0){c=c.lastChild}}else if(i(a)||j(a)){b=null;c=null}}if(a.associatedSection===null&&c!==null)g(a,c)}function e(a){if(h(a)){if(!d.y&&k(d.x)){}else if(i(a)||j(a)){if(b!==null)d.v(b);b=a;c=new n;g(b,c);b.appendSection(c)}else if(b===null){}else if(k(a)){if(c.heading===null)c.heading=a;else if(a.rank>=b.lastSection.heading.rank){c=new n;c.heading=a;b.appendSection(c)}else{var e=c;do{if(a.rank<e.heading.rank){c=new n;c.heading=a;e.appendChild(c);break}var f=e.parentSection;e=f}while(true)}d.v(a)}}}var b=null;var c=null;var d={z:-1,y:true};d.v=function(a){d[++d.z]=a;d.x=a;d.y=false};d.w=function(){var a=d.x;delete d[d.z--];if(d.z===-1)d.y=true;else d.x=d[d.z];return a};var u=a;start:while(u){l(u);e(u);if(u.firstChild){u=u.firstChild;continue start}while(u){f(u);if(u===a)break start;if(u.nextSibling){u=u.nextSibling;continue start}u=u.parentNode}}}function n(){this.parentSection=null;this.childSections=[];this.firstChild=null;this.lastChild=null;this.appendChild=function(a){a.parentSection=this;this.childSections.push(a);if(this.firstChild===null)this.firstChild=a;this.lastChild=a};this.heading=null;this.associatedNodes=[]}function m(a){var b=document.createElement('li');var c=document.createElement('a');b.appendChild(c);if(a.heading===null||/^[ \r\n\t]*$/.test(a.heading.text)){b.className='h5o-notitle';switch(a.associatedNodes[0].nodeName.toLowerCase()){case'body':c.textContent='Document';break;case'article':c.textContent='Article';break;case'aside':c.textContent='Aside';break;case'nav':c.textContent='Navigation';break;case'section':c.textContent='Section';break;default:c.textContent='Empty title'}}else c.textContent=a.heading.text;var e=a.associatedNodes[0];if(e.sectionType!==1&&e.sectionType!==2)e=a.heading;if(!e.id){e.id='h5o-id-'+k;++k}c.href='#'+e.id;if(showDetails){var f='';if(a.associatedNodes[0].sectionType)f+='<'+a.associatedNodes[0].nodeName.toLowerCase()+'>, ';if(a.heading)f+='rank:−'+ -a.heading.rank+', depth:'+a.heading.depth+', ';f+='#nodes:'+a.associatedNodes.length;c.title=f}b.appendChild(l(a.childSections));return b}function l(a){var b=document.createElement('ol');for(var c=0;c<a.length;c++){b.appendChild(m(a[c]))}return b}if(!window.h5o_sdWoNJpsAgQGAaf)window.h5o_sdWoNJpsAgQGAaf=function(){document.removeEventListener('click',h5o_sdWoNJpsAgQGAaf,false);var a=0;var b;while(b=document.getElementById('h5o-id-'+a)){b.removeAttribute('id');++a}document.body.removeChild(document.getElementById('h5o-outside'))};if(document.getElementById('h5o-outside')){h5o_sdWoNJpsAgQGAaf();return}var f=document.createElement('div');f.id='h5o-outside';var g=document.createElement('style');f.appendChild(g);document.body.appendChild(f);for(var h=0;h<e.length;h++){try{g.sheet.insertRule(e[h].replace(/;/g,' !important;'),h)}catch(i){}}var j=document.createElement('div');j.id='h5o-inside';if(clickOutside){j.addEventListener('click',function(a){a.stopPropagation()},false);document.addEventListener('click',h5o_sdWoNJpsAgQGAaf,false)}var k=0;o(document.body);if(!document.body.sectionList)return;j.appendChild(l(document.body.sectionList));f.appendChild(j)})()