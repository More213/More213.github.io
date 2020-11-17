import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './components/overview/overview.component';
import {ABTestComponent} from './components/abtest/abtest.component';
import {CloudComponent} from './components/cloud/cloud.component';
import {ColorsComponent} from './components/colors/colors.component';
import {ExperimentsComponent} from './components/experiments/experiments.component';
import {SecurityComponent} from './components/security/security.component';
import {OwnershipComponent} from './components/ownership/ownership.component';
import {SketchComponent} from './components/sketch/sketch.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'ABTest', component: ABTestComponent },
  { path: 'Cloud', component: CloudComponent },
  { path: 'Colors', component: ColorsComponent },
  { path: 'Experiments', component: ExperimentsComponent },
  { path: 'Ownership', component: OwnershipComponent },
  { path: 'Security', component: SecurityComponent },
  { path: 'Sketch', component: SketchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
