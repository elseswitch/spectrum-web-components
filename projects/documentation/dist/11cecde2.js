let e,t,o,a,s,r,i,n,l,d,c,p,f,h,b,u,m,g,v,y,k,w,x,$,z,S,C,L,M=e=>e;import{c as R,q as T,p as P,a as j,L as q,h as O,F as E}from"./ecdc59a5.js";function F(e,t,o,a){var s,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(r<3?s(i):r>3?s(t,o,i):s(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}var D=R(e||(e=M`:host{display:block;margin-top:12px}sp-search{width:100%;--spectrum-alias-single-line-width:100%}#search-container sp-popover{display:none}`));const I=e=>e.stopPropagation(),N=e=>e.preventDefault();(()=>{let e=class extends q{constructor(){super(...arguments),this.searchResultsPopover=null,this.results=[]}static get styles(){return[D]}focus(){this.searchField.focus()}handleSearchInput(e){if(e.target){const{value:t}=e.target;this.updateSearchResults(t)}}handleKeydown(e){const{code:t,shiftKey:o}=e,a="ArrowDown"===t;(!o&&"Tab"===t||a)&&this.focusResults({shouldFocusResultsList:a})}handlePopoverKeydown(e){const{code:t,shiftKey:o}=e;"Tab"===t&&(o?this.focusReturn.focus():this.focus())}async focusResults({shouldFocusResultsList:e}){if(await this.updateComplete,this.searchResultsPopover)if(e){this.searchResultsPopover.querySelector("sp-menu").focus()}else this.searchResultsPopover.focus();else if(e){await this.updateSearchResults(this.searchField.value)&&this.focusResults({shouldFocusResultsList:e})}}async openPopover(){if(!this.popover)return;this.searchResultsPopover=this.popover;const{popover:e}=this;await import("./709c7a25.js").then(async({Overlay:t})=>{this.closeOverlay=await t.open(this,"click",e,{placement:"bottom"})}),await this.searchResultsPopover.updateComplete}closePopover(){this.closeOverlay&&this.closeOverlay()}handleClosed(){this.searchResultsPopover=null,this.closeOverlay&&delete this.closeOverlay}async updateSearchResults(e){if(e.length<3)return this.closePopover(),!1;const t=await import("./111e11ab.js").then(e=>e.search),o=`${e.trim()}*`;return this.results=await t(o),await this.openPopover(),this.results.length>0}onFocusout(e){const t=e.relatedTarget;t&&this.searchResultsPopover&&this.shadowRoot&&!this.shadowRoot.contains(t)&&!this.searchResultsPopover.contains(t)&&this.closePopover()}renderResults(){return this.results.length>0?O(t||(t=M` <sp-menu> ${0} </sp-menu> `),this.results.map(e=>O(o||(o=M` <sp-menu-group> <span slot="header">${0}</span> ${0} </sp-menu-group> `),e.name,e.results.map(e=>O(a||(a=M` <sp-menu-item href="${0}"> ${0} </sp-menu-item> `),e.url,e.label))))):O(s||(s=M` <sp-illustrated-message heading="No results found" description="Try another search term."></sp-illustrated-message> `))}render(){return O(r||(r=M` <div id="search-container" @focusout="${0}"> <sp-search id="search" @focusin="${0}" @input="${0}" @change="${0}" @keydown="${0}" @click="${0}" @submit="${0}" autocomplete="off"></sp-search> <sp-popover id="search-results-menu" open tabindex="0" @sp-overlay-closed="${0}" @keydown="${0}"> <style>#search-results-menu{width:368px;max-height:calc(100vh - 200px);margin-left:24px;display:flex;flex-direction:column}sp-illustrated-message{flex:1 1;margin-bottom:2em;color:var(--spectrum-global-color-gray-800)}</style> ${0} </sp-popover> <span id="focus-return" tabindex="-1" @focus="${0}" @focusout="${0}"></span> </div> `),this.onFocusout,this.handleSearchInput,this.handleSearchInput,this.handleSearchInput,this.handleKeydown,I,N,this.handleClosed,this.handlePopoverKeydown,this.renderResults(),()=>console.log("focused"),e=>console.log(e.target,e.relatedTarget))}};F([T("sp-popover")],e.prototype,"popover",void 0),F([T("sp-search")],e.prototype,"searchField",void 0),F([T("#focus-return")],e.prototype,"focusReturn",void 0),F([P({type:Array})],e.prototype,"results",void 0),e=F([j("docs-search")],e)})();var A=R(i||(i=M`::slotted(*){width:100%}aside{display:flex;flex-direction:column;max-height:100vh;overflow:auto;position:-webkit-sticky;position:sticky;top:0;left:0;background-color:var(--spectrum-global-color-gray-75)}@media screen and (max-width:960px){aside{position:fixed;top:0;left:0;transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(-100%);z-index:10;min-height:100vh}:host([open]) aside{transform:translateX(0)}.scrim{position:fixed;background-color:var(--spectrum-alias-background-color-modal-overlay);top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:1;opacity:0;transition:opacity var(--spectrum-global-animation-duration-200) ease-in 0ms}:host([open]) .scrim{pointer-events:all;opacity:1}}#nav-header{width:var(--spectrum-global-dimension-size-2400);padding:23px 24px 24px}#nav-header a,#nav-header a:visited{color:var(--spectrum-global-color-gray-800);text-decoration:none}.navigation{width:var(--spectrum-global-dimension-size-2400);padding:0 24px 24px;flex:1;flex-grow:1;overflow:auto;overflow-x:hidden;overflow-y:auto}docs-spectrum-logo{width:36px;height:32px;display:block;padding-top:7px}:host([dir=ltr]) docs-spectrum-logo{margin-right:16px}:host([dir=rtl]) docs-spectrum-logo{margin-left:16px}#logo-container{outline:none;padding:var(--spectrum-global-dimension-size-350) var(--spectrum-global-dimension-size-300);border-radius:4px}sp-sidenav{width:100%}.spectrum-web{margin-top:80px;display:block}`));(()=>{let e=class extends q{constructor(){super(...arguments),this.open=!1}static get styles(){return[A]}toggle(){this.open=!this.open}focus(){const e=document.querySelector('[slot="logo"]');e?e.focus():this.shadowRoot.querySelector("#logo").focus()}render(){return O(n||(n=M` <div class="scrim" @click="${0}"></div> <aside> <div id="nav-header"> <div id="logo-container"> <slot name="logo"></slot> </div> <docs-search></docs-search> </div> <div class="navigation"> <slot></slot> </div> </aside> `),this.toggle)}updated(e){e.has("open")&&!this.open&&e.get("open")&&this.dispatchEvent(new Event("close"))}};F([P({type:Boolean,reflect:!0})],e.prototype,"open",void 0),e=F([j("docs-side-nav")],e)})();var H=R(l||(l=M`:host{display:inline-flex}`));(()=>{let e=class extends q{constructor(){super(...arguments),this.size="36px"}static get styles(){return[H]}render(){return O(d||(d=M` <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 30 26" width="${0}" xml:space="preserve"> <path fill="#e1251b" d="M19 0h11v26zM11.1 0H0v26zM15 9.6L22.1 26h-4.6l-2.1-5.2h-5.2z"/> </svg> `),this.size)}};F([P({type:String})],e.prototype,"size",void 0),e=F([j("docs-spectrum-logo")],e)})();function W(e){const t=[`${e}`];return t.raw=[`${e}`],O(t)}var U=R(c||(c=M`code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#f8f8f2}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}`)),B=R(p||(p=M`code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}`)),K=R(f||(f=M`.markup{position:relative;max-width:100%;padding:.75rem 1.5rem;border-radius:6px;border-top:1px solid var(--spectrum-global-color-gray-100);background:var(--spectrum-global-color-gray-75);overflow:hidden;line-height:1.3em;overflow-x:auto}div+.markup{border-radius:0 0 6px 6px}:host{display:flex;margin:1rem 0 2rem;flex-direction:column;border-radius:6px;border:1px solid var(--spectrum-global-color-gray-100);width:100%;box-sizing:border-box}.demo-example{max-width:100%;overflow:auto;flex:1;padding:var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-500);border-radius:6px 6px 0 0;background:var(--spectrum-global-color-gray-100)}@media (max-width:768px){.demo-example{padding:var(--spectrum-global-dimension-size-200) var(--spectrum-global-dimension-size-200)}}`));let X=(()=>{class e extends q{constructor(){super(...arguments),this.code=""}get highlightedCode(){return W(this.code)}render(){return O(h||(h=M` <pre><code>${0}</code></pre> `),this.highlightedCode)}}return F([P()],e.prototype,"code",void 0),e})();(()=>{let e=class extends X{static get styles(){return[U,R(b||(b=M`.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f9a4c3}`))]}};e=F([j("dark-code")],e)})(),(()=>{let e=class extends X{static get styles(){return[B,R(u||(u=M`.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#567f01}.token.punctuation{color:#737373}.language-css .token.function{color:inherit}`))]}};e=F([j("light-code")],e)})(),(()=>{let e=class extends(E(q)){constructor(){super(...arguments),this.codeTheme="light",this.preprocessed=!1,this.prismjsLoaded=!1,this.shouldManageTabOrderForScrolling=()=>{[this.markup,this.demo].map(e=>{if(!e)return;const{offsetWidth:t,scrollWidth:o}=e;t<o?e.tabIndex=0:e.removeAttribute("tabindex")})}}static get styles(){return[K]}get codeSlot(){return[...this.children||[]].find(e=>"code"===e.slot)||this}get highlightedHTML(){return this.codeSlot.innerHTML||""}get liveHTML(){return this.codeSlot.textContent||""}get language(){return this.classList.contains("language-javascript")?"javascript":"markup"}get showDemo(){return this.classList.contains("language-html")||this.classList.contains("language-html-live")}get highlightedCode(){const e=this.preprocessed?this.highlightedHTML:window.Prism.highlight(this.liveHTML,window.Prism.languages[this.language],this.language);return"dark"===this.codeTheme?O(m||(m=M` <dark-code .code="${0}"></dark-code> `),e):O(g||(g=M` <light-code .code="${0}"></light-code> `),e)}get renderedCode(){if(this.classList.contains("language-html-live")){const e=this.querySelector('[slot="demo"]')||document.createElement("div");e.slot="demo",e.innerHTML=this.liveHTML,this.append(e)}return W(this.liveHTML)}shouldUpdate(){return!(!this.preprocessed&&!this.prismjsLoaded)||(this.preprocessed||import("./d0ea11b2.js").then(()=>{this.prismjsLoaded=!0,this.requestUpdate()}),!1)}render(){const{highlightedCode:e,renderedCode:t}=this;return O(v||(v=M` ${0} <bdo class="markup" dir="ltr"> ${0} </bdo> `),this.showDemo?O(y||(y=M` <div class="demo-example"> <slot name="demo"> ${0} </slot> </div> `),t):void 0,e)}updated(){setTimeout(this.shouldManageTabOrderForScrolling)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.shouldManageTabOrderForScrolling)}disconnectedCallback(){window.removeEventListener("resize",this.shouldManageTabOrderForScrolling),super.disconnectedCallback()}};F([T("#markup")],e.prototype,"markup",void 0),F([T(".demo-example")],e.prototype,"demo",void 0),F([P()],e.prototype,"codeTheme",void 0),F([P({type:Boolean})],e.prototype,"preprocessed",void 0),e=F([j("code-example")],e)})();var G=R(k||(k=M`:host{display:block}#app{width:100%;height:100%;display:flex;flex-direction:column}docs-side-nav:not(:defined){display:none}@media screen and (min-width:961px){docs-side-nav:not(:defined){display:block;padding:142px 24px 24px}}#body{display:flex;flex-direction:row;flex:1 1 auto;color:var(--spectrum-global-color-gray-800)}@media screen and (max-width:960px){#body{height:50%}}#layout-content{background-color:var(--spectrum-global-color-gray-50);width:100%}#page{padding:var(--spectrum-global-dimension-size-500) var(--spectrum-global-dimension-size-700);max-width:1080px;margin-left:auto;margin-right:auto}.manage-theme{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-200)}@media screen and (max-width:960px){#page{padding:var(--spectrum-global-dimension-size-100) var(--spectrum-global-dimension-size-300)}.manage-theme{margin-right:0;margin-left:0}}header{position:-webkit-sticky;position:sticky;min-height:var(--spectrum-global-dimension-size-600);border-bottom:1px solid var(--spectrum-global-color-gray-200);display:flex;flex-direction:row;align-items:center;background-color:var(--spectrum-global-color-gray-50);top:0;right:0;left:0;padding-left:8px;z-index:1;--spectrum-actionbutton-height:var(--spectrum-global-dimension-size-500);--spectrum-actionbutton-min-width:var(--spectrum-global-dimension-size-500);--spectrum-alias-workflow-icon-size:22px}header svg{stroke:transparent;height:100%}:host([dir=ltr]) .manage-theme label{margin-left:var(--spectrum-global-dimension-size-400)}:host([dir=rtl]) .manage-theme label{margin-right:var(--spectrum-global-dimension-size-400)}sp-dropdown:not(:defined){height:var(--spectrum-dropdown-height,var(--spectrum-global-dimension-size-400));min-width:70px}sp-dropdown:not(:defined) sp-menu{display:none}@media screen and (min-width:961px){header{display:none}}label{display:block;box-sizing:border-box;padding-left:0;padding-right:0;font-size:var(--spectrum-fieldlabel-text-size,var(--spectrum-global-dimension-font-size-75));font-weight:var(--spectrum-fieldlabel-text-font-weight,var(--spectrum-global-font-weight-regular));line-height:var(--spectrum-fieldlabel-text-line-height,var(--spectrum-global-font-line-height-small));-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;display:inline-block;padding-top:var(--spectrum-fieldlabel-side-padding-top,var(--spectrum-global-dimension-size-100));padding-bottom:0}:host([dir=ltr]) label{padding-left:0;padding-right:var(--spectrum-fieldlabel-side-padding-x,var(--spectrum-global-dimension-size-100))}:host([dir=rtl]) label{padding-right:0;padding-left:var(--spectrum-fieldlabel-side-padding-x,var(--spectrum-global-dimension-size-100))}.alerts{width:100vw;text-align:center;position:absolute;bottom:0;display:flex;flex-direction:column}.alerts sp-toast{margin:0 auto var(--spectrum-global-dimension-size-300)}`)),J=R(w||(w=M`@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:normal;font-weight:400}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?fvd=i4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?fvd=i4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?fvd=i4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:italic;font-weight:400}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:normal;font-weight:700}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/a9f5e6/000000000000000000017708/27/l?fvd=i7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/a9f5e6/000000000000000000017708/27/d?fvd=i7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/a9f5e6/000000000000000000017708/27/a?fvd=i7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:italic;font-weight:700}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?fvd=n3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?fvd=n3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?fvd=n3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:normal;font-weight:300}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/a2527e/000000000000000000017704/27/l?fvd=n8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/a2527e/000000000000000000017704/27/d?fvd=n8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/a2527e/000000000000000000017704/27/a?fvd=n8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:normal;font-weight:800}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/4b3e87/000000000000000000017706/27/l?fvd=n9&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/4b3e87/000000000000000000017706/27/d?fvd=n9&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/4b3e87/000000000000000000017706/27/a?fvd=n9&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:normal;font-weight:900}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/f83687/000000000000000000017707/27/l?fvd=i9&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/f83687/000000000000000000017707/27/d?fvd=i9&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/f83687/000000000000000000017707/27/a?fvd=i9&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:italic;font-weight:900}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/b3ff72/000000000000000000017705/27/l?fvd=i8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/b3ff72/000000000000000000017705/27/d?fvd=i8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/b3ff72/000000000000000000017705/27/a?fvd=i8&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:italic;font-weight:800}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/a77c89/000000000000000000017700/27/l?fvd=i3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/a77c89/000000000000000000017700/27/d?fvd=i3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/a77c89/000000000000000000017700/27/a?fvd=i3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:italic;font-weight:300}@font-face{font-family:adobe-clean;src:url(https://use.typekit.net/af/2468ba/00000000000000003b9ada96/27/l?fvd=n5&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/2468ba/00000000000000003b9ada96/27/d?fvd=n5&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/2468ba/00000000000000003b9ada96/27/a?fvd=n5&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:normal;font-weight:500}@font-face{font-family:adobe-clean-semilight;src:url(https://use.typekit.net/af/84be24/000000000000000000014fc1/27/l?fvd=n3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/84be24/000000000000000000014fc1/27/d?fvd=n3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/84be24/000000000000000000014fc1/27/a?fvd=n3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:normal;font-weight:300}@font-face{font-family:adobe-clean-semilight;src:url(https://use.typekit.net/af/c927e3/000000000000000000014fc2/27/l?fvd=i3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/c927e3/000000000000000000014fc2/27/d?fvd=i3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/c927e3/000000000000000000014fc2/27/a?fvd=i3&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-display:swap;font-style:italic;font-weight:300}`));function Q(){const{connection:e}=window.navigator,t="serviceWorker"in navigator&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state;if(e&&(e.saveData||"4g"!==e.effectiveType)&&!t)return;const o=document.createElement("style");o.textContent=J.cssText,document.head.append(o)}const V=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Y=window.localStorage&&localStorage.getItem("swc-docs:theme:color")||V,Z=window.localStorage&&localStorage.getItem("swc-docs:theme:scale")||"medium",_=window.localStorage&&localStorage.getItem("swc-docs:theme:dir")||"ltr",ee=matchMedia("screen and (max-width: 960px)"),te=e=>{switch(e){case"darkest":import("./3b7ae0db.js");break;case"dark":import("./148a706b.js");break;case"light":import("./aaaacf0f.js");break;case"lightest":import("./2f3294e7.js");break;case"medium":import("./f0d11de2.js");break;case"large":import("./928c31d1.js")}},oe="serviceWorker"in navigator&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state;oe&&Q();let ae=(()=>{class e extends q{constructor(){super(...arguments),this.alerts=new Map,this.color=Y,this.dir=_,this.open=!1,this.isNarrow=ee.matches,this.scale=Z,this.handleMatchMediaChange=e=>{this.isNarrow=e.matches}}static get styles(){return[G]}toggleNav(){this.open=!this.open}updateColor(e){this.color=e.target.value}updateScale(e){this.scale=e.target.value}updateDirection(e){const t=e.target.value;this.dir="rtl"===t?t:"ltr"}onClickLabel(e){const{target:t}=e;if(!t)return;const o=t.nextElementSibling;o&&!o.open&&o.click()}addAlert(e){const t=e.composedPath()[0];if(!this.alerts.has(t)){const e=()=>{this.alerts.delete(t),t.focus(),this.requestUpdate()};this.alerts.set(t,{count:0,message:"",element:(t,o)=>O(x||(x=M` <sp-toast .timeout="${0}" variant="info" @close="${0}" open> ${0} ${0} </sp-toast> `),t,e,o,t>1?`(${t} alerts)`:"")})}const o=this.alerts.get(t);this.alerts.set(t,{element:o.element,count:o.count+1,message:e.detail.message}),this.requestUpdate()}focus(){this.shadowRoot.querySelector("docs-side-nav").focus()}render(){return O($||($=M` <sp-theme .color="${0}" .scale="${0}" dir="${0}" id="app"> ${0} <div id="body"> <docs-side-nav id="side-nav" ?inert="${0}" ?open="${0}" @close="${0}"> <slot name="logo" slot="logo"> <a id="logo" href="index.html"> <docs-spectrum-logo></docs-spectrum-logo> <div id="header-title"> Spectrum <br> Web&nbsp;Components </div> </a> </slot> <slot name="side-nav"></slot> </docs-side-nav> <main id="layout-content" ?inert="${0}" role="main"> <div id="page" @alert="${0}"> <div class="manage-theme"> <div> <label @click="${0}"> Theme </label> <sp-dropdown placement="bottom" quiet value="${0}" @change="${0}"> <sp-menu> <sp-menu-item value="lightest"> Lightest </sp-menu-item> <sp-menu-item value="light"> Light </sp-menu-item> <sp-menu-item value="dark"> Dark </sp-menu-item> <sp-menu-item value="darkest"> Darkest </sp-menu-item> </sp-menu> </sp-dropdown> </div> <div> <label @click="${0}"> Scale </label> <sp-dropdown label="Scale" placement="bottom" quiet value="${0}" @change="${0}"> <sp-menu> <sp-menu-item value="medium"> Medium </sp-menu-item> <sp-menu-item value="large"> Large </sp-menu-item> </sp-menu> </sp-dropdown> </div> <div> <label @click="${0}"> Direction </label> <sp-dropdown label="Direction" placement="bottom" quiet value="${0}" @change="${0}"> <sp-menu> <sp-menu-item value="ltr"> LTR </sp-menu-item> <sp-menu-item value="rtl"> RTL </sp-menu-item> </sp-menu> </sp-dropdown> </div> </div> <slot></slot> </div> </main> </div> ${0} </sp-theme> `),this.color,this.scale,this.dir,this.isNarrow?O(z||(z=M` <header> <sp-action-button quiet label="Open Navigation" @click="${0}"> <svg slot="icon" viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" width="22" height="22" fill="currentColor"> <rect height="4" rx="1" ry="1" width="28" x="4" y="16"></rect> <rect height="4" rx="1" ry="1" width="28" x="4" y="6"></rect> <rect height="4" rx="1" ry="1" width="28" x="4" y="26"></rect> </svg> </sp-action-button> </header> `),this.toggleNav):O(S||(S=M``)),this.isNarrow&&!this.open,this.open,this.toggleNav,this.isNarrow&&this.open,this.addAlert,this.onClickLabel,this.color,this.updateColor,this.onClickLabel,this.scale,this.updateScale,this.onClickLabel,this.dir,this.updateDirection,this.alerts.size?O(C||(C=M` <div class="alerts" role="region"> ${0} </div> `),[...this.alerts.values()].map(e=>e.element(e.count,e.message))):O(L||(L=M``)))}firstUpdated(){setTimeout(()=>{oe||Q(),Y===V&&"medium"===Z||(te(Y),te(Z))})}updated(e){let t=!1;if(e.has("color")){window.localStorage&&localStorage.setItem("swc-docs:theme:color",this.color),e.get("color")&&(t=!0),[...this.querySelectorAll("code-example")].forEach(e=>{e.codeTheme="dark"===this.color||"darkest"===this.color?"dark":"light"})}e.has("scale")&&(window.localStorage&&localStorage.setItem("swc-docs:theme:scale",this.scale),e.get("scale")&&(t=!0)),e.has("dir")&&window.localStorage&&localStorage.setItem("swc-docs:theme:dir",this.dir),e.has("open")&&this.open&&this.focus(),t&&(te(this.color),te(this.scale))}connectedCallback(){super.connectedCallback(),ee.addEventListener("change",this.handleMatchMediaChange)}disconnectedCallback(){ee.removeEventListener("change",this.handleMatchMediaChange)}}return F([P({attribute:!1})],e.prototype,"alerts",void 0),F([P({attribute:!1})],e.prototype,"color",void 0),F([P({reflect:!0})],e.prototype,"dir",void 0),F([P({type:Boolean})],e.prototype,"open",void 0),F([P({type:Boolean,attribute:!1})],e.prototype,"isNarrow",void 0),F([P({attribute:!1})],e.prototype,"scale",void 0),e})();setTimeout(()=>customElements.define("docs-page",ae)),window.spAlert=(e,t)=>{e.dispatchEvent(new CustomEvent("alert",{composed:!0,bubbles:!0,detail:{message:t}}))};
//# sourceMappingURL=11cecde2.js.map
