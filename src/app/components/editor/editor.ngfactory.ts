/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './editor';
import * as i2 from '@angular/common';
import * as i3 from '../common/shared';
import * as i4 from '@angular/forms';
import * as i5 from '../dom/domhandler';
export const EditorModuleNgFactory:i0.NgModuleFactory<i1.EditorModule> = i0.ɵcmf(i1.EditorModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i3.SharedModule,i3.SharedModule,
          ([] as any[])),i0.ɵmpd(512,i1.EditorModule,i1.EditorModule,([] as any[]))]);
    });
const styles_Editor:any[] = ([] as any[]);
export const RenderType_Editor:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_Editor,
    data:{}});
function View_Editor_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'ui-editor-toolbar ui-widget-header ui-corner-top']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      i0.ɵncd((null as any),0),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (null as any),(null as any));
}
function View_Editor_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),76,'div',[['class',
      'ui-editor-toolbar ui-widget-header ui-corner-top']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),25,'span',[['class','ql-formats']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),10,'select',[['class','ql-header']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'option',[['value','1']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Heading'])),(_l()(),i0.ɵted((null as any),
          ['\n                      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'option',[['value','2']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Subheading'])),(_l()(),i0.ɵted((null as any),
          ['\n                      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'option',[['selected','']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Normal'])),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),10,'select',[['class','ql-font']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                      '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'option',[['selected','']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['Sans Serif'])),(_l()(),i0.ɵted((null as any),['\n                      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'option',[['value','serif']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Serif'])),(_l()(),i0.ɵted((null as any),['\n                      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'option',[['value','monospace']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Monospace'])),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'span',[['class','ql-formats']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'button',[['aria-label','Bold'],['class','ql-bold']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'button',[['aria-label','Italic'],['class','ql-italic']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'button',[['aria-label','Underline'],['class','ql-underline']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),5,'span',[['class','ql-formats']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'select',[['class','ql-color']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'select',[['class','ql-background']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),16,'span',[['class','ql-formats']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'button',[['aria-label','Ordered List'],['class','ql-list'],['value','ordered']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'button',[['aria-label','Unordered List'],
              ['class','ql-list'],['value','bullet']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          9,'select',[['class','ql-align']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'option',[['selected','']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'option',[['value','center']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'option',[['value','right']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'option',[['value','justify']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'span',[['class','ql-formats']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'button',[['aria-label','Insert Link'],['class','ql-link']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'button',[['aria-label','Insert Image'],['class','ql-image']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'button',[['aria-label','Insert Code Block'],['class','ql-code-block']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,
          'span',[['class','ql-formats']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'button',[['aria-label','Remove Styles'],
          ['class','ql-clean']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵted((null as any),['\n            ']))],(null as any),(null as any));
}
export function View_Editor_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),11,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
      (null as any),View_Editor_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
      (null as any),View_Editor_2)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'ui-editor-content']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),i0.ɵdid(278528,(null as any),0,i2.NgStyle,[i0.KeyValueDiffers,
      i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n        '])),(_l()(),i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.Editor = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-widget ui-editor-container ui-corner-all';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.toolbar;
    _ck(_v,5,0,currVal_2);
    const currVal_3:boolean = !_co.toolbar;
    _ck(_v,8,0,currVal_3);
    const currVal_4:any = _co.style;
    _ck(_v,11,0,currVal_4);
  },(null as any));
}
export function View_Editor_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p-editor',([] as any[]),
      (null as any),(null as any),(null as any),View_Editor_0,RenderType_Editor)),
      i0.ɵprd(5120,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i1.Editor]),i0.ɵprd(512,(null as any),i5.DomHandler,i5.DomHandler,([] as any[])),
      i0.ɵdid(4243456,(null as any),1,i1.Editor,[i0.ElementRef,i5.DomHandler],(null as any),
          (null as any)),i0.ɵqud(335544320,1,{toolbar:0})],(null as any),(null as any));
}
export const EditorNgFactory:i0.ComponentFactory<i1.Editor> = i0.ɵccf('p-editor',i1.Editor,
    View_Editor_Host_0,{style:'style',styleClass:'styleClass',placeholder:'placeholder',
        readonly:'readonly',formats:'formats'},{onTextChange:'onTextChange',onSelectionChange:'onSelectionChange',
        onInit:'onInit'},['p-header']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3NvdXJhYmhzaW5naC9Eb2N1bWVudHMvTXlQcm9qZWN0cy9PcGVuIFNvdXJjZS91bHRpbWF0ZS1wcmltZU5nL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLnRzIiwibmc6Ly8vVXNlcnMvc291cmFiaHNpbmdoL0RvY3VtZW50cy9NeVByb2plY3RzL09wZW4gU291cmNlL3VsdGltYXRlLXByaW1lTmcvc3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IudHMuRWRpdG9yLmh0bWwiLCJuZzovLy9Vc2Vycy9zb3VyYWJoc2luZ2gvRG9jdW1lbnRzL015UHJvamVjdHMvT3BlbiBTb3VyY2UvdWx0aW1hdGUtcHJpbWVOZy9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci50cy5FZGl0b3JfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIndWktd2lkZ2V0IHVpLWVkaXRvci1jb250YWluZXIgdWktY29ybmVyLWFsbCdcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWVkaXRvci10b29sYmFyIHVpLXdpZGdldC1oZWFkZXIgdWktY29ybmVyLXRvcFwiICpuZ0lmPVwidG9vbGJhclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZWRpdG9yLXRvb2xiYXIgdWktd2lkZ2V0LWhlYWRlciB1aS1jb3JuZXItdG9wXCIgKm5nSWY9XCIhdG9vbGJhclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicWwtZm9ybWF0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5IZWFkaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5TdWJoZWFkaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1mb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5TYW5zIFNlcmlmPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlcmlmXCI+U2VyaWY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibW9ub3NwYWNlXCI+TW9ub3NwYWNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWJvbGRcIiBhcmlhLWxhYmVsPVwiQm9sZFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicWwtaXRhbGljXCIgYXJpYS1sYWJlbD1cIkl0YWxpY1wiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicWwtdW5kZXJsaW5lXCIgYXJpYS1sYWJlbD1cIlVuZGVybGluZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInFsLWNvbG9yXCI+PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1iYWNrZ3JvdW5kXCI+PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicWwtZm9ybWF0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicWwtbGlzdFwiIHZhbHVlPVwib3JkZXJlZFwiIGFyaWEtbGFiZWw9XCJPcmRlcmVkIExpc3RcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWxpc3RcIiB2YWx1ZT1cImJ1bGxldFwiIGFyaWEtbGFiZWw9XCJVbm9yZGVyZWQgTGlzdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqdXN0aWZ5XCI+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWxpbmtcIiBhcmlhLWxhYmVsPVwiSW5zZXJ0IExpbmtcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWltYWdlXCIgYXJpYS1sYWJlbD1cIkluc2VydCBJbWFnZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicWwtY29kZS1ibG9ja1wiIGFyaWEtbGFiZWw9XCJJbnNlcnQgQ29kZSBCbG9ja1wiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWNsZWFuXCIgYXJpYS1sYWJlbD1cIlJlbW92ZSBTdHlsZXNcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1lZGl0b3ItY29udGVudFwiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLWVkaXRvcj48L3AtZWRpdG9yPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0VZO01BQUE7TUFBQSw0Q0FBOEU7YUFDMUUsa0JBQTJDOzs7O29CQUUvQztNQUFBO01BQUEsNENBQStFO01BQzNFO1VBQUE7TUFBeUIsMkRBQ3JCO1VBQUE7VUFBQSwwREFBMEI7VUFBQSwrQkFDeEI7VUFBQTtVQUFBLGdCQUFrQiw0Q0FBZ0I7VUFBQSwrQkFDbEM7VUFBQTtVQUFBLGdCQUFrQiwrQ0FBbUI7VUFBQSwrQkFDckM7VUFBQTtVQUFBLGdCQUFpQiwyQ0FBZTtVQUFBLDZCQUN6QjtNQUNUO1VBQUE7TUFBd0IsNkRBQ3RCO1VBQUE7VUFBQSw0Q0FBaUI7VUFBQSxpQkFBbUI7TUFDcEM7VUFBQTtNQUFzQiwwQ0FBYztNQUNwQztVQUFBO01BQTBCLDhDQUFrQjtVQUFBLDZCQUNyQztNQUNOLHVEQUNQO1VBQUE7VUFBQSw0Q0FBeUI7VUFBQSw2QkFDckI7VUFBQTtVQUFBLDRDQUFtRDtVQUFBLDZCQUNuRDtVQUFBO1VBQUEsMERBQXVEO1VBQUEsNkJBQ3ZEO1VBQUE7VUFBQSwwREFBNkQ7VUFBQSx5QkFDMUQ7TUFDUDtVQUFBO01BQXlCLDJEQUNyQjtVQUFBO1VBQUEsMERBQWtDO1VBQUEsNkJBQ2xDO1VBQUE7VUFBQSw4QkFBdUM7TUFDcEMsdURBQ1A7VUFBQTtVQUFBLDRDQUF5QjtVQUFBLDZCQUNyQjtVQUFBO1VBQUE7TUFBMkUsMkRBQzNFO1VBQUE7Y0FBQTtVQUFBLDRDQUE0RTtVQUFBLDZCQUM1RTtVQUFBO1VBQUEsOEJBQXlCO01BQ3JCO1VBQUEsMERBQTBCO1VBQUEsaUNBQzFCO1VBQUE7VUFBQSw4QkFBZ0M7TUFDaEM7VUFBQTtNQUErQiwrREFDL0I7VUFBQTtVQUFBLDBEQUFpQztVQUFBLDZCQUM1QjtNQUNOLHVEQUNQO1VBQUE7VUFBQSw0Q0FBeUI7VUFBQSw2QkFDckI7VUFBQTtVQUFBLDBEQUEwRDtVQUFBLDZCQUMxRDtVQUFBO1VBQUEsMERBQTREO1VBQUEsNkJBQzVEO1VBQUE7VUFBQTtNQUFzRSx1REFDbkU7VUFBQSx5QkFDUDtVQUFBO1VBQUEsOEJBQXlCO01BQ3JCO1VBQUE7VUFBQSxnQkFBNkQsdURBQzFEO2lCQUFBOzs7b0JBNUN2QiwrQ0FDUTtNQUFBO01BQUEsbURBQUE7TUFBQTtVQUFBLCtDQUFvRjtNQUFBLHFCQUNoRjtNQUFBLHFDQUFBO29CQUFBLG1DQUVNO01BQUEscUJBQ047TUFBQSxxQ0FBQTtvQkFBQSxtQ0F3Q007TUFBQSxxQkFDTjtNQUFBO01BQUEsdUJBQUE7K0JBQUEseUNBQXVEO01BQUEsaUJBQ3JEOztJQTlDeUQ7SUFBMUQ7SUFBTCxXQUErRCxVQUExRCxTQUFMO0lBQ2tFO0lBQTlELFdBQThELFNBQTlEO0lBRzhEO0lBQTlELFdBQThELFNBQTlEO0lBeUMrQjtJQUEvQixZQUErQixTQUEvQjs7OztvQkM5Q1o7TUFBQTthQUFBO1FBQUE7TUFBQTthQUFBO1VBQUE7Ozs7OyJ9
