(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,A,a){"use strict";a.r(A);var t=a(0),n=a.n(t),l=a(142),s=a(153),r=a(147),o=a(4),c=a.n(o),i=a(144),m=a(146),d=a.n(m),p=a(180),u=a.n(p);function f(e){var A=e.data,a=e.css,t=A;return n.a.createElement("div",{id:"education",className:a.appEducation},n.a.createElement("div",{className:a.headerWrapper},n.a.createElement("h2",null,"Education"),n.a.createElement(i.r,{className:a.educationIcon})),t&&t.map(function(e){return n.a.createElement("div",{key:e.startDate,className:a.education},(e.startDate||e.endDate)&&n.a.createElement("div",{className:a.dates},n.a.createElement("span",null,e.startDate),n.a.createElement("span",null,e.endDate)),e.institution&&n.a.createElement("span",{className:a.institution},e.institution),e.area&&n.a.createElement("span",{className:a.area},e.area),e.studyType&&n.a.createElement("span",{className:a.studyType},e.studyType),e.courses&&n.a.createElement("ul",null,e.courses.map(function(e){return n.a.createElement("li",{className:a.course,key:e},e)})))}))}f.propTypes={data:c.a.arrayOf(c.a.object).isRequired};var E=d()(u.a)(f),g=a(181),w=a.n(g);function Q(e){var A=e.data,a=e.css,t=A;return n.a.createElement("div",{id:"experience",className:a.appExperience},n.a.createElement("div",{className:a.headerWrapper},n.a.createElement("h2",null,"Experience"),n.a.createElement(i.i,{className:a.experienceIcon})),t&&t.map(function(e){return n.a.createElement("div",{key:e.position,className:a.work},(e.startDate||e.endDate)&&n.a.createElement("div",{className:a.dates},n.a.createElement("span",null,e.startDate),n.a.createElement("span",null,e.endDate)),e.position&&n.a.createElement("span",{className:a.position},e.position),e.company&&e.website&&n.a.createElement("span",{className:a.company},n.a.createElement("a",{href:e.website},e.company)),e.summary&&n.a.createElement("span",{className:a.summary},e.summary))}))}Q.propTypes={data:c.a.arrayOf(c.a.object).isRequired};var b=d()(w.a)(Q),B=(a(145),a(182)),k=a.n(B);function h(e){var A=e.data,a=e.css;return n.a.createElement("div",{id:"portfolio",className:a.appPortfolio},n.a.createElement("div",{className:a.headerWrapper},n.a.createElement("h2",null,"Portfolio "),n.a.createElement(i.e,{className:a.portfolioIcon})),n.a.createElement("div",{className:a.publicationList},A&&A.map(function(e){return n.a.createElement("div",{key:e.name+e.releaseDate,className:a.publication},e.image&&e.website&&n.a.createElement("a",{href:e.website,title:"See Project Site"},n.a.createElement("img",{alt:"Project Thumbnail",src:e.image})),(e.startDate||e.endDate)&&n.a.createElement("div",{className:a.dates},n.a.createElement("span",null,e.startDate),n.a.createElement("span",null,e.endDate)),e.publisher&&n.a.createElement("span",{className:a.publisher},e.publisher),e.name&&n.a.createElement("span",{className:a.name},e.name),e.releaseDate&&n.a.createElement("span",{className:a.releaseDate},e.releaseDate),e.website&&n.a.createElement("span",{className:a.website},n.a.createElement("a",{href:e.website},e.website)),e.summary&&n.a.createElement("span",{className:a.summary},e.summary))})))}h.propTypes={data:c.a.arrayOf(c.a.object).isRequired};var U=d()(k.a)(h);function I(e){var A;switch(e.name){case"FaHtml5":A=n.a.createElement(i.j,null);break;case"FaCss3":A=n.a.createElement(i.f,null);break;case"FaJsSquare":A=n.a.createElement(i.m,null);break;case"FaReact":A=n.a.createElement(i.q,null);break;case"FaNodeJs":A=n.a.createElement(i.o,null);break;case"FaAndroid":A=n.a.createElement(i.a,null);break;case"FaJava":A=n.a.createElement(i.k,null);break;case"FaPython":A=n.a.createElement(i.p,null);break;case"FaDocker":A=n.a.createElement(i.g,null);break;case"FaLinux":A=n.a.createElement(i.n,null);break;case"FaAws":A=n.a.createElement(i.c,null);break;case"FaJenkins":A=n.a.createElement(i.l,null);break;default:A=n.a.createElement("div",null,"NO LOGO")}return A}I.propTypes={name:c.a.string.isRequired};var v=I,y=a(183),F=a.n(y);var N=d()(F.a)(function(e){var A=e.data,a=e.css,t=A;return n.a.createElement("div",{id:"skills",className:a.appSkills},n.a.createElement("h2",null,"Skills"),n.a.createElement("div",{className:a.skillsList},t&&t.map(function(e){var A=e.logos;return 0===A.length?null:e.keywords.map(function(e){return n.a.createElement("div",{key:e,className:a.skill},n.a.createElement(v,{name:A[e]}),n.a.createElement("span",null,e))})})))}),D=a(184),j=a.n(D);a.d(A,"query",function(){return C});A.default=function(e){var A=e.data,a=A.blogposts,t=A.resume;return n.a.createElement(s.a,null,n.a.createElement(r.a,{title:"Home",keywords:["joelaa","developer","joelaa.com"]}),n.a.createElement(N,{data:t.resumeData.skills}),n.a.createElement(E,{data:t.resumeData.education}),n.a.createElement(b,{data:t.resumeData.work}),n.a.createElement(U,{data:t.resumeData.publications}),n.a.createElement("div",{className:j.a.latestBlogPosts},n.a.createElement("h3",null,"Latest Posts"),a.edges.map(function(e){var A=e.node;return n.a.createElement("div",{key:A.contentful_id,className:j.a.blogPost},n.a.createElement(l.Link,{to:A.slug},n.a.createElement("h4",null,A.title," - ",A.publishDate),n.a.createElement("p",null,A.body.childMarkdownRemark.excerpt)))})))};var C="3187510815"},147:function(e,A,a){"use strict";var t=a(148),n=a(0),l=a.n(n),s=a(4),r=a.n(s),o=a(155),c=a.n(o),i=a(142);function m(e){var A=e.description,a=e.lang,n=e.meta,s=e.keywords,r=e.title;return l.a.createElement(i.StaticQuery,{query:d,render:function(e){var t=A||e.site.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:r},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:t}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:t})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},A.a=m;var d="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Å",description:"Blog and website.",author:"me@joelaa.com"}}}}},153:function(e,A,a){"use strict";var t=a(154),n=a(0),l=a.n(n),s=a(4),r=a.n(s),o=a(142),c=a(149),i=a(150),m=a(151),d=(a(152),function(e){var A=e.children;e.css;return l.a.createElement(o.StaticQuery,{query:"915611122",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections}),l.a.createElement(i.a,{siteTitle:e.siteInfo.siteMetadata.title}),l.a.createElement("div",{className:"contentWrapper",style:{margin:"0 auto",maxWidth:960,padding:"0.25em"}},A),l.a.createElement(m.a,{data:e.me}))},data:t})});d.propTypes={children:r.a.node.isRequired},A.a=d},154:function(e){e.exports={data:{siteInfo:{siteMetadata:{title:"Joel Å"}},siteSections:{edges:[{node:{name:"Portfolio"}},{node:{name:"Education"}},{node:{name:"Experience"}},{node:{name:"Skills"}},{node:{name:"Blog"}}]},me:{contentful_id:"15jwOBqpxqSAOy2eOO4S0m",name:"Joel Å",title:"Computer Science student, Web and Software Developer",email:"info@joelaa.com",github:"joelbits",shortBio:{shortBio:"Web & Mobile App Developer, Available for consulting, short-term and small scale projects. \n",childMarkdownRemark:{html:"<p>Web &#x26; Mobile App Developer, Available for consulting, short-term and small scale projects. </p>"}},image:{fluid:{srcSetWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50&fm=webp 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50&fm=webp 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50&fm=webp 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50&fm=webp 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50&fm=webp 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50&fm=webp 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50&fm=webp 3000w",tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3e%3cpath d='M0 66v67h94a570 570 0 0 0 97-4c1 0 1-3-1-3-2-1 0-3 2-3l2-1v-3l-7-2c-6-1-4-3 3-3l2-1-1-1c-2 1-3-4-2-6v-3l1-2v-5c-1-1-2-1-5 1-4 2-4 2-2 3l3 2c2 0 0 3-2 4l-4 2-2 3v-4l-2-1 2-2 2-2-2-2-2-2-2-5-2-3 2-3c2-3 3-4 2-5v-6l-1-4c0-4 3-4 7 1 3 5 4 8 3 8l-1 2c-1 2 1 4 3 4l3 2 3 2c2-1 4 0 4 1l1 1h1c2 0 1-2-1-2v-1l1-2c0-2-1-2-3-2h-3v1l-2 1-1-3c0-2 0-2 1-1h1l-1-3h-2l-2-1 2-1h5l5 1c2 0 2 0 0-1l-2-1h2c2 0 3-1 3-2 0-2 1-2 2-2 2 0 2 0 1-1v-2l2 1c1 2 2 1 1-1-2-3-1-4 2 0l2 1c0-2 0-2 2 0 2 1 2 1 2-1h1c1 2 2 0 1-4 0-4 0-4 2-4l2-1c1-1 1 0 1 2 0 4-1 5-2 2-1-1-1 0-1 2l2 2 1 2 1 2 1-1h3c1 2 2 1 3 0l2-1c2 1 2 1 0 3-2 3-3 5-1 3l1 1v1l2 3c0 2 0 2-3 2-2 0-2 0-1 1s1 1-1 2v1c1 0 1 4-1 6l-4 2c-2-1-2 0-2 7v3c0-3-1-4-2-3-2 0-2-1-2-3 0-1 0-2-1-1l-1 1-1-2h-2c-2 0-2 0-1-1 2-1 2-1 0-1-1-1-2 0-3 1-1 2-3 3-3 1v-2c-2 0-4 3-4 4h1c1-1 1-1 1 1s0 2-1 1h-2v-2l-1-3-1 3-1 1-1-5-1-1v-1l-1-1-1 3-2 2v3l2 2v2c-2 1-2 2-1 3l1 3c0 3 0 3 2 3s2 1 2 3l1 2c1-1 1 0 1 1l2 4 3 5 1 2h4l2-2h1c2 3 13 3 14 0l1-2 5-3 1-3-6 3-4 4c-4 2-10 2-9-1v-1l-1 1h-1c0-3 2-7 6-10l3-3 1-2h1c0 2 0 2 3 1 2-1 2-2 2-6 0-6 1-6 1-1l1 5 2 1c2 0 2 1 2 2l2 2c2 0 2 3 1 5v1l1 3v2h160v2c1 1 1-27 1-64V0H0v66m0 1' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",base64:"data:image/jpeg;base64,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",aspectRatio:1.5,src:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50",srcSet:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50 3000w",srcWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50&fm=webp",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},180:function(e,A,a){e.exports={appEducation:"education-module--appEducation--cw2yZ",headerWrapper:"education-module--headerWrapper--PNrQJ",educationIcon:"education-module--educationIcon--2o1Zk",area:"education-module--area--2Zh_x",studyType:"education-module--studyType--2fX1n",education:"education-module--education--2nN38",dates:"education-module--dates--BzZvS",institution:"education-module--institution--3GxzO",course:"education-module--course--2Fk1H"}},181:function(e,A,a){e.exports={appExperience:"experience-module--appExperience--2D--b",headerWrapper:"experience-module--headerWrapper--eLAM7",experienceIcon:"experience-module--experienceIcon--1eRjX",work:"experience-module--work--1cOm6",position:"experience-module--position--xDPXU",company:"experience-module--company--km_x3",summary:"experience-module--summary--13-N5",dates:"experience-module--dates--YPV6z"}},182:function(e,A,a){e.exports={appPortfolio:"portfolio-module--appPortfolio--1CMeT",headerWrapper:"portfolio-module--headerWrapper--3ApK-",portfolioIcon:"portfolio-module--portfolioIcon--oWLfu",publicationList:"portfolio-module--publicationList--2HVsu",publication:"portfolio-module--publication--3ImF9",publisher:"portfolio-module--publisher--YOFNH",name:"portfolio-module--name--mZcpH",releaseDate:"portfolio-module--releaseDate--S8fWD",summary:"portfolio-module--summary--3A_1Z"}},183:function(e,A,a){e.exports={appSkills:"skills-module--appSkills--39UmZ",skill:"skills-module--skill--Qv64A"}},184:function(e,A,a){e.exports={aboutMe:"frontpage-module--aboutMe--3YEtv",meImage:"frontpage-module--meImage--3DGGn",latestBlogPosts:"frontpage-module--latestBlogPosts--12xyO",blogPost:"frontpage-module--blogPost--3OoUN"}}}]);
//# sourceMappingURL=component---src-pages-index-js-46ac40447762d7c88949.js.map