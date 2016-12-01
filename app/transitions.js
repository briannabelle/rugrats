export default function() {
	this.transition(
		this.fromRoute('home.angelica'),
		this.toRoute('home.chuckie'),
		this.use('toUp'),
		this.reverse('toDown')
	);

	this.transition(
		this.fromRoute('home.chuckie'),
		this.toRoute('home.dil'),
		this.use('toUp'),
		this.reverse('toDown')
	);

	this.transition(
		this.fromRoute('home.dil'),
		this.toRoute('home.phil-lil'),
		this.use('toUp'),
		this.reverse('toDown')
	);

	this.transition(
		this.fromRoute('home.phil-lil'),
		this.toRoute('home.tommy'),
		this.use('toUp'),
		this.reverse('toDown')
	);
}