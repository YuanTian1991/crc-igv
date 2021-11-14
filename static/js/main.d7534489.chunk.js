(this["webpackJsonpcrc-igv"]=this["webpackJsonpcrc-igv"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},108:function(e,t){},110:function(e,t){},127:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(12),r=a.n(i),o=(a(104),a(71)),s=a(13),l=(a(105),a(10)),m=a(182),u=a(156),g=a(186),d=a(187),b=a(188),h=a(189),p=a(184),j=a(83),x=a(50),O=a(3),y=Object(m.a)((function(e){return{input:{fontSize:"13px"}}})),v=function(e){y();return Object(c.useEffect)((function(){}),[e]),Object(O.jsx)("span",{children:Object(O.jsx)(p.a,{size:"small",color:"primary",onClick:function(){return e.selectGene(e.rowData)},children:e.cellData})})},f=a(91),C=a(192),w=(a(126),a(127),Object(m.a)((function(e){return{}})));function B(e){w();var t=Object(c.useState)({key:"",order:"asc"}),a=Object(l.a)(t,2),n=a[0],i=a[1],r=function(e){i(e)},o=function(t){var a="asc"===t.order?1:-1;return Object(f.a)(e.tableRow).sort((function(e,c){return e[t.key]>c[t.key]?a:-a}))};return Object(O.jsx)("div",{style:{overflowX:"auto",textAlign:"center",marginTop:"0px",paddingTop:"0px"},children:Object(O.jsx)("div",{style:{width:"100%",height:e.height},children:Object(O.jsx)(x.a,{children:function(t){var a=t.width,c=t.height;return Object(O.jsx)(x.c,{width:a,height:c,fixed:!0,rowKey:e.rowKey,columns:e.tableColumn,data:o(n),sortBy:n,onColumnSort:r,emptyRenderer:Object(O.jsx)(C.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"20em",children:Object(O.jsx)(u.a,{variant:"h5",gutterBottom:!0,style:{color:"grey",fontWeight:"900"},children:"No data imported..."})})})}})})})}function T(e){var t=S(),a=Object(c.useState)(null),n=Object(l.a)(a,2),i=n[0],r=n[1];Object(c.useEffect)((function(){Object(j.a)("https://raw.githubusercontent.com/YuanTian1991/crc-igv/master/data/"+e.geneList,{header:!0,dynamicTyping:!0,skipEmptyLines:!0,delimitersToGuess:[",","\t","|","\t"],complete:function(e){o(e.data)}})}),[e.geneList]);var o=function(e){var t=Object.keys(e[0]).map((function(e,t){var a,c,n=100;return"geneSymbol"===e&&(a=x.b.FrozenDirection.LEFT,c=function(e){var t=e.cellData,a=e.column,c=e.rowData;return Object(O.jsx)(v,{cellData:t,colName:a,rowData:c,selectGene:s})},n=150),{name:e,title:e,key:e,dataKey:e,width:n,height:30,resizable:!0,align:x.b.Alignment.CENTER,frozen:a,cellRenderer:c,sortable:!0}}));r({tableColumn:t,tableRow:e})},s=function(t){console.log(t);var a=t.chr+":"+t.start+"-"+t.end;e.selectGene(a)};return Object(O.jsx)("div",{className:t.root,children:null!==i?Object(O.jsx)("div",{style:{border:"1px solid #eeeeee"},children:Object(O.jsx)(B,{tableColumn:i.tableColumn,tableRow:i.tableRow,height:"75vh",rowKey:"geneName"})}):Object(O.jsx)(u.a,{variant:"body2",className:"mb-4",gutterBottom:!0,style:{color:"hsla(0,0%,0%,0.6)"},children:"No data loaded"})})}var S=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}})),N=a(18),_=a.n(N);function G(){return Object(O.jsxs)(u.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(O.jsx)(g.a,{color:"inherit",href:"https://material-ui.com/",children:"Adele Lab"})," ",(new Date).getFullYear(),"."]})}var L=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(2),marginBottom:e.spacing(0)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},igvStyle:{width:"100%",paddingTop:"10px",paddingBottom:"10px",margin:"8px",border:"1px solid lightgray"}}}));function k(){var e=L(),t=Object(c.useState)(null),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(null),o=Object(l.a)(r,2),s=o[0],m=o[1],g=Object(c.useState)("BRCA1"),j=Object(l.a)(g,2),x=j[0],y=j[1],v=Object(c.useState)(0),f=Object(l.a)(v,2),C=f[0],w=f[1],B=[{title:"Promoter 5hmC Enrichment",file:"promoterTable.csv"},{title:"GeneBody 5hmC Enrichment",file:"genebodyTable.csv"},{title:"Promoter 5hmC Unique Enrichment",file:"UniquePromoterTable.csv"},{title:"GeneBody 5hmC Unique Enrichment",file:"UniqueGeneBodyTable.csv"}];Object(c.useEffect)((function(){var e=document.getElementById("igv-div");_.a.createBrowser(e,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NC_cliped.bw",type:"wig",color:"rgb(244, 187, 74, 0.4)",autoscaleGroup:1,min:"0"},{name:"TC 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/TC_cliped.bw",type:"wig",color:"rgb(8, 146, 165, 0.4)",autoscaleGroup:1,min:"0"},{name:"LT 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_cliped.bw",type:"wig",color:"rgb(48, 71, 94, 0.4)",autoscaleGroup:1,min:"0"},{name:"NL 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NL_cliped.bw",type:"wig",color:"rgb(232, 72, 85, 0.4)",autoscaleGroup:1,min:"0"}]}).then((function(e){i(e)}));var t=document.getElementById("igv-div_500");_.a.createBrowser(t,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NC_SigPeaks_cliped.bw",type:"wig",color:"rgb(244, 187, 74, 0.4)",autoscaleGroup:1,min:"0"},{name:"TC 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/TC_SigPeaks_cliped.bw",type:"wig",color:"rgb(8, 146, 165, 0.4)",autoscaleGroup:1,min:"0"},{name:"LT 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_SigPeaks_cliped.bw",color:"rgb(48, 71, 94, 0.4)",autoscaleGroup:1,min:"0"},{name:"NL 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NL_SigPeaks_cliped.bw",type:"wig",color:"rgb(232, 72, 85, 0.4)",autoscaleGroup:1,min:"0"}]}).then((function(e){m(e)}))}),[]);Object(c.useEffect)((function(){null!==n&&n.search(x),null!==s&&s.search(x)}),[x]);var S=function(e){w(e)};return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(b.a,{component:"main",className:e.main,maxWidth:"xl",children:Object(O.jsxs)(h.a,{container:!0,spacing:3,children:[Object(O.jsxs)(h.a,{item:!0,xs:6,style:{textAlign:"left"},children:[Object(O.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(0)},children:"Promoter"}),Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(1)},children:"GeneBody"}),Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(2)},children:"Unique Promoter"}),Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(3)},children:"Unique GeneBody"}),Object(O.jsx)(u.a,{style:{marginBottom:"10px",marginTop:"10px"},children:B[C].title})]}),Object(O.jsx)(T,{selectGene:function(e){return function(e){console.log(e),y(e)}(e)},geneList:B[C].file})]}),Object(O.jsxs)(h.a,{item:!0,xs:6,children:[Object(O.jsx)("div",{id:"igv-div",className:e.igvStyle}),Object(O.jsx)("div",{id:"igv-div_500",className:e.igvStyle})]})]})}),Object(O.jsx)("footer",{className:e.footer,children:Object(O.jsxs)(b.a,{maxWidth:"sm",children:[Object(O.jsx)(u.a,{variant:"body1",children:"CRC Project IGV App"}),Object(O.jsx)(G,{})]})})]})}function W(){return Object(O.jsxs)(u.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(O.jsx)(g.a,{color:"inherit",href:"https://material-ui.com/",children:"Adele Lab"})," ",(new Date).getFullYear(),"."]})}var E=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(2),marginBottom:e.spacing(0)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},igvStyle:{width:"100%",paddingTop:"10px",paddingBottom:"10px",margin:"8px",border:"1px solid lightgray"}}}));function M(){var e=E(),t=Object(c.useState)(null),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(null),o=Object(l.a)(r,2),s=o[0],m=o[1],g=Object(c.useState)("BRCA1"),j=Object(l.a)(g,2),x=j[0],y=j[1],v=Object(c.useState)(0),f=Object(l.a)(v,2),C=f[0],w=f[1],B=[{title:"5hmC Significantly Enriched Regions",file:"Region5hmC.csv"},{title:"5mC Significantly Enriched Regions",file:"RegionMeth.csv"}];Object(c.useEffect)((function(){var e=document.getElementById("igv-div");_.a.createBrowser(e,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NC_SigPeaks_cliped.bw",type:"wig",color:"rgb(244, 187, 74, 0.4)",autoscaleGroup:1,min:"0"},{name:"TC 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/TC_SigPeaks_cliped.bw",type:"wig",color:"rgb(8, 146, 165, 0.4)",autoscaleGroup:1,min:"0"},{name:"LT 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_SigPeaks_cliped.bw",type:"wig",color:"rgb(48, 71, 94, 0.4)",autoscaleGroup:1,min:"0"}]}).then((function(e){i(e)}));var t=document.getElementById("igv-div_500");_.a.createBrowser(t,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC 5mC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/MethMergedBW/NC_MethSigPeaks_cliped.bw",type:"wig",color:"rgb(244, 187, 74, 0.8)",autoscaleGroup:1,min:"0"},{name:"TC 5mC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/MethMergedBW/TC_MethSigPeaks_cliped.bw",type:"wig",color:"rgb(8, 146, 165, 0.8)",autoscaleGroup:1,min:"0"},{name:"LT 5mC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/MethMergedBW/LT_MethSigPeaks_cliped.bw",color:"rgb(48, 71, 94, 0.8)",autoscaleGroup:1,min:"0"}]}).then((function(e){m(e)}))}),[]);Object(c.useEffect)((function(){null!==n&&n.search(x),null!==s&&s.search(x)}),[x]);var S=function(e){w(e)};return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(b.a,{component:"main",className:e.main,maxWidth:"xl",children:Object(O.jsxs)(h.a,{container:!0,spacing:3,children:[Object(O.jsxs)(h.a,{item:!0,xs:6,style:{textAlign:"left"},children:[Object(O.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(0)},children:"5hmC"}),Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(1)},children:"5mC"}),Object(O.jsx)(u.a,{style:{marginBottom:"10px",marginTop:"10px"},children:B[C].title})]}),Object(O.jsx)(T,{selectGene:function(e){return function(e){console.log(e),y(e)}(e)},geneList:B[C].file})]}),Object(O.jsxs)(h.a,{item:!0,xs:6,children:[Object(O.jsx)("div",{id:"igv-div",className:e.igvStyle}),Object(O.jsx)("div",{id:"igv-div_500",className:e.igvStyle})]})]})}),Object(O.jsx)("footer",{className:e.footer,children:Object(O.jsxs)(b.a,{maxWidth:"sm",children:[Object(O.jsx)(u.a,{variant:"body1",children:"CRC Project IGV App"}),Object(O.jsx)(W,{})]})})]})}var A=a(190),R=a(193),P=a(191),z=a(194);function D(){return Object(O.jsxs)(u.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(O.jsx)(g.a,{color:"inherit",href:"https://material-ui.com/",children:"Adele Lab"})," ",(new Date).getFullYear(),"."]})}var I=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(2),marginBottom:e.spacing(0)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},igvStyle:{width:"100%",paddingTop:"10px",paddingBottom:"10px",margin:"8px",border:"1px solid lightgray"}}}));function F(e){var t=I(),a=(Object(s.f)(),Object(c.useState)(null)),n=Object(l.a)(a,2),i=n[0],r=n[1],o=Object(c.useState)(null),m=Object(l.a)(o,2),g=m[0],p=m[1],j=Object(c.useState)("BRCA1"),x=Object(l.a)(j,2),y=x[0],v=x[1],f=Object(c.useState)(0),C=Object(l.a)(f,2),w=(C[0],C[1],{NC:"rgb(244, 187, 74, 0.4)",TC:"rgb(8, 146, 165, 0.4)",LT:"rgb(48, 71, 94, 0.4)",NL:"rgb(232, 72, 85, 0.4)"}),B=Object(c.useState)(null),S=Object(l.a)(B,2),N=S[0],G=S[1],L=Object(c.useState)("promoter"),k=Object(l.a)(L,2),W=k[0],E=k[1];Object(c.useEffect)((function(){G(e.match.params.pheno);var t=document.getElementById("igv-div"),a={genome:"hg38",locus:"BRCA1",tracks:[{name:e.match.params.pheno+" 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/"+e.match.params.pheno+"_cliped.bw",type:"wig",color:w[e.match.params.pheno],min:"0"}]};_.a.createBrowser(t,a).then((function(e){r(e)}));var c=document.getElementById("igv-div_500"),n={genome:"hg38",locus:"BRCA1",tracks:[{name:e.match.params.pheno+" 5hmC",url:"https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/"+e.match.params.pheno+"_SigPeaks_cliped.bw",type:"wig",color:w[e.match.params.pheno],min:"0"}]};_.a.createBrowser(c,n).then((function(e){p(e)}))}),[e.match.params.pheno]);Object(c.useEffect)((function(){null!==i&&i.search(y),null!==g&&g.search(y)}),[y]);return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(b.a,{component:"main",className:t.main,maxWidth:"xl",children:Object(O.jsxs)(h.a,{container:!0,spacing:3,children:[Object(O.jsxs)(h.a,{item:!0,xs:6,style:{textAlign:"left"},children:[Object(O.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(O.jsxs)(A.a,{style:{minWidth:200},children:[Object(O.jsx)(R.a,{id:"demo-simple-select-label",children:"Phenotype"}),Object(O.jsxs)(P.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:N,onChange:function(e){window.location.href="https://yuantian1991.github.io/crc-igv/#/CompareBetweenMethods/"+e.target.value,window.location.reload()},children:[Object(O.jsx)(z.a,{value:"NC",children:"Normal Colon (NC)"}),Object(O.jsx)(z.a,{value:"TC",children:"Tumour Colon (TC)"}),Object(O.jsx)(z.a,{value:"LT",children:"Liver Tumour (LT)"}),Object(O.jsx)(z.a,{value:"NL",children:"Normal Liver (NL)"})]})]}),Object(O.jsxs)(A.a,{style:{minWidth:200,marginLeft:"20px"},children:[Object(O.jsx)(R.a,{id:"demo-simple-select-label",children:"Phenotype"}),Object(O.jsxs)(P.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:W,onChange:function(e){E(e.target.value)},children:[Object(O.jsx)(z.a,{value:"promoter",children:"promoter"}),Object(O.jsx)(z.a,{value:"genebody",children:"genebody"})]})]}),Object(O.jsx)(u.a,{style:{marginBottom:"10px",marginTop:"10px"},children:N+" "+W+" 5hmC enrichment"})]}),Object(O.jsx)(T,{selectGene:function(e){return function(e){console.log(e),v(e)}(e)},geneList:N+"_"+W+"_CompareTable.csv"})]}),Object(O.jsxs)(h.a,{item:!0,xs:6,children:[Object(O.jsx)("div",{id:"igv-div",className:t.igvStyle}),Object(O.jsx)("div",{id:"igv-div_500",className:t.igvStyle})]})]})}),Object(O.jsx)("footer",{className:t.footer,children:Object(O.jsxs)(b.a,{maxWidth:"sm",children:[Object(O.jsx)(u.a,{variant:"body1",children:"CRC Project IGV App"}),Object(O.jsx)(D,{})]})})]})}function q(){return Object(O.jsxs)(u.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(O.jsx)(g.a,{color:"inherit",href:"https://material-ui.com/",children:"Adele Lab"})," ",(new Date).getFullYear(),"."]})}var H=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(2),marginBottom:e.spacing(0)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},igvStyle:{width:"100%",paddingTop:"10px",paddingBottom:"10px",margin:"8px",border:"1px solid lightgray"}}}));function U(){var e=H(),t=Object(c.useState)(null),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(null),o=Object(l.a)(r,2),s=o[0],m=o[1],g=Object(c.useState)("BRCA1"),j=Object(l.a)(g,2),x=j[0],y=j[1],v=Object(c.useState)(0),f=Object(l.a)(v,2),C=f[0],w=f[1],B=[{title:"Promoter 5hmC Gene List",file:"Promoter5hmCGene.csv"},{title:"GeneBody 5hmC Gene List",file:"GeneBody5hmCGene.csv"}];Object(c.useEffect)((function(){var e=document.getElementById("igv-div");_.a.createBrowser(e,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/NC_smallbin.bw",type:"wig",color:"rgb(244, 187, 74, 0.4)",autoscaleGroup:1,min:"0"},{name:"TC",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/TC_smallbin.bw",type:"wig",color:"rgb(8, 146, 165, 0.4)",autoscaleGroup:1,min:"0"},{name:"LT",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/LT_smallbin.bw",type:"wig",color:"rgb(48, 71, 94, 0.4)",autoscaleGroup:1,min:"0"}]}).then((function(e){i(e)}));var t=document.getElementById("igv-div_500");_.a.createBrowser(t,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/NC_Sig.bw",type:"wig",color:"rgb(244, 187, 74, 0.4)",autoscaleGroup:1,min:"0"},{name:"TC",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/TC_Sig.bw",type:"wig",color:"rgb(8, 146, 165, 0.4)",autoscaleGroup:1,min:"0"},{name:"LT",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/LT_Sig.bw",color:"rgb(48, 71, 94, 0.4)",autoscaleGroup:1,min:"0"}]}).then((function(e){m(e)}))}),[]);Object(c.useEffect)((function(){null!==n&&n.search(x),null!==s&&s.search(x)}),[x]);var S=function(e){w(e)};return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(b.a,{component:"main",className:e.main,maxWidth:"xl",children:Object(O.jsxs)(h.a,{container:!0,spacing:3,children:[Object(O.jsxs)(h.a,{item:!0,xs:6,style:{textAlign:"left"},children:[Object(O.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(0)},children:"Promoter"}),Object(O.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:"5px"},onClick:function(){return S(1)},children:"GeneBody"}),Object(O.jsx)(u.a,{style:{marginBottom:"10px",marginTop:"10px"},children:B[C].title})]}),Object(O.jsx)(T,{selectGene:function(e){return function(e){console.log(e),y(e)}(e)},geneList:B[C].file})]}),Object(O.jsxs)(h.a,{item:!0,xs:6,children:[Object(O.jsx)("div",{id:"igv-div",className:e.igvStyle}),Object(O.jsx)("div",{id:"igv-div_500",className:e.igvStyle})]})]})}),Object(O.jsx)("footer",{className:e.footer,children:Object(O.jsxs)(b.a,{maxWidth:"sm",children:[Object(O.jsx)(u.a,{variant:"body1",children:"CRC Project IGV App"}),Object(O.jsx)(q,{})]})})]})}function Y(){return Object(O.jsxs)(u.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(O.jsx)(g.a,{color:"inherit",href:"https://material-ui.com/",children:"Adele Lab"})," ",(new Date).getFullYear(),"."]})}var V=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(2),marginBottom:e.spacing(0)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},igvStyle:{width:"100%",paddingTop:"10px",paddingBottom:"10px",margin:"8px",border:"1px solid lightgray"}}}));function K(){var e=V(),t=Object(c.useState)(null),a=Object(l.a)(t,2),n=(a[0],a[1]);return Object(c.useEffect)((function(){var e=document.getElementById("igv-div");_.a.createBrowser(e,{genome:"hg38",locus:"BRCA1",tracks:[{name:"NC_5hmC",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/NC_smallbin.bw",type:"wig",color:"rgb(244, 187, 74, 0.4)",autoscaleGroup:1,min:"0"},{name:"TC_5hmC",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/TC_smallbin.bw",type:"wig",color:"rgb(8, 146, 165, 0.4)",autoscaleGroup:1,min:"0"},{name:"LT_5hmC",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/LT_smallbin.bw",type:"wig",color:"rgb(48, 71, 94, 0.4)",autoscaleGroup:1,min:"0"},{name:"NC_Meth",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/NC_MBDseq.bw",type:"wig",color:"rgb(244, 187, 74)",autoscaleGroup:2,min:"0"},{name:"TC_Meth",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/TC_MBDseq.bw",type:"wig",color:"rgb(8, 146, 165)",autoscaleGroup:2,min:"0"},{name:"LT_Meth",url:"https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/LT_MBDseq.bw",type:"wig",color:"rgb(48, 71, 94)",autoscaleGroup:2,min:"0"}]}).then((function(e){n(e)}))}),[]),Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(b.a,{component:"main",className:e.main,maxWidth:"xl",children:Object(O.jsx)(h.a,{container:!0,spacing:3,children:Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsx)("div",{id:"igv-div",className:e.igvStyle})})})}),Object(O.jsx)("footer",{className:e.footer,children:Object(O.jsxs)(b.a,{maxWidth:"sm",children:[Object(O.jsx)(u.a,{variant:"body1",children:"CRC Project IGV App"}),Object(O.jsx)(Y,{})]})})]})}var J=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(s.a,{exact:!0,path:"/OldResult",component:U}),Object(O.jsx)(s.a,{exact:!0,path:"/RegionEnrich",component:M}),Object(O.jsx)(s.a,{exact:!0,path:"/CompareBetweenMethods/:pheno",component:F}),Object(O.jsx)(s.a,{exact:!0,path:"/methylation",component:K})]})})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),X()}},[[154,1,2]]]);
//# sourceMappingURL=main.d7534489.chunk.js.map