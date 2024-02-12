import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	isSmall!: Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver) { }

	ngOnInit(): void {
		this.isSmall = this.breakpointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small
		])
			.pipe(
				map(res => res.matches)
			)
	}
}
