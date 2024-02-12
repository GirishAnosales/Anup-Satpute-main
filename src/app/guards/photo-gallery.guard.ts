import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PhotoGalleryGuard implements CanActivate {
	constructor(private router: Router) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree {
		const allowedRoutes = [
			'/photo-gallery/deore',
			'/photo-gallery/bhodle',
			'/photo-gallery/ashok-salke',
			'/photo-gallery/ashok-chandgude',
			'/photo-gallery/mandar-sawant',
			'/photo-gallery/backyard-palms',
			'/photo-gallery/kimaya-groups',
		];
		const requestedRoute = state.url;

		if (allowedRoutes.includes(requestedRoute)) {
			return true; // User is allowed to access this route
		} else {
			// Redirect to a default route (or display an error)
			return this.router.parseUrl('/'); // Redirect to the home page or any other default route
		}
	}

}
