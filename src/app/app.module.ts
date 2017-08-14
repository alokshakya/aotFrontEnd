import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { MdButtonModule } from '@angular/material';


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
import { OverlayComponent } from './account/loader/overlay/overlay.component';
import { LoadoutComponent } from './account/loadout/loadout.component';


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
        OverlayComponent,
        LoadoutComponent,
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
