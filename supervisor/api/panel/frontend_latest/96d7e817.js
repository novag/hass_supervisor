"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[567],{6567:(e,t,a)=>{const r=Intl&&Intl.DateTimeFormat,i=[38,33,36],n=[40,34,35],o=new Set([37,...i]),s=new Set([39,...n]),l=new Set([39,...i]),d=new Set([37,...n]),c=new Set([37,39,...i,...n]);var h=a(7480),u=a(7500),p=a(458),y=a(15),_=a(8636),m=a(6230);function b(e,t,a){return new Date(Date.UTC(e,t,a))}const f=u.dy`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>`,w=u.dy`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>`,v=u.iv`
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  background: none; /** NOTE: IE11 fix */
  color: inherit;
  border: none;
  font: inherit;
  text-align: left;
  text-transform: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`,g=(u.iv`
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  position: relative;
  display: inline-block;
  background: initial;
  color: inherit;
  font: inherit;
  text-transform: inherit;
  text-decoration: none;
  outline: none;
}
a:focus,
a:focus.page-selected {
  text-decoration: underline;
}
`,u.iv`
svg {
  display: block;
  min-width: var(--svg-icon-min-width, 24px);
  min-height: var(--svg-icon-min-height, 24px);
  fill: var(--svg-icon-fill, currentColor);
  pointer-events: none;
}
`,u.iv`[hidden] { display: none !important; }`,u.iv`
:host {
  display: block;

  /* --app-datepicker-width: 300px; */
  /* --app-datepicker-primary-color: #4285f4; */
  /* --app-datepicker-header-height: 80px; */
}

