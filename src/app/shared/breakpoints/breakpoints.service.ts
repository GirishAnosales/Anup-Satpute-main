import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BreakpointsService {

	constructor(private breakpointObserver: BreakpointObserver) { }

	isXSmall$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
		map((result) => result.matches)
	);

	isSmall$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small]).pipe(
		map((result) => result.matches)
	);

	isMedium$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Medium]).pipe(
		map((result) => result.matches)
	);

	isLarge$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Large]).pipe(
		map((result) => result.matches)
	);

	isXLarge$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XLarge]).pipe(
		map((result) => result.matches)
	);

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map((result) => result.matches)
	);

	isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
		map((result) => result.matches)
	);

	isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web).pipe(
		map((result) => result.matches)
	);

	isHandsetPortrait$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(
		map((result) => result.matches)
	);

	isTabletPortrait$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.TabletPortrait).pipe(
		map((result) => result.matches)
	);

	isWebPortrait$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.WebPortrait).pipe(
		map((result) => result.matches)
	);

	isHandsetLandscape$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetLandscape).pipe(
		map((result) => result.matches)
	);

	isTabletLandscape$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.TabletLandscape).pipe(
		map((result) => result.matches)
	);

	isWebLandscape$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.WebLandscape).pipe(
		map((result) => result.matches)
	);
}
