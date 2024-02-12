import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectMandarSawantDatasourceService {

	private imagesUrl = {
		landscape: [
			{
				number: 1,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 4.jpg",
			},
			{
				number: 6,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 6.jpg",
			},
			{
				number: 7,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 8.jpg",
			},
			{
				number: 9,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 9.jpg",
			},
			{
				number: 10,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 10.jpg",
			},
			{
				number: 11,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/landscape/Landscape 11.jpg",
			},
		],
		portrait: [
			{
				number: 1,
				image: "../../../../../../assets/content/photo-gallery/residential/mandar-sawant/portrait/Portrait 1.jpg",
			},
		]
	}

	constructor() { }

	getProjectMandarSawantDatasourceService() {
		return this.imagesUrl;
	}
}
