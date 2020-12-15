import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './pages/overview/overview.component';
// import {ABTestComponent} from './pages/abtest/abtest.component';
// import {CloudComponent} from './pages/cloud/cloud.component';
// import {ColorsComponent} from './pages/colors/colors.component';
// import {ExperimentsComponent} from './pages/experiments/experiments.component';
// import {SecurityComponent} from './pages/security/security.component';
// import {OwnershipComponent} from './pages/ownership/ownership.component';
// import {SketchComponent} from './pages/sketch/sketch.component';
import {UnderConstructionComponent} from "./pages/under-construction/under-construction.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'ABTest', component: UnderConstructionComponent },
  { path: 'Cloud', component: UnderConstructionComponent },
  { path: 'Colors', component: UnderConstructionComponent },
  { path: 'Experiments', component: UnderConstructionComponent },
  { path: 'Ownership', component: UnderConstructionComponent },
  { path: 'Security', component: UnderConstructionComponent },
  { path: 'Sketch', component: UnderConstructionComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
