(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6132:function(e,t,n){Promise.resolve().then(n.bind(n,8919)),Promise.resolve().then(n.bind(n,8178)),Promise.resolve().then(n.bind(n,8302)),Promise.resolve().then(n.bind(n,9380)),Promise.resolve().then(n.bind(n,9201)),Promise.resolve().then(n.t.bind(n,220,23)),Promise.resolve().then(n.t.bind(n,7402,23))},8178:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var i=n(9268);n(6006);var a=n(8121),r=n(4312),o=n(5846),s=n.n(o),l=n(9791),c=n(9201);function A(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:n}=(0,c.useActiveSectionContext)();return(0,i.jsxs)("header",{className:"z-[999] relative",children:[(0,i.jsx)(a.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,i.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,i.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:r.Ok.map(r=>(0,i.jsx)(a.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,i.jsxs)(s(),{className:(0,l.Z)("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300",{"text-gray-950 dark:text-white":e===r.name}),href:r.hash,onClick:()=>{t(r.name),n(Date.now())},children:[r.name,r.name===e&&(0,i.jsx)(a.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},r.hash))})})]})}},8302:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var i=n(9268),a=n(9380);n(6006);var r=n(8136);function o(){let{theme:e,toggleTheme:t}=(0,a.useTheme)();return(0,i.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,i.jsx)(r.eSY,{}):(0,i.jsx)(r.s1t,{})})}},9201:function(e,t,n){"use strict";n.r(t),n.d(t,{ActiveSectionContext:function(){return r},default:function(){return o},useActiveSectionContext:function(){return s}});var i=n(9268),a=n(6006);let r=(0,a.createContext)(null);function o(e){let{children:t}=e,[n,o]=(0,a.useState)("Home"),[s,l]=(0,a.useState)(0);return(0,i.jsx)(r.Provider,{value:{activeSection:n,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,a.useContext)(r);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useTheme:function(){return s}});var i=n(9268),a=n(6006);let r=(0,a.createContext)(null);function o(e){let{children:t}=e,[n,o]=(0,a.useState)("light");return(0,a.useEffect)(()=>{let e=window.localStorage.getItem("theme");e&&(o(e),"dark"===e&&document.documentElement.classList.add("dark"))},[]),(0,i.jsx)(r.Provider,{value:{theme:n,toggleTheme:()=>{"light"===n?(o("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(o("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,a.useContext)(r);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},4312:function(e,t,n){"use strict";n.d(t,{$c:function(){return o},Ok:function(){return r},nD:function(){return s},ZU:function(){return l}});var i=n(6006),a=n(198);let r=[{name:"Home",hash:"#home"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Education",hash:"#education"},{name:"Contact",hash:"#contact"}],o=[{title:"Senior Full Stack Developer",location:"Columbia Sportswear",description:"Led frontend development using React, Angular and Next.js, as a result delivered high-performing, feature-rich web applications.",icon:i.createElement(a.zQU),date:"Jan 2022 - Jun 2024"},{title:"Senior Full Stack Developer",location:"Albertsons",description:"Developed scalable backend systems to support high-traffic websites and applications, ensuring smooth operation during peak times.",icon:i.createElement(a.zQU),date:"Jan 2018 - Jan 2022"},{title:"Full Stack Developer",location:"Uber",description:"Utilized HTML, CSS, and Javascript to create visually appealing and responsive web pages that meet client requirements.",icon:i.createElement(a.zQU),date:"Mar 2016 - Jan 2018"}],s=[{title:"Aignostics",description:"Cutting-edge platform designed to revolutionize target identification, translational research, and clinical trials in the biopharmaceutical industry. Collaborated with data scientists to integrate AI algorithms for target identification into the platform, ensured seamless execution and optimization for performance.",tags:["Python","Machine Learning","Data Analysis","Deep learning","AWS"],icons:["logos:aws","logos:ai"],imageUrl:{src:"/next/static/media/aignostics.f4ca525e.png",height:1607,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEX39vfz8PJAL1xIOWT8/Pw2J1NRQ2pUOmZlVHrq5Oto5U+QAAAAAnRSTlP8/pSfvJIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicHcjBDQAgDMNAk6Sl7L8wAr9OpiVbEpZmHqTau6qYdrfdwHpBknOS8BdwARisALRIScCUAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},urlLink:"https://www.aignostics.com/"},{title:"Caracare",description:"Developed company website using React, Gatsby and GraphQL. Designed a optimized and well structured database using MongoDB. Implemented data analystics logic and drafted administrator dashboard.",tags:["REACT","GATSBY","Netlify","NODE","MySQL","graphql"],icons:["logos:react","logos:gatsby","logos:netlify","logos:mysql"],imageUrl:{src:"/next/static/media/caracare.b59f8a41.png",height:1639,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAS1BMVEXh5/f69/L7+/rV5+U4bt7//v7c6unN2fE/c96jve7D3dz28u/HzOOvw/K7zvGSsOz3+fz67tno7vqev9t0raF0qZ7KxciUrsOUnLvynDyCAAAACnRSTlP+/////v///f78OMbPTAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwFwYcBwCAMAzAHcAKE2f3/pZUQo6pqrSC5nCRCCNqWCyjPffkWwL73bDiQ5uh9zIxUYIaSfzlNAfW9a/XwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},urlLink:"https://cara.care/en/"},{title:"Ever~Green!",description:"Developed company website using Wordpress and MySQL. Designed backend logics of the mobile version. Even without a background in the medical field, I pitched a fresh idea to the team.",tags:["WordPress","MySQL","PHP"],icons:["logos:wordpress","logos:php","logos:mysql"],imageUrl:{src:"/next/static/media/evergreenlife.0f7e89c0.png",height:1393,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEXe7+AwtTFQulLr+u7L4NJDu0SW15b//v/l8ejZ5d49uD1zxG6l2KYqtCx3zXrG58mw27VXw1n0/faFvnnj4c5YsE9MsEzF28Hi9uSMONJqAAAACnRSTlP+/////P///fz8RzgMxQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeJwFwQcCgCAMA8C0mBRZDlD//1PvIDWpDcEumn9vByvN19NRCumzDuA4kdIdCGzIe44fLfABnN4eRWYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},urlLink:"https://www.evergreen-life.co.uk/"},{title:"Kestrl",description:"Kestrl is an app that helps Muslim to grow their wealth without compromising their beliefs. Developed company website using React, Next.js, Node.js and ASW S3. Migrated existing MySQL database to MongoDB.",tags:["React","Next.js","Node.js","AWS S3"],icons:["logos:react","logos:nextjs","logos:aws","logos:nodejs"],imageUrl:{src:"/next/static/media/kestrl.ba3c1273.png",height:1603,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAM1BMVEX9/P2/xce3u73R1dbs7vH////w8vPd4OP1+Pjg5u7LysuwtLbt++vP6eKFj4zFz+DR5OZinb4IAAAACnRSTlP+/////f///f79yVWNdAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwVykkSACEIBMECbECd7f+vnfCSp8R9b/f1IhFxpJeZTaFRXzwm1Fn31UJEZnJO1RzwAyXaAS4X+5XxAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},urlLink:"https://kestrl.io/"}],l=[{name:"React",icon:"logos:react"},{name:"Gatsby",icon:"logos:gatsby"},{name:"Spring Boot",icon:"logos:spring"},{name:"Node.js",icon:"logos:nodejs-icon"},{name:"MongoDB",icon:"logos:mongodb"}]},7402:function(){}},function(e){e.O(0,[269,680,629,953,253,769,744],function(){return e(e.s=6132)}),_N_E=e.O()}]);