* {
  box-sizing: border-box;
}
`);function k(e,t){return+t-+e}function D({hasAltKey:e,keyCode:t,focusedDate:a,selectedDate:r,disabledDaysSet:i,disabledDatesSet:n,minTime:c,maxTime:h}){const u=a.getUTCFullYear(),p=a.getUTCMonth(),y=a.getUTCDate(),_=+a,m=r.getUTCFullYear(),f=r.getUTCMonth();let w=u,v=p,g=y,D=!0;switch((f!==p||m!==u)&&(w=m,v=f,g=1,D=34===t||33===t||35===t),D){case _===c&&o.has(t):case _===h&&s.has(t):break;case 38===t:g-=7;break;case 40===t:g+=7;break;case 37===t:g-=1;break;case 39===t:g+=1;break;case 34===t:e?w+=1:v+=1;break;case 33===t:e?w-=1:v-=1;break;case 35===t:v+=1,g=0;break;default:g=1}if(34===t||33===t){const e=b(w,v+1,0).getUTCDate();g>e&&(g=e)}const x=function({keyCode:e,disabledDaysSet:t,disabledDatesSet:a,focusedDate:r,maxTime:i,minTime:n}){const o=+r;let s=o<n,c=o>i;if(k(n,i)<864e5)return r;let h=s||c||t.has(r.getUTCDay())||a.has(o);if(!h)return r;let u=0,p=s===c?r:new Date(s?n-864e5:864e5+i);const y=p.getUTCFullYear(),_=p.getUTCMonth();let m=p.getUTCDate();for(;h;)(s||!c&&l.has(e))&&(m+=1),(c||!s&&d.has(e))&&(m-=1),p=b(y,_,m),u=+p,s||(s=u<n,s&&(p=new Date(n),u=+p,m=p.getUTCDate())),c||(c=u>i,c&&(p=new Date(i),u=+p,m=p.getUTCDate())),h=t.has(p.getUTCDay())||a.has(u);return p}({keyCode:t,maxTime:h,minTime:c,disabledDaysSet:i,disabledDatesSet:n,focusedDate:b(w,v,g)});return x}function x(e,t,a){return e.dispatchEvent(new CustomEvent(t,{detail:a,bubbles:!0,composed:!0}))}function C(e,t){return e.composedPath().find((e=>e instanceof HTMLElement&&t(e)))}function T(e){return t=>e.format(t).replace(/\u200e/gi,"")}function S(e){const t=r(e,{timeZone:"UTC",weekday:"short",month:"short",day:"numeric"}),a=r(e,{timeZone:"UTC",day:"numeric"}),i=r(e,{timeZone:"UTC",year:"numeric",month:"short",day:"numeric"}),n=r(e,{timeZone:"UTC",year:"numeric",month:"long"}),o=r(e,{timeZone:"UTC",weekday:"long"}),s=r(e,{timeZone:"UTC",weekday:"narrow"}),l=r(e,{timeZone:"UTC",year:"numeric"});return{locale:e,dateFormat:T(t),dayFormat:T(a),fullDateFormat:T(i),longMonthYearFormat:T(n),longWeekdayFormat:T(o),narrowWeekdayFormat:T(s),yearFormat:T(l)}}function F(e,t){const a=function(e,t){const a=t.getUTCFullYear(),r=t.getUTCMonth(),i=t.getUTCDate(),n=t.getUTCDay();let o=n;return"first-4-day-week"===e&&(o=3),"first-day-of-year"===e&&(o=6),"first-full-week"===e&&(o=0),b(a,r,i-n+o)}(e,t),r=b(a.getUTCFullYear(),0,1),i=1+(+a-+r)/864e5;return Math.ceil(i/7)}function $(e){if(e>=0&&e<7)return Math.abs(e);return((e<0?7*Math.ceil(Math.abs(e)):0)+e)%7}function U(e,t,a){const r=$(e-t);return a?1+r:r}function N(e){const{dayFormat:t,fullDateFormat:a,locale:r,longWeekdayFormat:i,narrowWeekdayFormat:n,selectedDate:o,disabledDates:s,disabledDays:l,firstDayOfWeek:d,max:c,min:h,showWeekNumber:u,weekLabel:p,weekNumberType:y}=e,_=null==h?Number.MIN_SAFE_INTEGER:+h,m=null==c?Number.MAX_SAFE_INTEGER:+c,f=function(e){const{firstDayOfWeek:t=0,showWeekNumber:a=!1,weekLabel:r,longWeekdayFormat:i,narrowWeekdayFormat:n}=e||{},o=1+(t+(t<0?7:0))%7,s=r||"Wk",l=a?[{label:"Wk"===s?"Week":s,value:s}]:[];return Array.from(Array(7)).reduce(((e,t,a)=>{const r=b(2017,0,o+a);return e.push({label:i(r),value:n(r)}),e}),l)}({longWeekdayFormat:i,narrowWeekdayFormat:n,firstDayOfWeek:d,showWeekNumber:u,weekLabel:p}),w=e=>[r,e.toJSON(),null==s?void 0:s.join("_"),null==l?void 0:l.join("_"),d,null==c?void 0:c.toJSON(),null==h?void 0:h.toJSON(),u,p,y].filter(Boolean).join(":"),v=o.getUTCFullYear(),g=o.getUTCMonth(),k=[-1,0,1].map((e=>{const i=b(v,g+e,1),n=+b(v,g+e+1,0),o=w(i);if(n<_||+i>m)return{key:o,calendar:[],disabledDatesSet:new Set,disabledDaysSet:new Set};const f=function(e){const{date:t,dayFormat:a,disabledDates:r=[],disabledDays:i=[],firstDayOfWeek:n=0,fullDateFormat:o,locale:s="en-US",max:l,min:d,showWeekNumber:c=!1,weekLabel:h="Week",weekNumberType:u="first-4-day-week"}=e||{},p=$(n),y=t.getUTCFullYear(),_=t.getUTCMonth(),m=b(y,_,1),f=new Set(i.map((e=>U(e,p,c)))),w=new Set(r.map((e=>+e))),v=[m.toJSON(),p,s,null==l?"":l.toJSON(),null==d?"":d.toJSON(),Array.from(f).join(","),Array.from(w).join(","),u].filter(Boolean).join(":"),g=U(m.getUTCDay(),p,c),k=null==d?+new Date("2000-01-01"):+d,D=null==l?+new Date("2100-12-31"):+l,x=c?8:7,C=b(y,1+_,0).getUTCDate(),T=[];let S=[],N=!1,E=1;for(const e of[0,1,2,3,4,5]){for(const t of[0,1,2,3,4,5,6].concat(7===x?[]:[7])){const r=t+e*x;if(!N&&c&&0===t){const t=F(u,b(y,_,E-(e<1?p:0))),a=`${h} ${t}`;S.push({fullDate:null,label:a,value:`${t}`,key:`${v}:${a}`,disabled:!0});continue}if(N||r<g){S.push({fullDate:null,label:"",value:"",key:`${v}:${r}`,disabled:!0});continue}const i=b(y,_,E),n=+i,s=f.has(t)||w.has(n)||n<k||n>D;s&&w.add(n),S.push({fullDate:i,label:o(i),value:a(i),key:`${v}:${i.toJSON()}`,disabled:s}),E+=1,E>C&&(N=!0)}T.push(S),S=[]}return{disabledDatesSet:w,calendar:T,disabledDaysSet:new Set(i.map((e=>$(e)))),key:v}}({dayFormat:t,fullDateFormat:a,locale:r,disabledDates:s,disabledDays:l,firstDayOfWeek:d,max:c,min:h,showWeekNumber:u,weekLabel:p,weekNumberType:y,date:i});return{...f,key:o}})),D=[],x=new Set,C=new Set;for(const e of k){const{disabledDatesSet:t,disabledDaysSet:a,...r}=e;if(r.calendar.length>0){if(a.size>0)for(const e of a)C.add(e);if(t.size>0)for(const e of t)x.add(e)}D.push(r)}return{calendars:D,weekdays:f,disabledDatesSet:x,disabledDaysSet:C,key:w(o)}}function E(e){const t=null==e?new Date:new Date(e),a="string"==typeof e&&(/^\d{4}-\d{2}-\d{2}$/i.test(e)||/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}(Z|\+00:00|-00:00)$/i.test(e)),r="number"==typeof e&&e>0&&isFinite(e);let i=t.getFullYear(),n=t.getMonth(),o=t.getDate();return(a||r)&&(i=t.getUTCFullYear(),n=t.getUTCMonth(),o=t.getUTCDate()),b(i,n,o)}function L(e,t){return e.classList.contains(t)}function M(e,t){return!(null==e||!(t instanceof Date)||isNaN(+t))}function W(e){return e-Math.floor(e)>0?+e.toFixed(3):e}function O(e){return{passive:!0,handleEvent:e}}function Y(e,t){const a="string"==typeof e&&e.length>0?e.split(/,\s*/i):[];return a.length?"function"==typeof t?a.map(t):a:[]}function V(e){if(e instanceof Date&&!isNaN(+e)){const t=e.toJSON();return null==t?"":t.replace(/^(.+)T.+/i,"$1")}return""}function A(e,t){if(k(e,t)<864e5)return[];const a=e.getUTCFullYear();return Array.from(Array(t.getUTCFullYear()-a+1),((e,t)=>t+a))}function P(e,t,a){const r="number"==typeof e?e:+e,i=+t,n=+a;return r<i?i:r>n?n:e}var I,z,K=a(2612);function q(e){const{clientX:t,clientY:a,pageX:r,pageY:i}=e,n=Math.max(r,t),o=Math.max(i,a),s=e.identifier||e.pointerId;return{x:n,y:o,id:null==s?0:s}}function R(e,t){const a=t.changedTouches;if(null==a)return{newPointer:q(t),oldPointer:e};const r=Array.from(a,(e=>q(e)));return{newPointer:null==e?r[0]:r.find((t=>t.id===e.id)),oldPointer:e}}function Z(e,t,a){e.addEventListener(t,a,!!K.Vq&&{passive:!0})}class j{constructor(e,t){this._element=e,this._startPointer=null;const{down:a,move:r,up:i}=t;this._down=this._onDown(a),this._move=this._onMove(r),this._up=this._onUp(i),e&&e.addEventListener&&(e.addEventListener("mousedown",this._down),Z(e,"touchstart",this._down),Z(e,"touchmove",this._move),Z(e,"touchend",this._up))}disconnect(){const e=this._element;e&&e.removeEventListener&&(e.removeEventListener("mousedown",this._down),e.removeEventListener("touchstart",this._down),e.removeEventListener("touchmove",this._move),e.removeEventListener("touchend",this._up))}_onDown(e){return t=>{t instanceof MouseEvent&&(this._element.addEventListener("mousemove",this._move),this._element.addEventListener("mouseup",this._up),this._element.addEventListener("mouseleave",this._up));const{newPointer:a}=R(this._startPointer,t);e(a,t),this._startPointer=a}}_onMove(e){return t=>{this._updatePointers(e,t)}}_onUp(e){return t=>{this._updatePointers(e,t,!0)}}_updatePointers(e,t,a){a&&t instanceof MouseEvent&&(this._element.removeEventListener("mousemove",this._move),this._element.removeEventListener("mouseup",this._up),this._element.removeEventListener("mouseleave",this._up));const{newPointer:r,oldPointer:i}=R(this._startPointer,t);e(r,i,t),this._startPointer=a?null:r}}class B extends u.oi{constructor(){super(),this.firstDayOfWeek=0,this.showWeekNumber=!1,this.weekNumberType="first-4-day-week",this.landscape=!1,this.locale=r&&r().resolvedOptions&&r().resolvedOptions().locale||"en-US",this.disabledDays="",this.disabledDates="",this.weekLabel="Wk",this.inline=!1,this.dragRatio=.15,this._hasMin=!1,this._hasMax=!1,this._disabledDaysSet=new Set,this._disabledDatesSet=new Set,this._dx=-1/0,this._hasNativeWebAnimation="animate"in HTMLElement.prototype,this._updatingDateWithKey=!1;const e=E(),t=S(this.locale),a=V(e),i=E("2100-12-31");this.value=a,this.startView="calendar",this._min=new Date(e),this._max=new Date(i),this._todayDate=e,this._maxDate=i,this._yearList=A(e,i),this._selectedDate=new Date(e),this._focusedDate=new Date(e),this._formatters=t}get startView(){return this._startView}set startView(e){const t=e||"calendar";if("calendar"!==t&&"yearList"!==t)return;const a=this._startView;this._startView=t,this.requestUpdate("startView",a)}get min(){return this._hasMin?V(this._min):""}set min(e){const t=E(e),a=M(e,t);this._min=a?t:this._todayDate,this._hasMin=a,this.requestUpdate("min")}get max(){return this._hasMax?V(this._max):""}set max(e){const t=E(e),a=M(e,t);this._max=a?t:this._maxDate,this._hasMax=a,this.requestUpdate("max")}get value(){return V(this._focusedDate)}set value(e){const t=E(e),a=M(e,t)?t:this._todayDate;this._focusedDate=new Date(a),this._selectedDate=this._lastSelectedDate=new Date(a)}disconnectedCallback(){super.disconnectedCallback(),this._tracker&&(this._tracker.disconnect(),this._tracker=void 0)}render(){this._formatters.locale!==this.locale&&(this._formatters=S(this.locale));const e="yearList"===this._startView?this._renderDatepickerYearList():this._renderDatepickerCalendar(),t=this.inline?null:u.dy`<div class="datepicker-header" part="header">${this._renderHeaderSelectorButton()}</div>`;return u.dy`
    ${t}
    <div class="datepicker-body" part="body">${(0,y.F)(e)}</div>
    `}firstUpdated(){let e;e="calendar"===this._startView?this.inline?this.shadowRoot.querySelector(".btn__month-selector"):this._buttonSelectorYear:this._yearViewListItem,x(this,"datepicker-first-updated",{firstFocusableElement:e,value:this.value})}async updated(e){const t=this._startView;if(e.has("min")||e.has("max")){this._yearList=A(this._min,this._max),"yearList"===t&&this.requestUpdate();const e=+this._min,a=+this._max;if(k(e,a)>864e5){const t=+this._focusedDate;let r=t;t<e&&(r=e),t>a&&(r=a),this.value=V(new Date(r))}}if(e.has("_startView")||e.has("startView")){if("yearList"===t){const e=48*(this._selectedDate.getUTCFullYear()-this._min.getUTCFullYear()-2);!function(e,t){if(null==e.scrollTo){const{top:a,left:r}=t||{};e.scrollTop=a||0,e.scrollLeft=r||0}else e.scrollTo(t)}(this._yearViewFullList,{top:e,left:0})}if("calendar"===t&&null==this._tracker){const e=this.calendarsContainer;let t=!1,a=!1,r=!1;if(e){const i={down:()=>{r||(t=!0,this._dx=0)},move:(i,n)=>{if(r||!t)return;const o=this._dx,s=o<0&&L(e,"has-max-date")||o>0&&L(e,"has-min-date");!s&&Math.abs(o)>0&&t&&(a=!0,e.style.transform=`translateX(${W(o)}px)`),this._dx=s?0:o+(i.x-n.x)},up:async(i,n,o)=>{if(t&&a){const i=this._dx,n=e.getBoundingClientRect().width/3,o=Math.abs(i)>Number(this.dragRatio)*n,s=350,l="cubic-bezier(0, 0, .4, 1)",d=o?W(n*(i<0?-1:1)):0;r=!0,await async function(e,t){const{hasNativeWebAnimation:a=!1,keyframes:r=[],options:i={duration:100}}=t||{};if(Array.isArray(r)&&r.length)return new Promise((t=>{if(a)e.animate(r,i).onfinish=()=>t();else{const[,a]=r||[],n=()=>{e.removeEventListener("transitionend",n),t()};e.addEventListener("transitionend",n),e.style.transitionDuration=`${i.duration}ms`,i.easing&&(e.style.transitionTimingFunction=i.easing),Object.keys(a).forEach((t=>{t&&(e.style[t]=a[t])}))}}))}(e,{hasNativeWebAnimation:this._hasNativeWebAnimation,keyframes:[{transform:`translateX(${i}px)`},{transform:`translateX(${d}px)`}],options:{duration:s,easing:l}}),o&&this._updateMonth(i<0?"next":"previous").handleEvent(),t=a=r=!1,this._dx=-1/0,e.removeAttribute("style"),x(this,"datepicker-animation-finished")}else t&&(this._updateFocusedDate(o),t=a=!1,this._dx=-1/0)}};this._tracker=new j(e,i)}}e.get("_startView")&&"calendar"===t&&this._focusElement('[part="year-selector"]')}this._updatingDateWithKey&&(this._focusElement('[part="calendars"]:nth-of-type(2) .day--focused'),this._updatingDateWithKey=!1)}_focusElement(e){const t=this.shadowRoot.querySelector(e);t&&t.focus()}_renderHeaderSelectorButton(){const{yearFormat:e,dateFormat:t}=this._formatters,a="calendar"===this.startView,r=this._focusedDate,i=t(r),n=e(r);return u.dy`
    <button
      class="${(0,_.$)({"btn__year-selector":!0,selected:!a})}"
      type="button"
      part="year-selector"
      data-view="${"yearList"}"
      @click="${this._updateView("yearList")}">${n}</button>

    <div class="datepicker-toolbar" part="toolbar">
      <button
        class="${(0,_.$)({"btn__calendar-selector":!0,selected:a})}"
        type="button"
        part="calendar-selector"
        data-view="${"calendar"}"
        @click="${this._updateView("calendar")}">${i}</button>
    </div>
    `}_renderDatepickerYearList(){const{yearFormat:e}=this._formatters,t=this._focusedDate.getUTCFullYear();return u.dy`
    <div class="datepicker-body__year-list-view" part="year-list-view">
      <div class="year-list-view__full-list" part="year-list" @click="${this._updateYear}">
      ${this._yearList.map((a=>u.dy`<button
        class="${(0,_.$)({"year-list-view__list-item":!0,"year--selected":t===a})}"
        type="button"
        part="year"
        .year="${a}">${e(b(a,0,1))}</button>`))}</div>
    </div>
    `}_renderDatepickerCalendar(){const{longMonthYearFormat:e,dayFormat:t,fullDateFormat:a,longWeekdayFormat:r,narrowWeekdayFormat:i}=this._formatters,n=Y(this.disabledDays,Number),o=Y(this.disabledDates,E),s=this.showWeekNumber,l=this._focusedDate,d=this.firstDayOfWeek,c=E(),h=this._selectedDate,p=this._max,y=this._min,{calendars:b,disabledDaysSet:v,disabledDatesSet:g,weekdays:k}=N({dayFormat:t,fullDateFormat:a,longWeekdayFormat:r,narrowWeekdayFormat:i,firstDayOfWeek:d,disabledDays:n,disabledDates:o,locale:this.locale,selectedDate:h,showWeekNumber:this.showWeekNumber,weekNumberType:this.weekNumberType,max:p,min:y,weekLabel:this.weekLabel}),x=!b[0].calendar.length,C=!b[2].calendar.length,T=k.map((e=>u.dy`<th
        class="calendar-weekday"
        part="calendar-weekday"
        role="columnheader"
        aria-label="${e.label}"
      >
        <div class="weekday" part="weekday">${e.value}</div>
      </th>`)),S=(0,m.r)(b,(e=>e.key),(({calendar:t},a)=>{if(!t.length)return u.dy`<div class="calendar-container" part="calendar"></div>`;const r=`calendarcaption${a}`,i=t[1][1].fullDate,n=1===a,o=n&&!this._isInVisibleMonth(l,h)?D({disabledDaysSet:v,disabledDatesSet:g,hasAltKey:!1,keyCode:36,focusedDate:l,selectedDate:h,minTime:+y,maxTime:+p}):l;return u.dy`
      <div class="calendar-container" part="calendar">
        <table class="calendar-table" part="table" role="grid" aria-labelledby="${r}">
          <caption id="${r}">
            <div class="calendar-label" part="label">${i?e(i):""}</div>
          </caption>

          <thead role="rowgroup">
            <tr class="calendar-weekdays" part="weekdays" role="row">${T}</tr>
          </thead>

          <tbody role="rowgroup">${t.map((e=>u.dy`<tr role="row">${e.map(((e,t)=>{const{disabled:a,fullDate:r,label:i,value:d}=e;if(!r&&d&&s&&t<1)return u.dy`<th
                      class="full-calendar__day weekday-label"
                      part="calendar-day"
                      scope="row"
                      role="rowheader"
                      abbr="${i}"
                      aria-label="${i}"
                    >${d}</th>`;if(!d||!r)return u.dy`<td class="full-calendar__day day--empty" part="calendar-day"></td>`;const h=+new Date(r),p=+l===h,y=n&&o.getUTCDate()===Number(d);return u.dy`
                  <td
                    tabindex="${y?"0":"-1"}"
                    class="${(0,_.$)({"full-calendar__day":!0,"day--disabled":a,"day--today":+c===h,"day--focused":!a&&p})}"
                    part="calendar-day"
                    role="gridcell"
                    aria-disabled="${a?"true":"false"}"
                    aria-label="${i}"
                    aria-selected="${p?"true":"false"}"
                    .fullDate="${r}"
                    .day="${d}"
                  >
                    <div class="calendar-day" part="day">${d}</div>
                  </td>
                  `}))}</tr>`))}</tbody>
        </table>
      </div>
      `}));return this._disabledDatesSet=g,this._disabledDaysSet=v,u.dy`
    <div class="datepicker-body__calendar-view" part="calendar-view">
      <div class="calendar-view__month-selector" part="month-selectors">
        <div class="month-selector-container">${x?null:u.dy`
          <button
            class="btn__month-selector"
            type="button"
            part="month-selector"
            aria-label="Previous month"
            @click="${this._updateMonth("previous")}"
          >${f}</button>
        `}</div>

        <div class="month-selector-container">${C?null:u.dy`
          <button
            class="btn__month-selector"
            type="button"
            part="month-selector"
            aria-label="Next month"
            @click="${this._updateMonth("next")}"
          >${w}</button>
        `}</div>
      </div>

      <div
        class="${(0,_.$)({"calendars-container":!0,"has-min-date":x,"has-max-date":C})}"
        part="calendars"
        @keyup="${this._updateFocusedDateWithKeyboard}"
      >${S}</div>
    </div>
    `}_updateView(e){return O((()=>{"calendar"===e&&(this._selectedDate=this._lastSelectedDate=new Date(P(this._focusedDate,this._min,this._max))),this._startView=e}))}_updateMonth(e){return O((()=>{if(null==this.calendarsContainer)return this.updateComplete;const t=this._lastSelectedDate||this._selectedDate,a=this._min,r=this._max,i="previous"===e,n=b(t.getUTCFullYear(),t.getUTCMonth()+(i?-1:1),1),o=n.getUTCFullYear(),s=n.getUTCMonth(),l=a.getUTCFullYear(),d=a.getUTCMonth(),c=r.getUTCFullYear(),h=r.getUTCMonth();return o<l||o<=l&&s<d||(o>c||o>=c&&s>h)||(this._lastSelectedDate=n,this._selectedDate=this._lastSelectedDate),this.updateComplete}))}_updateYear(e){const t=C(e,(e=>L(e,"year-list-view__list-item")));if(null==t)return;const a=P(new Date(this._focusedDate).setUTCFullYear(+t.year),this._min,this._max);this._selectedDate=this._lastSelectedDate=new Date(a),this._focusedDate=new Date(a),this._startView="calendar"}_updateFocusedDate(e){const t=C(e,(e=>L(e,"full-calendar__day")));null==t||["day--empty","day--disabled","day--focused","weekday-label"].some((e=>L(t,e)))||(this._focusedDate=new Date(t.fullDate),x(this,"datepicker-value-updated",{isKeypress:!1,value:this.value}))}_updateFocusedDateWithKeyboard(e){const t=e.keyCode;if(13===t||32===t)return x(this,"datepicker-value-updated",{keyCode:t,isKeypress:!0,value:this.value}),void(this._focusedDate=new Date(this._selectedDate));if(9===t||!c.has(t))return;const a=this._selectedDate,r=D({keyCode:t,selectedDate:a,disabledDatesSet:this._disabledDatesSet,disabledDaysSet:this._disabledDaysSet,focusedDate:this._focusedDate,hasAltKey:e.altKey,maxTime:+this._max,minTime:+this._min});this._isInVisibleMonth(r,a)||(this._selectedDate=this._lastSelectedDate=r),this._focusedDate=r,this._updatingDateWithKey=!0,x(this,"datepicker-value-updated",{keyCode:t,isKeypress:!0,value:this.value})}_isInVisibleMonth(e,t){const a=e.getUTCFullYear(),r=e.getUTCMonth(),i=t.getUTCFullYear(),n=t.getUTCMonth();return a===i&&r===n}get calendarsContainer(){return this.shadowRoot.querySelector(".calendars-container")}}B.styles=[g,v,u.iv`
    :host {
      width: 312px;
      /** NOTE: Magic number as 16:9 aspect ratio does not look good */
      /* height: calc((var(--app-datepicker-width) / .66) - var(--app-datepicker-footer-height, 56px)); */
      background-color: var(--app-datepicker-bg-color, #fff);
      color: var(--app-datepicker-color, #000);
      border-radius:
        var(--app-datepicker-border-top-left-radius, 0)
        var(--app-datepicker-border-top-right-radius, 0)
        var(--app-datepicker-border-bottom-right-radius, 0)
        var(--app-datepicker-border-bottom-left-radius, 0);
      contain: content;
      overflow: hidden;
    }
    :host([landscape]) {
      display: flex;

      /** <iphone-5-landscape-width> - <standard-side-margin-width> */
      min-width: calc(568px - 16px * 2);
      width: calc(568px - 16px * 2);
    }

    .datepicker-header + .datepicker-body {
      border-top: 1px solid var(--app-datepicker-separator-color, #ddd);
    }
    :host([landscape]) > .datepicker-header + .datepicker-body {
      border-top: none;
      border-left: 1px solid var(--app-datepicker-separator-color, #ddd);
    }

    .datepicker-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: relative;
      padding: 16px 24px;
    }
    :host([landscape]) > .datepicker-header {
      /** :this.<one-liner-month-day-width> + :this.<side-padding-width> */
      min-width: calc(14ch + 24px * 2);
    }

    .btn__year-selector,
    .btn__calendar-selector {
      color: var(--app-datepicker-selector-color, rgba(0, 0, 0, .55));
      cursor: pointer;
      /* outline: none; */
    }
    .btn__year-selector.selected,
    .btn__calendar-selector.selected {
      color: currentColor;
    }

    /**
      * NOTE: IE11-only fix. This prevents formatted focused date from overflowing the container.
      */
    .datepicker-toolbar {
      width: 100%;
    }

    .btn__year-selector {
      font-size: 16px;
      font-weight: 700;
    }
    .btn__calendar-selector {
      font-size: 36px;
      font-weight: 700;
      line-height: 1;
    }

    .datepicker-body {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .datepicker-body__calendar-view {
      min-height: 56px;
    }

    .calendar-view__month-selector {
      display: flex;
      align-items: center;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 8px;
      z-index: 1;
    }

    .month-selector-container {
      max-height: 56px;
      height: 100%;
    }
    .month-selector-container + .month-selector-container {
      margin: 0 0 0 auto;
    }

    .btn__month-selector {
      padding: calc((56px - 24px) / 2);
      /**
        * NOTE: button element contains no text, only SVG.
        * No extra height will incur with such setting.
        */
      line-height: 0;
    }
    .btn__month-selector > svg {
      fill: currentColor;
    }

    .calendars-container {
      display: flex;
      justify-content: center;

      position: relative;
      top: 0;
      left: calc(-100%);
      width: calc(100% * 3);
      transform: translateZ(0);
      will-change: transform;
      /**
        * NOTE: Required for Pointer Events API to work on touch devices.
        * Native \`pan-y\` action will be fired by the browsers since we only care about the
        * horizontal direction. This is great as vertical scrolling still works even when touch
        * event happens on a datepicker's calendar.
        */
      touch-action: pan-y;
      /* outline: none; */
    }

    .year-list-view__full-list {
      max-height: calc(48px * 7);
      overflow-y: auto;

      scrollbar-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35)) rgba(0, 0, 0, 0);
      scrollbar-width: thin;
    }
    .year-list-view__full-list::-webkit-scrollbar {
      width: 8px;
      background-color: rgba(0, 0, 0, 0);
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb {
      background-color: var(--app-datepicker-scrollbar-thumb-bg-color, rgba(0, 0, 0, .35));
      border-radius: 50px;
    }
    .year-list-view__full-list::-webkit-scrollbar-thumb:hover {
      background-color: var(--app-datepicker-scrollbar-thumb-hover-bg-color, rgba(0, 0, 0, .5));
    }

    .calendar-weekdays > th,
    .weekday-label {
      color: var(--app-datepicker-weekday-color, rgba(0, 0, 0, .55));
      font-weight: 400;
      transform: translateZ(0);
      will-change: transform;
    }

    .calendar-container,
    .calendar-label,
    .calendar-table {
      width: 100%;
    }

    .calendar-container {
      position: relative;
      padding: 0 16px 16px;
    }

    .calendar-table {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;

      border-collapse: collapse;
      border-spacing: 0;
      text-align: center;
    }

    .calendar-label {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 56px;
      font-weight: 500;
      text-align: center;
    }

    .calendar-weekday,
    .full-calendar__day {
      position: relative;
      width: calc(100% / 7);
      height: 0;
      padding: calc(100% / 7 / 2) 0;
      outline: none;
      text-align: center;
    }
    .full-calendar__day:not(.day--disabled):focus {
      outline: #000 dotted 1px;
      outline: -webkit-focus-ring-color auto 1px;
    }
    :host([showweeknumber]) .calendar-weekday,
    :host([showweeknumber]) .full-calendar__day {
      width: calc(100% / 8);
      padding-top: calc(100% / 8);
      padding-bottom: 0;
    }
    :host([showweeknumber]) th.weekday-label {
      padding: 0;
    }

    /**
      * NOTE: Interesting fact! That is ::after will trigger paint when dragging. This will trigger
      * layout and paint on **ONLY** affected nodes. This is much cheaper as compared to rendering
      * all :::after of all calendar day elements. When dragging the entire calendar container,
      * because of all layout and paint trigger on each and every ::after, this becomes a expensive
      * task for the browsers especially on low-end devices. Even though animating opacity is much
      * cheaper, the technique does not work here. Adding 'will-change' will further reduce overall
      * painting at the expense of memory consumption as many cells in a table has been promoted
      * a its own layer.
      */
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      transform: translateZ(0);
      will-change: transform;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label).day--focused::after,
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-accent-color, #1a73e8);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
    }
    .full-calendar__day:not(.day--empty):not(.day--disabled):not(.weekday-label) {
      cursor: pointer;
      pointer-events: auto;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .full-calendar__day.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after,
    .full-calendar__day.day--today.day--focused:not(.day--empty):not(.day--disabled):not(.weekday-label)::after {
      opacity: 1;
    }

    .calendar-weekday > .weekday,
    .full-calendar__day > .calendar-day {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      color: currentColor;
      font-size: 14px;
      pointer-events: none;
      z-index: 1;
    }
    .full-calendar__day.day--today {
      color: var(--app-datepicker-accent-color, #1a73e8);
    }
    .full-calendar__day.day--focused,
    .full-calendar__day.day--today.day--focused {
      color: var(--app-datepicker-focused-day-color, #fff);
    }
    .full-calendar__day.day--empty,
    .full-calendar__day.weekday-label,
    .full-calendar__day.day--disabled > .calendar-day {
      pointer-events: none;
    }
    .full-calendar__day.day--disabled:not(.day--today) {
      color: var(--app-datepicker-disabled-day-color, rgba(0, 0, 0, .55));
    }

    .year-list-view__list-item {
      position: relative;
      width: 100%;
      padding: 12px 16px;
      text-align: center;
      /** NOTE: Reduce paint when hovering and scrolling, but this increases memory usage */
      /* will-change: opacity; */
      /* outline: none; */
    }
    .year-list-view__list-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--app-datepicker-focused-year-bg-color, #000);
      opacity: 0;
      pointer-events: none;
    }
    .year-list-view__list-item:focus::after {
      opacity: .05;
    }
    .year-list-view__list-item.year--selected {
      color: var(--app-datepicker-accent-color, #1a73e8);
      font-size: 24px;
      font-weight: 500;
    }

    @media (any-hover: hover) {
      .btn__month-selector:hover,
      .year-list-view__list-item:hover {
        cursor: pointer;
      }
      .full-calendar__day:not(.day--empty):not(.day--disabled):not(.day--focused):not(.weekday-label):hover::after {
        opacity: .15;
      }
      .year-list-view__list-item:hover::after {
        opacity: .05;
      }
    }

    @supports (background: -webkit-canvas(squares)) {
      .calendar-container {
        padding: 56px 16px 16px;
      }

      table > caption {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        will-change: transform;
      }
    }
    `],(0,h.__decorate)([(0,p.Cb)({type:Number,reflect:!0})],B.prototype,"firstDayOfWeek",void 0),(0,h.__decorate)([(0,p.Cb)({type:Boolean,reflect:!0})],B.prototype,"showWeekNumber",void 0),(0,h.__decorate)([(0,p.Cb)({type:String,reflect:!0})],B.prototype,"weekNumberType",void 0),(0,h.__decorate)([(0,p.Cb)({type:Boolean,reflect:!0})],B.prototype,"landscape",void 0),(0,h.__decorate)([(0,p.Cb)({type:String,reflect:!0})],B.prototype,"startView",null),(0,h.__decorate)([(0,p.Cb)({type:String,reflect:!0})],B.prototype,"min",null),(0,h.__decorate)([(0,p.Cb)({type:String,reflect:!0})],B.prototype,"max",null),(0,h.__decorate)([(0,p.Cb)({type:String})],B.prototype,"value",null),(0,h.__decorate)([(0,p.Cb)({type:String})],B.prototype,"locale",void 0),(0,h.__decorate)([(0,p.Cb)({type:String})],B.prototype,"disabledDays",void 0),(0,h.__decorate)([(0,p.Cb)({type:String})],B.prototype,"disabledDates",void 0),(0,h.__decorate)([(0,p.Cb)({type:String})],B.prototype,"weekLabel",void 0),(0,h.__decorate)([(0,p.Cb)({type:Boolean})],B.prototype,"inline",void 0),(0,h.__decorate)([(0,p.Cb)({type:Number})],B.prototype,"dragRatio",void 0),(0,h.__decorate)([(0,p.Cb)({type:Date,attribute:!1})],B.prototype,"_selectedDate",void 0),(0,h.__decorate)([(0,p.Cb)({type:Date,attribute:!1})],B.prototype,"_focusedDate",void 0),(0,h.__decorate)([(0,p.Cb)({type:String,attribute:!1})],B.prototype,"_startView",void 0),(0,h.__decorate)([(0,p.IO)(".year-list-view__full-list")],B.prototype,"_yearViewFullList",void 0),(0,h.__decorate)([(0,p.IO)(".btn__year-selector")],B.prototype,"_buttonSelectorYear",void 0),(0,h.__decorate)([(0,p.IO)(".year-list-view__list-item")],B.prototype,"_yearViewListItem",void 0),(0,h.__decorate)([(0,p.hO)({passive:!0})],B.prototype,"_updateYear",null),(0,h.__decorate)([(0,p.hO)({passive:!0})],B.prototype,"_updateFocusedDateWithKeyboard",null),I="app-datepicker",z=B,window.customElements&&!window.customElements.get(I)&&window.customElements.define(I,z)}}]);
//# sourceMappingURL=96d7e817.js.map