import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './reverse.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ParentComponent } from './inheritance/parent/parent.component';
import { ChildComponent } from './inheritance/child/child.component';
import { MasterComponent } from './nested/master/master.component';
import { DetailsComponent } from './nested/details/details.component';
import { FormComponent } from './projection/form/form.component';
import { MainComponent } from './projection/main/main.component';
import { ViewChildParentComponent } from './viewchild/view-child-parent/view-child-parent.component';
import { ViewChildComponent } from './viewchild/view-child/view-child.component';
import { ParentHooksComponent } from './hooks/parent-hooks/parent-hooks.component';
import { ChildHooksComponent } from './hooks/child-hooks/child-hooks.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { NotFoundComponent } from './notfound/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    HighlightDirective,
    ReversePipe,
    PipeComponent,
    ParentComponent,
    ChildComponent,
    MasterComponent,
    DetailsComponent,
    FormComponent,
    MainComponent,
    ViewChildParentComponent,
    ViewChildComponent,
    ParentHooksComponent,
    ChildHooksComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
