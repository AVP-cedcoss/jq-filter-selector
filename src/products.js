var products = [{
					"id": "100",
					"name": "iPhone 4S",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "101",
					"name": "Moto X",
					"brand": "Motorola",
					"os": "Android"	
				},
				{
					"id": "102",
					"name": "iPhone 6",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "103",
					"name": "Samsung Galaxy S",
					"brand": "Samsung",
					"os": "Android"
				},
				{
					"id": "104",
					"name": "Google Nexus",
					"brand": "ASUS",
					"os": "Android"
				},
				{
					"id": "105",
					"name": "Surface",
					"brand": "Microsoft",
					"os": "Windows"
				}];

$(document).ready(function()
{
	display();
});

//To display the Content of Product Array
function display()
{	
	//Emptying the Division from any previous outputs
	$("#footer").html("");

	//Table Creation and Header
	var html = "<table id='f-head'>\
					<tr>\
						<th>ID</th>\
						<th>Name</th>\
						<th>Brand</th>\
						<th>Operating System</th>\
						<th>Remove</th>\
					</tr>";		
	
	//Traversing the Object Array and creating the rows
	for (let i = 0; i < products.length; i++)
	{
		html += "<tr class="+products[i].id+">\
			<td>"+products[i].id+"</td>\
			<td>"+products[i].name+"</td>\
			<td>"+products[i].brand+"</td>\
			<td>"+products[i].os+"</td>\
			<td style='font-size:20px' class='fa'><a href='#' onclick='hideRow("+products[i].id+")'>&#xf00d;</a></td>\
		</tr>";
	}
	
	//Closing the Table
	html += "</table>"
	
	//Adding Table to Divison for display
	$("#footer").html(html);
}

//To hide row on selection
function hideRow(id)
{
	$("."+id+"."+id).hide();
}