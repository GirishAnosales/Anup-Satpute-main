import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectDeoreDatasourceService {

	private imagesUrl = {
		landscape: [
			{
				number: 1,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/landscape/Landscape 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/landscape/Landscape 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/landscape/Landscape 3.jpg",
			},
		],
		portrait: [
			{
				number: 1,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/portrait/Portrait 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/portrait/Portrait 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/portrait/Portrait 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/portrait/Portrait 4.jpg",
			},
			{
				number: 5,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/portrait/Portrait 5.jpg",
			},
			{
				number: 7,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/portrait/Portrait 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../../assets/content/photo-gallery/residential/deore/portrait/Portrait 8.jpg",
			},
		]
	}

	constructor() { }

	getProjectDeoreDatasourceService() {
		return this.imagesUrl;
	}
}
