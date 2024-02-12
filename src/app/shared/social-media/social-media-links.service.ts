import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SocialMediaLinksService {

	private social_media_links = {
		facebook: "https://www.facebook.com/profile.php?id=100094481974359&mibextid=LQQJ4d",
		instagram: "https://instagram.com/anuplifestyles?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
		linkedin: "https://www.linkedin.com/in/anup-satpute-7a0b9828b",
		pinterest: "https://in.pinterest.com/AnupLifestyles/_created/",
		youtube: "https://youtube.com/@AnupLifestyles?si=ovD4F8WZ4j5yx-bh",
	}

	constructor() { }

	getSocialMediaLinksService(){
		return this.social_media_links;
	}
}
