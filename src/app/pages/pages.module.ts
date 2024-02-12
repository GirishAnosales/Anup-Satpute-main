import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ClientTestimonialsComponent } from './client-testimonials/client-testimonials.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PaymentComponent } from './payment/payment.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { CancellationsComponent } from './cancellations/cancellations.component';
import { GrievanceComponent } from './grievance/grievance.component';
import { OneBhkInteriorDesignComponent } from './properties/one-bhk-interior-design/one-bhk-interior-design.component';
import { TwoBhkInteriorDesignComponent } from './properties/two-bhk-interior-design/two-bhk-interior-design.component';
import { ThreeBhkInteriorDesignComponent } from './properties/three-bhk-interior-design/three-bhk-interior-design.component';
import { PremiumInteriorsComponent } from './properties/premium-interiors/premium-interiors.component';
import { CorporateInteriorsComponent } from './properties/corporate-interiors/corporate-interiors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselComponent } from '../sections/carousel/carousel.component';
import { MaterialModule } from '../modules/material/material.module';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertiesNavComponent } from '../sections/properties-nav/properties-nav.component';
import { WhyUsComponent } from '../sections/why-us/why-us.component';
import { OurProcessComponent } from '../sections/our-process/our-process.component';
import { MembersComponent } from '../sections/members/members.component';
import { ContactUsComponent } from '../sections/contact-us/contact-us.component';
import { ContactFormAComponent } from '../forms/contact-form-a/contact-form-a.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OurDealsComponent } from '../sections/our-deals/our-deals.component';
import { ProjectBackyardPalmsComponent } from './photo-gallery/commercial/project-backyard-palms/project-backyard-palms.component';
import { ProjectKimayaGroupsComponent } from './photo-gallery/commercial/project-kimaya-groups/project-kimaya-groups.component';
import { ProjectAshokChandgudeComponent } from './photo-gallery/residential/project-ashok-chandgude/project-ashok-chandgude.component';
import { ProjectAshokSalkeComponent } from './photo-gallery/residential/project-ashok-salke/project-ashok-salke.component';
import { ProjectBhodleComponent } from './photo-gallery/residential/project-bhodle/project-bhodle.component';
import { ProjectDeoreComponent } from './photo-gallery/residential/project-deore/project-deore.component';
import { ProjectMandarSawantComponent } from './photo-gallery/residential/project-mandar-sawant/project-mandar-sawant.component';
import { CarouselAshokChandgudeComponent } from './photo-gallery/carousels/carousel-ashok-chandgude/carousel-ashok-chandgude.component';
import { CarouselAshokSalkeComponent } from './photo-gallery/carousels/carousel-ashok-salke/carousel-ashok-salke.component';
import { CarouselBhodleComponent } from './photo-gallery/carousels/carousel-bhodle/carousel-bhodle.component';
import { CarouselDeoreComponent } from './photo-gallery/carousels/carousel-deore/carousel-deore.component';
import { CarouselMandarSawantComponent } from './photo-gallery/carousels/carousel-mandar-sawant/carousel-mandar-sawant.component';
import { CarouselBackyardPalmsComponent } from './photo-gallery/carousels/carousel-backyard-palms/carousel-backyard-palms.component';
import { CarouselKimayaGroupsComponent } from './photo-gallery/carousels/carousel-kimaya-groups/carousel-kimaya-groups.component';
import { PackagesComponent } from '../shared/components/packages/packages.component';
import { PremiumComponent } from './premium/premium.component';
import { ModularComponent } from './modular/modular.component';
import { BecomeAPartnerComponent } from './become-a-partner/become-a-partner.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
	declarations: [
		HomeComponent,
		ServicesComponent,
		ClientTestimonialsComponent,
		PhotoGalleryComponent,
		PaymentComponent,
		WarrantyComponent,
		CancellationsComponent,
		GrievanceComponent,
		OneBhkInteriorDesignComponent,
		TwoBhkInteriorDesignComponent,
		ThreeBhkInteriorDesignComponent,
		PremiumInteriorsComponent,
		CorporateInteriorsComponent,
		CarouselComponent,
		PageNotFoundComponent,
		PropertiesNavComponent,
		WhyUsComponent,
		OurProcessComponent,
		MembersComponent,
		ContactUsComponent,
		ContactFormAComponent,
		OurDealsComponent,
		ProjectDeoreComponent,
		ProjectBhodleComponent,
		ProjectAshokChandgudeComponent,
		ProjectAshokSalkeComponent,
		ProjectMandarSawantComponent,
		ProjectBackyardPalmsComponent,
		ProjectKimayaGroupsComponent,
		CarouselAshokChandgudeComponent,
		CarouselAshokSalkeComponent,
		CarouselBhodleComponent,
		CarouselDeoreComponent,
		CarouselMandarSawantComponent,
		CarouselBackyardPalmsComponent,
		CarouselKimayaGroupsComponent,
		PackagesComponent,
		PremiumComponent,
		ModularComponent,
		BecomeAPartnerComponent,
		BlogComponent,
	],
	imports: [
		CommonModule,
		PagesRoutingModule,
		MaterialModule,
		NgbModule,
		NgbCarousel,
		ReactiveFormsModule
	]
})
export class PagesModule { }
