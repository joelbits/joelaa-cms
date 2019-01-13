(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);var A=a(0),s=a.n(A),r=a(142),n=a(161),l=a(148),i=a(4),o=a.n(i),c=a(143),d=a(146),u=a.n(d),m=a(179),p=a.n(m);function f(e){var t=e.data,a=e.css,A=t;return s.a.createElement("div",{id:"education",className:a.appEducation},s.a.createElement("div",{className:a.headerWrapper},s.a.createElement("h2",null,"Education"),s.a.createElement(c.s,{className:a.educationIcon})),A&&A.map(function(e){return s.a.createElement("div",{key:e.startDate,className:a.education},(e.startDate||e.endDate)&&s.a.createElement("div",{className:a.dates},s.a.createElement("span",null,e.startDate),s.a.createElement("span",null,e.endDate)),e.institution&&s.a.createElement("span",{className:a.institution},e.institution),e.area&&s.a.createElement("span",{className:a.area},e.area),e.studyType&&s.a.createElement("span",{className:a.studyType},e.studyType),e.courses&&s.a.createElement("ul",null,e.courses.map(function(e){return s.a.createElement("li",{className:a.course,key:e},e)})))}))}f.propTypes={data:o.a.arrayOf(o.a.object).isRequired};var g=u()(p.a)(f),h=a(180),b=a.n(h);function E(e){var t=e.data,a=e.css,A=t;return s.a.createElement("div",{id:"experience",className:a.appExperience},s.a.createElement("div",{className:a.headerWrapper},s.a.createElement("h2",null,"Experience"),s.a.createElement(c.i,{className:a.experienceIcon})),A&&A.map(function(e){return s.a.createElement("div",{key:e.position,className:a.work},(e.startDate||e.endDate)&&s.a.createElement("div",{className:a.dates},s.a.createElement("span",null,e.startDate),s.a.createElement("span",null,e.endDate)),e.position&&s.a.createElement("span",{className:a.position},e.position),e.company&&e.website&&s.a.createElement("span",{className:a.company},s.a.createElement("a",{href:e.website},e.company)),e.summary&&s.a.createElement("span",{className:a.summary},e.summary))}))}E.propTypes={data:o.a.arrayOf(o.a.object).isRequired};var w=u()(b.a)(E),Q=(a(145),a(181),a(73),a(74),a(75),a(147)),y=a.n(Q),B=a(183),v=a.n(B);var k=u()(v.a)(function(e){var t=e.data,a=e.css,A=t.resumeData.publications,r=t.images,n=function(e,t){var a=!1;return r.forEach(function(A){if(A.description.includes("Project:")&&A.description.includes(e))switch(t){case"fixed":a=A.fixed;break;case"fluid":a=A.fluid;break;case"url":a=A.file.url;break;default:a=A}}),a};return s.a.createElement("div",{id:"portfolio",className:a.appPortfolio},s.a.createElement("div",{className:a.headerWrapper},s.a.createElement("h2",null,"Portfolio "),s.a.createElement(c.e,{className:a.portfolioIcon})),s.a.createElement("div",{className:a.publicationList},A&&A.map(function(e){return s.a.createElement("div",{key:e.name+e.releaseDate,className:a.publication},r&&e.website&&!1!==n(e.name,"fixed")&&s.a.createElement("a",{href:n(e.name,"url"),title:"See Project Screenshot"},s.a.createElement(y.a,{fluid:n(e.name,"fluid"),alt:"Project Thumbnail"})),(e.startDate||e.endDate)&&s.a.createElement("div",{className:a.dates},s.a.createElement("span",null,e.startDate),s.a.createElement("span",null,e.endDate)),e.name&&s.a.createElement("span",{className:a.name},e.name),e.publisher&&s.a.createElement("span",{className:a.publisher},e.publisher),e.releaseDate&&s.a.createElement("span",{className:a.releaseDate},e.releaseDate),e.website&&s.a.createElement("span",{className:a.website},s.a.createElement("a",{href:"//"+e.website},e.website)),e.summary&&s.a.createElement("span",{className:a.summary},e.summary))})))});function I(e){var t;switch(e.name){case"FaHtml5":t=s.a.createElement(c.j,null);break;case"FaCss3":t=s.a.createElement(c.f,null);break;case"FaJsSquare":t=s.a.createElement(c.m,null);break;case"FaReact":t=s.a.createElement(c.q,null);break;case"FaNodeJs":t=s.a.createElement(c.o,null);break;case"FaAndroid":t=s.a.createElement(c.a,null);break;case"FaJava":t=s.a.createElement(c.k,null);break;case"FaPython":t=s.a.createElement(c.p,null);break;case"FaDocker":t=s.a.createElement(c.g,null);break;case"FaLinux":t=s.a.createElement(c.n,null);break;case"FaAws":t=s.a.createElement(c.c,null);break;case"FaJenkins":t=s.a.createElement(c.l,null);break;default:t=s.a.createElement("div",null,"NO LOGO")}return t}I.propTypes={name:o.a.string.isRequired};var U=I,N=a(184),R=a.n(N);var D=u()(R.a)(function(e){var t=e.data,a=e.css,A=t;return s.a.createElement("div",{id:"skills",className:a.appSkills},s.a.createElement("div",{className:a.headerWrapper},s.a.createElement("h2",null,"Skills"),s.a.createElement(c.r,{className:a.skillsIcon})),s.a.createElement("div",{className:a.skillsList},A&&A.map(function(e){var t=e.logos;return 0===t.length?null:e.keywords.map(function(e){return s.a.createElement("div",{key:e,className:a.skill},s.a.createElement(U,{name:t[e]}),s.a.createElement("span",null,e))})})))}),S=a(185),j=a.n(S);a.d(t,"query",function(){return F});t.default=function(e){var t=e.data,a=t.blogposts,A=t.resume;return s.a.createElement(n.a,null,s.a.createElement(l.a,{title:"Home",keywords:["joelaa","developer","joelaa.com"]}),s.a.createElement(w,{data:A.resumeData.work}),s.a.createElement(g,{data:A.resumeData.education}),s.a.createElement(D,{data:A.resumeData.skills}),s.a.createElement(k,{data:A}),s.a.createElement("div",{className:j.a.latestBlogPosts},s.a.createElement("h3",null,"Latest Posts"),a.edges.map(function(e){var t=e.node;return s.a.createElement("div",{key:t.contentful_id,className:j.a.blogPost},s.a.createElement(r.Link,{to:t.slug},s.a.createElement("h4",null,t.title," - ",t.publishDate),s.a.createElement("p",null,t.body.childMarkdownRemark.excerpt)))})))};var F="4148186011"},147:function(e,t,a){"use strict";var A=a(8);t.__esModule=!0,t.default=void 0;var s,r=A(a(7)),n=A(a(51)),l=A(a(150)),i=A(a(151)),o=A(a(0)),c=A(a(4)),d=function(e){var t=(0,i.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},m=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p=[];var f=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),s).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",A=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",i=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<picture>"+A+s+"<img "+l+i+t+n+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=o.default.forwardRef(function(e,t){var a=e.style,A=e.onLoad,s=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return o.default.createElement("img",(0,i.default)({},r,{onLoad:A,onError:s,ref:t,style:(0,i.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});h.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var A=!0,s=!1,r=t.fadeIn,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(A=!1,s=!0),"undefined"==typeof window&&(A=!1),t.critical&&(A=!0,s=!1);var i=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:A,imgLoaded:!1,IOSupported:s,fadeIn:r,hasNoScript:i,seenBefore:l},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&f(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:m(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,A=e.className,s=e.style,r=void 0===s?{}:s,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,f=e.fixed,b=e.backgroundColor,E=e.Tag,w="boolean"==typeof b?"lightgray":b,Q=(0,i.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,u),y=(0,i.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),B={title:t,alt:this.state.isVisible?"":a,style:Q,className:m};if(p){var v=p;return o.default.createElement(E,{className:(A||"")+" gatsby-image-wrapper",style:(0,i.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(v.srcSet)},o.default.createElement(E,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&o.default.createElement(h,(0,i.default)({src:v.base64},B)),v.tracedSVG&&o.default.createElement(h,(0,i.default)({src:v.tracedSVG},B)),w&&o.default.createElement(E,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&o.default.createElement("picture",null,v.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),o.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),o.default.createElement(h,{alt:a,title:t,src:v.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,i.default)({alt:a,title:t},v))}}))}if(f){var k=f,I=(0,i.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},r);return"inherit"===r.display&&delete I.display,o.default.createElement(E,{className:(A||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&o.default.createElement(h,(0,i.default)({src:k.base64},B)),k.tracedSVG&&o.default.createElement(h,(0,i.default)({src:k.tracedSVG},B)),w&&o.default.createElement(E,{title:t,style:{backgroundColor:w,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&o.default.createElement("picture",null,k.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),o.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),o.default.createElement(h,{alt:a,title:t,width:k.width,height:k.height,src:k.src,style:y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,i.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(o.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:E,sizes:w,fixed:E,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var Q=b;t.default=Q},148:function(e,t,a){"use strict";var A=a(149),s=a(0),r=a.n(s),n=a(4),l=a.n(n),i=a(163),o=a.n(i),c=a(142);function d(e){var t=e.description,a=e.lang,s=e.meta,n=e.keywords,l=e.title;return r.a.createElement(c.StaticQuery,{query:u,render:function(e){var A=t||e.site.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:A},{property:"og:title",content:l},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:A}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(s)})},data:A})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var u="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Å",description:"Blog and website.",author:"me@joelaa.com"}}}}},161:function(e,t,a){"use strict";var A=a(162),s=a(0),r=a.n(s),n=a(4),l=a.n(n),i=a(142),o=a(152),c=a(153),d=a(154),u=(a(155),function(e){var t=e.children;e.css;return r.a.createElement(i.StaticQuery,{query:"915611122",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections}),r.a.createElement(c.a,{siteTitle:e.siteInfo.siteMetadata.title}),r.a.createElement("div",{className:"contentWrapper",style:{margin:"0 auto",maxWidth:960,padding:"0.25em"}},t),r.a.createElement(d.a,{data:e.me}))},data:A})});u.propTypes={children:l.a.node.isRequired},t.a=u},162:function(e){e.exports={data:{siteInfo:{siteMetadata:{title:"Joel Å"}},siteSections:{edges:[{node:{name:"Portfolio"}},{node:{name:"Education"}},{node:{name:"Experience"}},{node:{name:"Skills"}},{node:{name:"Blog"}}]},me:{contentful_id:"15jwOBqpxqSAOy2eOO4S0m",name:"Joel Å",title:"Computer Science student, Web and Software Developer",email:"info@joelaa.com",github:"joelbits",shortBio:{shortBio:"Web & Mobile App Developer, Available for consulting, short-term and small scale projects. \n",childMarkdownRemark:{html:"<p>Web &#x26; Mobile App Developer, Available for consulting, short-term and small scale projects. </p>"}},image:{fluid:{srcSetWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50&fm=webp 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50&fm=webp 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50&fm=webp 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50&fm=webp 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50&fm=webp 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50&fm=webp 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50&fm=webp 3000w",tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3e%3cpath d='M0 134v133h401V0H0v134m222-73l-2 1c-2 0-2 0-2 3 0 2 0 2-1 1 0-2-1-2-2 0-2 1-2 1-1 3 3 2 3 5 0 3-1-2-2-2-2-1-1 1-1 1-3-1-3-4-4-3-1 0v3l-3-4-2-5v2l-1 7c0 5 0 5-3 5h-8l-1 1h-3c-2 1-2 1-2-1l-1-2-1-1-3-4c-2-3-3-3-4-2l-2 2-2 2c-3 1-3 3 1 3l4 2-1 1v5l-2 3c-2 3-2 3 0 6l2 4 2 2c1 2 1 2-1 3l-1 1v4l2 1c-1 1 1 1 5-1s5-5 3-5-4-3-3-4l2-1 2-1c1-2 4 0 4 2l-1 2-1 2-1 4v3c-1 1 0 3 3 4 1 1 0 1-2 1-4 0-7 1-6 3h2l5 1c4 1 5 2 4 3l-2 2c0-1-2 0-3 2l-4 2-1 1h4l3-2 1 2-1 1c-2 0-4 2-2 3v9l1-3h14v5c0 8 2 3 2-6s0-9-2-11l-3-5-1-2-1-2c0-1 0-2-2-2-1 0-2-1-2-3l-1-4c-1 0 0-2 3-4l4-2-1 1-1 1v4l2-3c1-2 1-3 2-2 1 2 2 1 2-2 1-3 2-5 2-3 0 1 1 2 4 1 4 0 5 1 7 3l3 2c2-1 2 0 2 3v-3c0-8 0-8 2-7 2 2 2 2 2 0l2-1 1-1v-7l2-1c-1-2 0-2 1-2 2 0 3-3 1-5v-1l-1-1h-2l4-4 1-1 1-3v-3l-3 3-2 2-2 1h-5c-1 2-2 0-2-7l-1-5m7 39c2 9 1 16-3 13-2-1-4 0-3 2l-3 3c-4 4-6 5-8 13 0 4-2 8-3 9-2 4-1 5 2 5l3-3 3-4c1-1 1-2-1-2-3 0-3 0-2-5l2-4v1l1 4c1 2 1 2 3 0l1-1 2-1 3-2 2-1c1-2 7-6 7-4l-4 5-5 5c0 2 3 1 6-3l5-3-1 2c-1 2-1 3 1 2l-1 5c-2 4-3 7-1 6l5-12v-3c1-1 0-2-1-3v-2c2 0 1-4 0-5l-2-2-2-2-3-2-1-4-1-7c-2-2-2-2-1 0' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",base64:"data:image/jpeg;base64,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",aspectRatio:1.5,src:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50",srcSet:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50 3000w",srcWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50&fm=webp",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},179:function(e,t,a){e.exports={appEducation:"education-module--appEducation--cw2yZ",headerWrapper:"education-module--headerWrapper--PNrQJ",educationIcon:"education-module--educationIcon--2o1Zk",area:"education-module--area--2Zh_x",studyType:"education-module--studyType--2fX1n",education:"education-module--education--2nN38",dates:"education-module--dates--BzZvS",institution:"education-module--institution--3GxzO",course:"education-module--course--2Fk1H"}},180:function(e,t,a){e.exports={appExperience:"experience-module--appExperience--2D--b",headerWrapper:"experience-module--headerWrapper--eLAM7",experienceIcon:"experience-module--experienceIcon--1eRjX",work:"experience-module--work--1cOm6",position:"experience-module--position--xDPXU",company:"experience-module--company--km_x3",summary:"experience-module--summary--13-N5",dates:"experience-module--dates--YPV6z"}},181:function(e,t,a){"use strict";a(182)("fixed",function(e){return function(){return e(this,"tt","","")}})},182:function(e,t,a){var A=a(11),s=a(25),r=a(17),n=/"/g,l=function(e,t,a,A){var s=String(r(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(A).replace(n,"&quot;")+'"'),l+">"+s+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),A(A.P+A.F*s(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},183:function(e,t,a){e.exports={appPortfolio:"portfolio-module--appPortfolio--1CMeT",headerWrapper:"portfolio-module--headerWrapper--3ApK-",portfolioIcon:"portfolio-module--portfolioIcon--oWLfu",publicationList:"portfolio-module--publicationList--2HVsu",publication:"portfolio-module--publication--3ImF9",publisher:"portfolio-module--publisher--YOFNH",name:"portfolio-module--name--mZcpH",releaseDate:"portfolio-module--releaseDate--S8fWD",summary:"portfolio-module--summary--3A_1Z"}},184:function(e,t,a){e.exports={appSkills:"skills-module--appSkills--39UmZ",headerWrapper:"skills-module--headerWrapper--tudXl",skillsIcon:"skills-module--skillsIcon--3g9Ge",skill:"skills-module--skill--Qv64A"}},185:function(e,t,a){e.exports={aboutMe:"frontpage-module--aboutMe--3YEtv",meImage:"frontpage-module--meImage--3DGGn",latestBlogPosts:"frontpage-module--latestBlogPosts--12xyO",blogPost:"frontpage-module--blogPost--3OoUN"}}}]);
//# sourceMappingURL=component---src-pages-index-js-4cfa3710aec57fd4c0cd.js.map