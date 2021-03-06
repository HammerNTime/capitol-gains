let senators = [
	{
		name: "Gary C Peters",
		party: "Democrat",
		state: "MI",
		image: "https://theunitedstates.io/images/congress/450x550/P000595.jpg",
	},
	{
		name: "Thomas R Carper",
		party: "Democrat",
		state: "DE",
		image: "https://theunitedstates.io/images/congress/450x550/C000174.jpg",
	},
	{
		name: "Angus S King, Jr.",
		party: "Independent",
		state: "ME",
		image: "https://theunitedstates.io/images/congress/450x550/K000383.jpg",
	},
	{
		name: "Thomas H Tuberville",
		party: "Republican",
		state: "AL",
		image: "https://bioguide.congress.gov/bioguide/photo/T/T000278.jpg",
	},
	{
		name: "Sheldon Whitehouse",
		party: "Democrat",
		state: "RI",
		image: "https://theunitedstates.io/images/congress/450x550/W000802.jpg",
	},
	{
		name: "Shelley M Capito",
		party: "Republican",
		state: "WV",
		image: "https://theunitedstates.io/images/congress/450x550/C001047.jpg",
	},
	{
		name: "Susan M Collins",
		party: "Republican",
		state: "ME",
		image: "https://theunitedstates.io/images/congress/450x550/C001035.jpg",
	},
	{
		name: "Mark R Warner",
		party: "Democrat",
		state: "VA",
		image: "https://theunitedstates.io/images/congress/450x550/W000805.jpg",
	},
	{
		name: "Michael F Bennet",
		party: "Democrat",
		state: "CO",
		image: "https://theunitedstates.io/images/congress/450x550/B001267.jpg",
	},
	{
		name: "Ron L Wyden",
		party: "Democrat",
		state: "OR",
		image: "https://theunitedstates.io/images/congress/450x550/W000779.jpg",
	},
	{
		name: "John W Hickenlooper",
		party: "Democrat",
		state: "CO",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/a/a8/John_Hickenlooper%2C_official_portrait%2C_117th_Congress.jpeg",
	},
	{
		name: "William F Hagerty, Iv",
		party: "Republican",
		state: "TN",
		image:
			"data:image/jpeg;base64,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",
	},
	{
		name: "Patrick J Toomey",
		party: "Republican",
		state: "PA",
		image: "https://theunitedstates.io/images/congress/450x550/T000461.jpg",
	},
	{
		name: "Rick Scott",
		party: "Republican",
		state: "FL",
		image: "https://theunitedstates.io/images/congress/450x550/S001217.jpg",
	},
	{
		name: "John Boozman",
		party: "Republican",
		state: "AR",
		image: "https://theunitedstates.io/images/congress/450x550/B001236.jpg",
	},
	{
		name: "A. Mitchell Mcconnell, Jr.",
		party: "Republican",
		state: "KY",
		image:
			"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQzMzQ5Mjg4NTY5Njc3Mzgz/mitch-mcconnell-official-senate-portrait_1600jpg.jpg",
	},
	{
		name: "Mike Rounds",
		party: "Republican",
		state: "SD",
		image: "https://theunitedstates.io/images/congress/450x550/R000605.jpg",
	},
	{
		name: "Jerry Moran",
		party: "Republican",
		state: "KS",
		image: "https://cdn.britannica.com/25/181825-050-4A9549C8/Jerry-Moran.jpg",
	},
	{
		name: "Richard M Burr",
		party: "Republican",
		state: "NC",
		image: "https://theunitedstates.io/images/congress/450x550/B001135.jpg",
	},
	{
		name: "Tina Smith",
		party: "Democrat",
		state: "MN",
		image: "https://theunitedstates.io/images/congress/450x550/S001203.jpg",
	},
	{
		name: "Ladda Tammy Duckworth",
		party: "Democrat",
		state: "IL",
		image: "https://theunitedstates.io/images/congress/450x550/D000622.jpg",
	},
	{
		name: "Daniel S Sullivan",
		party: "Democrat",
		state: "NY",
		image:
			"data:image/jpeg;base64,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",
	},
	{
		name: "Christopher A Coons",
		party: "Democrat",
		state: "DE",
		image: "https://theunitedstates.io/images/congress/450x550/C001088.jpg",
	},
	{
		name: "James M Inhofe",
		party: "Republican",
		state: "OK",
		image: "https://theunitedstates.io/images/congress/450x550/I000024.jpg",
	},
	{
		name: "Pat Roberts",
		party: "Republican",
		state: "KS",
		image: "https://theunitedstates.io/images/congress/450x550/R000307.jpg",
	},
	{
		name: "Jacklyn S Rosen",
		party: "Democrat",
		state: "NV",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/a/ab/Jacky_Rosen%2C_official_portrait%2C_116th_congress.jpg",
	},
	{
		name: "William Cassidy",
		party: "Republican",
		state: "LA",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/0/04/Bill_Cassidy_official_Senate_photo.jpg",
	},
	{
		name: "Richard Blumenthal",
		party: "Democrat",
		state: "CT",
		image: "https://theunitedstates.io/images/congress/450x550/B001277.jpg",
	},
	{
		name: "David A Perdue , Jr",
		party: "Republican",
		state: "GA",
		image: "https://theunitedstates.io/images/congress/450x550/P000612.jpg",
	},
	{
		name: "Kelly Loeffler",
		party: "Republican",
		state: "GA",
		image: "https://theunitedstates.io/images/congress/450x550/L000594.jpg",
	},
	{
		name: "Timothy M Kaine",
		party: "Democrat",
		state: "VA",
		image: "https://theunitedstates.io/images/congress/450x550/K000384.jpg",
	},
	{
		name: "Jeanne Shaheen",
		party: "Democrat",
		state: "NH",
		image: "https://theunitedstates.io/images/congress/450x550/S001181.jpg",
	},
	{
		name: "Ron Johnson",
		party: "Republican",
		state: "WI",
		image: "https://theunitedstates.io/images/congress/450x550/J000293.jpg",
	},
	{
		name: "Roger F Wicker",
		party: "Republican",
		state: "MS",
		image: "https://theunitedstates.io/images/congress/450x550/W000437.jpg",
	},
	{
		name: "John Hoeven",
		party: "Republican",
		state: "ND",
		image: "https://theunitedstates.io/images/congress/450x550/H001061.jpg",
	},
	{
		name: "Dianne Feinstein",
		party: "Democrat",
		state: "CA",
		image: "https://theunitedstates.io/images/congress/450x550/F000062.jpg",
	},
	{
		name: "Lamar Alexander",
		party: "Republican",
		state: "TN",
		image: "https://theunitedstates.io/images/congress/450x550/A000360.jpg",
	},
	{
		name: "Roy Blunt",
		party: "Republican",
		state: "MO",
		image: "https://theunitedstates.io/images/congress/450x550/B000575.jpg",
	},
	{
		name: "John N Kennedy",
		party: "Republican",
		state: "LA",
		image: "https://theunitedstates.io/images/congress/450x550/K000393.jpg",
	},
	{
		name: "Rafael E Cruz",
		party: "Republican",
		state: "TX",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/9/95/Ted_Cruz_official_116th_portrait.jpg",
	},
	{
		name: "Thomas Udall",
		party: "Democrat",
		state: "NM",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/4/40/Tom_Udall_official_photo.jpg",
	},
	{
		name: "John F Reed",
		party: "Democrat",
		state: "RI",
		image: "https://theunitedstates.io/images/congress/450x550/R000122.jpg",
	},
	{
		name: "Thomas R Tillis",
		party: "Republican",
		state: "TN",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/e/ee/Thom_Tillis_Official_Photo.jpg",
	},
	{
		name: "John A Barrasso",
		party: "Republican",
		state: "WY",
		image: "https://theunitedstates.io/images/congress/450x550/B001261.jpg",
	},
	{
		name: "Robert P Casey, Jr.",
		party: "Democrat",
		state: "PA",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/3/30/Bob_Casey_Jr._official_photo.jpg",
	},
	{
		name: "Robert J Portman",
		party: "Republican",
		state: "OH",
		image: "https://theunitedstates.io/images/congress/450x550/P000449.jpg",
	},
	{
		name: "Benjamin L Cardin",
		party: "Democrat",
		state: "MD",
		image: "https://theunitedstates.io/images/congress/450x550/C000141.jpg",
	},
	{
		name: "Tammy Duckworth",
		party: "Democrat",
		state: "IL",
		image: "https://theunitedstates.io/images/congress/450x550/D000622.jpg",
	},
	{
		name: "Joseph Manchin, Iii",
		party: "Democrat",
		state: "WV",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/9/9c/Senator_Manchin.jpg",
	},
	{
		name: "Michael D Crapo",
		party: "Republican",
		state: "ID",
		image: "https://theunitedstates.io/images/congress/450x550/C000880.jpg",
	},
	{
		name: "Patty Murray",
		party: "Democrat",
		state: "WA",
		image: "https://theunitedstates.io/images/congress/450x550/M001111.jpg",
	},
	{
		name: "Steve Daines",
		party: "Republican",
		state: "MT",
		image: "https://theunitedstates.io/images/congress/450x550/D000618.jpg",
	},
	{
		name: "Chris Van Hollen",
		party: "Democrat",
		state: "MD",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/b/b2/Chris_Van_Hollen_official_portrait_115th_Congress.jpg",
	},
	{
		name: "John Cornyn",
		party: "Republican",
		state: "TX",
		image: "https://theunitedstates.io/images/congress/450x550/C001056.jpg",
	},
	{
		name: "Maria Cantwell",
		party: "Democrat",
		state: "WA",
		image: "https://theunitedstates.io/images/congress/450x550/C000127.jpg",
	},
	{
		name: "Michael B Enzi",
		party: "Republican",
		state: "TX",
		image: "https://theunitedstates.io/images/congress/450x550/C001115.jpg",
	},
	{
		name: "Cory A Booker",
		party: "Democrat",
		state: "NJ",
		image: "https://theunitedstates.io/images/congress/450x550/B001288.jpg",
	},
	{
		name: "Ron Wyden",
		party: "Democrat",
		state: "OR",
		image: "https://theunitedstates.io/images/congress/450x550/W000779.jpg",
	},
	{
		name: "Jack Reed",
		party: "Democrat",
		state: "RI",
		image:
			"https://cdn.britannica.com/46/132846-050-F0E26BEE/Jack-Reed-2008.jpg",
	},
	{
		name: "Angus S King",
		party: "Independent",
		state: "ME",
		image: "https://theunitedstates.io/images/congress/450x550/K000383.jpg",
	},
	{
		name: "Thad Cochran",
		party: "Republican",
		state: "MS",
		image: "https://theunitedstates.io/images/congress/450x550/C000567.jpg",
	},
	{
		name: "Roy D Blunt",
		party: "Republican",
		state: "MO",
		image: "https://theunitedstates.io/images/congress/450x550/B000575.jpg",
	},
	{
		name: "Maria E Cantwell",
		party: "Democrat",
		state: "WA",
		image: "https://theunitedstates.io/images/congress/450x550/C000127.jpg",
	},
	{
		name: "Ronald L Wyden",
		party: "Democrat",
		state: "OR",
		image: "https://theunitedstates.io/images/congress/450x550/W000779.jpg",
	},
	{
		name: "Michael B Enzi",
		party: "Republican",
		state: "WY",
		image: "https://theunitedstates.io/images/congress/450x550/E000285.jpg",
	},
	{
		name: "Rafael Edward (Ted) Cruz",
		party: "Republican",
		state: "TX",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/9/95/Ted_Cruz_official_116th_portrait.jpg",
	},
	{
		name: "Elizabeth Warren",
		party: "Democrat",
		state: "MA",
		image: "https://theunitedstates.io/images/congress/450x550/W000817.jpg",
	},
	{
		name: "Richard C Shelby",
		party: "Republican",
		state: "AL",
		image: "https://theunitedstates.io/images/congress/450x550/S000320.jpg",
	},
	{
		name: "Tom S Udall",
		party: "Democrat",
		state: "NM",
		image: "https://theunitedstates.io/images/congress/450x550/U000039.jpg",
	},
]

export { senators }
