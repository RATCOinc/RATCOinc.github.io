(function(f,h,c,j,d,l,k){/*!Jssor*/new(function(){});vare={ze:function(a){return-c.cos(a*c.PI)/2+.5},Ae:function(a){returna},Be:function(a){return-a*(a-2)},Ke:function(a){return(a-=1)*a*a*a*a+1}},g={ye:e.Ke};varb=newfunction(){varg=this,Bb=/\S+/g,G=1,db=2,hb=3,gb=4,lb=5,H,r=0,i=0,s=0,W=0,z=0,J=navigator,pb=J.appName,o=J.userAgent,p=parseFloat;functionzb(){if(!H){H={ce:"ontouchstart"inf||"createTouch"inh};vara;if(J.pointerEnabled||(a=J.msPointerEnabled))H.ed=a?"msTouchAction":"touchAction"}returnH}functionv(j){if(!r){r=-1;if(pb=="MicrosoftInternetExplorer"&&!!f.attachEvent&&!!f.ActiveXObject){vare=o.indexOf("MSIE");r=G;s=p(o.substring(e+5,o.indexOf(";",e)));/*@cc_onW=@_jscript_version@*/i=h.documentMode||s}elseif(pb=="Netscape"&&!!f.addEventListener){vard=o.indexOf("Firefox"),b=o.indexOf("Safari"),g=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){r=db;i=p(o.substring(d+8))}elseif(b>=0){vark=o.substring(0,b).lastIndexOf("/");r=g>=0?gb:hb;i=p(o.substring(k+1,b))}else{vara=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){r=G;i=s=p(a[1])}}if(c>=0)z=p(o.substring(c+12))}else{vara=/(opera)(?:.*version|)[\/]([\w.]+)/i.exec(o);if(a){r=lb;i=p(a[2])}}}returnj==r}functionq(){returnv(G)}functionR(){returnq()&&(i<6||h.compatMode=="BackCompat")}functionfb(){returnv(hb)}functionkb(){returnv(lb)}functionwb(){returnfb()&&z>534&&z<535}functionK(){v();returnz>537||i>42||r==G&&i>=11}functionP(){returnq()&&i<9}functionxb(a){varb,c;returnfunction(f){if(!b){b=d;vare=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),function(g,d){varb=a;if(d)b=g+e;if(f.style[b]!=k)returnc=b})}returnc}}functionvb(b){vara;returnfunction(c){a=a||xb(b)(c)||b;returna}}varL=vb("transform");functionob(a){return{}.toString.call(a)}varF;functionHb(){if(!F){F={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){F["[object"+a+"]"]=a.toLowerCase()})}returnF}functionn(b,d){vara,c;if(ob(b)=="[objectArray]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))returnc}elsefor(ainb)if(c=d(b[a],a,b))returnc}functionC(a){returna==j?String(a):Hb()[ob(a)]||"object"}functionmb(a){for(varbina)returnd}functionA(a){try{returnC(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}functionu(a,b){return{x:a,y:b}}functionsb(b,a){setTimeout(b,a||0)}functionI(b,d,c){vara=!b||b=="inherit"?"":b;n(d,function(c){varb=c.exec(a);if(b){vard=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a=c+(!a.indexOf("")?"":"")+a;returna}functionub(b,a){if(i<9)b.style.filter=a}g.be=zb;g.hd=q;g.Zd=fb;g.Wd=K;g.id=P;xb("transform");g.Pc=function(){returni};g.Ec=sb;functionZ(a){a.constructor===Z.caller&&a.Oc&&a.Oc.apply(a,Z.caller.arguments)}g.Oc=Z;g.ib=function(a){if(g.Td(a))a=h.getElementById(a);returna};functiont(a){returna||f.event}g.xc=t;g.Pb=function(b){b=t(b);vara=b.target||b.srcElement||h;if(a.nodeType==3)a=g.oc(a);returna};g.lc=function(a){a=t(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};functionD(c,d,a){if(a!==k)c.style[d]=a==k?"":a;else{varb=c.currentStyle||c.style;a=b[d];if(a==""&&f.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,j);b&&(a=b.getPropertyValue(d)||b[d])}returna}}functionbb(b,c,a,d){if(a!==k){if(a==j)a="";elsed&&(a+="px");D(b,c,a)}elsereturnp(D(b,c))}functionm(c,a){vard=a?bb:D,b;if(a&4)b=vb(c);returnfunction(e,f){returnd(e,b?b(e):c,f,a&2)}}functionEb(b){if(q()&&s<9){vara=/opacity=([^)]*)/.exec(b.style.filter||"");returna?p(a[1])/100:1}elsereturnp(b.style.opacity||"1")}functionGb(b,a,f){if(q()&&s<9){varh=b.style.filter||"",i=newRegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+")";varg=I(h,[i],d);ub(b,g)}elseb.style.opacity=a==1?"":c.round(a*100)/100}varM={U:["rotate"],E:["rotateX"],D:["rotateY"],Ab:["skewX"],Eb:["skewY"]};if(!K())M=B(M,{m:["scaleX",2],n:["scaleY",2],P:["translateZ",1]});functionN(d,a){varc="";if(a){if(q()&&i&&i<10){deletea.E;deletea.D;deletea.P}b.e(a,function(d,b){vara=M[b];if(a){vare=a[1]||0;if(O[b]!=d)c+=""+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(K()){if(a.V||a.W||a.P)c+="translate3d("+(a.V||0)+"px,"+(a.W||0)+"px,"+(a.P||0)+"px)";if(a.m==k)a.m=1;if(a.n==k)a.n=1;if(a.m!=1||a.n!=1)c+="scale3d("+a.m+","+a.n+",1)"}}d.style[L(d)]=c}g.Fc=m("transformOrigin",4);g.Pd=m("backfaceVisibility",4);g.ue=m("transformStyle",4);g.Fe=m("perspective",6);g.we=m("perspectiveOrigin",4);g.Le=function(a,b){if(q()&&s<9||s<10&&R())a.style.zoom=b==1?"":b;else{varc=L(a),f="scale("+b+")",e=a.style[c],g=newRegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[c]=d}};g.Kb=function(b,a){returnfunction(c){c=t(c);vare=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!g.Oe(a,d))&&b(c)}};g.a=function(a,d,b,c){a=g.ib(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}elseif(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};g.z=function(a,c,d,b){a=g.ib(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}elseif(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};g.ub=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=l};g.Re=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};g.A=function(d,c){vara=[].slice.call(arguments,2),b=function(){varb=a.concat([].slice.call(arguments,0));returnc.apply(d,b)};returnb};g.He=function(a,b){if(b==k)returna.textContent||a.innerText;varc=h.createTextNode(b);g.Qb(a);a.appendChild(c)};g.rb=function(d,c){for(varb=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);returnb};functionnb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(V(a,b)==c)returna;if(!e){vard=nb(a,c,e,b);if(d)returnd}}}g.u=nb;functionT(a,d,f,b){b=b||"u";varc=[];for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){V(a,b)==d&&c.push(a);if(!f){vare=T(a,d,f,b);if(e.length)c=c.concat(e)}}returnc}functionib(a,c,d){for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)returna;if(!d){varb=ib(a,c,d);if(b)returnb}}}g.xe=ib;g.pe=function(b,a){returnb.getElementsByTagName(a)};functionB(){vare=arguments,d,c,b,a,g=1&e[0],f=1+g;d=e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(binc){a=c[b];if(a!==k){a=c[b];varh=d[b];d[b]=g&&(A(h)||A(a))?B(g,{},h,a):a}}returnd}g.T=B;functionab(f,g){vard={},c,a,b;for(cinf){a=f[c];b=g[c];if(a!==b){vare;if(A(a)&&A(b)){a=ab(a,b);e=!mb(a)}!e&&(d[c]=a)}}returnd}g.wc=function(a){returnC(a)=="function"};g.Td=function(a){returnC(a)=="string"};g.rd=function(a){return!isNaN(p(a))&&isFinite(a)};g.e=n;functionS(a){returnh.createElement(a)}g.tb=function(){returnS("DIV")};g.qd=function(){returnS("SPAN")};g.tc=function(){};functionX(b,c,a){if(a==k)returnb.getAttribute(c);b.setAttribute(c,a)}functionV(a,b){returnX(a,b)||X(a,"data-"+b)}g.o=X;g.i=V;functionx(b,a){if(a==k)returnb.className;b.className=a}g.Mc=x;functionrb(b){vara={};n(b,function(b){a[b]=b});returna}functiontb(b,a){returnb.match(a||Bb)}functionQ(b,a){returnrb(tb(b||"",a))}g.ld=tb;functioncb(b,c){vara="";n(c,function(c){a&&(a+=b);a+=c});returna}functionE(a,c,b){x(a,cb("",B(ab(Q(x(a)),Q(c)),Q(b))))}g.oc=function(a){returna.parentNode};g.N=function(a){g.L(a,"none")};g.J=function(a,b){g.L(a,b?"none":"")};g.zd=function(b,a){b.removeAttribute(a)};g.Bd=function(){returnq()&&i<10};g.Cd=function(d,a){if(a)d.style.clip="rect("+c.round(a.g)+"px"+c.round(a.r)+"px"+c.round(a.s)+"px"+c.round(a.j)+"px)";elseif(a!==k){varg=d.style.cssText,f=[newRegExp(/[\s]*clip:rect\(.*?\)[;]?/i),newRegExp(/[\s]*cliptop:.*?[;]?/i),newRegExp(/[\s]*clipright:.*?[;]?/i),newRegExp(/[\s]*clipbottom:.*?[;]?/i),newRegExp(/[\s]*clipleft:.*?[;]?/i)],e=I(g,f,"");b.Ib(d,e)}};g.F=function(){return+newDate};g.M=function(b,a){b.appendChild(a)};g.Bb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};g.yb=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};g.kd=function(a,b){n(a,function(a){g.yb(a,b)})};g.Qb=function(a){g.kd(g.rb(a,d),a)};g.vd=function(a,b){varc=g.oc(a);b&1&&g.B(a,(g.k(c)-g.k(a))/2);b&2&&g.v(a,(g.l(c)-g.l(a))/2)};g.Md=function(b,a){returnparseInt(b,a||10)};g.nd=p;g.Oe=function(b,a){varc=h.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d){returnl}returnb===a};functionY(d,c,b){vara=d.cloneNode(!c);!b&&g.zd(a,"id");returna}g.db=Y;g.ab=function(e,f){vara=newImage;functionb(e,d){g.z(a,"load",b);g.z(a,"abort",c);g.z(a,"error",c);f&&f(a,d)}functionc(a){b(a,d)}if(kb()&&i<11.6||!e)b(!e);else{g.a(a,"load",b);g.a(a,"abort",c);g.a(a,"error",c);a.src=e}};g.Fd=function(d,a,e){varc=d.length+1;functionb(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}n(d,function(a){g.ab(a.src,b)});b()};g.Ed=function(a,g,i,h){if(h)a=Y(a);varc=T(a,g);if(!c.length)c=b.pe(a,g);for(varf=c.length-1;f>-1;f--){vard=c[f],e=Y(i);x(e,x(d));b.Ib(e,d.style.cssText);b.Bb(e,d);b.yb(d)}returna};functionIb(a){varl=this,p="",r=["av","pv","ds","dn"],e=[],q,j=0,f=0,d=0;functioni(){E(a,q,e[d||j||f&2||f]);b.C(a,"pointer-events",d?"none":"")}functionc(){j=0;i();g.z(h,"mouseup",c);g.z(h,"touchend",c);g.z(h,"touchcancel",c)}functiono(a){if(d)g.ub(a);else{j=4;i();g.a(h,"mouseup",c);g.a(h,"touchend",c);g.a(h,"touchcancel",c)}}l.Ad=function(a){if(a===k)returnf;f=a&2||a&1;i()};l.Xc=function(a){if(a===k)return!d;d=a?0:3;i()};l.K=a=g.ib(a);varm=b.ld(x(a));if(m)p=m.shift();n(r,function(a){e.push(p+a)});q=cb("",e);e.unshift("");g.a(a,"mousedown",o);g.a(a,"touchstart",o)}g.Jb=function(a){returnnewIb(a)};g.C=D;g.vb=m("overflow");g.v=m("top",2);g.B=m("left",2);g.k=m("width",2);g.l=m("height",2);g.Nd=m("marginLeft",2);g.Od=m("marginTop",2);g.q=m("position");g.L=m("display");g.p=m("zIndex",1);g.Rb=function(b,a,c){if(a!=k)Gb(b,a,c);elsereturnEb(b)};g.Ib=function(a,b){if(b!=k)a.style.cssText=b;elsereturna.style.cssText};varU={fb:g.Rb,g:g.v,j:g.B,sb:g.k,qb:g.l,jb:g.q,cf:g.L,gb:g.p};functionw(f,l){vare=P(),b=K(),d=wb(),h=L(f);functioni(b,d,a){vare=b.Y(u(-d/2,-a/2)),f=b.Y(u(d/2,-a/2)),g=b.Y(u(d/2,a/2)),h=b.Y(u(-d/2,a/2));b.Y(u(300,300));returnu(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}functiona(d,a){a=a||{};varf=a.P||0,l=(a.E||0)%360,m=(a.D||0)%360,o=(a.U||0)%360,p=a.bf;if(e){f=0;l=0;m=0;p=0}varc=newDb(a.V,a.W,f);c.E(l);c.D(m);c.yd(o);c.xd(a.Ab,a.Eb);c.ic(a.m,a.n,p);if(b){c.cb(a.bb,a.hb);d.style[h]=c.Hd()}elseif(!W||W<9){varj="";if(o||a.m!=k&&a.m!=1||a.n!=k&&a.n!=1){varn=i(c,a.S,a.R);g.Od(d,n.y);g.Nd(d,n.x);j=c.Id()}varr=d.style.filter,s=newRegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),q=I(r,[s],j);ub(d,q)}}w=function(e,c){c=c||{};varh=c.bb,i=c.hb,f;n(U,function(a,b){f=c[b];f!==k&&a(e,f)});g.Cd(e,c.c);if(!b){h!=k&&g.B(e,c.cd+h);i!=k&&g.v(e,c.fd+i)}if(c.Jd)if(d)sb(g.A(j,N,e,c));elsea(e,c)};g.Cb=N;if(d)g.Cb=w;if(e)g.Cb=a;elseif(!b)a=N;g.G=w;w(f,l)}g.Cb=w;g.G=w;functionDb(i,l,p){vard=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,i||0,l||0,p||0,1],h=c.sin,g=c.cos,m=c.tan;functionf(a){returna*c.PI/180}functiono(a,b){return{x:a,y:b}}functionn(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}functione(c,a){returnn.apply(j,(a||b).concat(c))}d.ic=function(a,c,d){if(a==k)a=1;if(c==k)c=1;if(d==k)d=1;if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.cb=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.E=function(c){if(c){a=f(c);vard=g(a),i=h(a);b=e([1,0,0,0,0,d,i,0,0,-i,d,0,0,0,0,1])}};d.D=function(c){if(c){a=f(c);vard=g(a),i=h(a);b=e([d,0,-i,0,0,1,0,0,i,0,d,0,0,0,0,1])}};d.yd=function(c){if(c){a=f(c);vard=g(a),i=h(a);b=e([d,i,0,0,-i,d,0,0,0,0,1,0,0,0,0,1])}};d.xd=function(a,c){if(a||c){i=f(a);l=f(c);b=e([1,m(l),0,0,m(i),1,0,0,0,0,1,0,0,0,0,1])}};d.Y=function(c){vara=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);returno(a[12],a[13])};d.Hd=function(){return"matrix3d("+b.join(",")+")"};d.Id=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+",M12="+b[4]+",M21="+b[1]+",M22="+b[5]+",SizingMethod='autoexpand')"}}newfunction(){vara=this;functionb(d,g){for(varj=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(vark=f[c]=[],b=0;b<h;b++){for(vare=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}returnf}a.m=function(b,c){returna.gd(b,c,0)};a.n=function(b,c){returna.gd(b,0,c)};a.gd=function(a,c,d){returnb(a,[[c,0],[0,d]])};a.Y=function(d,c){vara=b(d,[[c.x],[c.y]]);returnu(a[0][0],a[1][0])}};varO={cd:0,fd:0,bb:0,hb:0,Z:1,m:1,n:1,U:0,E:0,D:0,V:0,W:0,P:0,Ab:0,Eb:0};g.od=function(a){varc=a||{};if(a)if(b.wc(a))c={Xb:c};elseif(b.wc(a.c))c.c={Xb:a.c};returnc};g.pd=function(l,m,w,n,y,z,o){vara=m;if(l){a={};for(varginm){varA=z[g]||1,v=y[g]||[0,1],f=(w-v[0])/v[1];f=c.min(c.max(f,0),1);f=f*A;varu=c.floor(f);if(f!=u)f-=u;varh=n.Xb||e.ze,i,B=l[g],q=m[g];if(b.rd(q)){h=n[g]||h;varx=h(f);i=B+q*x}else{i=b.T({Db:{}},l[g]);b.e(q.Db||q,function(d,a){if(n.c)h=n.c[a]||n.c.Xb||h;varc=h(f),b=d*c;i.Db[a]=b;i[a]+=b})}a[g]=i}vart=b.e(m,function(b,a){returnO[a]!=k});t&&b.e(O,function(c,b){if(a[b]==k&&l[b]!==k)a[b]=l[b]});if(t){if(a.Z)a.m=a.n=a.Z;a.S=o.S;a.R=o.R;a.Jd=d}}if(m.c&&o.cb){varp=a.c.Db,s=(p.g||0)+(p.s||0),r=(p.j||0)+(p.r||0);a.j=(a.j||0)+r;a.g=(a.g||0)+s;a.c.j-=r;a.c.r-=r;a.c.g-=s;a.c.s-=s}if(a.c&&b.Bd()&&!a.c.g&&!a.c.j&&a.c.r==o.S&&a.c.s==o.R)a.c=j;returna}};functionn(){vara=this,d=[];functioni(a,b){d.push({hc:a,Tb:b})}functionh(a,c){b.e(d,function(b,e){b.hc==a&&b.Tb===c&&d.splice(e,1)})}a.pb=a.addEventListener=i;a.removeEventListener=h;a.f=function(a){varc=[].slice.call(arguments,1);b.e(d,function(b){b.hc==a&&b.Tb.apply(f,c)})}}varm=function(z,C,i,J,M,L){z=z||0;vara=this,q,n,o,u,A=0,G,H,F,B,y=0,h=0,m=0,D,k,g,e,p,w=[],x;functionO(a){g+=a;e+=a;k+=a;h+=a;m+=a;y+=a}functiont(o){varf=o;if(p&&(f>=e||f<=g))f=((f-g)%p+p)%p+g;if(!D||u||h!=f){varj=c.min(f,e);j=c.max(j,g);if(!D||u||j!=m){if(L){varl=(j-k)/(C||1);if(i.Kd)l=1-l;varn=b.pd(M,L,l,G,F,H,i);if(x)b.e(n,function(b,a){x[a]&&x[a](J,b)});elseb.G(J,n)}a.bc(m-k,j-k);m=j;b.e(w,function(b,c){vara=o<h?w[w.length-c-1]:b;a.O(m-y)});varr=h,q=m;h=f;D=d;a.xb(r,q)}}}functionE(a,b,d){b&&a.cc(e);if(!d){g=c.min(g,a.Dc()+y);e=c.max(e,a.Sb()+y)}w.push(a)}varr=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame||f.msRequestAnimationFrame;if(b.Zd()&&b.Pc()<7)r=j;r=r||function(a){b.Ec(a,i.Gc)};functionI(){if(q){vard=b.F(),e=c.min(d-A,i.Hc),a=h+e*o;A=d;if(a*o>=n*o)a=n;t(a);if(!u&&a*o>=n*o)K(B);elser(I)}}functions(f,i,j){if(!q){q=d;u=j;B=i;f=c.max(f,g);f=c.min(f,e);n=f;o=n<h?-1:1;a.Lc();A=b.F();r(I)}}functionK(b){if(q){u=q=B=l;a.yc();b&&b()}}a.Kc=function(a,b,c){s(a?h+a:e,b,c)};a.Jc=s;a.X=K;a.sd=function(a){s(a)};a.I=function(){returnh};a.uc=function(){returnn};a.nb=function(){returnm};a.O=t;a.cb=function(a){t(h+a)};a.Ic=function(){returnq};a.Ld=function(a){p=a};a.cc=O;a.Cc=function(a,b){E(a,0,b)};a.Zb=function(a){E(a,1)};a.Dc=function(){returng};a.Sb=function(){returne};a.xb=a.Lc=a.yc=a.bc=b.tc;a.Wb=b.F();i=b.T({Gc:16,Hc:50},i);p=i.jd;x=i.Dd;g=k=z;e=z+C;H=i.md||{};F=i.ud||{};G=b.od(i.mb)};new(function(){});vari=function(p,fc){varg=this;functionBc(){vara=this;m.call(a,-1e8,2e8);a.Qd=function(){varb=a.nb(),d=c.floor(b),f=t(d),e=b-c.floor(b);return{Q:f,de:d,jb:e}};a.xb=function(b,a){vare=c.floor(a);if(e!=a&&a>b)e++;Ub(e,d);g.f(i.fe,t(a),t(b),a,b)}}functionAc(){vara=this;m.call(a,0,0,{jd:r});b.e(C,function(b){D&1&&b.Ld(r);a.Zb(b);b.cc(ib/bc)})}functionzc(){vara=this,b=Tb.K;m.call(a,-1,2,{mb:e.Ae,Dd:{jb:Zb},jd:r},b,{jb:1},{jb:-2});a.Nb=b}functionnc(o,n){varb=this,e,f,h,k,c;m.call(b,-1e8,2e8,{Hc:100});b.Lc=function(){M=d;S=j;g.f(i.te,t(w.I()),w.I())};b.yc=function(){M=l;k=l;vara=w.Qd();g.f(i.ge,t(w.I()),w.I());!a.jb&&Dc(a.de,s)};b.xb=function(i,g){varb;if(k)b=c;else{b=f;if(h){vard=g/h;b=a.bd(d)*(f-e)+e}}w.O(b)};b.Fb=function(a,d,c,g){e=a;f=d;h=c;w.O(a);b.O(0);b.Jc(c,g)};b.he=function(a){k=d;c=a;b.Kc(a,j,d)};b.ie=function(a){c=a};w=newBc;w.Cc(o);w.Cc(n)}functionpc(){varc=this,a=Xb();b.p(a,0);b.C(a,"pointerEvents","none");c.K=a;c.Gb=function(){b.N(a);b.Qb(a)}}functionxc(o,f){vare=this,q,L,v,k,y=[],x,B,W,G,Q,F,h,w,p;m.call(e,-u,u+1,{});functionE(a){q&&q.Zc();T(o,a,0);F=d;q=newI.H(o,I,b.nd(b.i(o,"idle"))||lc);q.O(0)}functionZ(){q.Wb<I.Wb&&E()}functionM(p,r,o){if(!G){G=d;if(k&&o){varh=o.width,c=o.height,n=h,m=c;if(h&&c&&a.eb){if(a.eb&3&&(!(a.eb&4)||h>K||c>J)){varj=l,q=K/J*c/h;if(a.eb&1)j=q>1;elseif(a.eb&2)j=q<1;n=j?h*J/c:K;m=j?J:c*K/h}b.k(k,n);b.l(k,m);b.v(k,(J-m)/2);b.B(k,(K-n)/2)}b.q(k,"absolute");g.f(i.le,f)}}b.N(r);p&&p(e)}functionY(b,c,d,g){if(g==S&&s==f&&N)if(!Cc){vara=t(b);A.Ud(a,f,c,e,d);c.me();U.cc(a-U.Dc()-1);U.O(a);z.Fb(b,b,0)}}functioncb(b){if(b==S&&s==f){if(!h){vara=j;if(A)if(A.Q==f)a=A.Yd();elseA.Gb();Z();h=newvc(o,f,a,q);h.Wc(p)}!h.Ic()&&h.Ob()}}functionR(d,g,l){if(d==f){if(d!=g)C[g]&&C[g].ne();else!l&&h&&h.oe();p&&p.Xc();varm=S=b.F();e.ab(b.A(j,cb,m))}else{vark=c.min(f,d),i=c.max(f,d),o=c.min(i-k,k+r-i),n=u+a.re-1;(!Q||o<=n)&&e.ab()}}functiondb(){if(s==f&&h){h.X();p&&p.se();p&&p.ee();h.Vc()}}functioneb(){s==f&&h&&h.X()}functionab(a){!P&&g.f(i.Pe,f,a)}functionO(){p=w.pInstance;h&&h.Wc(p)}e.ab=function(c,a){a=a||v;if(y.length&&!G){b.J(a);if(!W){W=d;g.f(i.qe,f);b.e(y,function(a){if(!b.o(a,"src")){a.src=b.i(a,"src2");b.L(a,a["display-origin"])}})}b.Fd(y,k,b.A(j,M,c,a))}elseM(c,a)};e.ke=function(){varh=f;if(a.Tc<0)h-=r;vard=h+a.Tc*tc;if(D&2)d=t(d);if(!(D&1))d=c.max(0,c.min(d,r-u));if(d!=f){if(A){vare=A.Sd(r);if(e){vari=S=b.F(),g=C[t(d)];returng.ab(b.A(j,Y,d,g,e,i),v)}}bb(d)}};e.Lb=function(){R(f,f,d)};e.ne=function(){p&&p.se();p&&p.ee();e.Rc();h&&h.je();h=j;E()};e.me=function(){b.N(o)};e.Rc=function(){b.J(o)};e.ae=function(){p&&p.Xc()};functionT(a,c,e){if(b.o(a,"jssor-slider"))return;if(!F){if(a.tagName=="IMG"){y.push(a);if(!b.o(a,"src")){Q=d;a["display-origin"]=b.L(a);b.N(a)}}b.id()&&b.p(a,(b.p(a)||0)+1)}varf=b.rb(a);b.e(f,function(f){varh=f.tagName,i=b.i(f,"u");if(i=="player"&&!w){w=f;if(w.pInstance)O();elseb.a(w,"dataavailable",O)}if(i=="caption"){if(c){b.Fc(f,b.i(f,"to"));b.Pd(f,b.i(f,"bf"));b.i(f,"3d")&&b.ue(f,"preserve-3d")}elseif(!b.hd()){varg=b.db(f,l,d);b.Bb(g,f,a);b.yb(f,a);f=g;c=d}}elseif(!F&&!e&&!k){if(h=="A"){if(b.i(f,"u")=="image")k=b.xe(f,"IMG");elsek=b.u(f,"image",d);if(k){x=f;b.L(x,"block");b.G(x,V);B=b.db(x,d);b.q(x,"relative");b.Rb(B,0);b.C(B,"backgroundColor","#000")}}elseif(h=="IMG"&&b.i(f,"u")=="image")k=f;if(k){k.border=0;b.G(k,V)}}T(f,c,e+1)})}e.bc=function(c,b){vara=u-b;Zb(L,a)};e.Q=f;n.call(e);b.Fe(o,b.i(o,"p"));b.we(o,b.i(o,"po"));varH=b.u(o,"thumb",d);if(H){b.db(H);b.N(H)}b.J(o);v=b.db(fb);b.p(v,1e3);b.a(o,"click",ab);E(d);e.Xd=k;e.vc=B;e.Nb=L=o;b.M(L,v);g.pb(203,R);g.pb(28,eb);g.pb(24,db)}functionvc(y,f,p,q){vara=this,n=0,u=0,h,j,e,c,k,t,r,o=C[f];m.call(a,0,0);functionv(){b.Qb(L);cc&&k&&o.vc&&b.M(L,o.vc);b.J(L,!k&&o.Xd)}functionw(){a.Ob()}functionx(b){r=b;a.X();a.Ob()}a.Ob=function(){varb=a.nb();if(!B&&!M&&!r&&s==f){if(!b){if(h&&!k){k=d;a.Vc(d);g.f(i.Vd,f,n,u,h,c)}v()}varl,p=i.Nc;if(b!=c)if(b==e)l=c;elseif(b==j)l=e;elseif(!b)l=j;elsel=a.uc();g.f(p,f,b,n,j,e,c);varm=N&&(!E||F);if(b==c)(e!=c&&!(E&12)||m)&&o.ke();else(m||b!=e)&&a.Jc(l,w)}};a.oe=function(){e==c&&e==a.nb()&&a.O(j)};a.je=function(){A&&A.Q==f&&A.Gb();varb=a.nb();b<c&&g.f(i.Nc,f,-b-1,n,j,e,c)};a.Vc=function(a){p&&b.vb(jb,a&&p.mc.Ze?"":"hidden")};a.bc=function(b,a){if(k&&a>=h){k=l;v();o.Rc();A.Gb();g.f(i.Ne,f,n,u,h,c)}g.f(i.Te,f,a,n,j,e,c)};a.Wc=function(a){if(a&&!t){t=a;a.pb($JssorPlayer$.wd,x)}};p&&a.Zb(p);h=a.Sb();a.Zb(q);j=h+q.Qc;e=h+q.Sc;c=a.Sb()}functionKb(a,c,d){b.B(a,c);b.v(a,d)}functionZb(c,b){vara=x>0?x:eb,d=zb*b*(a&1),e=Ab*b*(a>>1&1);Kb(c,d,e)}functionPb(){pb=M;Ib=z.uc();G=w.I()}functiongc(){Pb();if(B||!F&&E&12){z.X();g.f(i.Qe)}}functionec(f){if(!B&&(F||!(E&12))&&!z.Ic()){vard=w.I(),b=c.ceil(G);if(f&&c.abs(H)>=a.Uc){b=c.ceil(d);b+=hb}if(!(D&1))b=c.min(r-u,c.max(b,0));vare=c.abs(b-d);e=1-c.pow(1-e,5);if(!P&&pb)z.sd(Ib);elseif(d==b){sb.ae();sb.Lb()}elsez.Fb(d,b,e*Vb)}}functionHb(a){!b.i(b.Pb(a),"nodrag")&&b.ub(a)}functionrc(a){Yb(a,1)}functionYb(a,c){a=b.xc(a);vark=b.Pb(a);if(!O&&!b.i(k,"nodrag")&&sc()&&(!c||a.touches.length==1)){B=d;yb=l;S=j;b.a(h,c?"touchmove":"mousemove",Bb);b.F();P=0;gc();if(!pb)x=0;if(c){varf=a.touches[0];ub=f.clientX;vb=f.clientY}else{vare=b.lc(a);ub=e.x;vb=e.y}H=0;gb=0;hb=0;g.f(i.Se,t(G),G,a)}}functionBb(e){if(B){e=b.xc(e);varf;if(e.type!="mousemove"){varl=e.touches[0];f={x:l.clientX,y:l.clientY}}elsef=b.lc(e);if(f){varj=f.x-ub,k=f.y-vb;if(c.floor(G)!=G)x=x||eb&O;if((j||k)&&!x){if(O==3)if(c.abs(k)>c.abs(j))x=2;elsex=1;elsex=O;if(mb&&x==1&&c.abs(k)-c.abs(j)>3)yb=d}if(x){vara=k,i=Ab;if(x==1){a=j;i=zb}if(!(D&1)){if(a>0){varg=i*s,h=a-g;if(h>0)a=g+c.sqrt(h)*5}if(a<0){varg=i*(r-u-s),h=-a-g;if(h>0)a=-g-c.sqrt(h)*5}}if(H-gb<-2)hb=0;elseif(H-gb>2)hb=-1;gb=H;H=a;rb=G-H/i/(Y||1);if(H&&x&&!yb){b.ub(e);if(!M)z.he(rb);elsez.ie(rb)}}}}}functionab(){qc();if(B){B=l;b.F();b.z(h,"mousemove",Bb);b.z(h,"touchmove",Bb);P=H;z.X();vara=w.I();g.f(i.Je,t(a),a,t(G),G);E&12&&Pb();ec(d)}}functionjc(c){if(P){b.Re(c);vara=b.Pb(c);while(a&&v!==a){a.tagName=="A"&&b.ub(c);try{a=a.parentNode}catch(d){break}}}}functionJb(a){C[s];s=t(a);sb=C[s];Ub(a);returns}functionDc(a,b){x=0;Jb(a);g.f(i.Ce,t(a),b)}functionUb(a,c){wb=a;b.e(T,function(b){b.gc(t(a),a,c)})}functionsc(){varb=i.dd||0,a=X;if(mb)a&1&&(a&=1);i.dd|=a;returnO=a&~b}functionqc(){if(O){i.dd&=~X;O=0}}functionXb(){vara=b.tb();b.G(a,V);b.q(a,"absolute");returna}functiont(a){return(a%r+r)%r}functionkc(b,d){if(d)if(!D){b=c.min(c.max(b+wb,0),r-u);d=l}elseif(D&2){b=t(b+wb);d=l}bb(b,a.wb,d)}functionxb(){b.e(T,function(a){a.dc(a.zb.Ye<=F)})}functionhc(){if(!F){F=1;xb();if(!B){E&12&&ec();E&3&&C[s].Lb()}}}functionEc(){if(F){F=0;xb();B||!(E&12)||gc()}}functionic(){V={sb:K,qb:J,g:0,j:0};b.e(Q,function(a){b.G(a,V);b.q(a,"absolute");b.vb(a,"hidden");b.N(a)});b.G(fb,V)}functionob(b,a){bb(b,a,d)}functionbb(g,f,j){if(Rb&&(!B&&(F||!(E&12))||a.ad)){M=d;B=l;z.X();if(f==k)f=Vb;vare=Cb.nb(),b=g;if(j){b=e+g;if(g>0)b=c.ceil(b);elseb=c.floor(b)}if(D&2)b=t(b);if(!(D&1))b=c.max(0,c.min(b,r-u));vari=(b-e)%r;b=e+i;varh=e==b?0:f*c.abs(i);h=c.min(h,f*u*1.5);z.Fb(e,b,h||1)}}g.Kc=function(){if(!N){N=d;C[s]&&C[s].Lb()}};functionW(){returnb.k(y||p)}functionlb(){returnb.l(y||p)}g.S=W;g.R=lb;functionEb(c,d){if(c==k)returnb.k(p);if(!y){vara=b.tb(h);b.Mc(a,b.Mc(p));b.Ib(a,b.Ib(p));b.L(a,"block");b.q(a,"relative");b.v(a,0);b.B(a,0);b.vb(a,"visible");y=b.tb(h);b.q(y,"absolute");b.v(y,0);b.B(y,0);b.k(y,b.k(p));b.l(y,b.l(p));b.Fc(y,"00");b.M(y,a);varg=b.rb(p);b.M(p,y);b.C(p,"backgroundImage","");b.e(g,function(c){b.M(b.i(c,"noscale")?p:a,c);b.i(c,"autocenter")&&Mb.push(c)})}Y=c/(d?b.l:b.k)(y);b.Le(y,Y);varf=d?Y*W():c,e=d?c:Y*lb();b.k(p,f);b.l(p,e);b.e(Mb,function(a){varc=b.Md(b.i(a,"autocenter"));b.vd(a,c)})}g.Yc=Eb;n.call(g);g.K=p=b.ib(p);vara=b.T({eb:0,re:1,Ub:1,Vb:0,Yb:l,Hb:1,ob:d,ad:d,Tc:1,nc:3e3,kc:1,wb:500,bd:e.Be,Uc:20,pc:0,kb:1,zc:0,Rd:1,ac:1,Bc:1},fc);a.ob=a.ob&&b.Wd();if(a.ve!=k)a.nc=a.ve;if(a.Me!=k)a.zc=a.Me;vareb=a.ac&3,tc=(a.ac&4)/-4||1,kb=a.af,I=b.T({H:q,ob:a.ob},a.Xe);I.Mb=I.Mb||I.We;varFb=a.Ie,Z=a.Ge,db=a.Ve,R=!a.Rd,y,v=b.u(p,"slides",R),fb=b.u(p,"loading",R)||b.tb(h),Nb=b.u(p,"navigator",R),dc=b.u(p,"arrowleft",R),ac=b.u(p,"arrowright",R),Lb=b.u(p,"thumbnavigator",R),oc=b.k(v),mc=b.l(v),V,Q=[],uc=b.rb(v);b.e(uc,function(a){if(a.tagName=="DIV"&&!b.i(a,"u"))Q.push(a);elseb.id()&&b.p(a,(b.p(a)||0)+1)});vars=-1,wb,sb,r=Q.length,K=a.Ee||oc,J=a.De||mc,Wb=a.pc,zb=K+Wb,Ab=J+Wb,bc=eb&1?zb:Ab,u=c.min(a.kb,r),jb,x,O,yb,T=[],Qb,Sb,Ob,cc,Cc,N,E=a.kc,lc=a.nc,Vb=a.wb,qb,tb,ib,Rb=u<r,D=Rb?a.Hb:0,X,P,F=1,M,B,S,ub=0,vb=0,H,gb,hb,Cb,w,U,z,Tb=newpc,Y,Mb=[];if(a.ob)Kb=function(a,c,d){b.Cb(a,{V:c,W:d})};N=a.Yb;g.zb=fc;ic();b.o(p,"jssor-slider",d);b.p(v,b.p(v)||0);b.q(v,"absolute");jb=b.db(v,d);b.Bb(jb,v);if(kb){cc=kb.Ue;qb=kb.H;tb=u==1&&r>1&&qb&&(!b.hd()||b.Pc()>=8)}ib=tb||u>=r||!(D&1)?0:a.zc;X=(u>1||ib?eb:-1)&a.Bc;varGb=v,C=[],A,L,Db=b.be(),mb=Db.ce,G,pb,Ib,rb;Db.ed&&b.C(Gb,Db.ed,([j,"pan-y","pan-x","none"])[X]||"");U=newzc;if(tb)A=newqb(Tb,K,J,kb,mb);b.M(jb,U.Nb);b.vb(v,"hidden");L=Xb();b.C(L,"backgroundColor","#000");b.Rb(L,0);b.Bb(L,Gb.firstChild,Gb);for(varcb=0;cb<Q.length;cb++){varwc=Q[cb],yc=newxc(wc,cb);C.push(yc)}b.N(fb);Cb=newAc;z=newnc(Cb,U);if(X){b.a(v,"mousedown",Yb);b.a(v,"touchstart",rc);b.a(v,"dragstart",Hb);b.a(v,"selectstart",Hb);b.a(h,"mouseup",ab);b.a(h,"touchend",ab);b.a(h,"touchcancel",ab);b.a(f,"blur",ab)}E&=mb?10:5;if(Nb&&Fb){Qb=newFb.H(Nb,Fb,W(),lb());T.push(Qb)}if(Z&&dc&&ac){Z.Hb=D;Z.kb=u;Sb=newZ.H(dc,ac,Z,W(),lb());T.push(Sb)}if(Lb&&db){db.Vb=a.Vb;Ob=newdb.H(Lb,db);T.push(Ob)}b.e(T,function(a){a.ec(r,C,fb);a.pb(o.fc,kc)});b.C(p,"visibility","visible");Eb(W());b.a(v,"click",jc,d);b.a(p,"mouseout",b.Kb(hc,p));b.a(p,"mouseover",b.Kb(Ec,p));xb();a.Ub&&b.a(h,"keydown",function(b){if(b.keyCode==37)ob(-a.Ub);elseb.keyCode==39&&ob(a.Ub)});varnb=a.Vb;if(!(D&1))nb=c.max(0,c.min(nb,r-u));z.Fb(nb,nb,0)};i.Pe=21;i.Se=22;i.Je=23;i.te=24;i.ge=25;i.qe=26;i.le=27;i.Qe=28;i.fe=202;i.Ce=203;i.Vd=206;i.Ne=207;i.Te=208;i.Nc=209;varo={fc:1},r=function(e,C){varf=this;n.call(f);e=b.ib(e);vars,A,z,r,k=0,a,m,i,w,x,h,g,q,p,B=[],y=[];functionv(a){a!=-1&&y[a].Ad(a==k)}functiont(a){f.f(o.fc,a*m)}f.K=e;f.gc=function(a){if(a!=r){vard=k,b=c.floor(a/m);k=b;r=a;v(d);v(b)}};f.dc=function(a){b.J(e,a)};varu;f.ec=function(D){if(!u){s=c.ceil(D/m);k=0;varo=q+w,r=p+x,n=c.ceil(s/i)-1;A=q+o*(!h?n:i-1);z=p+r*(h?n:i-1);b.k(e,A);b.l(e,z);for(varf=0;f<s;f++){varC=b.qd();b.He(C,f+1);varl=b.Ed(g,"numbertemplate",C,d);b.q(l,"absolute");varv=f%(n+1);b.B(l,!h?o*v:f%i*o);b.v(l,h?r*v:c.floor(f/(n+1))*r);b.M(e,l);B[f]=l;a.jc&1&&b.a(l,"click",b.A(j,t,f));a.jc&2&&b.a(l,"mouseover",b.Kb(b.A(j,t,f),l));y[f]=b.Jb(l)}u=d}};f.zb=a=b.T({Ac:10,qc:10,rc:1,jc:1},C);g=b.u(e,"prototype");q=b.k(g);p=b.l(g);b.yb(g,e);m=a.sc||1;i=a.td||1;w=a.Ac;x=a.qc;h=a.rc-1;a.ic==l&&b.o(e,"noscale",d);a.lb&&b.o(e,"autocenter",a.lb)},s=function(a,g,h){varc=this;n.call(c);varr,q,e,f,i;b.k(a);b.l(a);functionk(a){c.f(o.fc,a,d)}functionp(c){b.J(a,c||!h.Hb&&e==0);b.J(g,c||!h.Hb&&e>=q-h.kb);r=c}c.gc=function(b,a,c){if(c)e=a;else{e=b;p(r)}};c.dc=p;varm;c.ec=function(c){q=c;e=0;if(!m){b.a(a,"click",b.A(j,k,-i));b.a(g,"click",b.A(j,k,i));b.Jb(a);b.Jb(g);m=d}};c.zb=f=b.T({sc:1},h);i=f.sc;if(f.ic==l){b.o(a,"noscale",d);b.o(g,"noscale",d)}if(f.lb){b.o(a,"autocenter",f.lb);b.o(g,"autocenter",f.lb)}};functionq(e,d,c){vara=this;m.call(a,0,c);a.Zc=b.tc;a.Qc=0;a.Sc=c}jssor_1_slider_init=function(){varh={Yb:d,wb:800,bd:g.ye,Ge:{H:s},Ie:{H:r}},e=newi("jssor_1",h);functiona(){varb=e.K.parentNode.clientWidth;if(b){b=c.min(b,1920);e.Yc(b)}elsef.setTimeout(a,30)}a();b.a(f,"load",a);b.a(f,"resize",a);b.a(f,"orientationchange",a);functiona(){varb=e.K.parentNode.clientWidth;if(b){b=c.min(b,1920);e.Yc(b)}elsef.setTimeout(a,30)}a();b.a(f,"load",a);b.a(f,"resize",a);b.a(f,"orientationchange",a)}})(window,document,Math,null,true,false);