(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2+y2":function(e,t,a){e.exports={appHeader:"blogHeader-module--appHeader--292tn",hero:"blogHeader-module--hero--2tbs4",appTitles:"blogHeader-module--appTitles--1cEwM",subTitle:"blogHeader-module--subTitle--1sMNh",mainTitle:"blogHeader-module--mainTitle--3jd9Z",btnContactMe:"blogHeader-module--btnContactMe--1PjB8",downArrow:"blogHeader-module--downArrow--19YlL"}},O5US:function(e,t,a){e.exports={blogPost:"blog-module--blogPost--ltlO3",postWrapper:"blog-module--postWrapper--33gzu",blogPostContent:"blog-module--blogPostContent--3bCPH",blogPage:"blog-module--blogPage--2u8jD",appLogo:"blog-module--appLogo--RT68d"}},SgeB:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),o=a("Wbzz"),r=a("jYam"),s=a("LbRr"),d=a("W/9C"),i=(a("8ypT"),a("TSuk")),u=a.n(i),c=a("2+y2"),m=a.n(c);t.a=function(e){var t=e.children;return n.a.createElement(o.StaticQuery,{query:"1898223505",render:function(e){return n.a.createElement("div",{className:u.a.blogPage},n.a.createElement(r.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections,css:u.a}),n.a.createElement(s.a,{data:e.me,siteTitle:e.siteInfo.siteMetadata.title,css:m.a}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0",paddingTop:0}},t),n.a.createElement(d.a,{data:e.me}))}})}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var l=a("q1tI"),n=a.n(l),o=a("Wbzz"),r=a("9eSz"),s=a.n(r),d=a("SgeB"),i=a("vrFN"),u=a("O5US"),c=a.n(u);t.default=function(e){var t=e.data.blogposts;return n.a.createElement(d.a,null,n.a.createElement(i.a,{title:"Blog"}),n.a.createElement("h1",null,"Recent Blog Posts"),n.a.createElement("div",null,t.edges&&t.edges.map((function(e){var t=e.node;return n.a.createElement("div",{className:c.a.blogPost,key:t.contentful_id},n.a.createElement(o.Link,{to:t.slug},n.a.createElement(s.a,{fluid:t.heroImage.fluid,srcSetWebp:t.heroImage.fluid.srcSetWebp})),n.a.createElement("div",{className:c.a.postWrapper},n.a.createElement(o.Link,{to:t.slug},n.a.createElement("h1",null,t.title)),n.a.createElement("h4",null,"By: ",t.author.name),n.a.createElement("h4",null,"Published: ",t.publishDate),n.a.createElement("div",{className:c.a.blogPostContent,dangerouslySetInnerHTML:{__html:t.body.childMarkdownRemark.excerpt}})))}))))};var m="721238733"}}]);
//# sourceMappingURL=component---src-pages-blog-js-ff799d3d3c0d82e604ad.js.map