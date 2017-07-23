import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThreedComponent } from './media/threed/threed.component';
import { TwodComponent } from './media/twod/twod.component';
import { RietveldHandsComponent } from './media/twod/photo/rietveld-hands/rietveld-hands.component';
import { FridoComponent } from './media/twod/photo/frido/frido.component';
import { PolarComponent } from './media/twod/photo/polar/polar.component';
import { OldComponent } from './media/twod/photo/old/old.component';
import { PortraitsComponent } from './media/twod/photo/portraits/portraits.component';
import { DenDolderDigitalComponent } from './media/twod/photo/den-dolder-digital/den-dolder-digital.component';
import { DenDolderAnalogComponent } from './media/twod/photo/den-dolder-analog/den-dolder-analog.component';
import { PhotogramsComponent } from './media/twod/photo/photograms/photograms.component';
import { VideoComponent } from './media/twod/video/video.component';
import { PhotoComponent } from './media/twod/photo/photo.component';
import { BooksComponent } from './media/twod/books/books.component';
import { CollagesComponent } from './media/twod/collages/collages.component';
import { SomehowPurechanceComponent } from './media/twod/books/somehow-purechance/somehow-purechance.component';

import { DuoComponent } from './media/twod/books/duo/duo.component';
import { DogspottingComponent } from './media/twod/books/dogspotting/dogspotting.component';
import { AlohaComponent } from './media/twod/books/aloha/aloha.component';
import { AnoukComponent } from './media/twod/books/anouk/anouk.component';
import { KirasComponent } from './media/twod/books/kiras/kiras.component';
import { EfdeComponent } from './media/twod/books/efde/efde.component';
import { CramerComponent } from './media/twod/books/cramer/cramer.component';
import { EmmerComponent } from './media/twod/books/emmer/emmer.component';
import { HijmaComponent } from './media/twod/books/hijma/hijma.component';
import { RomeroComponent } from './media/twod/books/romero/romero.component';
import { FreeAssociationComponent } from './media/twod/books/free-association/free-association.component';
import { HealersComponent } from './media/twod/books/healers/healers.component';
import { SkullComponent } from './media/twod/books/skull/skull.component';
import { MapaComponent } from './media/twod/books/mapa/mapa.component';
import { ShoppingMallComponent } from './media/twod/video/shopping-mall/shopping-mall.component';
import { FleurComponent } from './media/twod/video/fleur/fleur.component';
import { MixedReferencesComponent } from './media/twod/video/mixed-references/mixed-references.component';
import { EncounterComponent } from './media/twod/video/encounter/encounter.component';
import { DirtyprojectionComponent } from './media/twod/video/dirtyprojection/dirtyprojection.component';
import { FirebubblesComponent } from './media/twod/video/firebubbles/firebubbles.component';
import { LandscapeComponent } from './media/twod/video/landscape/landscape.component';
import { MachinesComponent } from './media/threed/sculptures/machines/machines.component';
import { AntiroutineComponent } from './media/threed/sculptures/antiroutine/antiroutine.component';
import { HandlesComponent } from './media/threed/sculptures/handles/handles.component';
import { DenDolderComponent } from './media/threed/installations/den-dolder/den-dolder.component';
import { TemporaryComponent } from './media/threed/installations/temporary/temporary.component';
import { InstallationsComponent } from './media/threed/installations/installations.component';
import { SculpturesComponent } from './media/threed/sculptures/sculptures.component';
import { BodyLandscapeComponent } from './media/twod/books/body-landscape/body-landscape.component';
import { DenDolderprojComponent } from './projects/den-dolderproj/den-dolderproj.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
   {
    path: 'media/threed',
    component: ThreedComponent
  },
   {
    path: 'media/twod',
    component: TwodComponent
  },
   {
     path: 'media/twod/photo/rietveld-hands',
     component: RietveldHandsComponent 
   },
 {
   path: 'media/twod/photo/frido',
   component: FridoComponent 
   },
 {
   path: 'media/twod/photo/polar',
   component: PolarComponent 
   },
 {
   path: 'media/twod/photo/old',
   component: OldComponent 
   },
 {
   path: 'media/twod/photo/portraits',
   component: PortraitsComponent 
   },
 {
   path: 'media/twod/photo/den-dolder-digital',
   component: DenDolderDigitalComponent 
   },
   {
   path: 'media/twod/photo/den-dolder-analog',
   component: DenDolderAnalogComponent 
   },
   {
   path: 'media/twod/photo/photograms',
   component: PhotogramsComponent
   },
 {
   path: 'media/twod/video',
   component: VideoComponent 
   },
 {
   path: 'media/twod/photo',
   component: PhotoComponent 
   },
 {
   path: 'media/twod/books',
   component: BooksComponent 
   },
 {
   path: 'media/twod/collages',
   component: CollagesComponent 
   },
 {
   path: 'media/twod/books/somehow-purechance',
   component: SomehowPurechanceComponent 
   },
 
 {
   path: 'media/twod/books/duo',
   component: DuoComponent 
   },
 {
   path: 'media/twod/books/dogspotting',
   component: DogspottingComponent
   },
 {
   path: 'media/twod/books/aloha',
   component: AlohaComponent 
   },
 {
   path: 'media/twod/books/anouk',
   component: AnoukComponent 
   },
 {
   path: 'media/twod/books/efde',
   component: KirasComponent 
   },
 {
   path: 'media/twod/books/kiras',
   component: EfdeComponent 
   },
 {
   path: 'media/twod/books/cramer',
   component: CramerComponent 
   },
 {
   path:  'media/twod/books/emmer',
   component: EmmerComponent 
   },
 {
   path:  'media/twod/books/hijma',
   component: HijmaComponent 
   },
   {
   path: 'media/twod/books/romero',
   component: RomeroComponent 
   },
 {
   path: 'media/twod/books/free-association',
   component: FreeAssociationComponent 
   },
 {
   path: 'media/twod/books/healers',
   component: HealersComponent 
   },
 {
   path: 'media/twod/books/skull',
   component: SkullComponent 
   },
 {
   path: 'media/twod/books/mapa',
   component: MapaComponent 
   },
 {
   path: 'media/twod/video/shopping-mall',
   component: ShoppingMallComponent 
   },
 {
   path: 'media/twod/video/fleur',
   component: FleurComponent 
   },
 {
   path: 'media/twod/video/mixed-references',
   component: MixedReferencesComponent 
   },
 {
   path: 'media/twod/video/encounter',
   component: EncounterComponent 
   },
 {
   path: 'media/twod/video/dirtyprojection',
   component: DirtyprojectionComponent 
   },
 {
   path: 'media/twod/video/firebubbles',
   component: FirebubblesComponent 
 },
 {
   path: 'media/twod/video/landscape',
   component: LandscapeComponent
 },
 {
   path: 'media/threed/sculptures/machines',
   component: MachinesComponent 
 },
 {
   path: 'media/threed/sculptures/antiroutine',
   component: AntiroutineComponent 
 },
 {
   path: 'media/threed/sculptures/handles',
   component: HandlesComponent 
 },
 {
   path: 'media/threed/installations/den-dolder',
   component: DenDolderComponent 
 },
 {
   path: 'media/threed/installations/temporary',
   component: TemporaryComponent 
 },
   {
   path: 'media/threed/installations',
   component: InstallationsComponent 
 },
   {
   path: 'media/threed/sculptures',
   component: SculpturesComponent
 },
   {
   path: 'media/twod/books/body-landscape',
   component: BodyLandscapeComponent
 },
   {
   path: 'projects/den-dolderproj',
   component: DenDolderprojComponent
 }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
