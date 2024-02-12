import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProjectBhodleDatasourceService {

	private imagesUrl = {
		landscape: [
			{
				number: 1,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 4.jpg",
			},
			{
				number: 5,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 5.jpg",
			},
			{
				number: 6,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 6.jpg",
			},
			{
				number: 7,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 8.jpg",
			},
			{
				number: 9,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 9.jpg",
			},
			{
				number: 10,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/landscape/Landscape 10.jpg",
			},
		],
		portrait: [
			{
				number: 1,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 1.jpg",
			},
			{
				number: 2,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 2.jpg",
			},
			{
				number: 3,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 3.jpg",
			},
			{
				number: 4,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 4.jpg",
			},
			{
				number: 5,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 5.jpg",
			},
			{
				number: 6,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 6.jpg",
			},
			{
				number: 7,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 7.jpg",
			},
			{
				number: 8,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 8.jpg",
			},
			{
				number: 9,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 9.jpg",
			},
			{
				number: 10,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 10.jpg",
			},
			{
				number: 11,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 11.jpg",
			},
			{
				number: 12,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 12.jpg",
			},
			{
				number: 13,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 13.jpg",
			},
			{
				number: 14,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 14.jpg",
			},
			{
				number: 15,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 15.jpg",
			},
			{
				number: 16,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 16.jpg",
			},
			{
				number: 17,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 17.jpg",
			},
			{
				number: 18,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 18.jpg",
			},
			{
				number: 19,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 19.jpg",
			},
			{
				number: 20,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 20.jpg",
			},
			{
				number: 21,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 21.jpg",
			},
			{
				number: 22,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 22.jpg",
			},
			{
				number: 23,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 23.jpg",
			},
			{
				number: 24,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 24.jpg",
			},
			{
				number: 25,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 25.jpg",
			},
			{
				number: 26,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 26.jpg",
			},
			{
				number: 27,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 27.jpg",
			},
			{
				number: 28,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 28.jpg",
			},
			{
				number: 29,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 29.jpg",
			},
			{
				number: 30,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 30.jpg",
			},
			{
				number: 31,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 31.jpg",
			},
			{
				number: 32,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 32.jpg",
			},
			{
				number: 33,
				image: "../../../../../../assets/content/photo-gallery/residential/bhodle/portrait/Portrait 33.jpg",
			},
		]
	}

	constructor() { }

	getProjectBhodleDatasourceService() {
		return this.imagesUrl;
	}
}
