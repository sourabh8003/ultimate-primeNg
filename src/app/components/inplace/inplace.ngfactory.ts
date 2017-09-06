/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './inplace';
import * as i2 from '@angular/common';
import * as i3 from '../button/button';
import * as i4 from '../dom/domhandler';
export const InplaceModuleNgFactory:i0.NgModuleFactory<i1.InplaceModule> = i0.ɵcmf(i1.InplaceModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.ButtonModule,i3.ButtonModule,
          ([] as any[])),i0.ɵmpd(512,i1.InplaceModule,i1.InplaceModule,([] as any[]))]);
    });
const styles_Inplace:any[] = ([] as any[]);
export const RenderType_Inplace:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Inplace,
    data:{}});
function View_Inplace_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'div',[['class',
      'ui-inplace-display']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.activate($event)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0}),(_l()(),i0.ɵted((null as any),
      ['\n                '])),i0.ɵncd((null as any),0),(_l()(),i0.ɵted((null as any),
      ['\n            ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'ui-inplace-display';
    const currVal_1:any = _ck(_v,2,0,_co.disabled);
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_Inplace_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'button',[['icon',
      'fa-close'],['pButton',''],['type','button']],(null as any),[[(null as any),
      'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.deactivate($event)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵprd(512,(null as any),i4.DomHandler,i4.DomHandler,
      ([] as any[])),i0.ɵdid(4341760,(null as any),0,i3.Button,[i0.ElementRef,i4.DomHandler],
      {icon:[0,'icon']},(null as any))],(_ck,_v) => {
    const currVal_0:any = 'fa-close';
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
function View_Inplace_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'div',[['class',
      'ui-inplace-content']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),i0.ɵncd((null as any),
      1),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_Inplace_3)),i0.ɵdid(16384,(null as any),
      0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.closable;
    _ck(_v,5,0,currVal_0);
  },(null as any));
}
export function View_Inplace_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),9,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),
      0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_Inplace_1)),i0.ɵdid(16384,(null as any),
      0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_Inplace_2)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    ']))],(_ck,_v) => {
    var _co:i1.Inplace = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-inplace ui-widget';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_3:boolean = !_co.active;
    _ck(_v,6,0,currVal_3);
    const currVal_4:any = _co.active;
    _ck(_v,9,0,currVal_4);
  },(null as any));
}
export function View_Inplace_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-inplace',([] as any[]),
      (null as any),(null as any),(null as any),View_Inplace_0,RenderType_Inplace)),
      i0.ɵdid(49152,(null as any),0,i1.Inplace,([] as any[]),(null as any),(null as any))],
      (null as any),(null as any));
}
export const InplaceNgFactory:i0.ComponentFactory<i1.Inplace> = i0.ɵccf('p-inplace',
    i1.Inplace,View_Inplace_Host_0,{active:'active',closable:'closable',disabled:'disabled',
        style:'style',styleClass:'styleClass'},{onActivate:'onActivate',onDeactivate:'onDeactivate'},
    ['[pInplaceDisplay]','[pInplaceContent]']);
const styles_InplaceDisplay:any[] = ([] as any[]);
export const RenderType_InplaceDisplay:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_InplaceDisplay,data:{}});
export function View_InplaceDisplay_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵncd((null as any),0)],(null as any),(null as any));
}
export function View_InplaceDisplay_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-inplaceDisplay',
      ([] as any[]),(null as any),(null as any),(null as any),View_InplaceDisplay_0,
      RenderType_InplaceDisplay)),i0.ɵdid(49152,(null as any),0,i1.InplaceDisplay,
      ([] as any[]),(null as any),(null as any))],(null as any),(null as any));
}
export const InplaceDisplayNgFactory:i0.ComponentFactory<i1.InplaceDisplay> = i0.ɵccf('p-inplaceDisplay',
    i1.InplaceDisplay,View_InplaceDisplay_Host_0,{},{},['*']);
