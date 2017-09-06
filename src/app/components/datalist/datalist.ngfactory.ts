/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './datalist';
import * as i2 from '@angular/common';
import * as i3 from '../common/shared';
import * as i4 from '../paginator/paginator';
import * as i5 from '../paginator/paginator.ngfactory';
export const DataListModuleNgFactory:i0.NgModuleFactory<i1.DataListModule> = i0.ɵcmf(i1.DataListModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.SharedModule,i3.SharedModule,
          ([] as any[])),i0.ɵmpd(512,i4.PaginatorModule,i4.PaginatorModule,([] as any[])),
          i0.ɵmpd(512,i1.DataListModule,i1.DataListModule,([] as any[]))]);
    });
const styles_DataList:any[] = ([] as any[]);
export const RenderType_DataList:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_DataList,
    data:{}});
function View_DataList_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'ui-datalist-header ui-widget-header ui-corner-top']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      i0.ɵncd((null as any),0),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (null as any),(null as any));
}
function View_DataList_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-paginator',
      [['styleClass','ui-paginator-bottom']],(null as any),[[(null as any),'onPageChange']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('onPageChange' === en)) {
          const pd_0:any = ((<any>_co.paginate($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i5.View_Paginator_0,i5.RenderType_Paginator)),i0.ɵdid(49152,(null as any),
      0,i4.Paginator,([] as any[]),{pageLinkSize:[0,'pageLinkSize'],styleClass:[1,
          'styleClass'],rowsPerPageOptions:[2,'rowsPerPageOptions'],alwaysShow:[3,
          'alwaysShow'],totalRecords:[4,'totalRecords'],first:[5,'first'],rows:[6,
          'rows']},{onPageChange:'onPageChange'})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.pageLinks;
    const currVal_1:any = 'ui-paginator-bottom';
    const currVal_2:any = _co.rowsPerPageOptions;
    const currVal_3:any = _co.alwaysShowPaginator;
    const currVal_4:any = _co.totalRecords;
    const currVal_5:any = _co.first;
    const currVal_6:any = _co.rows;
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  },(null as any));
}
function View_DataList_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'ui-datalist-emptymessage']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.emptyMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_DataList_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(0,(null as any),(null as any),0))],(null as any),
      (null as any));
}
function View_DataList_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'li',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n                        '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_DataList_5)),i0.ɵdid(212992,
      (null as any),0,i3.TemplateWrapper,[i0.ViewContainerRef],{item:[0,'item'],index:[1,
          'index'],templateRef:[2,'templateRef']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n                    ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit;
    const currVal_1:any = _v.context.index;
    const currVal_2:any = _co.itemTemplate;
    _ck(_v,3,0,currVal_0,currVal_1,currVal_2);
  },(null as any));
}
function View_DataList_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-paginator',
      [['styleClass','ui-paginator-bottom']],(null as any),[[(null as any),'onPageChange']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('onPageChange' === en)) {
          const pd_0:any = ((<any>_co.paginate($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i5.View_Paginator_0,i5.RenderType_Paginator)),i0.ɵdid(49152,(null as any),
      0,i4.Paginator,([] as any[]),{pageLinkSize:[0,'pageLinkSize'],styleClass:[1,
          'styleClass'],rowsPerPageOptions:[2,'rowsPerPageOptions'],alwaysShow:[3,
          'alwaysShow'],totalRecords:[4,'totalRecords'],first:[5,'first'],rows:[6,
          'rows']},{onPageChange:'onPageChange'})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.pageLinks;
    const currVal_1:any = 'ui-paginator-bottom';
    const currVal_2:any = _co.rowsPerPageOptions;
    const currVal_3:any = _co.alwaysShowPaginator;
    const currVal_4:any = _co.totalRecords;
    const currVal_5:any = _co.first;
    const currVal_6:any = _co.rows;
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  },(null as any));
}
function View_DataList_7(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'ui-datalist-footer ui-widget-header ui-corner-bottom']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      i0.ɵncd((null as any),1),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (null as any),(null as any));
}
export function View_DataList_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),30,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-datalist ui-widget':0,
      'ui-datalist-scrollable':1}),i0.ɵdid(278528,(null as any),0,i2.NgStyle,[i0.KeyValueDiffers,
      i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
      (null as any),View_DataList_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
      (null as any),View_DataList_2)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),12,'div',
      [['class','ui-datalist-content ui-widget-content']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgStyle,
      [i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),
      i0.ɵpod({'max-height':0}),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataList_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'ul',[['class','ui-datalist-data']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_DataList_4)),i0.ɵdid(802816,
          (null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
          {ngForOf:[0,'ngForOf'],ngForTrackBy:[1,'ngForTrackBy']},(null as any)),(_l()(),
          i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataList_6)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataList_7)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.DataList = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = _ck(_v,3,0,true,_co.scrollable);
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,4,0,currVal_2);
    const currVal_3:any = _co.header;
    _ck(_v,7,0,currVal_3);
    const currVal_4:any = ((_co.paginator && (_co.paginatorPosition != 'bottom')) || (_co.paginatorPosition == 'both'));
    _ck(_v,10,0,currVal_4);
    const currVal_5:any = _ck(_v,14,0,_co.scrollHeight);
    _ck(_v,13,0,currVal_5);
    const currVal_6:any = _co.isEmpty();
    _ck(_v,17,0,currVal_6);
    const currVal_7:any = _co.dataToRender;
    const currVal_8:any = _co.trackBy;
    _ck(_v,22,0,currVal_7,currVal_8);
    const currVal_9:any = ((_co.paginator && (_co.paginatorPosition != 'top')) || (_co.paginatorPosition == 'both'));
    _ck(_v,27,0,currVal_9);
    const currVal_10:any = _co.footer;
    _ck(_v,30,0,currVal_10);
  },(null as any));
}
export function View_DataList_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p-dataList',([] as any[]),
      (null as any),(null as any),(null as any),View_DataList_0,RenderType_DataList)),
      i0.ɵdid(5554176,(null as any),3,i1.DataList,[i0.ElementRef,i0.IterableDiffers],
          (null as any),(null as any)),i0.ɵqud(335544320,1,{header:0}),i0.ɵqud(335544320,
          2,{footer:0}),i0.ɵqud(603979776,3,{templates:1})],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const DataListNgFactory:i0.ComponentFactory<i1.DataList> = i0.ɵccf('p-dataList',
    i1.DataList,View_DataList_Host_0,{paginator:'paginator',rows:'rows',totalRecords:'totalRecords',
        pageLinks:'pageLinks',rowsPerPageOptions:'rowsPerPageOptions',lazy:'lazy',
        style:'style',styleClass:'styleClass',paginatorPosition:'paginatorPosition',
        emptyMessage:'emptyMessage',alwaysShowPaginator:'alwaysShowPaginator',trackBy:'trackBy',
        immutable:'immutable',scrollable:'scrollable',scrollHeight:'scrollHeight',
        value:'value'},{onLazyLoad:'onLazyLoad',onPage:'onPage'},['p-header','p-footer']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhbGlzdC9kYXRhbGlzdC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWxpc3QvZGF0YWxpc3QudHMiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWxpc3QvZGF0YWxpc3QudHMuRGF0YUxpc3QuaHRtbCIsIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhbGlzdC9kYXRhbGlzdC50cy5EYXRhTGlzdF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsndWktZGF0YWxpc3QgdWktd2lkZ2V0JzogdHJ1ZSwgJ3VpLWRhdGFsaXN0LXNjcm9sbGFibGUnOiBzY3JvbGxhYmxlfVwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1kYXRhbGlzdC1oZWFkZXIgdWktd2lkZ2V0LWhlYWRlciB1aS1jb3JuZXItdG9wXCIgKm5nSWY9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAtcGFnaW5hdG9yIFtyb3dzXT1cInJvd3NcIiBbZmlyc3RdPVwiZmlyc3RcIiBbdG90YWxSZWNvcmRzXT1cInRvdGFsUmVjb3Jkc1wiIFtwYWdlTGlua1NpemVdPVwicGFnZUxpbmtzXCIgW2Fsd2F5c1Nob3ddPVwiYWx3YXlzU2hvd1BhZ2luYXRvclwiXG4gICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cInBhZ2luYXRlKCRldmVudClcIiBzdHlsZUNsYXNzPVwidWktcGFnaW5hdG9yLWJvdHRvbVwiIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCIgKm5nSWY9XCJwYWdpbmF0b3IgICYmIHBhZ2luYXRvclBvc2l0aW9uIT0nYm90dG9tJyB8fCBwYWdpbmF0b3JQb3NpdGlvbiA9PSdib3RoJ1wiPjwvcC1wYWdpbmF0b3I+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZGF0YWxpc3QtY29udGVudCB1aS13aWRnZXQtY29udGVudFwiIFtuZ1N0eWxlXT1cInsnbWF4LWhlaWdodCc6IHNjcm9sbEhlaWdodH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNFbXB0eSgpXCIgY2xhc3M9XCJ1aS1kYXRhbGlzdC1lbXB0eW1lc3NhZ2VcIj57e2VtcHR5TWVzc2FnZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWktZGF0YWxpc3QtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVRvUmVuZGVyO2xldCBpID0gaW5kZXg7dHJhY2tCeTogdHJhY2tCeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtwVGVtcGxhdGVXcmFwcGVyXT1cIml0ZW1UZW1wbGF0ZVwiIFtpdGVtXT1cIml0ZW1cIiBbaW5kZXhdPVwiaVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAtcGFnaW5hdG9yIFtyb3dzXT1cInJvd3NcIiBbZmlyc3RdPVwiZmlyc3RcIiBbdG90YWxSZWNvcmRzXT1cInRvdGFsUmVjb3Jkc1wiIFtwYWdlTGlua1NpemVdPVwicGFnZUxpbmtzXCIgW2Fsd2F5c1Nob3ddPVwiYWx3YXlzU2hvd1BhZ2luYXRvclwiXG4gICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cInBhZ2luYXRlKCRldmVudClcIiBzdHlsZUNsYXNzPVwidWktcGFnaW5hdG9yLWJvdHRvbVwiIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCIgKm5nSWY9XCJwYWdpbmF0b3IgICYmIHBhZ2luYXRvclBvc2l0aW9uIT0ndG9wJyB8fCBwYWdpbmF0b3JQb3NpdGlvbiA9PSdib3RoJ1wiPjwvcC1wYWdpbmF0b3I+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZGF0YWxpc3QtZm9vdGVyIHVpLXdpZGdldC1oZWFkZXIgdWktY29ybmVyLWJvdHRvbVwiICpuZ0lmPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHAtZGF0YUxpc3Q+PC9wLWRhdGFMaXN0PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFWTtNQUFBO01BQUEsNENBQThFO2FBQzFFLGtCQUEyQzs7OztvQkFFL0M7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUNBO1VBQUE7VUFBQTtRQUFBO1FBREE7TUFBQSx1REFBQTtNQUFBO1VBQUE7VUFBQTtVQUFBOztJQUF5RTtJQUN2QztJQUFpQztJQURpQztJQUF6RDtJQUFoQjtJQUFkO0lBQWIsV0FBeUUsVUFDdkMsVUFBaUMsVUFEaUMsVUFBekQsVUFBaEIsVUFBZCxTQUFiOzs7O29CQUdJO01BQUE7TUFBQSxnQkFBd0Q7OztJQUFBO0lBQUE7Ozs7Ozs7O29CQUVwRDtNQUFBLHdFQUFxRTthQUFBLGdEQUNqRTtNQUFBLHFFQUFBO01BQUE7VUFBQSx1REFBdUY7TUFBQTs7SUFBeEM7SUFBYztJQUFoRDtJQUFiLFdBQStDLFVBQWMsVUFBaEQsU0FBYjs7OztvQkFJWjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQ0E7VUFBQTtVQUFBO1FBQUE7UUFEQTtNQUFBLHVEQUFBO01BQUE7VUFBQTtVQUFBO1VBQUE7O0lBQXlFO0lBQ3ZDO0lBQWlDO0lBRGlDO0lBQXpEO0lBQWhCO0lBQWQ7SUFBYixXQUF5RSxVQUN2QyxVQUFpQyxVQURpQyxVQUF6RCxVQUFoQixVQUFkLFNBQWI7Ozs7b0JBRUE7TUFBQTtNQUFBLDRDQUFpRjthQUM3RSxrQkFBMkM7Ozs7b0JBbEIzRCwrQ0FDUTtNQUFBO01BQUEsbURBQUE7TUFBQTtVQUFBLHNEQUFLO01BQUEsb0NBQUw7K0JBQUEseUNBQThIO01BQUEscUJBQzFIO01BQUEsdUNBQUE7b0JBQUEsbUNBRU07TUFBQSxxQkFDTjtNQUFBLHVDQUFBO29CQUFBLG1DQUMyTTtNQUFBLHFCQUMzTTtNQUFBO01BQUEsbURBQUE7TUFBQTthQUFtRCxtQkFBeUM7TUFDeEY7YUFBQTtVQUFBLHdCQUE4RTtNQUM5RTtVQUFBO01BQTZCLDJEQUN6QjtVQUFBLHFFQUFBO1VBQUE7VUFBQSx1RUFFSztpQkFBQSx3Q0FDSjtVQUFBLHFCQUNIO01BQ047YUFBQTtVQUFBLHdCQUN3TTtNQUN4TTthQUFBO1VBQUEsd0JBRU0sK0NBQ0o7aUJBQUE7O0lBbkJtRztJQUFwRztJQUFMLFdBQXlHLFVBQXBHLFNBQUw7SUFBdUY7SUFBdkYsV0FBdUYsU0FBdkY7SUFDbUU7SUFBL0QsV0FBK0QsU0FBL0Q7SUFJNkc7SUFEN0csWUFDNkcsU0FEN0c7SUFFbUQ7SUFBbkQsWUFBbUQsU0FBbkQ7SUFDUztJQUFMLFlBQUssU0FBTDtJQUVRO0lBQUE7SUFBSixZQUFJLG1CQUFKO0lBTXFHO0lBRDdHLFlBQzZHLFNBRDdHO0lBRWtFO0lBQWxFLFlBQWtFLFVBQWxFOzs7O29CQ2pCWjtNQUFBO2FBQUE7VUFBQTtVQUFBO0lBQUE7Ozs7Ozs7OzsifQ==
