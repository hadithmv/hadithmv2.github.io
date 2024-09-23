document.addEventListener("DOMContentLoaded",()=>{function N(){var e=this.value;z.value=e,t.value=e,g.style.fontSize=e+"px"}function r(){var e=g.value,t=e.trim()?e.trim().split(/\s+/).length:0,n=e?e.split("\n").length:0;O.textContent="Char: "+e.length,q.textContent="Wrd: "+t,H.textContent="Ln: "+n,e=new Blob([e]).size,P.textContent=e<1024?"B: "+e:e<1048576?"KB: "+(e/1024).toFixed(2):e<1073741824?"MB: "+(e/1048576).toFixed(2):"GB: "+(e/1073741824).toFixed(2)}function n(t){c[e-1].content=g.value,e=t,g.value=c.find(e=>e.id===t).content,document.querySelectorAll(".numbered-tab").forEach(e=>{e.classList.toggle("active",parseInt(e.dataset.tab)===t)}),r()}function d(){g.style.direction="ltr",g.style.textAlign="left"}let R=document.querySelectorAll(".top-tab"),U=document.querySelectorAll(".tab-content"),g=document.getElementById("textArea"),z=document.getElementById("fontSizeSlider"),t=document.getElementById("fontSize"),O=document.getElementById("charCount"),q=document.getElementById("wordCount"),H=document.getElementById("lineCount"),P=document.getElementById("fileSize"),a=document.getElementById("addTab"),l=document.querySelector(".numbered-tabs"),e=1,c=[{id:1,content:""}],i=(R.forEach(t=>{t.addEventListener("click",()=>{R.forEach(e=>e.classList.remove("active")),t.classList.add("active"),U.forEach(e=>{e.classList.remove("active"),e.id===t.dataset.tab+"Tab"&&e.classList.add("active")})})}),z.addEventListener("input",N),t.addEventListener("change",N),t.addEventListener("click",function(){}),g.addEventListener("input",(t=>{let n;return function(...e){clearTimeout(n),n=setTimeout(()=>{clearTimeout(n),t(...e)},300)}})(r)),a.addEventListener("click",()=>{var e=c.length+1,t=(c.push({id:e,content:""}),document.createElement("button"));t.classList.add("numbered-tab"),t.dataset.tab=e,t.textContent=e,l.insertBefore(t,a),n(e)}),l.addEventListener("click",e=>{e.target.classList.contains("numbered-tab")&&n(parseInt(e.target.dataset.tab))}),document.getElementById("copyToClipboard").addEventListener("click",()=>{navigator.clipboard.writeText(g.value)}),document.getElementById("clearAll").addEventListener("click",()=>{g.value="",c=[{id:1,content:""}],l.innerHTML='<button class="numbered-tab active" data-tab="1">1</button><button id="addTab">+</button>',e=1,r()}),document.getElementById("arabicDigits").addEventListener("click",()=>{g.value=g.value.replace(/[0-9]/g,e=>"٠١٢٣٤٥٦٧٨٩"[e]),r()}),document.getElementById("regularDigits").addEventListener("click",()=>{g.value=g.value.replace(/[٠١٢٣٤٥٦٧٨٩]/g,e=>"٠١٢٣٤٥٦٧٨٩".indexOf(e)),r()}),document.getElementById("removeDiacritics").addEventListener("click",()=>{g.value=g.value.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/g,""),r()}),document.getElementById("saveFile").addEventListener("click",()=>{var e=new Blob([g.value],{type:"text/plain;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="saved_text.txt",t.click()}),document.getElementById("loadFile").addEventListener("click",()=>{var e=document.createElement("input");e.type="file",e.accept="text/plain",e.onchange=e=>{e=e.target.files[0];var t=new FileReader;t.onload=e=>{g.value=e.target.result,r()},t.readAsText(e)},e.click()}),!0),o=(document.getElementById("toggleDirection").addEventListener("click",()=>{i=!i,g.style.direction=i?"rtl":"ltr",g.style.textAlign=i?"right":"left"}),[{name:"Title Case",func:e=>e.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())},{name:"Sentence case",func:e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},{name:"lower case",func:e=>e.toLowerCase()},{name:"UPPER CASE",func:e=>e.toUpperCase()}]),u=0,Q=(document.getElementById("changeCase").addEventListener("click",()=>{g.value=o[u].func(g.value),u=(u+1)%o.length,document.getElementById("changeCase").textContent=o[u].name,r()}),document.getElementById("wordWrap").addEventListener("click",()=>{g.value=g.value.replace(/\s+/g," ").trim(),r()}),[{func:e=>e.trim().replace(/\n{3,}/g,"\n\n")},{func:e=>e.trim().replace(/\n{2,}/g,"\n")},{func:e=>e.trim().split("\n").filter(e=>""!==e.trim()).join("\n")},{func:e=>e}]),s=0,v=(document.getElementById("removeNewlines").addEventListener("click",()=>{g.value=Q[s].func(g.value),s=(s+1)%Q.length,r()}),document.getElementById("removeExtraSpace").addEventListener("click",()=>{g.value=g.value.replace(/^ +| +$/gm,"").replace(/ +/g," ").trim(),r()}),!1),m=(document.getElementById("convertQuotes").addEventListener("click",()=>{g.value=v?g.value.replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"'):g.value.replace(/(\W|^)"(\S)/g,"$1”$2").replace(/(\u201D[^"]*)"([^"]*$|[^\u201D"]*\u201D)/g,"$1“$2").replace(/([^0-9])"/g,"$1“").replace(/(\W|^)'(\S)/g,"$1’$2").replace(/([a-z])'([a-z])/gi,"$1‘$2").replace(/((\u2019[^']*)|[a-z])'([^0-9]|$)/gi,"$1‘$3").replace(/(\u2019)([0-9]{2}[^\u2018]*)(\u2019([^0-9]|$)|$|\u2018[a-z])/gi,"‘$2$3").replace(/(\B|^)\u2019(?=([^\u2018]*\u2018\b)*([^\u2018\u2019]*\W[\u2018\u2019]\b|[^\u2018\u2019]*$))/gi,"$1‘").replace(/'''/g,"‴").replace(/''/g,"″").replace(/'/g,"′"),v=!v,r()}),document.getElementById("keepOnlyNumbers").addEventListener("click",()=>{g.value=g.value.replace(/[^0-9\n]/g,""),r()}),0),p=(document.getElementById("cycleBrackets").addEventListener("click",()=>{var e=[{from:/[()[\]]/g,to:e=>"("===e||"["===e?"⌜":"⌝",next:"⌜⌝ → ⌝⌜"},{from:/[⌜⌝]/g,to:e=>"⌜"===e?"⌝":"⌜",next:"⌝⌜ → ()"},{from:/[⌝⌜]/g,to:e=>"⌝"===e?"(":")",next:"() [] → ⌜⌝"}];g.value=g.value.replace(e[m].from,e[m].to),document.getElementById("cycleBrackets").textContent=e[m].next,m=(m+1)%3,r()}),!1),E=(document.getElementById("dotsToEllipsis").addEventListener("click",()=>{g.value=p?g.value.replace(/…/g,"..."):g.value.replace(/\.{3}/g,"…"),p=!p,r()}),0),y=(document.getElementById("hyphenToEnThenEmDash").addEventListener("click",()=>{var e=[{from:/-/g,to:"–"},{from:/–/g,to:"—"},{from:/—/g,to:"-"}];g.value=g.value.replace(e[E].from,e[E].to),E=(E+1)%3,r()}),!0),h=(document.getElementById("reverseCurlyQuotes").addEventListener("click",()=>{let e=document.getElementById("textArea"),t=y?{"‘":"’","’":"‘","“":"”","”":"“"}:{"’":"‘","‘":"’","”":"“","“":"”"};e.value=e.value.replace(/[’‘”“]/g,e=>t[e]||e),y=!y,r()}),document.getElementById("removeAllNumbers").addEventListener("click",()=>{g.value=g.value.replace(/[0-9]/g,""),r()}),document.getElementById("keepOnlyAr").addEventListener("click",()=>{g.value=g.value.replace(/[^\u0600-\u06ff\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd92-\ufdc7\ufe70-\ufefc\uFDF0-\uFDFD\s]/g,""),r()}),document.getElementById("text2HtmlP").addEventListener("click",()=>{d();let e=g.value.split(/\n{1,}/);e=e.filter(e=>""!==e.trim()),g.value=e.map(e=>`<p>${e.trim()}</p>`).join("\n"),r()}),document.getElementById("whichUnicodeCharacter").addEventListener("click",()=>{d();var t=g.value;let n="";for(let e=0;e<t.length;e++){var a=t.codePointAt(e),l="https://codepoints.net/U+"+a.toString(16).toUpperCase().padStart(4,"0");n+=`U+${a.toString(16).toUpperCase().padStart(4,"0")} : ${t[e]} : ${l}
`,65535<a&&e++}g.value=n,r()}),document.getElementById("rmvHtmlTags").addEventListener("click",()=>{g.value=g.value.replace(/<[^>]*>/g,""),r()}),!1),I=(document.getElementById("decodeEncodeUnicode").addEventListener("click",()=>{if(d(),h){var n=g.value;let t="";for(let e=0;e<n.length;e++){var a=n.charCodeAt(e);t+="\\u"+a.toString(16).padStart(4,"0")}g.value=t,document.getElementById("decodeEncodeUnicode").textContent="Decode \\unicode"}else g.value=g.value.replace(/\\u([0-9a-fA-F]{4})/g,(e,t)=>String.fromCharCode(parseInt(t,16))),document.getElementById("decodeEncodeUnicode").textContent="Encode unicode";h=!h,r()}),!1),W=(document.getElementById("decodeEncodeURL").addEventListener("click",()=>{d(),I?(g.value=encodeURI(g.value),document.getElementById("decodeEncodeURL").textContent="Decode URL"):(g.value=decodeURI(g.value),document.getElementById("decodeEncodeURL").textContent="Encode URL"),I=!I,r()}),document.getElementById("sortWordsByFrequency").addEventListener("click",()=>{let t={};(g.value.toLowerCase().match(/\b[\w']+\b/g)||[]).forEach(e=>{t[e]=(t[e]||0)+1});var e=Object.entries(t).sort((e,t)=>t[1]-e[1]).map(([e,t])=>t+": "+e);g.value=e.join("\n"),r()}),document.getElementById("sortLinesByFrequency").addEventListener("click",()=>{let t={};g.value.split("\n").filter(e=>""!==e.trim()).forEach(e=>{t[e]=(t[e]||0)+1});var e=Object.entries(t).sort((e,t)=>t[1]-e[1]).map(([e,t])=>t+": "+e);g.value=e.join("\n"),r()}),!1),L=(document.getElementById("toggleLineNumbers").addEventListener("click",()=>{var e=g.value.split("\n");W=W?(g.value=e.map(e=>e.replace(/^\d+\.\s/,"")).join("\n"),!(document.getElementById("toggleLineNumbers").textContent="Add Line Numbers")):(g.value=e.map((e,t)=>t+1+". "+e).join("\n"),document.getElementById("toggleLineNumbers").textContent="Rmv Line Numbers",!0),r()}),"asc"),_=(document.getElementById("toggleSortLines").addEventListener("click",()=>{var e=g.value.split("\n");L="asc"===L?(g.value=e.sort().join("\n"),document.getElementById("toggleSortLines").textContent="Sort Lines ⬇️","desc"):"desc"===L?(g.value=e.sort().reverse().join("\n"),document.getElementById("toggleSortLines").textContent="Reset Sorting","reset"):(document.getElementById("toggleSortLines").textContent="Sort Lines ⬆️","asc"),r()}),document.getElementById("randomizeLines").addEventListener("click",()=>{var t=g.value.split("\n");for(let e=t.length-1;0<e;e--){var n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}g.value=t.join("\n"),r()}),"horizontal"),B=(document.getElementById("reverseText").addEventListener("click",()=>{_="horizontal"===_?(g.value=g.value.split("").reverse().join(""),document.getElementById("reverseText").textContent="Rvrs VertiLines ↕️","vertical"):(g.value=g.value.split("\n").reverse().join("\n"),document.getElementById("reverseText").textContent="Rvrs HoriTxt ⏪","horizontal"),r()}),document.getElementById("genRandPass").addEventListener("click",()=>{var n,t=Math.floor(9*Math.random())+8;let a="";for(let e=0;e<t;e++)a+=String.fromCharCode(Math.floor(94*Math.random()+33));g.value=(n=a,[{regex:/[a-z]/,range:[97,122]},{regex:/[A-Z]/,range:[65,90]},{regex:/[0-9]/,range:[48,57]},{regex:/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/,range:[33,47]}].forEach(e=>{var t;e.regex.test(n)||(t=Math.floor(Math.random()*n.length),e=String.fromCharCode(Math.floor(Math.random()*(e.range[1]-e.range[0]+1))+e.range[0]),n=n.substring(0,t)+e+n.substring(t+1))}),n),r()}),"none"),J=(document.getElementById("toggleListTags").addEventListener("click",()=>{var e=g.value.split("\n");B="none"===B?(g.value="<ol>\n"+e.map(e=>`  <li>${e}</li>`).join("\n")+"\n</ol>",document.getElementById("toggleListTags").textContent="HTML U List","ordered"):"ordered"===B?(g.value="<ul>\n"+e.map(e=>e.replace(/<li>(.*)<\/li>/,"  <li>$1</li>")).join("\n")+"\n</ul>",document.getElementById("toggleListTags").textContent="Remove Tags","unordered"):(g.value=e.map(e=>e.replace(/<li>(.*)<\/li>/,"$1")).join("\n").replace(/<\/?[ou]l>\n?/g,""),document.getElementById("toggleListTags").textContent="HTML O List","none"),r()}),document.getElementById("removePrecedingZeros").addEventListener("click",()=>{g.value=g.value.replace(/\b0+(\d+)/g,"$1"),r()}),{"ޘ":"ސ","ޙ":"ހ","ޛ":"ޒ","ޜ":"ޒ","ޞ":"ސ","ޠ":"ތ","ޡ":"ޒ","ޢ":"އ","ޤ":"ގ","ޥ":"ވ"}),K=(document.getElementById("keepOnlyDv").addEventListener("click",()=>{g.value=g.value.replace(/[^\u0780-\u07BF\s]/g,""),r()}),[["އަ","a"],["އާ","aa"],["އި","i"],["އީ","ee"],["އު","u"],["އޫ","oo"],["އެ","e"],["އޭ","ey"],["އޮ","o"],["އޯ","oa"],["ުއް","uh"],["ިއް","ih"],["ެއް","eh"],["ަށް","ah"],["ައް","ah"],["ށް","h"],["ތް","i"],["ާއް","aah"],["އް","h"],["ަ","a"],["ާ","aa"],["ި","i"],["ީ","ee"],["ު","u"],["ޫ","oo"],["ެ","e"],["ޭ","ey"],["ޮ","o"],["ޯ","oa"],["ް",""],["ހ","h"],["ށ","sh"],["ނ","n"],["ރ","r"],["ބ","b"],["ޅ","lh"],["ކ","k"],["އ","a"],["ވ","v"],["މ","m"],["ފ","f"],["ދ","dh"],["ތ","th"],["ލ","l"],["ގ","g"],["ޏ","y"],["ސ","s"],["ޑ","d"],["ޒ","z"],["ޓ","t"],["ޔ","y"],["ޕ","p"],["ޖ","j"],["ޗ","ch"],["ޙ","h"],["ޚ","kh"],["ޛ‎","z"],["ޜ‎","z"],["ޝ‎","sh"],["ޝ","sh"],["ޤ","q"],["ޢ","a"],["ޞ","s"],["ޟ","dh"],["ޡ","z"],["ޠ","t"],["ާާޣ","gh"],["ޘ","th"],["ޛ","dh"],["ާާޜ","z"]]),Z=(document.getElementById("transliterateDvToEn").addEventListener("click",()=>{g.value=(e=>{e=e.replace(/[\u200B-\u200D\uFEFF]/g,"");for(var[t,n]of K)e=e.replace(new RegExp(t,"g"),n);return e.replace(/(^\s*\w|[.!?]\s*\w)/g,e=>e.toUpperCase())})(g.value),d(),r()}),[["ـ",""],["آ","އާ"],["ب","ބ"],["ت","ތ"],["ث","ޘ"],["ج","ޖ"],["ح","ޙ"],["خ","ޚ"],["د","ދ"],["ذ","ޛ"],["ر","ރ"],["ز","ޒ"],["س","ސ"],["ش","ޝ"],["ص","ޞ"],["ض","ޟ"],["ط","ޠ"],["ظ","ޡ"],["ع","ޢ"],["غ","ޣ"],["ف","ފ"],["ق","ޤ"],["ك","ކ"],["ل","ލ"],["م","މ"],["ن","ނ"],["ه","ހ"],["و","ވ"],["ي","ޔ"],["ة","ތ"],["ء","އ"],["أ","އ"],["ؤ","އ"],["إ","އ"],["ئ","އ"],["ى","އ"],["َ","ަ"],["ِ","ި"],["ُ","ު"],["ْ","ް"],["ً","ަން"],["ٍ","ިން"],["ٌ","ުން"],["ަا","ާ"],["اލ","ލ"],["ލއްލަހ","ﷲ"],["ލލހ","ﷲ"],["ލއް","އް"],["ާ އްލަ","ަ އްލަ"],["ا",""],["ުވ","ޫ"],["އ އް"," އް"],["ޫ ލ","ު ލ"],["އްލަލ","އްލަ"],["«",'"'],["»",'"']]);document.getElementById("transliterateArToDv").addEventListener("click",()=>{g.value=(e=>{e=(e=(e=e.replace(/(.)ّ/g,(e,t)=>"އް"+(Z.find(([e])=>e===t)?.[1]||t))).replace(/ة([َِ ُ ً ٍ ٌ])/g,"ތ$1")).replace(/ة(?![َِ ُ ً ٍ ٌ])/g,"ހ");for(var[t,n]of Z)e=e.replace(new RegExp(t,"g"),n);return e})(g.value),r()});let G=new class{constructor(){this.ehbari="ސުމެއް އެއް ދެ ތިން ހަތަރު ފަސް ހަ ހަތް އަށް ނުވަ ދިހަ އެގާރަ ބާރަ ތޭރަ ސާދަ ފަނަރަ ސޯޅަ ސަތާރަ އަށާރަ ނަވާރަ ވިހި އެކާވީސް ބާވީސް ތޭވީސް ސައުވީސް ފަންސަވީސް ސައްބީސް ހަތާވީސް އަށާވީސް ނަވާވީސް".split(" "),this.dhihabari="ސުން ދިހަ ވިހި ތިރީސް ސާޅީސް ފަންސާސް ފަސްދޮޅަސް ހައްދިހަ އައްޑިހަ ނުވަދިހަ".split(" "),this.sunbari=["","ހާސް","މިލިޔަން","ބިލިޔަން","ޓްރިލިޔަން"]}convert(e){return e?(e=parseInt(e))<1e3?this.thousandSub(e):this.thousandUp(e):null}thousandSub(e){var t,n="ސަތޭކަ ";return e<=0||e<=29?this.ehbari[e]:e<=99?(n=Math.floor(e/10),0===(e%=10)?this.dhihabari[n]:this.dhihabari[n]+" "+this.ehbari[e]):e<=999?(t=e%100,2===(e=Math.floor(e/100))&&(this.ehbari[2]="ދުވި",n="ސައްތަ "),0==t?this.ehbari[e]+" "+n:this.ehbari[e]+" "+n+this.thousandSub(t)):""}thousandHalf(e){for(var t=[];0!==e;)t.push(e%1e3),e=Math.floor(e/1e3);return t}thousandUp(t){var n,a=this.thousandHalf(t),l=(t=a.length-1,[]);for(n of a.reverse()){a=this.thousandSub(n)+" ";let e=this.sunbari[t]+" ";if(" "===a)break;"ސުން "!==a&&"ސުމެއް "!==a||(e=a=""),l.push(a+e),--t}return(n=(n=l.join("")).endsWith(",")?n.slice(0,-1):n).trim()}},f=(document.getElementById("Nos2DvTxt").addEventListener("click",()=>{var e=g.value.split("\n").map(e=>{var t=e.match(/\d+/g);return t?t.map(e=>G.convert(e).replace(/\s+/g," ").trim()).join("، "):e.trim()});g.value=e.filter(e=>0<e.length).join("\n"),r()}),document.getElementById("removeThikijehiThaana").addEventListener("click",()=>{g.value=g.value.replace(/[ޘޙޛޜޞޠޡޢޤޥ]/g,e=>J[e]||e),r()}),document.getElementById("removeDhivehiFili").addEventListener("click",()=>{g.value=g.value.replace(/[\u07A6-\u07B0]/g,""),r()}),document.getElementById("filiIssuesResults")),b=(document.getElementById("findFiliIssues").addEventListener("click",()=>{var e,r,d,t=/[\u07a6-\u07b0]/,n=/[\u064b-\u0650\u0652-\u0656]/,a=/[\u0780-\u07a5]/,l=/[\u064e\u064f\u0650]/,c=g.value.split(/\s+/),i=[];for(let e=0;e<c.length;e++){var o=c[e],u=[];for(let e=0;e<o.length;e++){var s=o[e],v=o[e+1]||"",m=o[e-1]||"";t.test(s)&&t.test(v)||n.test(s)&&n.test(v)||"ّ"===s&&"ّ"===v?(0<u.length&&"standalone"===u[u.length-1].type&&u[u.length-1].index===e-1&&u.pop(),u.push({type:"multiple",index:e}),e++):(a.test(s)&&"ނ"!==s&&!t.test(v)&&u.push({type:"noDvFili",index:e}),!t.test(s)&&!n.test(s)&&"ّ"!==s||a.test(m)||/[\u0600-\u06FF]/.test(m)||"ّ"===s&&l.test(v)||u.push({type:"standalone",index:e}))}0<u.length&&i.push({word:o,index:e,issues:u})}0===(e=i).length?f.innerHTML="No issues found.":(r=g.value.split(/\s+/),d="",e.forEach((a,e)=>{var t=r[a.index-1]||"",n=r[a.index+1]||"",l=a.issues.map(e=>{var t="multiple"===e.type?`${a.word[e.index-1]||""}${a.word[e.index]} `+a.word[e.index+1]:`${a.word[e.index-1]||""} `+a.word[e.index];let n;switch(e.type){case"multiple":n="Multiple Fili :&nbsp; "+t;break;case"noDvFili":n="Thaana w/o Fili :&nbsp; "+t;break;case"standalone":n="Standalone Fili :&nbsp; "+t}return n}).join(", ");d+=`${e+1}. ${t} <span style="color: blue;">${a.word}</span> ${n} : <span style="color: red;">${l}</span> <br>`}),f.innerHTML=d),f.style.display="block"}),document.getElementById("removePunctuation").addEventListener("click",()=>{g.value=g.value.replace(/[^\w\s]/g,""),r()}),0),V=(convertFootnotesBtn.addEventListener("click",()=>{switch(b%3){case 0:g.value=g.value.replace(/\((\d+)\)|\[(\d+)\]/g,(e,t,n)=>`⁽${(t||n).split("").map(e=>"⁰¹²³⁴⁵⁶⁷⁸⁹"[e]).join("")}⁾`);break;case 1:g.value=g.value.replace(/⁽([⁰¹²³⁴⁵⁶⁷⁸⁹]+)⁾/g,(e,t)=>`(${t.split("").map(e=>"⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(e)).join("")})`);break;case 2:g.value=g.value.replace(/\((\d+)\)/g,(e,t)=>`[${t}]`)}b++,convertFootnotesBtn.textContent=["(1)/[1] → ⁽¹⁾","⁽¹⁾ → (1)","(1) → [1]"][b%3],r()}),0),Y=(document.getElementById("bracketNumbers").addEventListener("click",()=>{g.value=0==V%2?g.value.replace(/\((\d+)\)|\[(\d+)\]/g,"$1$2"):g.value.replace(/(\d+)(?!\))/g,"($1)"),V++,r()}),document.getElementById("removeNumbersInBrackets").addEventListener("click",()=>{g.value=g.value.replace(/\(\d+\)|\[\d+\]|⁽[⁰¹²³⁴⁵⁶⁷⁸⁹]+⁾/g,""),r()}),document.getElementById("removeDuplicateLines").addEventListener("click",()=>{var e=g.value.split("\n"),e=[...new Set(e)];g.value=e.join("\n"),r()}),document.getElementById("splitIntoWords").addEventListener("click",()=>{var e=g.value.match(/\S+/g)||[];g.value=e.join("\n"),r()}),0),k=(document.getElementById("convertSalawat").addEventListener("click",()=>{Y++,g.value=1==Y%2?g.value.replace(/صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ|صلى الله عليه وسلم/g,"ﷺ"):g.value.replace(/ﷺ/g,"صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ"),r()}),["0123456789".split(""),"𝟢 𝟣 𝟤 𝟥 𝟦 𝟧 𝟨 𝟩 𝟪 𝟫".split(" "),"０１２３４５６７８９".split(""),"𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵".split(" "),"⓪①②③④⑤⑥⑦⑧⑨".split(""),"⓿❶❷❸❹❺❻❼❽❾".split("")]),x=0,C=(document.getElementById("convertNumbers").addEventListener("click",()=>{var t=k[x],n=k[(x+1)%k.length];let a=g.value;for(let e=0;e<10;e++)a=a.replace(new RegExp(t[e],"g"),n[e]);g.value=a,x=(x+1)%k.length,r()}),!1),X={a:"4",e:"3",i:"!",o:"0",t:"7",l:"1",s:"5"},ee=Object.fromEntries(Object.entries(X).map(([e,t])=>[t,e])),S=(document.getElementById("toggleLeetSpeak").addEventListener("click",()=>{g.value=C?g.value.replace(/[43!0715]/g,e=>ee[e]):g.value.toLowerCase().replace(/[aeiotls]/g,e=>X[e]),C=!C,r(),d()}),document.getElementById("removeKashidas").addEventListener("click",()=>{g.value=g.value.replace(/ـ/g,""),r()}),document.getElementById("shaddaB4Haraka").addEventListener("click",()=>{g.value=g.value.replace(RegExp("([ًٌٍَُِّْ])(ّ)","g"),(e,t,n)=>"ْ"===t?e:n+t)}),document.getElementById("removeQuranicMarks").addEventListener("click",()=>{g.value=g.value.replace(/[ۖۗۘۙۚۛۜ۝۞ۣ۟۠ۡۢۤۥۦۧۨ۩۪ۭ۫۬﴾﴿]/g,"").replace(/\s+/g," ").trim(),r()}),0),te=(document.getElementById("replaceQuoteToDoubleAngleBrackets").addEventListener("click",()=>{switch(S){case 0:g.value=g.value.replace(/"([^"]*)"/g,"«$1»").replace(/\(\(([^)]*)\)\)/g,"«$1»"),document.getElementById("replaceQuoteToDoubleAngleBrackets").textContent="« » → (( ))",S=1;break;case 1:g.value=g.value.replace(/«([^»]*)»/g,"(($1))"),document.getElementById("replaceQuoteToDoubleAngleBrackets").textContent='(( )) → " "',S=2;break;case 2:g.value=g.value.replace(/\(\(([^)]*)\)\)/g,'"$1"'),document.getElementById("replaceQuoteToDoubleAngleBrackets").textContent='" " / (( )) → « »',S=0}r()}),document.getElementById("replaceDoubleBracketsToSingle").addEventListener("click",()=>{g.value=g.value.replace(/\(\(([^)]*)\)\)/g,"($1)"),r()}),!0),ne=(document.getElementById("replaceQuranicBrackets").addEventListener("click",()=>{let t=te?{"{":"﴿","}":"﴾","*":"۝"}:{"﴿":"{","﴾":"}","۝":"*"};g.value=g.value.replace(/[﴾﴿۝{}*]/g,e=>t[e]||e),te=!te,r()}),!0),$=(document.getElementById("replaceRtlPunc").addEventListener("click",()=>{let t=ne?{"،":",","؛":";","؟":"?"}:{",":"،",";":"؛","?":"؟"};g.value=g.value.replace(/[،؛؟,;?]/g,e=>t[e]||e),ne=!ne,r()}),document.getElementById("replaceColonFullstop").addEventListener("click",()=>{g.value=g.value.replace(/:/g,"."),r()}),document.getElementById("seqMinInput")),T=document.getElementById("seqMaxInput"),w=1,D=10,F=(document.getElementById("generateNumSequence").addEventListener("click",()=>{"none"===$.style.display?($.style.display="inline-block",T.style.display="inline-block",$.value=w):(w=parseInt($.value),D=parseInt(T.value),isNaN(w)&&(w=0),isNaN(D)&&(D=10),w>D&&([w,D]=[D,w],$.value=w,T.value=D));var t="";for(let e=w;e<=D;e++)t+=e+"\n";t=t.trim(),g.value=t}),$.addEventListener("change",()=>{w=parseInt($.value),isNaN(w)&&(w=0)}),T.addEventListener("change",()=>{D=parseInt(T.value),isNaN(D)&&(D=10)}),document.getElementById("RandNoMinInput")),j=document.getElementById("RandNoMaxInput"),A=1,M=10,ae=(document.getElementById("randomNum").addEventListener("click",()=>{"none"===F.style.display?(F.style.display="inline-block",j.style.display="inline-block",F.value=A):(A=parseInt(F.value)||1,M=parseInt(j.value)||10,A>M&&([A,M]=[M,A],F.value=A,j.value=M)),g.value=(Math.floor(Math.random()*(M-A+1))+A).toString(),r()}),F.addEventListener("change",()=>{A=parseInt(F.value)||1}),j.addEventListener("change",()=>{M=parseInt(j.value)||10}),document.getElementById("repeatInput")),le=(document.getElementById("repeatLines").addEventListener("click",()=>{var e;"none"===ae.style.display?ae.style.display="inline-block":(e=parseInt(ae.value)||1,g.value=Array(e).fill(g.value).join("\n"),r())}),document.getElementById("prefixInput")),re=document.getElementById("suffixInput"),de=(document.getElementById("prefixSuffixToLine").addEventListener("click",()=>{if("none"===le.style.display)le.style.display="inline-block",re.style.display="inline-block";else{let t=le.value,n=re.value,e=g.value.split("\n").map(e=>t+e+n);g.value=e.join("\n"),r()}}),document.getElementById("removeFromStart")),ce=document.getElementById("removeFromEnd"),ie=(document.getElementById("rmvNoOfCharsPerLine").addEventListener("click",()=>{if("none"===de.style.display)de.style.display="inline-block",ce.style.display="inline-block";else{let t=parseInt(de.value)||0,n=parseInt(ce.value)||0,e=g.value.split("\n").map(e=>e.length<=t+n?"":e.slice(t,e.length-n));g.value=e.join("\n"),r()}}),document.getElementById("findInput")),oe=document.getElementById("replaceInput");document.getElementById("findAndReplaceText").addEventListener("click",()=>{var e=ie.value,t=oe.value;e&&(e=new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),g.value=g.value.replace(e,t),r())}),document.getElementById("diffCompare").addEventListener("click",()=>{window.open("diffCompare.html","_blank")}),document.getElementById("fullscreen").addEventListener("click",()=>{document.fullscreenElement?(document.exitFullscreen(),g.style.height="300px"):(document.documentElement.requestFullscreen(),g.style.height="100vh")}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(g.style.height="300px")}),document.getElementById("getDateTime").addEventListener("click",function(){var e=(a=new Date).getDate(),t=a.getMonth()+1,n=a.getFullYear(),a=a.toLocaleTimeString();navigator.clipboard.writeText(e+`/${t}/${n} `+a)}),g.addEventListener("input",e=>{var t=e.target.selectionStart,n=e.target.value.substring(0,t);"ss-"===n.split(/\s/).pop()&&(n=n.replace(/ss-$/,"ﷺ")+e.target.value.substring(t),e.target.value=n,e.target.setSelectionRange(t,t))}),document.querySelectorAll(".copy-button").forEach(e=>{e.addEventListener("click",()=>{navigator.clipboard.writeText(e.dataset.text)})}),document.querySelectorAll(".copy-button-lit").forEach(e=>{e.addEventListener("click",()=>{navigator.clipboard.writeText(e.textContent)})});var ue=JSON.parse(localStorage.getItem("editorTabs"));ue&&((c=ue).forEach(e=>{var t;1<e.id&&((t=document.createElement("button")).classList.add("numbered-tab"),t.dataset.tab=e.id,t.textContent=e.id,l.insertBefore(t,a))}),n(parseInt(localStorage.getItem("currentTab"))||1)),setInterval(()=>{c[e-1].content=g.value,localStorage.setItem("editorTabs",JSON.stringify(c)),localStorage.setItem("currentTab",e)},5e3),r()});