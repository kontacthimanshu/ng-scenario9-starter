import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './properties/properties-list.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
import { CreatePropertyComponent } from './properties/new-property.component';
import { NotFoundComponent } from './errors/notfound.component';
import { PropertyDetailsRouteActivatorService } from './properties/property-details-route-activator.service';
import { PropertiesListResolverService } from './properties/properties-list-resolver.service';

const routes: Routes = [
  { path:'properties', component: PropertyListComponent, resolve:{ props: PropertiesListResolverService } },
  { path:'properties/new', component: CreatePropertyComponent, canDeactivate: ['canDeactivateCreateProperty'] },
  { path:'properties/:id', component: PropertyDetailsComponent, canActivate:[PropertyDetailsRouteActivatorService] },
  { path:'notfound', component: NotFoundComponent },
  { path:'', redirectTo:'/properties', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }