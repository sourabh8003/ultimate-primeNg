/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './paginator';
import * as i2 from '@angular/common';
export const PaginatorModuleNgFactory:i0.NgModuleFactory<i1.PaginatorModule> = i0.ɵcmf(i1.PaginatorModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.PaginatorModule,i1.PaginatorModule,
          ([] as any[]))]);
    });
const styles_Paginator:any[] = ([] as any[]);
export const RenderType_Paginator:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Paginator,
    data:{}});
function View_Paginator_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'a',[['class',
      'ui-paginator-page ui-paginator-element ui-state-default ui-corner-all'],['href',
      '#']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.changePage((_v.context.$implicit - 1),$event)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-state-active':0}),(_l()(),i0.ɵted((null as any),
      ['','']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'ui-paginator-page ui-paginator-element ui-state-default ui-corner-all';
    const currVal_1:any = _ck(_v,2,0,((_v.context.$implicit - 1) == _co.getPage()));
    _ck(_v,1,0,currVal_0,currVal_1);
  },(_ck,_v) => {
    const currVal_2:any = _v.context.$implicit;
    _ck(_v,3,0,currVal_2);
  });
}
function View_Paginator_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'option',([] as any[]),
      [[8,'value',0],[8,'selected',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit;
    const currVal_1:any = (_co.rows == _v.context.$implicit);
    _ck(_v,0,0,currVal_0,currVal_1);
    const currVal_2:any = _v.context.$implicit;
    _ck(_v,1,0,currVal_2);
  });
}
function View_Paginator_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'select',[['class',
      'ui-paginator-rpp-options ui-widget ui-state-default']],(null as any),[[(null as any),
      'change']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('change' === en)) {
      const pd_0:any = ((<any>_co.onRppChange($event)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Paginator_4)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.rowsPerPageOptions;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
function View_Paginator_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),40,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
      (null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,
      (null as any),0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,
          'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),5,'a',[['class','ui-paginator-first ui-paginator-element ui-state-default ui-corner-all'],
          ['href','#']],[[8,'tabIndex',0]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.changePageToFirst($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
          i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
          'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0}),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,
          'span',[['class','fa fa-step-backward']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),5,'a',[['class','ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all'],
              ['href','#']],[[8,'tabIndex',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.changePageToPrev($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
              'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0}),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),0,'span',[['class','fa fa-backward']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'span',[['class','ui-paginator-pages']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_Paginator_2)),i0.ɵdid(802816,
          (null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),5,'a',[['class','ui-paginator-next ui-paginator-element ui-state-default ui-corner-all'],
              ['href','#']],[[8,'tabIndex',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.changePageToNext($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
              'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0}),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),0,'span',[['class','fa fa-forward']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),5,'a',[['class','ui-paginator-last ui-paginator-element ui-state-default ui-corner-all'],
          ['href','#']],[[8,'tabIndex',0]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.changePageToLast($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
          i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
          'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0}),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,
          'span',[['class','fa fa-step-forward']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_Paginator_3)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-paginator ui-widget ui-widget-header ui-unselectable-text';
    _ck(_v,1,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,2,0,currVal_2);
    const currVal_4:any = 'ui-paginator-first ui-paginator-element ui-state-default ui-corner-all';
    const currVal_5:any = _ck(_v,6,0,_co.isFirstPage());
    _ck(_v,5,0,currVal_4,currVal_5);
    const currVal_7:any = 'ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all';
    const currVal_8:any = _ck(_v,13,0,_co.isFirstPage());
    _ck(_v,12,0,currVal_7,currVal_8);
    const currVal_9:any = _co.pageLinks;
    _ck(_v,21,0,currVal_9);
    const currVal_11:any = 'ui-paginator-next ui-paginator-element ui-state-default ui-corner-all';
    const currVal_12:any = _ck(_v,26,0,_co.isLastPage());
    _ck(_v,25,0,currVal_11,currVal_12);
    const currVal_14:any = 'ui-paginator-last ui-paginator-element ui-state-default ui-corner-all';
    const currVal_15:any = _ck(_v,33,0,_co.isLastPage());
    _ck(_v,32,0,currVal_14,currVal_15);
    const currVal_16:any = _co.rowsPerPageOptions;
    _ck(_v,39,0,currVal_16);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_3:any = (_co.isFirstPage()? (0 - 1): (null as any));
    _ck(_v,4,0,currVal_3);
    const currVal_6:any = (_co.isFirstPage()? (0 - 1): (null as any));
    _ck(_v,11,0,currVal_6);
    const currVal_10:any = (_co.isLastPage()? (0 - 1): (null as any));
    _ck(_v,24,0,currVal_10);
    const currVal_13:any = (_co.isLastPage()? (0 - 1): (null as any));
    _ck(_v,31,0,currVal_13);
  });
}
export function View_Paginator_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_Paginator_1)),i0.ɵdid(16384,
      (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Paginator = _v.component;
    const currVal_0:any = (_co.alwaysShow? true: (_co.pageLinks && (_co.pageLinks.length > 1)));
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
export function View_Paginator_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-paginator',
      ([] as any[]),(null as any),(null as any),(null as any),View_Paginator_0,RenderType_Paginator)),
      i0.ɵdid(49152,(null as any),0,i1.Paginator,([] as any[]),(null as any),(null as any))],
      (null as any),(null as any));
}
export const PaginatorNgFactory:i0.ComponentFactory<i1.Paginator> = i0.ɵccf('p-paginator',
    i1.Paginator,View_Paginator_Host_0,{pageLinkSize:'pageLinkSize',style:'style',
        styleClass:'styleClass',rowsPerPageOptions:'rowsPerPageOptions',alwaysShow:'alwaysShow',
        totalRecords:'totalRecords',first:'first',rows:'rows'},{onPageChange:'onPageChange'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLnRzIiwibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRvci9wYWdpbmF0b3IudHMuUGFnaW5hdG9yLmh0bWwiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci50cy5QYWdpbmF0b3JfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwiJ3VpLXBhZ2luYXRvciB1aS13aWRnZXQgdWktd2lkZ2V0LWhlYWRlciB1aS11bnNlbGVjdGFibGUtdGV4dCdcIlxuICAgICAgICAgICAgKm5nSWY9XCJhbHdheXNTaG93ID8gdHJ1ZSA6IChwYWdlTGlua3MgJiYgcGFnZUxpbmtzLmxlbmd0aCA+IDEpXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidWktcGFnaW5hdG9yLWZpcnN0IHVpLXBhZ2luYXRvci1lbGVtZW50IHVpLXN0YXRlLWRlZmF1bHQgdWktY29ybmVyLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VQYWdlVG9GaXJzdCgkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1kaXNhYmxlZCc6aXNGaXJzdFBhZ2UoKX1cIiBbdGFiaW5kZXhdPVwiaXNGaXJzdFBhZ2UoKSA/IC0xIDogbnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RlcC1iYWNrd2FyZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1aS1wYWdpbmF0b3ItcHJldiB1aS1wYWdpbmF0b3ItZWxlbWVudCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlUGFnZVRvUHJldigkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1kaXNhYmxlZCc6aXNGaXJzdFBhZ2UoKX1cIiBbdGFiaW5kZXhdPVwiaXNGaXJzdFBhZ2UoKSA/IC0xIDogbnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYmFja3dhcmRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLXBhZ2luYXRvci1wYWdlc1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKm5nRm9yPVwibGV0IHBhZ2VMaW5rIG9mIHBhZ2VMaW5rc1wiIGNsYXNzPVwidWktcGFnaW5hdG9yLXBhZ2UgdWktcGFnaW5hdG9yLWVsZW1lbnQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVBhZ2UocGFnZUxpbmsgLSAxLCAkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1hY3RpdmUnOiAocGFnZUxpbmstMSA9PSBnZXRQYWdlKCkpfVwiPnt7cGFnZUxpbmt9fTwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1aS1wYWdpbmF0b3ItbmV4dCB1aS1wYWdpbmF0b3ItZWxlbWVudCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlUGFnZVRvTmV4dCgkZXZlbnQpXCIgW25nQ2xhc3NdPVwieyd1aS1zdGF0ZS1kaXNhYmxlZCc6aXNMYXN0UGFnZSgpfVwiIFt0YWJpbmRleF09XCJpc0xhc3RQYWdlKCkgPyAtMSA6IG51bGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWZvcndhcmRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidWktcGFnaW5hdG9yLWxhc3QgdWktcGFnaW5hdG9yLWVsZW1lbnQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVBhZ2VUb0xhc3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtZGlzYWJsZWQnOmlzTGFzdFBhZ2UoKX1cIiBbdGFiaW5kZXhdPVwiaXNMYXN0UGFnZSgpID8gLTEgOiBudWxsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGVwLWZvcndhcmRcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidWktcGFnaW5hdG9yLXJwcC1vcHRpb25zIHVpLXdpZGdldCB1aS1zdGF0ZS1kZWZhdWx0XCIgKm5nSWY9XCJyb3dzUGVyUGFnZU9wdGlvbnNcIiAoY2hhbmdlKT1cIm9uUnBwQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2Ygcm93c1BlclBhZ2VPcHRpb25zXCIgW3ZhbHVlXT1cIm9wdFwiIFtzZWxlY3RlZF09XCJyb3dzID09IG9wdFwiPnt7b3B0fX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8cC1wYWdpbmF0b3I+PC9wLXBhZ2luYXRvcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNZZ0I7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUNJO01BQUE7TUFBQTtJQUFBO0lBREo7RUFBQSx1Q0FBQTtrREFBQTtNQUFBLGtDQUMrQyx3QkFBMkQ7TUFBQTs7SUFEM0Q7SUFDQTtJQUQvQyxXQUErQyxVQUNBLFNBRC9DOztJQUMwRztJQUFBOzs7O29CQVcxRztNQUFBO01BQXNGOztJQUF2QztJQUFjO0lBQTdELFdBQStDLFVBQWMsU0FBN0Q7SUFBc0Y7SUFBQTs7OztvQkFEMUY7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUErRjtNQUFBO01BQUE7SUFBQTtJQUEvRjtFQUFBLGdDQUE4SDtNQUMxSDthQUFBOzRCQUFBLHlDQUFzRztVQUFBOztJQUE5RjtJQUFSLFdBQVEsU0FBUjs7OztvQkF2QlI7TUFBQSwrRUFBQTtNQUFBO3FCQUFBLGtFQUFBO01BQUE7VUFBQSwyQkFDb0U7TUFDaEU7VUFBQTtRQUFBO1FBQUE7UUFDUTtVQUFBO1VBQUE7UUFBQTtRQURSO01BQUEsdUNBQUE7c0RBQUE7VUFBQSxrQ0FDNEMsMEJBQXVGO1VBQUEseUJBQy9IO1VBQUE7VUFBQSw4QkFBeUM7TUFDekMsbURBQ0o7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUNRO2NBQUE7Y0FBQTtZQUFBO1lBRFI7VUFBQSx1Q0FBQTtVQUFBO2NBQUEsc0RBQzJDO01BQXVGLHVEQUM5SDtVQUFBO1VBQUEsNENBQW9DO1VBQUEscUJBQ3BDO01BQ0o7VUFBQTtNQUFpQyx1REFDN0I7VUFBQSxzRUFBQTtVQUFBO1VBQUEsdUNBQzBIO01BQ3ZILG1EQUNQO1VBQUE7Y0FBQTtZQUFBO1lBQUE7WUFDUTtjQUFBO2NBQUE7WUFBQTtZQURSO1VBQUEsdUNBQUE7VUFBQTtjQUFBLHNEQUMyQztNQUFxRix1REFDNUg7VUFBQTtVQUFBLDRDQUFtQztVQUFBLHFCQUNuQztNQUNKO1VBQUE7UUFBQTtRQUFBO1FBQ1E7VUFBQTtVQUFBO1FBQUE7UUFEUjtNQUFBLHVDQUFBO3NEQUFBO1VBQUEsa0NBQzJDLDBCQUFxRjtVQUFBLHlCQUM1SDtVQUFBO1VBQUEsOEJBQXdDO01BQ3hDLG1EQUNKO1VBQUEsc0VBQUE7VUFBQTtVQUFBLGVBRVM7O0lBeEJSO0lBQXVDO0lBQTVDLFdBQUssVUFBdUMsU0FBNUM7SUFBMEI7SUFBMUIsV0FBMEIsU0FBMUI7SUFFZ0I7SUFDZ0M7SUFENUMsV0FBWSxVQUNnQyxTQUQ1QztJQUlZO0lBQytCO0lBRDNDLFlBQVksVUFDK0IsU0FEM0M7SUFLZ0I7SUFBWixZQUFZLFNBQVo7SUFHUTtJQUMrQjtJQUQzQyxZQUFZLFdBQytCLFVBRDNDO0lBSVk7SUFDK0I7SUFEM0MsWUFBWSxXQUMrQixVQUQzQztJQUlvRTtJQUFwRSxZQUFvRSxVQUFwRTs7O0lBbkI0RjtJQUQ1RixXQUM0RixTQUQ1RjtJQUsyRjtJQUQzRixZQUMyRixTQUQzRjtJQVMwRjtJQUQxRixZQUMwRixVQUQxRjtJQUswRjtJQUQxRixZQUMwRixVQUQxRjs7OztvQkFuQlosK0NBQ1E7TUFBQSxzRUFBQTtNQUFBO01BQUEsZUF5Qk07O0lBeEJGO0lBREosV0FDSSxTQURKOzs7O29CQ0RSO01BQUE7YUFBQTs7Ozs7OzsifQ==