import { trigger, style, animate, transition, keyframes, animation, useAnimation, sequence, query, stagger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
	transition(':enter', [
		style({ opacity: 0 }),
		animate('700ms ease-in-out', style({ opacity: 1 })),
	]),
]);

export const fadeInLeft = trigger('fadeInLeft', [
	transition(':enter', [
		query('.img', [
			style({ opacity: 0, transform: 'translateX(4rem)' }),
			stagger('300ms', [
				animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
			])
		], { optional: true })
	]),
]);

export const fadeInUp = trigger('fadeInUp', [
	transition(':enter', [
		query('.fadeInUp', [
			style({ opacity: 0, transform: 'translateY(4rem)' }),
			stagger('300ms', [
				animate('1000ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
			])
		], { optional: true })
	]),
]);

export const loop = animation([
	animate(
		'5s ease-in-out',
		keyframes([
			style({ transform: 'scale(1.2)' }),
		])
	),
	animate(
		'5s ease-in-out',
		keyframes([
			style({ transform: 'scale(1)' }),
		])
	),
]);

// Create a function to apply the animation infinitely
export function infiniteLoopAnimation() {
	return animation([
		useAnimation(loop),
		// Add a delay before repeating the animation
		// animate('10s', style({})), // This is necessary to reset the animation
		// animate('10s', style({})), // This duration should match your loop duration
	]);
}

export const zoomInAndOut = trigger('zoomInAndOut', [
	transition('* <=> *', [infiniteLoopAnimation()]),
]);