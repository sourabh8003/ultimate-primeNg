/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './messages';
import * as i2 from '@angular/common';
import * as i3 from '../common/messageservice';
export const MessagesModuleNgFactory:i0.NgModuleFactory<i1.MessagesModule> = i0.ɵcmf(i1.MessagesModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.MessagesModule,i1.MessagesModule,
          ([] as any[]))]);
    });
const styles_Messages:any[] = ([] as any[]);
export const RenderType_Messages:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Messages,
    data:{}});
function View_Messages_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'a',[['class',
      'ui-messages-close'],['href','#']],(null as any),[[(null as any),'click']],(_v,
      en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.clear($event)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'i',[['class','fa fa-close']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            ']))],(null as any),(null as any));
}
function View_Messages_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'li',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),0,'span',[['class','ui-messages-summary']],[[8,'innerHTML',1]],
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,
      'span',[['class','ui-messages-detail']],[[8,'innerHTML',1]],(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                ']))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = _v.context.$implicit.summary;
        _ck(_v,2,0,currVal_0);
        const currVal_1:any = _v.context.$implicit.detail;
        _ck(_v,4,0,currVal_1);
      });
}
function View_Messages_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),15,'div',[['class',
      'ui-messages ui-widget ui-corner-all'],['style','display:block']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),
      0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
      {klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-messages-info':0,
      'ui-messages-warn':1,'ui-messages-error':2,'ui-messages-success':3}),(_l()(),
      i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),
      (null as any),1,(null as any),View_Messages_2)),i0.ɵdid(16384,(null as any),
      0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'span',[['class','ui-messages-icon fa fa-fw fa-2x']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
          (null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,
              i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'ul',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Messages_3)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        ']))],(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'ui-messages ui-widget ui-corner-all';
    const currVal_1:any = _ck(_v,2,0,(_co.value[0].severity === 'info'),(_co.value[0].severity === 'warn'),
        (_co.value[0].severity === 'error'),(_co.value[0].severity === 'success'));
    _ck(_v,1,0,currVal_0,currVal_1);
    const currVal_2:any = _co.closable;
    _ck(_v,5,0,currVal_2);
    const currVal_3:any = 'ui-messages-icon fa fa-fw fa-2x';
    const currVal_4:any = _co.icon;
    _ck(_v,8,0,currVal_3,currVal_4);
    const currVal_5:any = _co.value;
    _ck(_v,13,0,currVal_5);
  },(null as any));
}
export function View_Messages_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_Messages_1)),i0.ɵdid(16384,
      (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Messages = _v.component;
    const currVal_0:any = _co.hasMessages();
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
export function View_Messages_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-messages',([] as any[]),
      (null as any),(null as any),(null as any),View_Messages_0,RenderType_Messages)),
      i0.ɵdid(180224,(null as any),0,i1.Messages,[[2,i3.MessageService]],(null as any),
          (null as any))],(null as any),(null as any));
}
export const MessagesNgFactory:i0.ComponentFactory<i1.Messages> = i0.ɵccf('p-messages',
    i1.Messages,View_Messages_Host_0,{value:'value',closable:'closable'},{valueChange:'valueChange'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMudHMiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMudHMuTWVzc2FnZXMuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy50cy5NZXNzYWdlc19Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaGFzTWVzc2FnZXMoKVwiIGNsYXNzPVwidWktbWVzc2FnZXMgdWktd2lkZ2V0IHVpLWNvcm5lci1hbGxcIiBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3VpLW1lc3NhZ2VzLWluZm8nOih2YWx1ZVswXS5zZXZlcml0eSA9PT0gJ2luZm8nKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VpLW1lc3NhZ2VzLXdhcm4nOih2YWx1ZVswXS5zZXZlcml0eSA9PT0gJ3dhcm4nKSxcbiAgICAgICAgICAgICAgICAgICAgJ3VpLW1lc3NhZ2VzLWVycm9yJzoodmFsdWVbMF0uc2V2ZXJpdHkgPT09ICdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICAndWktbWVzc2FnZXMtc3VjY2Vzcyc6KHZhbHVlWzBdLnNldmVyaXR5ID09PSAnc3VjY2VzcycpfVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInVpLW1lc3NhZ2VzLWNsb3NlXCIgKGNsaWNrKT1cImNsZWFyKCRldmVudClcIiAqbmdJZj1cImNsb3NhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktbWVzc2FnZXMtaWNvbiBmYSBmYS1mdyBmYS0yeFwiIFtuZ0NsYXNzXT1cImljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBtc2cgb2YgdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1tZXNzYWdlcy1zdW1tYXJ5XCIgW2lubmVySFRNTF09XCJtc2cuc3VtbWFyeVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1tZXNzYWdlcy1kZXRhaWxcIiBbaW5uZXJIVE1MXT1cIm1zZy5kZXRhaWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLW1lc3NhZ2VzPjwvcC1tZXNzYWdlcz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDTVk7TUFBQTtlQUFBO0lBQUE7SUFBQTtJQUFzQztNQUFBO01BQUE7SUFBQTtJQUF0QztFQUFBLGdDQUErRTtNQUMzRTtVQUFBO01BQTJCOzs7b0JBSTNCO01BQUEsd0VBQThCO2FBQUEsNENBQzFCO01BQUE7TUFBQSwwREFBbUU7TUFBQSw2QkFDbkU7TUFBQTtNQUFBLDhCQUFpRTs7UUFEL0I7UUFBbEMsV0FBa0MsU0FBbEM7UUFDaUM7UUFBakMsV0FBaUMsU0FBakM7Ozs7b0JBWlo7TUFBQTtNQUFBLGlFQUFBO01BQUE7TUFBQSxnRUFDWTtNQUFBLHFFQUcwRDthQUFBLG9DQUNsRTtNQUFBLHVEQUFBO01BQUE7TUFFSSxtREFDSjtVQUFBO1VBQUEsaUVBQUE7VUFBQTt5QkFBQTtNQUFzRSxtREFDdEU7VUFBQTtVQUFBLDhCQUFJO01BQ0E7YUFBQTs0QkFBQSx5Q0FHSztVQUFBLHFCQUNKOzs7SUFka0I7SUFDZjtRQUFBO0lBRFosV0FBMkIsVUFDZixTQURaO0lBS2tFO0lBQTlELFdBQThELFNBQTlEO0lBR007SUFBd0M7SUFBOUMsV0FBTSxVQUF3QyxTQUE5QztJQUVRO0lBQUosWUFBSSxTQUFKOzs7O29CQVhoQiwrQ0FDUTtNQUFBLHFFQUFBO01BQUE7TUFBQSxlQWVNOztJQWZEO0lBQUwsV0FBSyxTQUFMOzs7O29CQ0RSO01BQUE7YUFBQTtVQUFBOzs7OyJ9
