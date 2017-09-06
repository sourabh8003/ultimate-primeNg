/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './dialog';
import * as i2 from '@angular/common';
import * as i3 from '../common/shared';
import * as i4 from '../dom/domhandler';
export const DialogModuleNgFactory:i0.NgModuleFactory<i1.DialogModule> = i0.ɵcmf(i1.DialogModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.SharedModule,i3.SharedModule,
          ([] as any[])),i0.ɵmpd(512,i1.DialogModule,i1.DialogModule,([] as any[]))]);
    });
const styles_Dialog:any[] = ([] as any[]);
export const RenderType_Dialog:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Dialog,
    data:{'animation':[{type:7,name:'dialogState',definitions:[{type:0,name:'hidden',
        styles:{type:6,styles:{opacity:0},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'visible',styles:{type:6,styles:{opacity:1},offset:(null as any)},
            options:(undefined as any)},{type:1,expr:'visible => hidden',animation:{type:4,
            styles:(null as any),timings:'400ms ease-in'},options:(null as any)},{type:1,
            expr:'hidden => visible',animation:{type:4,styles:(null as any),timings:'400ms ease-out'},
            options:(null as any)}],options:{}}]}});
function View_Dialog_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'ui-dialog-title']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.header;
    _ck(_v,1,0,currVal_0);
  });
}
function View_Dialog_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'span',[['class',
      'ui-dialog-title']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),i0.ɵncd((null as any),
      0),(_l()(),i0.ɵted((null as any),['\n                ']))],(null as any),(null as any));
}
function View_Dialog_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'a',[['href','#'],
      ['role','button']],(null as any),[[(null as any),'click'],[(null as any),'mousedown']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.close($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('mousedown' === en)) {
          const pd_1:any = ((<any>_co.onCloseMouseDown($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngClass:[0,'ngClass']},(null as any)),
      i0.ɵpod({'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':0}),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'span',[['class','fa fa-fw fa-close']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                ']))],(_ck,_v) => {
    const currVal_0:any = _ck(_v,2,0,true);
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
function View_Dialog_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,[[2,0],['titlebar',1]],(null as any),10,'div',
      [['class','ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top']],
      (null as any),[[(null as any),'mousedown'],[(null as any),'mouseup']],(_v,en,
          $event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('mousedown' === en)) {
          const pd_0:any = ((<any>_co.initDrag($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('mouseup' === en)) {
          const pd_1:any = ((<any>_co.endDrag($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Dialog_2)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Dialog_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Dialog_4)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.header;
        _ck(_v,3,0,currVal_0);
        const currVal_1:any = _co.headerFacet;
        _ck(_v,6,0,currVal_1);
        const currVal_2:any = _co.closable;
        _ck(_v,9,0,currVal_2);
      },(null as any));
}
function View_Dialog_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'ui-dialog-footer ui-widget-content']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      i0.ɵncd((null as any),2),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (null as any),(null as any));
}
function View_Dialog_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',[['class',
      'ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se'],
      ['style','z-index: 90;']],(null as any),[[(null as any),'mousedown']],(_v,en,
      $event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('mousedown' === en)) {
      const pd_0:any = ((<any>_co.initResize($event)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any)))],(null as any),(null as any));
}
export function View_Dialog_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(402653184,1,{containerViewChild:0}),i0.ɵqud(671088640,
      2,{headerViewChild:0}),i0.ɵqud(402653184,3,{contentViewChild:0}),(_l()(),i0.ɵted((null as any),
      ['\n        '])),(_l()(),i0.ɵeld(0,[[1,0],['container',1]],(null as any),19,
      'div',([] as any[]),[[4,'display',(null as any)],[4,'width','px'],[4,'height',
          'px'],[4,'minWidth','px'],[24,'@dialogState',0]],[[(null as any),'mousedown']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.Dialog = _v.component;
        if (('mousedown' === en)) {
          const pd_0:any = ((<any>_co.moveOnTop()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':0,
      'ui-dialog-rtl':1,'ui-dialog-draggable':2}),i0.ɵdid(278528,(null as any),0,i2.NgStyle,
      [i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_Dialog_1)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵeld(0,[[3,0],['content',1]],(null as any),4,'div',[['class','ui-dialog-content ui-widget-content']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n                '])),i0.ɵncd((null as any),1),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Dialog_5)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Dialog_6)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Dialog = _v.component;
    const currVal_5:any = _co.styleClass;
    const currVal_6:any = _ck(_v,6,0,true,_co.rtl,_co.draggable);
    _ck(_v,5,0,currVal_5,currVal_6);
    const currVal_7:any = _co.style;
    _ck(_v,7,0,currVal_7);
    const currVal_8:any = _co.showHeader;
    _ck(_v,10,0,currVal_8);
    const currVal_9:any = _co.contentStyle;
    _ck(_v,13,0,currVal_9);
    const currVal_10:any = _co.footerFacet;
    _ck(_v,19,0,currVal_10);
    const currVal_11:any = _co.resizable;
    _ck(_v,22,0,currVal_11);
  },(_ck,_v) => {
    var _co:i1.Dialog = _v.component;
    const currVal_0:any = (_co.visible? 'block': 'none');
    const currVal_1:any = _co.width;
    const currVal_2:any = _co.height;
    const currVal_3:any = _co.minWidth;
    const currVal_4:any = (_co.visible? 'visible': 'hidden');
    _ck(_v,4,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4);
  });
}
export function View_Dialog_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p-dialog',([] as any[]),
      (null as any),(null as any),(null as any),View_Dialog_0,RenderType_Dialog)),
      i0.ɵprd(512,(null as any),i4.DomHandler,i4.DomHandler,([] as any[])),i0.ɵdid(12763136,
          (null as any),2,i1.Dialog,[i0.ElementRef,i4.DomHandler,i0.Renderer2],(null as any),
          (null as any)),i0.ɵqud(335544320,1,{headerFacet:0}),i0.ɵqud(335544320,2,
          {footerFacet:0})],(null as any),(null as any));
}
export const DialogNgFactory:i0.ComponentFactory<i1.Dialog> = i0.ɵccf('p-dialog',i1.Dialog,
    View_Dialog_Host_0,{header:'header',draggable:'draggable',resizable:'resizable',
        minWidth:'minWidth',minHeight:'minHeight',width:'width',height:'height',positionLeft:'positionLeft',
        positionTop:'positionTop',contentStyle:'contentStyle',modal:'modal',closeOnEscape:'closeOnEscape',
        dismissableMask:'dismissableMask',rtl:'rtl',closable:'closable',responsive:'responsive',
        appendTo:'appendTo',style:'style',styleClass:'styleClass',showHeader:'showHeader',
        breakpoint:'breakpoint',blockScroll:'blockScroll',visible:'visible'},{onShow:'onShow',
        onHide:'onHide',visibleChange:'visibleChange'},['p-header','*','p-footer']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnRzIiwibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cudHMuRGlhbG9nLmh0bWwiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy50cy5EaWFsb2dfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ0NsYXNzXT1cInsndWktZGlhbG9nIHVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1jb3JuZXItYWxsIHVpLXNoYWRvdyc6dHJ1ZSwndWktZGlhbG9nLXJ0bCc6cnRsLCd1aS1kaWFsb2ctZHJhZ2dhYmxlJzpkcmFnZ2FibGV9XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiXG4gICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJ2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ1wiIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCIgW3N0eWxlLm1pbldpZHRoLnB4XT1cIm1pbldpZHRoXCIgKG1vdXNlZG93bik9XCJtb3ZlT25Ub3AoKVwiIFtAZGlhbG9nU3RhdGVdPVwidmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCI+XG4gICAgICAgICAgICA8ZGl2ICN0aXRsZWJhciBjbGFzcz1cInVpLWRpYWxvZy10aXRsZWJhciB1aS13aWRnZXQtaGVhZGVyIHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItdG9wXCJcbiAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cImluaXREcmFnKCRldmVudClcIiAobW91c2V1cCk9XCJlbmREcmFnKCRldmVudClcIiAqbmdJZj1cInNob3dIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLWRpYWxvZy10aXRsZVwiICpuZ0lmPVwiaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLWRpYWxvZy10aXRsZVwiICpuZ0lmPVwiaGVhZGVyRmFjZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiY2xvc2FibGVcIiBbbmdDbGFzc109XCJ7J3VpLWRpYWxvZy10aXRsZWJhci1pY29uIHVpLWRpYWxvZy10aXRsZWJhci1jbG9zZSB1aS1jb3JuZXItYWxsJzp0cnVlfVwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJjbG9zZSgkZXZlbnQpXCIgKG1vdXNlZG93bik9XCJvbkNsb3NlTW91c2VEb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1mdyBmYS1jbG9zZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgI2NvbnRlbnQgY2xhc3M9XCJ1aS1kaWFsb2ctY29udGVudCB1aS13aWRnZXQtY29udGVudFwiIFtuZ1N0eWxlXT1cImNvbnRlbnRTdHlsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWRpYWxvZy1mb290ZXIgdWktd2lkZ2V0LWNvbnRlbnRcIiAqbmdJZj1cImZvb3RlckZhY2V0XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJyZXNpemFibGVcIiBjbGFzcz1cInVpLXJlc2l6YWJsZS1oYW5kbGUgdWktcmVzaXphYmxlLXNlIHVpLWljb24gdWktaWNvbi1ncmlwc21hbGwtZGlhZ29uYWwtc2VcIiBzdHlsZT1cInotaW5kZXg6IDkwO1wiXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJpbml0UmVzaXplKCRldmVudClcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHAtZGlhbG9nPjwvcC1kaWFsb2c+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNLZ0I7TUFBQTtNQUFBLGdCQUE2Qzs7O0lBQUE7SUFBQTs7OztvQkFDN0M7TUFBQTtNQUFBLGdCQUFrRCxrRUFDOUM7TUFBQSxHQUEyQzs7O29CQUUvQztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQStIO1VBQUE7VUFBQTtRQUFBO1FBQXdCO1VBQUE7VUFBQTtRQUFBO1FBQXZKO01BQUEsdUNBQUE7a0RBQUE7YUFBb0I7TUFBMEssMkRBQzFMO1VBQUE7VUFBQSwwREFBdUM7VUFBQTtJQUR2QjtJQUFwQixXQUFvQixTQUFwQjs7OztvQkFOSjtNQUFBO01BQUE7Z0JBQUE7UUFBQTtRQUFBO1FBQ0k7VUFBQTtVQUFBO1FBQUE7UUFBK0I7VUFBQTtVQUFBO1FBQUE7UUFEbkM7TUFBQSxnQ0FDa0Y7TUFDOUU7YUFBQTtVQUFBLHdCQUE4RDtNQUM5RDthQUFBO1VBQUEsd0JBRU87TUFDUDthQUFBO1VBQUEsd0JBRUk7OztRQU4wQjtRQUE5QixXQUE4QixTQUE5QjtRQUM4QjtRQUE5QixXQUE4QixTQUE5QjtRQUdHO1FBQUgsV0FBRyxTQUFIOzs7O29CQU9KO01BQUE7TUFBQSw4QkFBb0U7YUFDaEUsa0JBQTJDOzs7O29CQUUvQztNQUFBO01BQUE7WUFBQTtJQUFBO0lBQUE7SUFDSTtNQUFBO01BQUE7SUFBQTtJQURKO0VBQUE7Ozs7dUVBbkJaO01BQUEsaUJBQ1E7TUFBQTtVQUFBO01BQUE7UUFBQTtRQUFBO1FBQ29JO1VBQUE7VUFBQTtRQUFBO1FBRHBJO01BQUEsdUNBQUE7a0RBQUE7TUFBQSxrQ0FBZ0I7TUFBQSxtREFBaEI7TUFBQTtNQUM4TSxtREFDMU07VUFBQSxtRUFBQTtVQUFBO1VBQUEsZUFTTSxtREFDTjtpQkFBQTtjQUFBO2FBQUE7cUJBQUEseUNBQW1GO1VBQUEsZ0NBQy9FLGtCQUF5QjtVQUFBLHFCQUN2QjtNQUNOO2FBQUE7VUFBQSx3QkFFTTtNQUNOO2FBQUE7VUFBQSx3QkFDMkMsK0NBQ3pDO2lCQUFBOztJQXBCbUs7SUFBeko7SUFBaEIsV0FBeUssVUFBekosU0FBaEI7SUFBdUo7SUFBdkosV0FBdUosU0FBdko7SUFHbUU7SUFEL0QsWUFDK0QsU0FEL0Q7SUFVMEQ7SUFBMUQsWUFBMEQsU0FBMUQ7SUFHZ0Q7SUFBaEQsWUFBZ0QsVUFBaEQ7SUFHSztJQUFMLFlBQUssVUFBTDs7O0lBakJBO0lBQTZDO0lBQXlCO0lBQTJCO0lBQXlEO0lBRDlKLFdBQ0ksVUFBNkMsVUFBeUIsVUFBMkIsVUFBeUQsU0FEOUo7Ozs7b0JDRFI7TUFBQTthQUFBLHFFQUFBO1VBQUE7VUFBQTtVQUFBOzs7Ozs7Ozs7In0=
