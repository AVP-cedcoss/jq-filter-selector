var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

$(document).ready(function () {
  displayFilters();
  displayTable();
});

var html = "";

//Display Filters
function displayFilters() {
  var osList = [];
  var brandList = [];

  for (var i = 0; i < products.length; i++) {
    osList.push(products[i].os);
    brandList.push(products[i].brand);
  }

  //Cleaning and selecting unique element for OS List
  let os = osList.filter((item, i, ar) => ar.indexOf(item) === i);
  osList = "";
  for (var i = 0; i < os.length; i++)
    osList +=
      "<a href='#' data-os=" + os[i] + " class = 'os'>" + os[i] + "</a>";

  //Cleaning and selecting unique element for Brand List
  let brnd = brandList.filter((item, i, ar) => ar.indexOf(item) === i);
  brandList = "";
  for (var i = 0; i < brnd.length; i++)
    brandList += "<a href='#' data-brand=" + brnd[i] + " class = 'brand'>" + brnd[i] + "</a>";

  html =
    "<div class='dropdown'>\
		<button class='dropbtn' id='brandButton'>Brands</button>\
			<div id='brandList' class='dropdown-content'>\
				<input type='text' placeholder='Brands...' class='input' onkeyup='filterbrand()'>" +
    brandList +
    "</div>\
		<button class='dropbtn' id='osButton'>Operating System</button>\
			<div id='osList' class='dropdown-content'>\
				<input type='text' placeholder='OS...' class='input' onkeyup='filterOS()'>" +
    osList +
    "</div>\
	<button class='dropbtn' id='removeFilter'>Remove Filters</button>\
			<div class='dropdown-content'>\"</div>\
		</div>";
}

//Filter by Brand
$(document).ready(function () 
{
	$(document).on("click", "#brandButton",function()
	{
		if($("#brandList").css("display")=="block"){
			$("#brandList").css("display","none");
		}
		else{
			$("#brandList").css("display","block");
		}
	});
});

//Filter by Operating System
$(document).ready(function () 
{
	$(document).on("click", "#osButton",function()
	{
		if($("#osList").css("display")=="block"){
			$("#osList").css("display","none");
		}
		else{
			$("#osList").css("display","block");
		}
	});
});

//Remove Filters
$(document).on("click", "#removeFilter", function () {
	displayFilters();
	displayTable();
});

//To display the Content of Product Array
function displayTable() 
{
  //Table Creation and Header
  html +=
    "<table id='f-head'>\
					<tr>\
						<th>ID</th>\
						<th>Name</th>\
						<th>Brand</th>\
						<th>Operating System</th>\
						<th>Remove</th>\
					</tr>";

  //Traversing the Object Array and creating the rows
  for (let i = 0; i < products.length; i++) {
    html +=
      "<tr class=" +
      products[i].id +
      ">\
			<td>" +
      products[i].id +
      "</td>\
			<td>" +
      products[i].name +
      "</td>\
			<td>" +
      products[i].brand +
      "</td>\
			<td>" +
      products[i].os +
      "</td>\
			<td style='font-size:20px' class='fa'><a href='#' onclick='hideRow(" +
      products[i].id +
      ")'>&#xf00d;</a></td>\
		</tr>";
  }

  //Closing the Table
  html += "</table>";

  //Adding Table to Divison for display
  $("#wrapper").html(html);
}

//OS FILTER
$(document).ready(function () 
{
  let osSelected;
  $(document).on("click", ".os", function () {
    osSelected = $(this).data("os");
	displayFilters();

    //Table Creation and Header
    html +=
      "<table id='f-head'>\
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
		console.log(osSelected, products[i].os);
		if (osSelected == products[i].os)
		{
			html +=
				"<tr class=" +
				products[i].id +
				">\
		<td>" +
				products[i].id +
				"</td>\
		<td>" +
				products[i].name +
				"</td>\
		<td>" +
				products[i].brand +
				"</td>\
		<td>" +
				products[i].os +
				"</td>\
		<td style='font-size:20px' class='fa'><a href='#' onclick='hideRow(" +
				products[i].id +
				")'>&#xf00d;</a></td>\
		</tr>";
		}
	}

	//Closing the Table
	html += "</table>";

	//Adding Table to Divison for display
	$("#wrapper").html(html);
  });
});

//BRAND Filter
$(document).ready(function () 
{
	let brandSelected;
	$(document).on("click", ".brand", function () {
	  brandSelected = $(this).data("brand");;
	  displayFilters();
  
	  //Table Creation and Header
	  html +=
		"<table id='f-head'>\
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
		  if (brandSelected == products[i].brand)
		  {
			  html +=
				  "<tr class=" +
				  products[i].id +
				  ">\
		  <td>" +
				  products[i].id +
				  "</td>\
		  <td>" +
				  products[i].name +
				  "</td>\
		  <td>" +
				  products[i].brand +
				  "</td>\
		  <td>" +
				  products[i].os +
				  "</td>\
		  <td style='font-size:20px' class='fa'><a href='#' onclick='hideRow(" +
				  products[i].id +
				  ")'>&#xf00d;</a></td>\
		  </tr>";
		  }
	  }
  
	  //Closing the Table
	  html += "</table>";
  
	  //Adding Table to Divison for display
	  $("#wrapper").html(html);
	});
  });

//To hide row on selection.
function hideRow(id) {
  $("." + id + "." + id).hide();
}

//To Show row on selection
function showRow(id) {
  $("." + id + "." + id).show();
}
