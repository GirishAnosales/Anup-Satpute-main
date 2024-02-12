import { Component } from '@angular/core';

@Component({
	selector: 'app-warranty',
	templateUrl: './warranty.component.html',
	styleUrls: ['./warranty.component.scss']
})
export class WarrantyComponent {

	semiModularKitchenTc = [
		'Notify AnupLifestyle within 10 days of any defect first coming into notice, via phone or mail.',
		'There may be shade variation in fabric colour or polish colour compared to one chosen during signoff due to dye to dye variation in fabric and wood inherent colour and material properties. This is not a defect.',
		'Fine hairline cracks, as they are part of the normal ageing process of wood veneers and solid wood furniture.',
		'AnupLifestyle quality policy does not cover natural wear and tear or damage caused by rough handling or using the product beyond its intended use. Scratches, dents, stains, wrinkles, colour-fading, weaning/beading of fabric/leather including other changes developed due to normal wear and tear of the products during the usage.',
		'The upholstery used is not covered under AnupLifestyle quality policy and, also not valid in case of defects caused by incorrect storage, abuse, alterations, wrong cleaning methods, cuts, scratches, impacts or accidents.',
		'No warranty for mechanism in sofa cum bed.',
		'Upholstery cracks, upholstery tears, flattening of nap, pilling, shrinking, heavy soiling of fabric/leather including, other changes developed due to normal wear and tear of the products during the usage.',
		'Breakages/Damages on account of negligence, unintended usage, misuse, accident, any act of god, abuse, any agent like water/acid, etc, coming in contact with wooden member/ leather, while shifting/transporting the product from one place to another, etc.',
		'AnupLifestyle will honour its quality policy only till the warranty time period is valid, subject to the limitations set through AnupLifestyle Terms & Conditions.',
	]

	solidWoodFurnitureTc = [
		'Notify AnupLifestyle within 10 days of any defect first coming into notice, via phone or email.',
		'AnupLifestyle quality policy does not cover natural wear and tear or damage caused by rough handling or using the product beyond its intended use.',
		'The following are not considered as defects: natural wood characteristics such as variations in grain, colour, mineral streaks and knots.',
		'AnupLifestyle will honour its quality policy only till the warranty time period is valid, subject to the limitations set through AnupLifestyle Terms & Conditions.',
		'There may be shade variation in polish colour compared to one chosen during signoff due to dye to dye variation in wood inherent colour and material properties. This is not a defect.',
	]

	onSiteFurnitureProductsTc = [
		'Notify AnupLifestyle within 10 days of any defect first coming into notice, via phone or email.',
		'AnupLifestyle quality policy does not cover natural wear and tear or damage caused by rough handling or using the product beyond its intended use.',
		'Indirect or unintentional damage to walls and flooring or any other items in the site during onsite activity',
		'racks developing in panelling work on which the recommended gypsum cladding has not done.',
		'Service claims caused due to door expansion and contraction due to climatic conditions.',
		'Modification or alteration work in existing furniture/doors of the customer.',
		'Cracks developing on sides of ply panelling as a result of vibrations in the building structure.',
		'The Company is not liable for any items misplaced during work.',
		'The Company is not liable for material claims once the debris has been disposed of from the flat.',
		'AnupLifestyle will honour its quality policy only till the warranty time period is valid, subject to the limitations set through AnupLifestyle Terms & Conditions.',
	]

	interiorWorksPaintingTc = [
		'Natural calamities & acts of God.',
		'Abuse or negligence by Customer.',
		'Vandalism.',
		'Paint damage due to structural defects, water leakage and seepage within the building structure and continuous dampness of the surface.',
		'Cracks caused by vibrations in the building structure.',
		'Damages caused due to multiple agencies working on site other than the Company technicians/representatives.',
	]

	interiorWorksCealingFalseTc = [
		'Additional drilling/weight addition done after completion of the false ceiling has commissioned causing cracks/joint opening',
		'Light fixture fitting/accessory fitting done after project handover.',
		'Cracks or any false ceiling failures caused due to room- temperature and humidity variations.',
		'Damages caused due to multiple agencies working on site other than the Company technicians/representatives.',
		'Cracks caused by vibrations due to constructional activity happening in the near vicinity or on-site interior works in flats adjacent.',
	]


	interiorWorksElectricalTc = [
		'Damages caused due to multiple agencies working on site other than the Company technicians/representatives.',
		'Alterations or modifications has done in electrical wiring without the knowledge of the Company after project handover.',
		'Switches, sockets, sensors and other electrical/electronic parts fitted by the Company.',
		'Light fixtures brought by the customer turns out to be faulty during fitting or post fitting then liability does not lie with the Company.',
	]

}
