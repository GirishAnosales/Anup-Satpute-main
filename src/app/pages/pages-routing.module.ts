import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ServicesComponent } from './services/services.component';
import { ClientTestimonialsComponent } from './client-testimonials/client-testimonials.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { PaymentComponent } from './payment/payment.component';
import { CancellationsComponent } from './cancellations/cancellations.component';
import { GrievanceComponent } from './grievance/grievance.component';
import { CorporateInteriorsComponent } from './properties/corporate-interiors/corporate-interiors.component';
import { OneBhkInteriorDesignComponent } from './properties/one-bhk-interior-design/one-bhk-interior-design.component';
import { PremiumInteriorsComponent } from './properties/premium-interiors/premium-interiors.component';
import { ThreeBhkInteriorDesignComponent } from './properties/three-bhk-interior-design/three-bhk-interior-design.component';
import { TwoBhkInteriorDesignComponent } from './properties/two-bhk-interior-design/two-bhk-interior-design.component';
import { PhotoGalleryGuard } from '../guards/photo-gallery.guard';
import { ProjectAshokChandgudeComponent } from './photo-gallery/residential/project-ashok-chandgude/project-ashok-chandgude.component';
import { ProjectAshokSalkeComponent } from './photo-gallery/residential/project-ashok-salke/project-ashok-salke.component';
import { ProjectBackyardPalmsComponent } from './photo-gallery/commercial/project-backyard-palms/project-backyard-palms.component';
import { ProjectBhodleComponent } from './photo-gallery/residential/project-bhodle/project-bhodle.component';
import { ProjectDeoreComponent } from './photo-gallery/residential/project-deore/project-deore.component';
import { ProjectKimayaGroupsComponent } from './photo-gallery/commercial/project-kimaya-groups/project-kimaya-groups.component';
import { ProjectMandarSawantComponent } from './photo-gallery/residential/project-mandar-sawant/project-mandar-sawant.component';
import { PremiumComponent } from './premium/premium.component';
import { ModularComponent } from './modular/modular.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
	{ path: '', component: PagesComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'become-a-partner', component: BecomeAPartnerComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'completed-projects', component: PhotoGalleryComponent },
	{ path: 'completed-projects/reisdential/1', component: ProjectAshokChandgudeComponent },
	{ path: 'completed-projects/reisdential/2', component: ProjectAshokSalkeComponent },
	{ path: 'completed-projects/reisdential/3', component: ProjectBhodleComponent },
	{ path: 'completed-projects/reisdential/4', component: ProjectDeoreComponent },
	{ path: 'completed-projects/reisdential/5', component: ProjectMandarSawantComponent },
	{ path: 'completed-projects/commercial/backyard-palms', component: ProjectBackyardPalmsComponent },
	{ path: 'completed-projects/commercial/kimaya-groups', component: ProjectKimayaGroupsComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'premium', component: PremiumComponent },
	{ path: 'modular', component: ModularComponent },
	{
		path: 'properties',
		children: [
			{ path: '1-bhk-interior-design', component: OneBhkInteriorDesignComponent },
			{ path: '2-bhk-interior-design', component: TwoBhkInteriorDesignComponent },
			{ path: '3-bhk-interior-design', component: ThreeBhkInteriorDesignComponent },
			{ path: 'premium-interiors', component: PremiumInteriorsComponent },
			{ path: 'corporate-interiors', component: CorporateInteriorsComponent },
		]
	},
	{ path: 'client-testimonials', component: ClientTestimonialsComponent },
	{ path: 'warranty', component: WarrantyComponent },
	{ path: 'payment', component: PaymentComponent },
	{ path: 'cancellations', component: CancellationsComponent },
	{ path: 'grievance', component: GrievanceComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
