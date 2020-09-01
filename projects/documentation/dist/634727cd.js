let e,t,o=e=>e;import{c as n,L as s,h as i,o as r,p as a}from"./d0c3fe1b.js";import{_ as l}from"./589fbd1f.js";const c=n(e||(e=o`:host([disabled]) #trigger{pointer-events:none}#overlay-content{display:none}`));class h extends s{constructor(){super(...arguments),this.placement="bottom",this.offset=6,this.disabled=!1,this.hoverOverlayReady=Promise.resolve()}static get styles(){return[c]}render(){return i(t||(t=o` <div id="trigger" @click="${0}" @mouseenter="${0}" @mouseleave="${0}"> <slot @slotchange="${0}" name="trigger"></slot> </div> <div id="overlay-content"> <slot @slotchange="${0}" name="click-content"></slot> <slot @slotchange="${0}" name="hover-content"></slot> </div> `),this.onTrigger,this.onTrigger,this.onTrigger,this.onTargetSlotChange,this.onClickSlotChange,this.onHoverSlotChange)}get overlayOptions(){return{offset:this.offset,placement:this.placement,receivesFocus:this.type&&"inline"!==this.type?"auto":void 0}}onTrigger(e){if(!this.disabled)switch(e.type){case"click":return void this.onTriggerClick();case"mouseenter":return void this.onTriggerMouseEnter();case"mouseleave":return void this.onTriggerMouseLeave()}}async onTriggerClick(){if(this.targetContent&&this.clickContent){if("modal"===this.type){this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')||(this.clickContent.tabIndex=0)}const{targetContent:e,clickContent:t}=this;this.closeClickOverlay=await h.openOverlay(e,this.type?this.type:"click",t,this.overlayOptions)}}async onTriggerMouseEnter(){if(this.targetContent&&this.hoverContent){let e=()=>{};this.hoverOverlayReady=new Promise(t=>{e=t});const{targetContent:t,hoverContent:o}=this;this.closeHoverOverlay=await h.openOverlay(t,"hover",o,this.overlayOptions),e()}}async onTriggerMouseLeave(){await this.hoverOverlayReady,this.closeHoverOverlay&&(this.closeHoverOverlay(),delete this.closeHoverOverlay)}onClickSlotChange(e){const t=this.extractSlotContentFromEvent(e);this.clickContent=t}onHoverSlotChange(e){const t=this.extractSlotContentFromEvent(e);this.hoverContent=t}onTargetSlotChange(e){const t=this.extractSlotContentFromEvent(e);this.targetContent=t}extractSlotContentFromEvent(e){if(!e.target)return;return e.target.assignedNodes().find(e=>e instanceof HTMLElement)}disconnectedCallback(){this.closeClickOverlay&&(this.closeClickOverlay(),delete this.closeClickOverlay),super.disconnectedCallback()}}h.openOverlay=async(e,t,o,n)=>await r(e,t,o,n),l([a({reflect:!0})],h.prototype,"placement",void 0),l([a()],h.prototype,"type",void 0),l([a({type:Number,reflect:!0})],h.prototype,"offset",void 0),l([a({type:Boolean,reflect:!0})],h.prototype,"disabled",void 0);export{h as O};
//# sourceMappingURL=634727cd.js.map
