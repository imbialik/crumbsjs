const crumbs={throwError:function(r){console.error(r)},set:function(r,e,t,o){try{if(Array.isArray(r)){var n=r;return n.forEach(r=>{if(!r.hasOwnProperty("name")||!r.hasOwnProperty("value"))throw"Mass cookie set did not work, on or more object properties are wrong."}),n.map(r=>!!this.set(r.name,r.value)&&r)}var c,a="";if(null!=t){var i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3),i.toUTCString(),a=`expires=${i};`}return c=null!=o?`path=${o};`:o,document.cookie=`${r}=${e};${a};${c}`,!0}catch(r){return this.throwError(`An error has occurd: ${r}`),!1}},get:function(r){try{var e=decodeURIComponent(document.cookie),t=(e=e.split("; ")).filter(e=>(e=e.split("="))[0]===r?1:0);return t.length>0&&t[0].split("=")[1]}catch(r){return this.throwError(`An error has occurd: ${r}`),!1}},getAll:function(){try{var r=decodeURIComponent(document.cookie);return(r=r.split("; ")).map(r=>({name:(r=r.split("="))[0],value:r[1]}))}catch(r){return this.throwError(`An error has occurd: ${r}`),!1}},delete:function(r){try{return Array.isArray(r)?(r.forEach(r=>{this.delete(r)}),!0):(document.cookie=`${r}=''; expires=Thu, 01 Jan 1970 00:00:01 GMT`,!0)}catch(r){this.throwError(`An error has occurd: ${r}`)}}};