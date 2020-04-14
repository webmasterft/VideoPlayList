const Data = {
	"Customer": "NEAMB",
	"Date": "04/10/2020",
	"Report List": [{
			"Name": "abc",
			"Link": "abc/index.html",
			"Subreports": [{
					"Name": "abc1",
					"Link": "abc1/index.html"
				},
				{
					"Name": "abc2",
					"Link": "abc2/index.html"
				}
			]
		},
		{
			"Name": "def",
			"Link": "def/index.html"
		},
		{
			"Name": "ghi",
			"Link": "ghi/index.html"
		}
	]
};

const Customer = Data["Customer"];
const Date = Data["Date"];
const List = Data["Report List"];

export {Customer, Date, List};