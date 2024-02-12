import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectAshokChandgudeDatasourceService {

	private imagesUrl = {
		landscape: [
			{
				number: 1,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 4.jpg",
			},
			{
				number: 5,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 5.jpg",
			},
			{
				number: 6,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 6.jpg",
			},
			{
				number: 7,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/landscape/Landscape 8.jpg",
			},
		],
		portrait: [
			{
				number: 1,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 4.jpg",
			},
			{
				number: 5,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 5.jpg",
			},
			{
				number: 6,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 6.jpg",
			},
			{
				number: 7,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 8.jpg",
			},
			{
				number: 9,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 9.jpg",
			},
			{
				number: 10,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 10.jpg",
			},
			{
				number: 11,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 11.jpg",
			},
			{
				number: 12,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 12.jpg",
			},
			{
				number: 13,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 13.jpg",
			},
			{
				number: 14,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 14.jpg",
			},
			{
				number: 15,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 15.jpg",
			},
			{
				number: 16,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 16.jpg",
			},
			{
				number: 17,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 17.jpg",
			},
			{
				number: 18,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 18.jpg",
			},
			{
				number: 19,
				image: "../../../../../assets/content/photo-gallery/residential/ashok-chandgude/portrait/Portrait 19.jpg",
			},
		]
	}

	constructor() { }

	getProjectAshokChandgudeDatasourceService() {
		return this.imagesUrl;
	}
}
