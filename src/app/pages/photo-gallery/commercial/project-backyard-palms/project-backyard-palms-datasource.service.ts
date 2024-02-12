import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectBackyardPalmsDatasourceService {

	private imagesUrl = {
		landscape: [
			{
				number: 1,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 4.jpg",
			},
			{
				number: 5,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 5.jpg",
			},
			{
				number: 6,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 6.jpg",
			},
			{
				number: 7,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 8.jpg",
			},
			{
				number: 9,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 9.jpg",
			},
			{
				number: 10,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 10.jpg",
			},
			{
				number: 11,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 11.jpg",
			},
			{
				number: 12,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 12.jpg",
			},
			{
				number: 13,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 13.jpg",
			},
			{
				number: 14,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/landscape/Landscape 14.jpg",
			},
		],
		portrait: [
			{
				number: 1,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/portrait/Portrait 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/portrait/Portrait 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/portrait/Portrait 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/portrait/Portrait 4.jpg",
			},
			{
				number: 5,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/portrait/Portrait 5.jpg",
			},
			{
				number: 6,
				image: "../../../../../assets/content/photo-gallery/commercial/backyard-palms/portrait/Portrait 6.jpg",
			},
		]
	}

	constructor() { }

	getProjectBackyardPalmsDatasourceService() {
		return this.imagesUrl;
	}
}
