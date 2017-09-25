/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './terminal';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '../dom/domhandler';
import * as i5 from './terminalservice';
export const TerminalModuleNgFactory:i0.NgModuleFactory<i1.TerminalModule> = i0.ɵcmf(i1.TerminalModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i3.ɵi,
          i3.ɵi,([] as any[])),i0.ɵmpd(512,i2.CommonModule,i2.CommonModule,([] as any[])),
          i0.ɵmpd(512,i3.ɵba,i3.ɵba,([] as any[])),i0.ɵmpd(512,i3.FormsModule,i3.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i1.TerminalModule,i1.TerminalModule,([] as any[]))]);
    });
const styles_Terminal:any[] = ([] as any[]);
export const RenderType_Terminal:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Terminal,
    data:{}});
function View_Terminal_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.welcomeMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_Terminal_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
      i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),1,'span',[['class','ui-terminal-command']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',
      ''])),(_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',
      ''])),(_l()(),i0.ɵted((null as any),['\n                ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.prompt;
        _ck(_v,3,0,currVal_0);
        const currVal_1:any = _v.context.$implicit.text;
        _ck(_v,6,0,currVal_1);
        const currVal_2:any = _v.context.$implicit.response;
        _ck(_v,9,0,currVal_2);
      });
}
export function View_Terminal_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),25,'div',([] as any[]),(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.Terminal = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.focus(i0.ɵnov(_v,19))) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),0,i2.NgStyle,[i0.KeyValueDiffers,
      i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
      (null as any),View_Terminal_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'ui-terminal-content']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Terminal_2)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),11,'div',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,
          'span',[['class','ui-terminal-content-prompt']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵeld(0,[['in',1]],(null as any),5,'input',[['autocomplete','off'],['autofocus',
              ''],['class','ui-terminal-input'],['type','text']],[[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],
              [(null as any),'keydown'],[(null as any),'input'],[(null as any),'blur'],
              [(null as any),'compositionstart'],[(null as any),'compositionend']],
              (_v,en,$event) => {
                var ad:boolean = true;
                var _co:i1.Terminal = _v.component;
                if (('input' === en)) {
                  const pd_0:any = ((<any>i0.ɵnov(_v,20)._handleInput($event.target.value)) !== false);
                  ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                  const pd_1:any = ((<any>i0.ɵnov(_v,20).onTouched()) !== false);
                  ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                  const pd_2:any = ((<any>i0.ɵnov(_v,20)._compositionStart()) !== false);
                  ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                  const pd_3:any = ((<any>i0.ɵnov(_v,20)._compositionEnd($event.target.value)) !== false);
                  ad = (pd_3 && ad);
                }
                if (('ngModelChange' === en)) {
                  const pd_4:any = ((<any>(_co.command = $event)) !== false);
                  ad = (pd_4 && ad);
                }
                if (('keydown' === en)) {
                  const pd_5:any = ((<any>_co.handleCommand($event)) !== false);
                  ad = (pd_5 && ad);
                }
                return ad;
              },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i3.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i3.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i3.NgModel,[[8,(null as any)],
          [8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],{model:[0,
          'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),i3.NgControl,
          (null as any),[i3.NgModel]),i0.ɵdid(16384,(null as any),0,i3.NgControlStatus,
          [i3.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Terminal = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-terminal ui-widget ui-widget-content ui-corner-all';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_3:any = _co.welcomeMessage;
    _ck(_v,6,0,currVal_3);
    const currVal_4:any = _co.commands;
    _ck(_v,11,0,currVal_4);
    const currVal_13:any = _co.command;
    _ck(_v,22,0,currVal_13);
  },(_ck,_v) => {
    var _co:i1.Terminal = _v.component;
    const currVal_5:any = _co.prompt;
    _ck(_v,17,0,currVal_5);
    const currVal_6:any = i0.ɵnov(_v,24).ngClassUntouched;
    const currVal_7:any = i0.ɵnov(_v,24).ngClassTouched;
    const currVal_8:any = i0.ɵnov(_v,24).ngClassPristine;
    const currVal_9:any = i0.ɵnov(_v,24).ngClassDirty;
    const currVal_10:any = i0.ɵnov(_v,24).ngClassValid;
    const currVal_11:any = i0.ɵnov(_v,24).ngClassInvalid;
    const currVal_12:any = i0.ɵnov(_v,24).ngClassPending;
    _ck(_v,19,0,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12);
  });
}
export function View_Terminal_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p-terminal',([] as any[]),
      (null as any),(null as any),(null as any),View_Terminal_0,RenderType_Terminal)),
      i0.ɵprd(512,(null as any),i4.DomHandler,i4.DomHandler,([] as any[])),i0.ɵdid(12763136,
          (null as any),0,i1.Terminal,[i0.ElementRef,i4.DomHandler,i5.TerminalService],
          (null as any),(null as any))],(null as any),(null as any));
}
export const TerminalNgFactory:i0.ComponentFactory<i1.Terminal> = i0.ɵccf('p-terminal',
    i1.Terminal,View_Terminal_Host_0,{welcomeMessage:'welcomeMessage',prompt:'prompt',
        style:'style',styleClass:'styleClass',response:'response'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtaW5hbC90ZXJtaW5hbC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvdGVybWluYWwvdGVybWluYWwudHMiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvdGVybWluYWwvdGVybWluYWwudHMuVGVybWluYWwuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtaW5hbC90ZXJtaW5hbC50cy5UZXJtaW5hbF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS10ZXJtaW5hbCB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKGNsaWNrKT1cImZvY3VzKGluKVwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIndlbGNvbWVNZXNzYWdlXCI+e3t3ZWxjb21lTWVzc2FnZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktdGVybWluYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbW1hbmQgb2YgY29tbWFuZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twcm9tcHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS10ZXJtaW5hbC1jb21tYW5kXCI+e3tjb21tYW5kLnRleHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57e2NvbW1hbmQucmVzcG9uc2V9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktdGVybWluYWwtY29udGVudC1wcm9tcHRcIj57e3Byb21wdH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjaW4gdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNvbW1hbmRcIiBjbGFzcz1cInVpLXRlcm1pbmFsLWlucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgKGtleWRvd24pPVwiaGFuZGxlQ29tbWFuZCgkZXZlbnQpXCIgYXV0b2ZvY3VzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLXRlcm1pbmFsPjwvcC10ZXJtaW5hbD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDRVk7TUFBQSx3RUFBNEI7YUFBQTs7SUFBQTtJQUFBOzs7O29CQUV4QjtNQUFBLHdFQUFzQzthQUFBLDRDQUNsQztNQUFBO01BQUEsOEJBQU0sd0NBQWlCO2FBQUEsNENBQ3ZCO01BQUE7TUFBQSw0Q0FBa0M7TUFBQSxNQUF1QiwyREFDekQ7TUFBQTtNQUFBLDRDQUFLO01BQUEsTUFBMEI7OztRQUZ6QjtRQUFBO1FBQzRCO1FBQUE7UUFDN0I7UUFBQTs7OztvQkFQekIsK0NBQ1E7TUFBQTtVQUFBO1FBQUE7UUFBQTtRQUFnSDtVQUFBO1VBQUE7UUFBQTtRQUFoSDtNQUFBLHVDQUFBO2tEQUFBO01BQUEsa0NBQUE7K0JBQUEseUNBQW9JO01BQUEscUJBQ2hJO01BQUEsdUNBQUE7b0JBQUEsbUNBQW9EO01BQUEscUJBQ3BEO01BQUE7TUFBQSxnQkFBaUMsdURBQzdCO2FBQUE7YUFBQTs0QkFBQSx5Q0FJTTtVQUFBLHFCQUNKO01BQ047VUFBQSwwREFBSztVQUFBLHlCQUNEO1VBQUE7VUFBQSw0Q0FBeUM7VUFBQSxVQUFpQix1REFDMUQ7aUJBQUE7Y0FBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQXVCO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFtRTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBMUY7Y0FBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSwyQ0FBQTtVQUFBLG1DQUFBO1VBQUEsNENBQXNJO1VBQUEscUJBQ3BJLCtDQUNKO2lCQUFBOztJQWJxRjtJQUF0RjtJQUFMLFdBQTJGLFVBQXRGLFNBQUw7SUFBeUU7SUFBekUsV0FBeUUsU0FBekU7SUFDUztJQUFMLFdBQUssU0FBTDtJQUVTO0lBQUwsWUFBSyxTQUFMO0lBUXVCO0lBQXZCLFlBQXVCLFVBQXZCOzs7SUFEeUM7SUFBQTtJQUN6QztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEsd0VBQUE7Ozs7b0JDWmhCO01BQUE7YUFBQSxxRUFBQTtVQUFBO1VBQUE7Ozs7In0=