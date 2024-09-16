document.addEventListener("DOMContentLoaded",()=>{function e(){var e=this.value;t.value=e,l.value=e,d.style.fontSize=e+"px"}function c(){var e=d.value,t=e.trim()?e.trim().split(/\s+/).length:0,n=e?e.split("\n").length:0;z.textContent="Char: "+e.length,M.textContent="Wrd: "+t,N.textContent="Ln: "+n,e=new Blob([e]).size,O.textContent=e<1024?"B: "+e:e<1048576?"KB: "+(e/1024).toFixed(2):e<1073741824?"MB: "+(e/1048576).toFixed(2):"GB: "+(e/1073741824).toFixed(2)}function n(t){s[i-1].content=d.value,i=t,d.value=s.find(e=>e.id===t).content,document.querySelectorAll(".numbered-tab").forEach(e=>{e.classList.toggle("active",parseInt(e.dataset.tab)===t)}),c()}function r(){d.style.direction="ltr",d.style.textAlign="left"}let a=document.querySelectorAll(".top-tab"),R=document.querySelectorAll(".tab-content"),d=document.getElementById("textArea"),t=document.getElementById("fontSizeSlider"),l=document.getElementById("fontSize"),z=document.getElementById("charCount"),M=document.getElementById("wordCount"),N=document.getElementById("lineCount"),O=document.getElementById("fileSize"),o=document.getElementById("addTab"),u=document.querySelector(".numbered-tabs"),i=1,s=[{id:1,content:""}],v=(a.forEach(t=>{t.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("active")),t.classList.add("active"),R.forEach(e=>{e.classList.remove("active"),e.id===t.dataset.tab+"Tab"&&e.classList.add("active")})})}),t.addEventListener("input",e),l.addEventListener("change",e),l.addEventListener("click",function(){}),d.addEventListener("input",(t=>{let n;return function(...e){clearTimeout(n),n=setTimeout(()=>{clearTimeout(n),t(...e)},300)}})(c)),o.addEventListener("click",()=>{var e=s.length+1,t=(s.push({id:e,content:""}),document.createElement("button"));t.classList.add("numbered-tab"),t.dataset.tab=e,t.textContent=e,u.insertBefore(t,o),n(e)}),u.addEventListener("click",e=>{e.target.classList.contains("numbered-tab")&&n(parseInt(e.target.dataset.tab))}),document.getElementById("copyToClipboard").addEventListener("click",()=>{navigator.clipboard.writeText(d.value)}),document.getElementById("clearAll").addEventListener("click",()=>{d.value="",s=[{id:1,content:""}],u.innerHTML='<button class="numbered-tab active" data-tab="1">1</button><button id="addTab">+</button>',i=1,c()}),document.getElementById("arabicDigits").addEventListener("click",()=>{d.value=d.value.replace(/[0-9]/g,e=>"٠١٢٣٤٥٦٧٨٩"[e]),c()}),document.getElementById("regularDigits").addEventListener("click",()=>{d.value=d.value.replace(/[٠١٢٣٤٥٦٧٨٩]/g,e=>"٠١٢٣٤٥٦٧٨٩".indexOf(e)),c()}),document.getElementById("removeDiacritics").addEventListener("click",()=>{d.value=d.value.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/g,""),c()}),document.getElementById("saveFile").addEventListener("click",()=>{var e=new Blob([d.value],{type:"text/plain;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="saved_text.txt",t.click()}),document.getElementById("loadFile").addEventListener("click",()=>{var e=document.createElement("input");e.type="file",e.accept="text/plain",e.onchange=e=>{e=e.target.files[0];var t=new FileReader;t.onload=e=>{d.value=e.target.result,c()},t.readAsText(e)},e.click()}),!0),m=(document.getElementById("toggleDirection").addEventListener("click",()=>{v=!v,d.style.direction=v?"rtl":"ltr",d.style.textAlign=v?"right":"left"}),[{name:"Title Case",func:e=>e.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())},{name:"Sentence case",func:e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},{name:"lower case",func:e=>e.toLowerCase()},{name:"UPPER CASE",func:e=>e.toUpperCase()}]),g=0,E=(document.getElementById("changeCase").addEventListener("click",()=>{d.value=m[g].func(d.value),g=(g+1)%m.length,document.getElementById("changeCase").textContent=m[g].name,c()}),document.getElementById("wordWrap").addEventListener("click",()=>{d.value=d.value.replace(/\s+/g," ").trim(),c()}),[{func:e=>e.trim().replace(/\n{3,}/g,"\n\n")},{func:e=>e.trim().replace(/\n{2,}/g,"\n")},{func:e=>e.trim().split("\n").filter(e=>""!==e.trim()).join("\n")},{func:e=>e}]),p=0,y=(document.getElementById("removeNewlines").addEventListener("click",()=>{d.value=E[p].func(d.value),p=(p+1)%E.length,c()}),document.getElementById("removeExtraSpace").addEventListener("click",()=>{d.value=d.value.replace(/^ +| +$/gm,"").replace(/ +/g," ").trim(),c()}),!1),L=(document.getElementById("convertQuotes").addEventListener("click",()=>{d.value=y?d.value.replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"'):d.value.replace(/(\W|^)"(\S)/g,"$1”$2").replace(/(\u201D[^"]*)"([^"]*$|[^\u201D"]*\u201D)/g,"$1“$2").replace(/([^0-9])"/g,"$1“").replace(/(\W|^)'(\S)/g,"$1’$2").replace(/([a-z])'([a-z])/gi,"$1‘$2").replace(/((\u2019[^']*)|[a-z])'([^0-9]|$)/gi,"$1‘$3").replace(/(\u2019)([0-9]{2}[^\u2018]*)(\u2019([^0-9]|$)|$|\u2018[a-z])/gi,"‘$2$3").replace(/(\B|^)\u2019(?=([^\u2018]*\u2018\b)*([^\u2018\u2019]*\W[\u2018\u2019]\b|[^\u2018\u2019]*$))/gi,"$1‘").replace(/'''/g,"‴").replace(/''/g,"″").replace(/'/g,"′"),y=!y,c()}),document.getElementById("keepOnlyNumbers").addEventListener("click",()=>{d.value=d.value.replace(/[^0-9\n]/g,""),c()}),0),B=(document.getElementById("cycleBrackets").addEventListener("click",()=>{var e=[{from:/[()[\]]/g,to:e=>"("===e||"["===e?"⌜":"⌝",next:"⌜⌝ → ⌝⌜"},{from:/[⌜⌝]/g,to:e=>"⌜"===e?"⌝":"⌜",next:"⌝⌜ → ()"},{from:/[⌝⌜]/g,to:e=>"⌝"===e?"(":")",next:"() [] → ⌜⌝"}];d.value=d.value.replace(e[L].from,e[L].to),document.getElementById("cycleBrackets").textContent=e[L].next,L=(L+1)%3,c()}),!1),I=(document.getElementById("dotsToEllipsis").addEventListener("click",()=>{d.value=B?d.value.replace(/…/g,"..."):d.value.replace(/\.{3}/g,"…"),B=!B,c()}),0),h=(document.getElementById("hyphenToEnThenEmDash").addEventListener("click",()=>{var e=[{from:/-/g,to:"–"},{from:/–/g,to:"—"},{from:/—/g,to:"-"}];d.value=d.value.replace(e[I].from,e[I].to),I=(I+1)%3,c()}),!0),f=(document.getElementById("reverseCurlyQuotes").addEventListener("click",()=>{let e=document.getElementById("textArea"),t=h?{"‘":"’","’":"‘","“":"”","”":"“"}:{"’":"‘","‘":"’","”":"“","“":"”"};e.value=e.value.replace(/[’‘”“]/g,e=>t[e]||e),h=!h,c()}),document.getElementById("removeAllNumbers").addEventListener("click",()=>{d.value=d.value.replace(/[0-9]/g,""),c()}),document.getElementById("keepOnlyAr").addEventListener("click",()=>{d.value=d.value.replace(/[^\u0600-\u06ff\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd92-\ufdc7\ufe70-\ufefc\uFDF0-\uFDFD\s]/g,""),c()}),document.getElementById("text2HtmlP").addEventListener("click",()=>{r();let e=d.value.split(/\n{1,}/);e=e.filter(e=>""!==e.trim()),d.value=e.map(e=>`<p>${e.trim()}</p>`).join("\n"),c()}),document.getElementById("whichUnicodeCharacter").addEventListener("click",()=>{r();var t=d.value;let n="";for(let e=0;e<t.length;e++){var a=t.codePointAt(e),l="https://codepoints.net/U+"+a.toString(16).toUpperCase().padStart(4,"0");n+=`U+${a.toString(16).toUpperCase().padStart(4,"0")} : ${t[e]} : ${l}
`,65535<a&&e++}d.value=n,c()}),document.getElementById("rmvHtmlTags").addEventListener("click",()=>{d.value=d.value.replace(/<[^>]*>/g,""),c()}),!1),k=(document.getElementById("decodeEncodeUnicode").addEventListener("click",()=>{if(r(),f){var n=d.value;let t="";for(let e=0;e<n.length;e++){var a=n.charCodeAt(e);t+="\\u"+a.toString(16).padStart(4,"0")}d.value=t,document.getElementById("decodeEncodeUnicode").textContent="Decode \\unicode"}else d.value=d.value.replace(/\\u([0-9a-fA-F]{4})/g,(e,t)=>String.fromCharCode(parseInt(t,16))),document.getElementById("decodeEncodeUnicode").textContent="Encode unicode";f=!f,c()}),!1),b=(document.getElementById("decodeEncodeURL").addEventListener("click",()=>{r(),k?(d.value=encodeURI(d.value),document.getElementById("decodeEncodeURL").textContent="Decode URL"):(d.value=decodeURI(d.value),document.getElementById("decodeEncodeURL").textContent="Encode URL"),k=!k,c()}),document.getElementById("sortWordsByFrequency").addEventListener("click",()=>{let t={};(d.value.toLowerCase().match(/\b[\w']+\b/g)||[]).forEach(e=>{t[e]=(t[e]||0)+1});var e=Object.entries(t).sort((e,t)=>t[1]-e[1]).map(([e,t])=>t+": "+e);d.value=e.join("\n"),c()}),document.getElementById("sortLinesByFrequency").addEventListener("click",()=>{let t={};d.value.split("\n").filter(e=>""!==e.trim()).forEach(e=>{t[e]=(t[e]||0)+1});var e=Object.entries(t).sort((e,t)=>t[1]-e[1]).map(([e,t])=>t+": "+e);d.value=e.join("\n"),c()}),!1),x=(document.getElementById("toggleLineNumbers").addEventListener("click",()=>{var e=d.value.split("\n");b=b?(d.value=e.map(e=>e.replace(/^\d+\.\s/,"")).join("\n"),!(document.getElementById("toggleLineNumbers").textContent="Add Line Numbers")):(d.value=e.map((e,t)=>t+1+". "+e).join("\n"),document.getElementById("toggleLineNumbers").textContent="Rmv Line Numbers",!0),c()}),"asc"),C=(document.getElementById("toggleSortLines").addEventListener("click",()=>{var e=d.value.split("\n");x="asc"===x?(d.value=e.sort().join("\n"),document.getElementById("toggleSortLines").textContent="Sort Lines ⬇️","desc"):"desc"===x?(d.value=e.sort().reverse().join("\n"),document.getElementById("toggleSortLines").textContent="Reset Sorting","reset"):(document.getElementById("toggleSortLines").textContent="Sort Lines ⬆️","asc"),c()}),document.getElementById("randomizeLines").addEventListener("click",()=>{var t=d.value.split("\n");for(let e=t.length-1;0<e;e--){var n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}d.value=t.join("\n"),c()}),"horizontal"),S=(document.getElementById("reverseText").addEventListener("click",()=>{C="horizontal"===C?(d.value=d.value.split("").reverse().join(""),document.getElementById("reverseText").textContent="Revrs verti lines ↕️","vertical"):(d.value=d.value.split("\n").reverse().join("\n"),document.getElementById("reverseText").textContent="Revrs hori txt ⏪","horizontal"),c()}),document.getElementById("generatePassword").addEventListener("click",()=>{var t=Math.floor(10*Math.random())+8;let n="";for(let e=0;e<t;e++)n+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+".charAt(Math.floor(74*Math.random()));d.value+=(d.value?"\n":"")+n,c()}),"none"),q=(document.getElementById("toggleListTags").addEventListener("click",()=>{var e=d.value.split("\n");S="none"===S?(d.value="<ol>\n"+e.map(e=>`  <li>${e}</li>`).join("\n")+"\n</ol>",document.getElementById("toggleListTags").textContent="HTML U List","ordered"):"ordered"===S?(d.value="<ul>\n"+e.map(e=>e.replace(/<li>(.*)<\/li>/,"  <li>$1</li>")).join("\n")+"\n</ul>",document.getElementById("toggleListTags").textContent="Remove Tags","unordered"):(d.value=e.map(e=>e.replace(/<li>(.*)<\/li>/,"$1")).join("\n").replace(/<\/?[ou]l>\n?/g,""),document.getElementById("toggleListTags").textContent="HTML O List","none"),c()}),document.getElementById("removePrecedingZeros").addEventListener("click",()=>{d.value=d.value.replace(/\b0+(\d+)/g,"$1"),c()}),{"ޘ":"ސ","ޙ":"ހ","ޛ":"ޒ","ޜ":"ޒ","ޞ":"ސ","ޠ":"ތ","ޡ":"ޒ","ޢ":"އ","ޤ":"ގ","ޥ":"ވ"}),P=[["އަ","a"],["އާ","aa"],["އި","i"],["އީ","ee"],["އު","u"],["އޫ","oo"],["އެ","e"],["އޭ","ey"],["އޮ","o"],["އޯ","oa"],["ުއް","uh"],["ިއް","ih"],["ެއް","eh"],["ަށް","ah"],["ައް","ah"],["ށް","h"],["ތް","i"],["ާއް","aah"],["އް","h"],["ަ","a"],["ާ","aa"],["ި","i"],["ީ","ee"],["ު","u"],["ޫ","oo"],["ެ","e"],["ޭ","ey"],["ޮ","o"],["ޯ","oa"],["ް",""],["ހ","h"],["ށ","sh"],["ނ","n"],["ރ","r"],["ބ","b"],["ޅ","lh"],["ކ","k"],["އ","a"],["ވ","v"],["މ","m"],["ފ","f"],["ދ","dh"],["ތ","th"],["ލ","l"],["ގ","g"],["ޏ","y"],["ސ","s"],["ޑ","d"],["ޒ","z"],["ޓ","t"],["ޔ","y"],["ޕ","p"],["ޖ","j"],["ޗ","ch"],["ޙ","h"],["ޚ","kh"],["ޛ‎","z"],["ޜ‎","z"],["ޝ‎","sh"],["ޝ","sh"],["ޤ","q"],["ޢ","a"],["ޞ","s"],["ޟ","dh"],["ޡ","z"],["ޠ","t"],["ާާޣ","gh"],["ޘ","th"],["ޛ","dh"],["ާާޜ","z"]],T=(document.getElementById("transliterateDvToEn").addEventListener("click",()=>{d.value=(e=>{e=e.replace(/[\u200B-\u200D\uFEFF]/g,"");for(var[t,n]of P)e=e.replace(new RegExp(t,"g"),n);return e.replace(/(^\s*\w|[.!?]\s*\w)/g,e=>e.toUpperCase())})(d.value),r(),c()}),[["ـ",""],["آ","އާ"],["ب","ބ"],["ت","ތ"],["ث","ޘ"],["ج","ޖ"],["ح","ޙ"],["خ","ޚ"],["د","ދ"],["ذ","ޛ"],["ر","ރ"],["ز","ޒ"],["س","ސ"],["ش","ޝ"],["ص","ޞ"],["ض","ޟ"],["ط","ޠ"],["ظ","ޡ"],["ع","ޢ"],["غ","ޣ"],["ف","ފ"],["ق","ޤ"],["ك","ކ"],["ل","ލ"],["م","މ"],["ن","ނ"],["ه","ހ"],["و","ވ"],["ي","ޔ"],["ة","ތ"],["ء","އ"],["أ","އ"],["ؤ","އ"],["إ","އ"],["ئ","އ"],["ى","އ"],["َ","ަ"],["ِ","ި"],["ُ","ު"],["ْ","ް"],["ً","ަން"],["ٍ","ިން"],["ٌ","ުން"],["ަا","ާ"],["اލ","ލ"],["ލއްލަހ","ﷲ"],["ލލހ","ﷲ"],["ލއް","އް"],["ާ އްލަ","ަ އްލަ"],["ا",""],["ުވ","ޫ"],["އ އް"," އް"],["ޫ ލ","ު ލ"],["އްލަލ","އްލަ"],["«",'"'],["»",'"']]),$=(document.getElementById("transliterateArToDv").addEventListener("click",()=>{d.value=(e=>{e=(e=(e=e.replace(/(.)ّ/g,(e,t)=>"އް"+(T.find(([e])=>e===t)?.[1]||t))).replace(/ة([َِ ُ ً ٍ ٌ])/g,"ތ$1")).replace(/ة(?![َِ ُ ً ٍ ٌ])/g,"ހ");for(var[t,n]of T)e=e.replace(new RegExp(t,"g"),n);return e})(d.value),c()}),document.getElementById("removeThikijehiThaana").addEventListener("click",()=>{d.value=d.value.replace(/[ޘޙޛޜޞޠޡޢޤޥ]/g,e=>q[e]||e),c()}),document.getElementById("removeDhivehiFili").addEventListener("click",()=>{d.value=d.value.replace(/[\u07A6-\u07B0]/g,""),c()}),document.getElementById("removePunctuation").addEventListener("click",()=>{d.value=d.value.replace(/[^\w\s]/g,""),c()}),0),Q=(convertFootnotesBtn.addEventListener("click",()=>{switch($%3){case 0:d.value=d.value.replace(/\((\d+)\)|\[(\d+)\]/g,(e,t,n)=>`⁽${(t||n).split("").map(e=>"⁰¹²³⁴⁵⁶⁷⁸⁹"[e]).join("")}⁾`);break;case 1:d.value=d.value.replace(/⁽([⁰¹²³⁴⁵⁶⁷⁸⁹]+)⁾/g,(e,t)=>`(${t.split("").map(e=>"⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(e)).join("")})`);break;case 2:d.value=d.value.replace(/\((\d+)\)/g,(e,t)=>`[${t}]`)}$++,convertFootnotesBtn.textContent=["(1)/[1] → ⁽¹⁾","⁽¹⁾ → (1)","(1) → [1]"][$%3],c()}),0),W=(document.getElementById("bracketNumbers").addEventListener("click",()=>{d.value=0==Q%2?d.value.replace(/\((\d+)\)|\[(\d+)\]/g,"$1$2"):d.value.replace(/(\d+)(?!\))/g,"($1)"),Q++,c()}),document.getElementById("removeNumbersInBrackets").addEventListener("click",()=>{d.value=d.value.replace(/\(\d+\)|\[\d+\]|⁽[⁰¹²³⁴⁵⁶⁷⁸⁹]+⁾/g,""),c()}),document.getElementById("removeDuplicateLines").addEventListener("click",()=>{var e=d.value.split("\n"),e=[...new Set(e)];d.value=e.join("\n"),c()}),document.getElementById("splitIntoWords").addEventListener("click",()=>{var e=d.value.match(/\S+/g)||[];d.value=e.join("\n"),c()}),0),w=(document.getElementById("convertSalawat").addEventListener("click",()=>{W++,d.value=1==W%2?d.value.replace(/صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ|صلى الله عليه وسلم/g,"ﷺ"):d.value.replace(/ﷺ/g,"صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ"),c()}),["0123456789".split(""),"𝟢 𝟣 𝟤 𝟥 𝟦 𝟧 𝟨 𝟩 𝟪 𝟫".split(" "),"０１２３４５６７８９".split(""),"𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵".split(" "),"⓪①②③④⑤⑥⑦⑧⑨".split(""),"⓿❶❷❸❹❺❻❼❽❾".split("")]),D=0,A=(document.getElementById("convertNumbers").addEventListener("click",()=>{var t=w[D],n=w[(D+1)%w.length];let a=d.value;for(let e=0;e<10;e++)a=a.replace(new RegExp(t[e],"g"),n[e]);d.value=a,D=(D+1)%w.length,c()}),!1),H={a:"4",e:"3",i:"!",o:"0",t:"7",l:"1",s:"5"},J=Object.fromEntries(Object.entries(H).map(([e,t])=>[t,e])),j=(document.getElementById("toggleLeetSpeak").addEventListener("click",()=>{d.value=A?d.value.replace(/[43!0715]/g,e=>J[e]):d.value.toLowerCase().replace(/[aeiotls]/g,e=>H[e]),A=!A,c(),r()}),document.getElementById("removeKashidas").addEventListener("click",()=>{d.value=d.value.replace(/ـ/g,""),c()}),document.getElementById("shaddaB4Haraka").addEventListener("click",()=>{d.value=d.value.replace(RegExp("([ًٌٍَُِّْ])(ّ)","g"),(e,t,n)=>"ْ"===t?e:n+t)}),document.getElementById("removeQuranicMarks").addEventListener("click",()=>{d.value=d.value.replace(/[ۖۗۘۙۚۛۜ۝۞ۣ۟۠ۡۢۤۥۦۧۨ۩۪ۭ۫۬﴾﴿]/g,"").replace(/\s+/g," ").trim(),c()}),0),F=(document.getElementById("replaceQuoteToDoubleAngleBrackets").addEventListener("click",()=>{switch(j){case 0:d.value=d.value.replace(/"([^"]*)"/g,"«$1»").replace(/\(\(([^)]*)\)\)/g,"«$1»"),document.getElementById("replaceQuoteToDoubleAngleBrackets").textContent="« » → (( ))",j=1;break;case 1:d.value=d.value.replace(/«([^»]*)»/g,"(($1))"),document.getElementById("replaceQuoteToDoubleAngleBrackets").textContent='(( )) → " "',j=2;break;case 2:d.value=d.value.replace(/\(\(([^)]*)\)\)/g,'"$1"'),document.getElementById("replaceQuoteToDoubleAngleBrackets").textContent='" " / (( )) → « »',j=0}c()}),document.getElementById("replaceDoubleBracketsToSingle").addEventListener("click",()=>{d.value=d.value.replace(/\(\(([^)]*)\)\)/g,"($1)"),c()}),!0),U=(document.getElementById("replaceQuranicBrackets").addEventListener("click",()=>{let t=F?{"{":"﴿","}":"﴾","*":"۝"}:{"﴿":"{","﴾":"}","۝":"*"};d.value=d.value.replace(/[﴾﴿۝{}*]/g,e=>t[e]||e),F=!F,c()}),!0);document.getElementById("replaceRtlPunc").addEventListener("click",()=>{let t=U?{"،":",","؛":";","؟":"?"}:{",":"،",";":"؛","?":"؟"};d.value=d.value.replace(/[،؛؟,;?]/g,e=>t[e]||e),U=!U,c()}),document.getElementById("replaceColonFullstop").addEventListener("click",()=>{d.value=d.value.replace(/:/g,"."),c()}),document.getElementById("fullscreen").addEventListener("click",()=>{document.fullscreenElement?(document.exitFullscreen(),d.style.height="300px"):(document.documentElement.requestFullscreen(),d.style.height="100vh")}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(d.style.height="300px")}),document.getElementById("getDateTime").addEventListener("click",function(){var e=(a=new Date).getDate(),t=a.getMonth()+1,n=a.getFullYear(),a=a.toLocaleTimeString();navigator.clipboard.writeText(e+`/${t}/${n} `+a)}),d.addEventListener("input",e=>{var t=e.target.selectionStart,n=e.target.value.substring(0,t);"ss-"===n.split(/\s/).pop()&&(n=n.replace(/ss-$/,"ﷺ")+e.target.value.substring(t),e.target.value=n,e.target.setSelectionRange(t,t))}),document.querySelectorAll(".copy-button").forEach(e=>{e.addEventListener("click",()=>{navigator.clipboard.writeText(e.dataset.text)})}),document.querySelectorAll(".copy-button-lit").forEach(e=>{e.addEventListener("click",()=>{navigator.clipboard.writeText(e.textContent)})});var K=JSON.parse(localStorage.getItem("editorTabs"));K&&((s=K).forEach(e=>{var t;1<e.id&&((t=document.createElement("button")).classList.add("numbered-tab"),t.dataset.tab=e.id,t.textContent=e.id,u.insertBefore(t,o))}),n(parseInt(localStorage.getItem("currentTab"))||1)),setInterval(()=>{s[i-1].content=d.value,localStorage.setItem("editorTabs",JSON.stringify(s)),localStorage.setItem("currentTab",i)},5e3),c()});