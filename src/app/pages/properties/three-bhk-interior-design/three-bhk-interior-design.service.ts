import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThreeBhkInteriorDesignService {

	private packages = [
		{
			name: "Silver",
			price: "Rs. 5,00,000/-",
			type: "MODULAR",
			image:"",
			information: [
				{
					no: 1,
					description1: "Kitchen base unit.",
					description2: "Laminate+SS.",
				},
				{
					no: 2,
					description1: "TV unit.",
					description2: "Laminate.",
				},
				{
					no: 3,
					description1: "TV unit drawers.",
					description2: "Laminate.",
				},
				{
					no: 4,
					description1: "Shoe rack.",
					description2: "",
				},
				{
					no: 5,
					description1: "King size bed with side tables.",
					description2: "Laminate.",
				},
				{
					no: 6,
					description1: "Wardrobe.",
					description2: "Laminate.",
				},
				{
					no: 7,
					description1: "False ceiling.",
					description2: "For living.",
				},
				{
					no: 8,
					description1: "Paint.",
					description2: "",
				},
				{
					no: 9,
					description1: "Electricals.",
					description2: "",
				},
				{
					no: 10,
					description1: "Deep cleaning.",
					description2: "",
				},
				{
					no: 11,
					description1: "Curtains.",
					description2: "",
				},
			],
		},
		{
			name: "Gold",
			price: "Rs. 7,00,000/-",
			type: "MODULAR/CARPET",
			image:"",
			information: [
				{
					no: 1,
					description1: "Kitchen base unit.",
					description2: "Laminate+SS.",
				},
				{
					no: 2,
					description1: "O.H. unit.",
					description2: "Laminate.",
				},
				{
					no: 3,
					description1: "TV unit.",
					description2: "Laminate.",
				},
				{
					no: 4,
					description1: "TV unit drawers.",
					description2: "Laminate+Glass.",
				},
				{
					no: 5,
					description1: "Sofa.",
					description2: "3.",
				},
				{
					no: 6,
					description1: "Shoe rack.",
					description2: "",
				},
				{
					no: 7,
					description1: "Centre table.",
					description2: "",
				},
				{
					no: 8,
					description1: "King bed with side table.",
					description2: "Laminate+Fabric.",
				},
				{
					no: 9,
					description1: "Wardrobe.",
					description2: "Laminate.",
				},
				{
					no: 10,
					description1: "False ceiling.",
					description2: "Living + Bed.",
				},
				{
					no: 11,
					description1: "Mandir.",
					description2: "",
				},
				{
					no: 12,
					description1: "Paint.",
					description2: "",
				},
				{
					no: 13,
					description1: "Electricals.",
					description2: "",
				},
				{
					no: 14,
					description1: "Deep cleaning.",
					description2: "",
				},
				{
					no: 15,
					description1: "Curtains.",
					description2: "",
				},
				{
					no: 16,
					description1: "Artifacts and frames.",
					description2: "",
				},
			],
		},
		{
			name: "Platinum",
			price: "Rs. 10,00,000/-",
			type: "MODULAR/CARPET",
			image:"",
			information: [
				{
					no: 1,
					description1: "Kitchen base unit.",
					description2: "Acrylic+Tandem.",
				},
				{
					no: 2,
					description1: "O.H. unit.",
					description2: "Acrylic.",
				},
				{
					no: 3,
					description1: "Kitchen loft/ Tall unit.",
					description2: "",
				},
				{
					no: 4,
					description1: "TV unit.",
					description2: "B.P. glass.",
				},
				{
					no: 5,
					description1: "TV unit drawers.",
					description2: "H.G. laminate.",
				},
				{
					no: 6,
					description1: "Sofa.",
					description2: "3.",
				},
				{
					no: 7,
					description1: "Shoe rack.",
					description2: "H.G. laminate.",
				},
				{
					no: 8,
					description1: "Centre table.",
					description2: "",
				},
				{
					no: 9,
					description1: "King bed with side table.",
					description2: "H.G. laminate+ HYDR+LATHERATE.",
				},
				{
					no: 10,
					description1: "Wardrobe.",
					description2: "Laminate/Toughened glass.",
				},
				{
					no: 11,
					description1: "Dresser.",
					description2: "",
				},
				{
					no: 12,
					description1: "False ceiling.",
					description2: "Living + Bed.",
				},
				{
					no: 13,
					description1: "Mandir.",
					description2: "",
				},
				{
					no: 14,
					description1: "Paint.",
					description2: "",
				},
				{
					no: 15,
					description1: "Electricals.",
					description2: "",
				},
				{
					no: 16,
					description1: "Deep cleaning.",
					description2: "",
				},
				{
					no: 17,
					description1: "Curtains.",
					description2: "",
				},
				{
					no: 18,
					description1: "Artifacts and frames.",
					description2: "",
				},
				{
					no: 19,
					description1: "Easy dryer.",
					description2: "",
				},
			],
		},
	];

	getPackagesData() {
		return this.packages;
	}
}
