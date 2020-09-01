let e,t,o=e=>e;import{c as n,_ as s,p as i,L as r,h as a,u as l}from"./ecdc59a5.js";const c=n(e||(e=o`
:host([disabled]) #trigger{pointer-events:none}#overlay-content{display:none}
`));let h=(()=>{class e extends r{constructor(){super(...arguments),this.placement="bottom",this.offset=6,this.disabled=!1,this.hoverOverlayReady=Promise.resolve()}static get styles(){return[c]}overloadTarget(e){this.targetContent=e}render(){return a(t||(t=o`
            <div
                id="trigger"
                @click=${0}
                @mouseenter=${0}
                @mouseleave=${0}
            >
                <slot
                    @slotchange=${0}
                    name="trigger"
                ></slot>
            </div>
            <div id="overlay-content">
                <slot
                    @slotchange=${0}
                    name="click-content"
                ></slot>
                <slot
                    @slotchange=${0}
                    name="hover-content"
                ></slot>
            </div>
        `),this.onTrigger,this.onTrigger,this.onTrigger,this.onTargetSlotChange,this.onClickSlotChange,this.onHoverSlotChange)}get overlayOptions(){return{offset:this.offset,placement:this.placement,receivesFocus:this.type&&"inline"!==this.type?"auto":void 0}}onTrigger(e){if(!this.disabled)switch(e.type){case"click":return void this.onTriggerClick();case"mouseenter":return void this.onTriggerMouseEnter();case"mouseleave":return void this.onTriggerMouseLeave()}}async onTriggerClick(){if(this.targetContent&&this.clickContent){if("modal"===this.type){this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')||(this.clickContent.tabIndex=0)}const{targetContent:t,clickContent:o}=this;this.closeClickOverlay=await e.openOverlay(t,this.type?this.type:"click",o,this.overlayOptions)}}async onTriggerMouseEnter(){if(this.targetContent&&this.hoverContent){let t=()=>{};this.hoverOverlayReady=new Promise(e=>{t=e});const{targetContent:o,hoverContent:n}=this;this.closeHoverOverlay=await e.openOverlay(o,"hover",n,this.overlayOptions),t()}}async onTriggerMouseLeave(){await this.hoverOverlayReady,this.closeHoverOverlay&&(this.closeHoverOverlay(),delete this.closeHoverOverlay)}onClickSlotChange(e){const t=this.extractSlotContentFromEvent(e);this.clickContent=t}onHoverSlotChange(e){const t=this.extractSlotContentFromEvent(e);this.hoverContent=t}onTargetSlotChange(e){const t=this.extractSlotContentFromEvent(e);this.targetContent=t}extractSlotContentFromEvent(e){return e.target.assignedNodes({flatten:!0}).find(e=>e instanceof HTMLElement)}disconnectedCallback(){this.closeClickOverlay&&(this.closeClickOverlay(),delete this.closeClickOverlay),super.disconnectedCallback()}}return e.openOverlay=async(e,t,o,n)=>await l(e,t,o,n),s([i({reflect:!0})],e.prototype,"placement",void 0),s([i()],e.prototype,"type",void 0),s([i({type:Number,reflect:!0})],e.prototype,"offset",void 0),s([i({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0),e})();export{h as O};
//# sourceMappingURL=0c2ba710.js.map