const styles_InplaceContent:any[] = ([] as any[]);
export const RenderType_InplaceContent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_InplaceContent,data:{}});
export function View_InplaceContent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵncd((null as any),0)],(null as any),(null as any));
}
export function View_InplaceContent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-inplaceContent',
      ([] as any[]),(null as any),(null as any),(null as any),View_InplaceContent_0,
      RenderType_InplaceContent)),i0.ɵdid(49152,(null as any),0,i1.InplaceContent,
      ([] as any[]),(null as any),(null as any))],(null as any),(null as any));
}
export const InplaceContentNgFactory:i0.ComponentFactory<i1.InplaceContent> = i0.ɵccf('p-inplaceContent',
    i1.InplaceContent,View_InplaceContent_Host_0,{},{},['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9pbnBsYWNlL2lucGxhY2UubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL2lucGxhY2UvaW5wbGFjZS50cyIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9pbnBsYWNlL2lucGxhY2UudHMuSW5wbGFjZS5odG1sIiwibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL2lucGxhY2UvaW5wbGFjZS50cy5JbnBsYWNlX0hvc3QuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9pbnBsYWNlL2lucGxhY2UudHMuSW5wbGFjZURpc3BsYXkuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9pbnBsYWNlL2lucGxhY2UudHMuSW5wbGFjZURpc3BsYXlfSG9zdC5odG1sIiwibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL2lucGxhY2UvaW5wbGFjZS50cy5JbnBsYWNlQ29udGVudC5odG1sIiwibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL2lucGxhY2UvaW5wbGFjZS50cy5JbnBsYWNlQ29udGVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS1pbnBsYWNlIHVpLXdpZGdldCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktaW5wbGFjZS1kaXNwbGF5XCIgKGNsaWNrKT1cImFjdGl2YXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtZGlzYWJsZWQnOmRpc2FibGVkfVwiICpuZ0lmPVwiIWFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltwSW5wbGFjZURpc3BsYXldXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktaW5wbGFjZS1jb250ZW50XCIgKm5nSWY9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcElucGxhY2VDb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpY29uPVwiZmEtY2xvc2VcIiBwQnV0dG9uIChjbGljayk9XCJkZWFjdGl2YXRlKCRldmVudClcIiAqbmdJZj1cImNsb3NhYmxlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHAtaW5wbGFjZT48L3AtaW5wbGFjZT4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+IiwiPHAtaW5wbGFjZURpc3BsYXk+PC9wLWlucGxhY2VEaXNwbGF5PiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iLCI8cC1pbnBsYWNlQ29udGVudD48L3AtaW5wbGFjZUNvbnRlbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFWTtNQUFBO0lBQUE7SUFBQTtJQUFnQztNQUFBO01BQUE7SUFBQTtJQUFoQztFQUFBLHVDQUFBO2tEQUFBO01BQUEsa0NBQ0ksMEJBQTJEO01BQUEsZ0NBQzNELGtCQUFvRDtNQUFBOztJQUZuRDtJQUNEO0lBREosV0FBSyxVQUNELFNBREo7Ozs7b0JBTUk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUE4QztNQUFBO01BQUE7SUFBQTtJQUE5QztFQUFBO01BQUEsc0JBQUE7TUFBQTtJQUFzQjtJQUF0QixXQUFzQixTQUF0Qjs7OztvQkFGSjtNQUFBO01BQUEsZ0JBQStDLDhEQUMzQztNQUFBLEdBQW9ELHVEQUNwRDtNQUFBLG9FQUFBO01BQUE7TUFBcUc7O0lBQTFCO0lBQTNFLFdBQTJFLFNBQTNFOzs7O29CQVJoQiwrQ0FDUTtNQUFBO01BQUEsbURBQUE7TUFBQTtVQUFBLHNEQUFBO01BQUE7TUFBQSxlQUErRSxtREFDM0U7TUFBQSxvRUFBQTtNQUFBO01BR00sbURBQ047VUFBQSxvRUFBQTtVQUFBO1VBQUEsZUFHTSwrQ0FDSjtVQUFBOztJQVRvRDtJQUFyRDtJQUFMLFdBQTBELFVBQXJELFNBQUw7SUFBd0M7SUFBeEMsV0FBd0MsU0FBeEM7SUFFbUQ7SUFEL0MsV0FDK0MsU0FEL0M7SUFJZ0M7SUFBaEMsV0FBZ0MsU0FBaEM7Ozs7b0JDTlo7TUFBQTthQUFBOzs7Ozs7Ozs7OzsyQkNBQTs7O29CQ0FBO01BQUE7K0JBQUEsVUFBQTtNQUFBOzs7Ozs7OzsyQkNBQTs7O29CQ0FBO01BQUE7K0JBQUEsVUFBQTtNQUFBOzs7In0=
