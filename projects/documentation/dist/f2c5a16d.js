let t,e,r,i,s=t=>t;import{c as a,_ as n,p as o,S as l,h as c}from"./ecdc59a5.js";const d=a(t||(t=s`
:host{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}#illustration{margin-bottom:24px;color:var(--spectrum-global-color-gray-500);fill:currentColor;stroke:currentColor}#heading{max-width:500px;margin:0}#description{max-width:500px;margin:4px 0 0;font-style:italic}:host([cta]) #description{font-style:normal}#heading{font-size:var(--spectrum-heading-quiet-2-text-size,var(--spectrum-alias-heading2-text-size));font-weight:var(--spectrum-heading-quiet-2-text-font-weight,300);line-height:var(--spectrum-heading-quiet-2-text-line-height,1.3);font-style:var(--spectrum-heading-quiet-2-text-font-style,normal);letter-spacing:var(--spectrum-heading-quiet-2-text-letter-spacing,0);text-transform:var(--spectrum-heading-quiet-2-text-transform,none);color:var(--spectrum-heading-page-title-text-color,var(--spectrum-global-color-gray-700))}#description,#heading{margin-top:0;margin-bottom:0}#description{font-size:var(--spectrum-body-4-text-size,var(--spectrum-alias-font-size-default));font-weight:var(--spectrum-body-4-text-font-weight,var(--spectrum-alias-body-text-font-weight));line-height:var(--spectrum-body-4-text-line-height,var(--spectrum-alias-body-text-line-height));letter-spacing:var(--spectrum-body-4-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none));text-transform:var(--spectrum-body-4-text-transform,none);color:var(--spectrum-body-secondary-text-color,var(--spectrum-global-color-gray-700))}::slotted(svg[viewBox]){width:100%}
`));let p=(()=>{class t extends l{constructor(){super(...arguments),this.heading="",this.description=""}static get styles(){return[d]}render(){return c(e||(e=s`
            <div id="illustration"><slot></slot></div>
            <h2 id="heading">${0}</h2>
            <p id="description">${0}</p>
        `),this.heading,this.description)}}return t.is="sp-illustrated-message",n([o()],t.prototype,"heading",void 0),n([o()],t.prototype,"description",void 0),t})();customElements.define("sp-illustrated-message",p);const g=a(r||(r=s`
.header{display:block;margin:var(--spectrum-global-dimension-size-75) 0 0 0;font-size:var(--spectrum-global-dimension-font-size-50);font-weight:400;line-height:var(--spectrum-alias-line-height-medium,var(--spectrum-global-dimension-size-250));text-transform:uppercase;letter-spacing:.06em;color:var(--spectrum-heading-subtitle3-text-color,var(--spectrum-global-color-gray-700))}.header,:host([dir=ltr]) .header{padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150)}:host([dir=rtl]) .header{padding:0 var(--spectrum-global-dimension-size-150) 0 var(--spectrum-global-dimension-size-450)}
`));let m=(()=>{class t extends l{constructor(){super(),this.instanceCount=t.instances,t.instances+=1}static get styles(){return[g]}render(){const t=`menu-heading-category-${this.instanceCount}`;return c(i||(i=s`
            <span class="header" id=${0} aria-hidden="true">
                <slot name="header"></slot>
            </span>
            <div aria-labelledby=${0} role="group">
                <slot></slot>
            </div>
        `),t,t)}firstUpdated(){this.setAttribute("role","group")}}return t.instances=0,t})();customElements.define("sp-menu-group",m);
//# sourceMappingURL=f2c5a16d.js.map
