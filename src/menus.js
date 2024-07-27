


const customers = {
	'delfino-bianco': {
		website: "https://www.ristorantedelfinobianco.it",
		email: "ristorantedelfinobianco@gmail.com",
		phone: ["+39.0185.450.837", "328.1467737"],
		vat: "02391980998",

		// theme
		pic: 'https://ristorantedelfinobianco.it/img/wine.webp',
		bgColor: '#fafafa',
		primaryColor: '#213f63',
		secondaryColor: '#999999',
		accentColor: '#296fae',
		fontFamily: '"Josefin Sans", sans-serif',
	},
	'bagni-giovanni': {
		address: "Via Lungomare Cavi di Lavagna (GE)",
		website: "https://www.bagnigiovanni.it",
		email: "bagnigiovanni@pec.it",
		phone: ["+39 0185 696948"],
		vat: "01002240990",

		// theme
		pic: 'https://bagnigiovanni.it/images/logo.webp',
		bgColor: '#fdfdfd',
		primaryColor: '#888',
		secondaryColor: '#999999',
		accentColor: '#296fae',
		fontFamily: "Helvetica,Arial,sans-serif",
	},
	pescou: {
		address: "Via Dante Alighieri, 70, 16033 Lavagna GE",
		website: "",
		email: "",
		phone: ["+39 0185 392727"],
		vat: "",

		// theme
		pic: undefined,
		bgColor: '#fff',
		primaryColor: '#333',
		secondaryColor: '#3f3',
		accentColor: '#f33',
		fontFamily: 'Montserrat'
	},
	'desco-dei-fieschi': {
		address: "Piazza della Libertà, 42, 16033 Lavagna GE",
		website: "https://www.ildescodeifieschi.it/",
		email: "",
		phone: ["+39 0185 392765"],
		vat: "02232360996",

		// theme
		pic: 'https://lirp.cdn-website.com/f70487f7/dms3rep/multi/opt/logo-il-desco-dei-fieschi-a3846b59-140h.png',
		bgColor: '#cbe8f6',
		primaryColor: '#19377c',
		secondaryColor: '#333333',
		accentColor: '#fff',
		fontFamily: 'Poppins,"Poppins Fallback"'
	}
}

const menus = {
	'delfino-bianco-vini': {
		url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsqIM7bI1QSk4J7bJlAzgvUks8ZtzXrOSNezIQ5kYo7Cu69pcq9o4sFwX5_cnwbotWwOaSYFoVlVMA/pub?gid=0&single=true&output=tsv',
		title: 'Ristorante Delfino Bianco',
		subtitle: 'Menu dei vini',
		...customers['delfino-bianco'],
	},
	'delfino-bianco-special': {
		url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsqIM7bI1QSk4J7bJlAzgvUks8ZtzXrOSNezIQ5kYo7Cu69pcq9o4sFwX5_cnwbotWwOaSYFoVlVMA/pub?gid=0&single=true&output=tsv',
		title: "Ristorante Delfino Bianco",
		subtitle: 'Menu special',
		...customers['delfino-bianco'],
	},

	'bagni-giovanni': {
		url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8qhCOv9jDeoTc9afdaTMEvCh9yXXFjVRg855B9WSmr7jrgQipflrQ0cD3Q87bLQ5QvpsWaekF0Nyl/pub?gid=0&single=true&output=tsv',
		title: 'Bagni Giovanni',
		subtitle: 'Menu Ristorante',
		...customers['bagni-giovanni'],
	},
	'bagni-giovanni-vini': {
		url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8qhCOv9jDeoTc9afdaTMEvCh9yXXFjVRg855B9WSmr7jrgQipflrQ0cD3Q87bLQ5QvpsWaekF0Nyl/pub?gid=2022557443&single=true&output=tsv',
		title: 'Bagni Giovanni',
		subtitle: 'Menu dei vini',
		...customers['bagni-giovanni'],
	},
	'bagni-giovanni-bar': {
		url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8qhCOv9jDeoTc9afdaTMEvCh9yXXFjVRg855B9WSmr7jrgQipflrQ0cD3Q87bLQ5QvpsWaekF0Nyl/pub?gid=1620509354&single=true&output=tsv',
		title: 'Bagni Giovanni',
		subtitle: 'Menu tavola fredda',
		...customers['bagni-giovanni'],
	},

	'pescou-vini': {
		url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnaA-01E4XuwdiXk1gdW7wGIVqokg7IfEAMkn_-TxohUtr_LjVvaAiCTU5zwnEfe2Rv1gHNWH7ymXQ/pub?gid=2022557443&single=true&output=tsv',
		title: 'Trattoria u Pescou',
		subtitle: 'Ristorante di pesce',
		...customers.pescou,
	},
	
	'fieschi-vini': {
		url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vThO3yYC0qBhvLAbrav7EUkzKOo2Q4WVHdGrPQ7MMJTqQRrPVLb5_ars-DFpHPpzEzyeREGCCFMyN1H/pub?gid=2022557443&single=true&output=tsv',
		title: 'Il Desco dei Fieschi',
		subtitle: 'Ristorante Pizzeria',
		...customers['desco-dei-fieschi'],
	},
};

export default menus