import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ChildComponent } from './inheritance/child/child.component';
import { MasterComponent } from './nested/master/master.component';
import { MainComponent } from './projection/main/main.component';
import { ViewChildParentComponent } from './viewchild/view-child-parent/view-child-parent.component';
import { ParentHooksComponent } from './hooks/parent-hooks/parent-hooks.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { NotFoundComponent } from './notfound/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DatabindingComponent},
  {path: 'dir', component: DirectiveComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'inheritance', component: ChildComponent},
  {path: 'nested', component: MasterComponent},
  {path: 'projection', component: MainComponent},
  {path: 'viewChild', component: ViewChildParentComponent},
  {path: 'hooks', component: ParentHooksComponent},
  {path: 'templateForm', component: TemplateFormComponent},
  {path: 'reactiveForm', component: ReactiveFormComponent},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
