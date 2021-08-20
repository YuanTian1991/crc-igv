(this["webpackJsonpcrc-igv"]=this["webpackJsonpcrc-igv"]||[]).push([[0],{102:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(26),r=n.n(i),o=(n(79),n(80),n(23)),s=n(139),l=n(127),d=n(140),u=n(141),m=n(142),b=n(143),j=n(145),f=n(60),g=n(28),h=n(4),p=Object(s.a)((function(e){return{input:{fontSize:"13px"}}})),x=function(e){p();return Object(c.useEffect)((function(){}),[e]),Object(h.jsx)("span",{children:Object(h.jsx)(j.a,{size:"small",color:"primary",onClick:function(){return e.selectGene(e.cellData)},children:e.cellData})})},O=n(68),y=n(144),A=(n(101),n(102),Object(s.a)((function(e){return{}})));function v(e){A();var t=Object(c.useState)({key:"",order:"asc"}),n=Object(o.a)(t,2),a=n[0],i=n[1],r=function(e){i(e)},s=function(t){var n="asc"===t.order?1:-1;return Object(O.a)(e.tableRow).sort((function(e,c){return e[t.key]>c[t.key]?n:-n}))};return Object(h.jsx)("div",{style:{overflowX:"auto",textAlign:"center",marginTop:"0px",paddingTop:"0px"},children:Object(h.jsx)("div",{style:{width:"100%",height:e.height},children:Object(h.jsx)(g.a,{children:function(t){var n=t.width,c=t.height;return Object(h.jsx)(g.c,{width:n,height:c,fixed:!0,rowKey:e.rowKey,columns:e.tableColumn,data:s(a),sortBy:a,onColumnSort:r,emptyRenderer:Object(h.jsx)(y.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"20em",children:Object(h.jsx)(l.a,{variant:"h5",gutterBottom:!0,style:{color:"grey",fontWeight:"900"},children:"No data imported..."})})})}})})})}function w(e){var t=C(),n=Object(c.useState)(null),a=Object(o.a)(n,2),i=a[0],r=a[1];Object(c.useEffect)((function(){Object(f.a)("https://raw.githubusercontent.com/YuanTian1991/crc-igv/master/data/"+e.geneList+".csv",{header:!0,dynamicTyping:!0,skipEmptyLines:!0,delimitersToGuess:[",","\t","|","\t"],complete:function(e){s(e.data)}})}),[e.geneList]);var s=function(e){var t=Object.keys(e[0]).map((function(e,t){var n,c,a=100;return"geneName"===e&&(n=g.b.FrozenDirection.LEFT,c=function(e){var t=e.cellData,n=e.column;return Object(h.jsx)(x,{cellData:t,colName:n,selectGene:d})},a=150),{name:e,title:e,key:e,dataKey:e,width:a,height:30,resizable:!0,align:g.b.Alignment.CENTER,frozen:n,cellRenderer:c,sortable:!0}}));r({tableColumn:t,tableRow:e})},d=function(t){e.selectGene(t)};return Object(h.jsx)("div",{className:t.root,children:null!==i?Object(h.jsx)("div",{style:{border:"1px solid #eeeeee"},children:Object(h.jsx)(v,{tableColumn:i.tableColumn,tableRow:i.tableRow,height:"75vh",rowKey:"geneName"})}):Object(h.jsx)(l.a,{variant:"body2",className:"mb-4",gutterBottom:!0,style:{color:"hsla(0,0%,0%,0.6)"},children:"No data loaded"})})}var C=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}})),z=n(67),S=n.n(z);function T(){return Object(h.jsxs)(l.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(h.jsx)(d.a,{color:"inherit",href:"https://material-ui.com/",children:"Adele Lab"})," ",(new Date).getFullYear(),"."]})}var G=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(2),marginBottom:e.spacing(0)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},igvStyle:{width:"100%",paddingTop:"10px",paddingBottom:"10px",margin:"8px",border:"1px solid lightgray"}}}));function F(){var e=G(),t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)("BRCA1"),s=Object(o.a)(r,2),d=s[0],f=s[1],g=Object(c.useState)(0),p=Object(o.a)(g,2),x=p[0],O=p[1],y=[{title:"Promoter 5hmC Gene List",file:"Promoter5hmCGene"},{title:"GeneBody 5hmC Gene List",file:"GeneBody5hmCGene"}];Object(c.useEffect)((function(){var e=document.getElementById("igv-div");return S.a.createBrowser(e,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC",url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/283c9d5e-eb5b-4a79-a95a-85d8dfd9d032/NC.bw?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210819T175900Z&X-Amz-Expires=86400&X-Amz-Signature=b4318bd94dd16b4b806c142f811c78e39c3a50f072d1fc7bea8968e27569f314&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22NC.bw%22",type:"wig",color:"rgb(244, 187, 74, 0.4)",autoscaleGroup:1,min:"0"},{name:"TC",url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fceb80fe-e19c-40e1-8ce9-978ba86c0e1b/TC.bw?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210819T180353Z&X-Amz-Expires=86400&X-Amz-Signature=9cf7d59cae1cd69d3ce86923879bea6f918dc8f14fe14d8009729bee0ad151eb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22TC.bw%22",type:"wig",color:"rgb(8, 146, 165, 0.4)",autoscaleGroup:1,min:"0"},{name:"LT",url:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/931602fe-3335-4ab9-b5b5-f38e53a89f6f/LT.bw?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210819T180401Z&X-Amz-Expires=86400&X-Amz-Signature=7ccdffa3608003be3a79687171d7ef88e1791be0c12b84ac80324842aa75bfd5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22LT.bw%22",type:"wig",color:"rgb(48, 71, 94, 0.4)",autoscaleGroup:1,min:"0"}]}).then((function(e){i(e)}))}),[]);Object(c.useEffect)((function(){null!==a&&a.search(d)}),[d]);var A=function(e){O(e)};return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(m.a,{component:"main",className:e.main,maxWidth:"xl",children:Object(h.jsxs)(b.a,{container:!0,spacing:3,children:[Object(h.jsxs)(b.a,{item:!0,xs:6,style:{textAlign:"left"},children:[Object(h.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(h.jsx)(j.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return A(0)},children:"Promoter"}),Object(h.jsx)(j.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return A(1)},children:"GeneBody"}),Object(h.jsx)(l.a,{style:{marginBottom:"10px",marginTop:"10px"},children:y[x].title})]}),Object(h.jsx)(w,{selectGene:function(e){return function(e){console.log(e),f(e)}(e)},geneList:y[x].file})]}),Object(h.jsx)(b.a,{item:!0,xs:6,children:Object(h.jsx)("div",{id:"igv-div",className:e.igvStyle})})]})}),Object(h.jsx)("footer",{className:e.footer,children:Object(h.jsxs)(m.a,{maxWidth:"sm",children:[Object(h.jsx)(l.a,{variant:"body1",children:"CRC Project IGV App"}),Object(h.jsx)(T,{})]})})]})}var X=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(F,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root")),B()},79:function(e,t,n){},80:function(e,t,n){},83:function(e,t){},85:function(e,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.e0d881cb.chunk.js.map