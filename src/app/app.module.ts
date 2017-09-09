import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { MdButtonModule } from '@angular/material';

// import { MathJax } from 'mathjax';
import { AccordionModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { BreadcrumbModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { CarouselModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { ChipsModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { DataScrollerModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { GMapModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { LightboxModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { MegaMenuModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { OrderListModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { SlideMenuModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { TerminalModule } from 'primeng/primeng';
import { TieredMenuModule } from 'primeng/primeng';
import { ToggleButtonModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';

//Default theme Components
import { AppComponent } from './app.component';
import { AppMenuComponent, AppSubMenu } from './account/main/main.menu.component';
import { AppTopBar } from './account/apptopbar/app.topbar.component';
import { AppFooter } from './account/appfooter/app.footer.component';
import { InlineProfileComponent } from './account/appProfile/app.profile.component';


//Added Components
import { AccountMainComponent } from "./account/main/main.component";
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { AccountsettingsComponent } from './account/accountsettings/accountsettings.component';
import { DemotestComponent } from './account/ComputerCyber/demotest/demotest.component';
import { ChapterwisetestComponent } from './account/ComputerCyber/chapterwisetest/chapterwisetest.component';
import { SampletestComponent } from './account/ComputerCyber/sampletest/sampletest.component';
import { MocktestComponent } from './account/ComputerCyber/mocktest/mocktest.component';
import { ResultComponent } from './account/ComputerCyber/result/result.component';
import { ProfileComponent } from './account/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { TakedemotestComponent } from './account/ComputerCyber/demotest/takedemotest/takedemotest.component';
import { LoaderComponent } from './account/loader/loader.component';

//services
import { ConfirmationService } from 'primeng/primeng';
import { LoginRegisterService } from './services/loginRegister.service';
import { MasterHttpService } from './services/masterhttp.service';
import { PersonalInfo, SubjectInfo, Result, Misc, chapterwiseTest } from './services/data.service';
import { AccountGuard, TestAccountGuard, TestDeactivate } from './account/account.guard';

//Moment
// import * as moment from 'moment';
// import { MomentModule } from 'angular2-moment';

//pipes
import { KeysPipe } from './pipes/keys.pipe';
import { CssIdPipe } from './pipes/css-id.pipe';
import { LoadoutComponent } from './account/loadout/loadout.component';

import { DemotestEnglishComponent } from './account/english/demotest-english/demotest-english.component';
import { ChapterwisetestEnglishComponent } from './account/english/chapterwisetest-english/chapterwisetest-english.component';
import { SampletestEnglishComponent } from './account/english/sampletest-english/sampletest-english.component';
import { MocktestEnglishComponent } from './account/english/mocktest-english/mocktest-english.component';
import { ResultEnglishComponent } from './account/english/result-english/result-english.component';


import { ChapterwisetestScienceComponent } from './account/science/chapterwisetest-science/chapterwisetest-science.component';
import { DemotestScienceComponent } from './account/science/demotest-science/demotest-science.component';
import { MocktestScienceComponent } from './account/science/mocktest-science/mocktest-science.component';
import { SampletestScienceComponent } from './account/science/sampletest-science/sampletest-science.component';
import { ResultScienceComponent } from './account/science/result-science/result-science.component';

import { ChapterwisetestMathComponent } from './account/mathematics/chapterwisetest-math/chapterwisetest-math.component';
import { DemotestMathComponent } from './account/mathematics/demotest-math/demotest-math.component';
import { MocktestMathComponent } from './account/mathematics/mocktest-math/mocktest-math.component';
import { ResultMathComponent } from './account/mathematics/result-math/result-math.component';
import { SampletestMathComponent } from './account/mathematics/sampletest-math/sampletest-math.component';

import { ChapterwisetestGkComponent } from './account/gk/chapterwisetest-gk/chapterwisetest-gk.component';
import { SampletestGkComponent } from './account/gk/sampletest-gk/sampletest-gk.component';
import { MocktestGkComponent } from './account/gk/mocktest-gk/mocktest-gk.component';
import { DemotestGkComponent } from './account/gk/demotest-gk/demotest-gk.component';
import { ResultGkComponent } from './account/gk/result-gk/result-gk.component';


import { ChapterwisetestReasoningComponent } from './account/reasoning/chapterwisetest-reasoning/chapterwisetest-reasoning.component';
import { SampletestReasoningComponent } from './account/reasoning/sampletest-reasoning/sampletest-reasoning.component';
import { DemotestReasoningComponent } from './account/reasoning/demotest-reasoning/demotest-reasoning.component';
import { MocktestReasoningComponent } from './account/reasoning/mocktest-reasoning/mocktest-reasoning.component';
import { ResultReasoningComponent } from './account/reasoning/result-reasoning/result-reasoning.component';

import {MathJaxDirective} from './directives/mathjax.directive';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule, //new
        FormsModule,
        AppRoutes,
        HttpModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        SharedModule,
        ContextMenuModule,
        DataGridModule,
        DataListModule,
        DataScrollerModule,
        DataTableModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        GMapModule,
        GrowlModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScheduleModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        StepsModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        MdButtonModule,
        TreeTableModule,
        //MomentModule //Moment

    ],
    declarations: [
        AppComponent,
        AppMenuComponent,
        AppSubMenu,
        AppTopBar,
        AppFooter,
        InlineProfileComponent,
        AccountMainComponent,
        DashboardComponent,
        AccountsettingsComponent,
        DemotestComponent,
        ChapterwisetestComponent,
        SampletestComponent,
        MocktestComponent,
        ResultComponent,
        ProfileComponent,
        LoginComponent,
        TakedemotestComponent,
        KeysPipe,
        CssIdPipe,
        LoaderComponent,
        LoadoutComponent,
        DemotestEnglishComponent,
        ChapterwisetestEnglishComponent,
        SampletestEnglishComponent,
        MocktestEnglishComponent,
        ResultEnglishComponent,
        ChapterwisetestScienceComponent,
        DemotestScienceComponent,
        MocktestScienceComponent,
        SampletestScienceComponent,
        ResultScienceComponent,
        ChapterwisetestMathComponent,
        DemotestMathComponent,
        MocktestMathComponent,
        ResultMathComponent,
        SampletestMathComponent,
        ChapterwisetestGkComponent,
        SampletestGkComponent,
        MocktestGkComponent,
        DemotestGkComponent,
        ResultGkComponent,
        ChapterwisetestReasoningComponent,
        SampletestReasoningComponent,
        DemotestReasoningComponent,
        MocktestReasoningComponent,
        ResultReasoningComponent,
        MathJaxDirective
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        LoginRegisterService,
        MasterHttpService,
        ConfirmationService,
        PersonalInfo, SubjectInfo, Result, Misc, chapterwiseTest, AccountGuard, TestAccountGuard, TestDeactivate
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
