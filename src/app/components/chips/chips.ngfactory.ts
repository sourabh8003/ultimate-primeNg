/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './chips';
import * as i2 from '@angular/common';
import * as i3 from '../inputtext/inputtext';
import * as i4 from '../common/shared';
import * as i5 from '@angular/forms';
import * as i6 from '../dom/domhandler';
export const ChipsModuleNgFactory:i0.NgModuleFactory<i1.ChipsModule> = i0.ɵcmf(i1.ChipsModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.InputTextModule,i3.InputTextModule,
          ([] as any[])),i0.ɵmpd(512,i4.SharedModule,i4.SharedModule,([] as any[])),
          i0.ɵmpd(512,i1.ChipsModule,i1.ChipsModule,([] as any[]))]);
    });
const styles_Chips:any[] = ([] as any[]);
export const RenderType_Chips:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Chips,
    data:{}});
function View_Chips_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class',
      'ui-chips-token-icon fa fa-fw fa-close']],(null as any),[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.removeItem($event,(<any>_v.parent).context.index)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any)))],(null as any),(null as any));
}
function View_Chips_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'ui-chips-token-label']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = (_co.field? _co.resolveFieldData((<any>_v.parent).context.$implicit,
        _co.field): (<any>_v.parent).context.$implicit);
    _ck(_v,1,0,currVal_0);
  });
}
function View_Chips_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(0,(null as any),(null as any),0))],(null as any),
      (null as any));
}
function View_Chips_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_Chips_5)),i0.ɵdid(212992,(null as any),0,i4.TemplateWrapper,[i0.ViewContainerRef],
      {item:[0,'item'],templateRef:[1,'templateRef']},(null as any)),(_l()(),i0.ɵand(0,
      (null as any),(null as any),0))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = (<any>_v.parent).context.$implicit;
    const currVal_1:any = _co.itemTemplate;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_Chips_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,[['token',1]],(null as any),10,'li',[['class',
      'ui-chips-token ui-state-highlight ui-corner-all']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Chips_2)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Chips_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Chips_4)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:boolean = !_co.disabled;
        _ck(_v,3,0,currVal_0);
        const currVal_1:boolean = !_co.itemTemplate;
        _ck(_v,6,0,currVal_1);
        const currVal_2:any = _co.itemTemplate;
        _ck(_v,9,0,currVal_2);
      },(null as any));
}
export function View_Chips_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),17,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),
      0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),12,'ul',([] as any[]),(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,14).focus()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngClass:[0,'ngClass']},(null as any)),
      i0.ɵpod({'ui-inputtext ui-state-default ui-corner-all':0,'ui-state-focus':1,
          'ui-state-disabled':2}),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Chips_1)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,
          'li',[['class','ui-chips-input-token']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵeld(0,[['inputtext',1]],(null as any),1,'input',[['type','text']],
          [[1,'id',0],[1,'placeholder',0],[1,'tabindex',0],[8,'disabled',0],[8,'disabled',
              0],[8,'className',0]],[[(null as any),'keydown'],[(null as any),'focus'],
              [(null as any),'blur']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.Chips = _v.component;
            if (('keydown' === en)) {
              const pd_0:any = ((<any>_co.onKeydown($event,i0.ɵnov(_v,14))) !== false);
              ad = (pd_0 && ad);
            }
            if (('focus' === en)) {
              const pd_1:any = ((<any>_co.onFocus()) !== false);
              ad = (pd_1 && ad);
            }
            if (('blur' === en)) {
              const pd_2:any = ((<any>_co.onBlur()) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgStyle,
          [i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Chips = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-chips ui-widget';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_3:any = _ck(_v,7,0,true,_co.focus,_co.disabled);
    _ck(_v,6,0,currVal_3);
    const currVal_4:any = _co.value;
    _ck(_v,10,0,currVal_4);
    const currVal_11:any = _co.inputStyle;
    _ck(_v,15,0,currVal_11);
  },(_ck,_v) => {
    var _co:i1.Chips = _v.component;
    const currVal_5:any = _co.inputId;
    const currVal_6:any = _co.placeholder;
    const currVal_7:any = _co.tabindex;
    const currVal_8:any = (_co.maxedOut || _co.disabled);
    const currVal_9:any = _co.disabled;
    const currVal_10:any = _co.inputStyleClass;
    _ck(_v,14,0,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10);
  });
}
export function View_Chips_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p-chips',([] as any[]),
      (null as any),(null as any),(null as any),View_Chips_0,RenderType_Chips)),i0.ɵprd(5120,
      (null as any),i5.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i1.Chips]),i0.ɵprd(512,(null as any),i6.DomHandler,i6.DomHandler,([] as any[])),
      i0.ɵdid(1097728,(null as any),1,i1.Chips,[i0.ElementRef,i6.DomHandler],(null as any),
          (null as any)),i0.ɵqud(603979776,1,{templates:1})],(null as any),(null as any));
}
export const ChipsNgFactory:i0.ComponentFactory<i1.Chips> = i0.ɵccf('p-chips',i1.Chips,
    View_Chips_Host_0,{style:'style',styleClass:'styleClass',disabled:'disabled',field:'field',
        placeholder:'placeholder',max:'max',tabindex:'tabindex',inputId:'inputId',
        allowDuplicate:'allowDuplicate',inputStyle:'inputStyle',inputStyleClass:'inputStyleClass',
        addOnTab:'addOnTab'},{onAdd:'onAdd',onRemove:'onRemove'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9jaGlwcy9jaGlwcy5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvY2hpcHMvY2hpcHMudHMiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvY2hpcHMvY2hpcHMudHMuQ2hpcHMuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9jaGlwcy9jaGlwcy50cy5DaGlwc19Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS1jaGlwcyB1aS13aWRnZXQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPHVsIFtuZ0NsYXNzXT1cInsndWktaW5wdXR0ZXh0IHVpLXN0YXRlLWRlZmF1bHQgdWktY29ybmVyLWFsbCc6dHJ1ZSwndWktc3RhdGUtZm9jdXMnOmZvY3VzLCd1aS1zdGF0ZS1kaXNhYmxlZCc6ZGlzYWJsZWR9XCIgKGNsaWNrKT1cImlucHV0dGV4dC5mb2N1cygpXCI+XG4gICAgICAgICAgICAgICAgPGxpICN0b2tlbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2YWx1ZTsgbGV0IGkgPSBpbmRleDtcIiBjbGFzcz1cInVpLWNoaXBzLXRva2VuIHVpLXN0YXRlLWhpZ2hsaWdodCB1aS1jb3JuZXItYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWRpc2FibGVkXCIgY2xhc3M9XCJ1aS1jaGlwcy10b2tlbi1pY29uIGZhIGZhLWZ3IGZhLWNsb3NlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oJGV2ZW50LGkpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpdGVtVGVtcGxhdGVcIiBjbGFzcz1cInVpLWNoaXBzLXRva2VuLWxhYmVsXCI+e3tmaWVsZCA/IHJlc29sdmVGaWVsZERhdGEoaXRlbSxmaWVsZCkgOiBpdGVtfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIml0ZW1UZW1wbGF0ZVwiIFtwVGVtcGxhdGVXcmFwcGVyXT1cIml0ZW1UZW1wbGF0ZVwiIFtpdGVtXT1cIml0ZW1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidWktY2hpcHMtaW5wdXQtdG9rZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dHRleHQgdHlwZT1cInRleHRcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQsaW5wdXR0ZXh0KVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCIgW2Rpc2FibGVkXT1cIm1heGVkT3V0fHxkaXNhYmxlZFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtuZ1N0eWxlXT1cImlucHV0U3R5bGVcIiBbY2xhc3NdPVwiaW5wdXRTdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLWNoaXBzPjwvcC1jaGlwcz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0lvQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQXNFO1VBQUE7VUFBQTtRQUFBO1FBQXRFO01BQUE7OztvQkFDQTtNQUFBO01BQUEsZ0JBQXlEOzs7SUFBQTtRQUFBO0lBQUE7Ozs7Ozs7O29CQUN6RDtNQUFBLHNCQUFBO01BQUE7OztJQUFvRTtJQUFsQztJQUFsQyxXQUFvRSxVQUFsQyxTQUFsQzs7OztvQkFISjtNQUFBO01BQUEsNENBQThHO01BQzFHO2FBQUE7VUFBQSx3QkFBNEc7TUFDNUc7YUFBQTtVQUFBLHdCQUErRztNQUMvRzthQUFBO1VBQUEsd0JBQWdHOzs7UUFGMUY7UUFBTixXQUFNLFNBQU47UUFDTTtRQUFOLFdBQU0sU0FBTjtRQUNhO1FBQWIsV0FBYSxTQUFiOzs7O29CQU5wQiwrQ0FDUTtNQUFBO01BQUEsbURBQUE7TUFBQTtVQUFBLHNEQUFBO01BQUE7TUFBQSxlQUE2RSxtREFDekU7TUFBQTtVQUFBO1FBQUE7UUFBeUg7VUFBQTtVQUFBO1FBQUE7UUFBekg7TUFBQSx1Q0FBQTtrREFBQTthQUFJO1VBQUEsd0JBQWlKO01BQ2pKO2FBQUE7NEJBQUEseUNBSUs7VUFBQSx5QkFDTDtVQUFBO1VBQUEsOEJBQWlDO01BQzdCO1VBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUE4RztjQUFBO2NBQUE7WUFBQTtZQUMxRztjQUFBO2NBQUE7WUFBQTtZQUFvQjtjQUFBO2NBQUE7WUFBQTtZQUR4QjtVQUFBLHVDQUFBO1VBQUE7TUFDaUosdURBQ2hKO1VBQUEscUJBQ0osK0NBQ0g7aUJBQUE7O0lBWmtEO0lBQW5EO0lBQUwsV0FBd0QsVUFBbkQsU0FBTDtJQUFzQztJQUF0QyxXQUFzQyxTQUF0QztJQUNRO0lBQUosV0FBSSxTQUFKO0lBQ2U7SUFBWCxZQUFXLFNBQVg7SUFPb0c7SUFEaEcsWUFDZ0csVUFEaEc7OztJQUE4QjtJQUFvQjtJQUFpQztJQUN6QztJQUFnQztJQUE2QztJQUR2SCxZQUE4QixVQUFvQixVQUFpQyxVQUN6QyxVQUFnQyxVQUE2QyxVQUR2SDs7OztvQkNUcEI7TUFBQTtNQUFBO1FBQUE7TUFBQTthQUFBO1VBQUE7Ozs7OzsifQ==