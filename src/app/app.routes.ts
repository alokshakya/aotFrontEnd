import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SampleDemo} from './demo/view/sampledemo';
import {FormsDemo} from './demo/view/formsdemo';
import {DataDemo} from './demo/view/datademo';
import {PanelsDemo} from './demo/view/panelsdemo';
import {OverlaysDemo} from './demo/view/overlaysdemo';
import {MenusDemo} from './demo/view/menusdemo';
import {MessagesDemo} from './demo/view/messagesdemo';
import {MiscDemo} from './demo/view/miscdemo';
import {EmptyDemo} from './demo/view/emptydemo';
import {ChartsDemo} from './demo/view/chartsdemo';
import {FileDemo} from './demo/view/filedemo';
import {UtilsDemo} from './demo/view/utilsdemo';
import {Documentation} from './demo/view/documentation';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AccountsettingsComponent } from './accountsettings/accountsettings.component'
import { DemotestComponent } from './ComputerCyber/demotest/demotest.component'
import { ChapterwisetestComponent } from './ComputerCyber/chapterwisetest/chapterwisetest.component'
import { SampletestComponent } from './ComputerCyber/sampletest/sampletest.component';
import { MocktestComponent } from './ComputerCyber/mocktest/mocktest.component';
import { ResultComponent } from './ComputerCyber/result/result.component';




export const routes: Routes = [
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'accountsettings', component: AccountsettingsComponent},
    {path: 'computer/demotest', component: DemotestComponent}, 
    {path: 'computer/chapterwisetest', component: ChapterwisetestComponent},           
    {path: 'computer/sampletest', component: SampletestComponent},
    {path: 'computer/mocktest', component: MocktestComponent},
    {path: 'computer/result', component: ResultComponent},
    {path: 'sample', component: SampleDemo},
    {path: 'forms', component: FormsDemo},
    {path: 'data', component: DataDemo},
    {path: 'panels', component: PanelsDemo},
    {path: 'overlays', component: OverlaysDemo},
    {path: 'menus', component: MenusDemo},
    {path: 'messages', component: MessagesDemo},
    {path: 'misc', component: MiscDemo},
    {path: 'empty', component: EmptyDemo},
    {path: 'charts', component: ChartsDemo},
    {path: 'file', component: FileDemo},
    {path: 'utils', component: UtilsDemo},
    {path: 'documentation', component: Documentation}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
