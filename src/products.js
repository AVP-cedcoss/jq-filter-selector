//GLOBAL PRODUCT ARRAY

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

//GLOBAL PRODUCT ARRAY

//Complete Table Display without Filters on Load
$(document).ready(function () 
{
  displayFilters();
  displayTable();
});

//To Add Content to HTML Document
var html = "";

let brandSelected = "";
let osSelected = "";

//Display Filters
function displayFilters() 
{
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
				<input type='text' placeholder='Brands...' class='input' id='filterbrand'>" +
    brandList +
    "</div>\
		<button class='dropbtn' id='osButton'>Operating System</button>\
			<div id='osList' class='dropdown-content'>\
				<input type='text' placeholder='OS...' class='input' id='filterOS'>" +
    osList +
    "</div>\
	<button class='dropbtn' id='removeFilter'>Remove Filters</button>\
			<div class='dropdown-content'>\"</div>\
		</div>";
}

//Filter Drop Down Button
var check = 0;
//0 None
//1 Brand
//2 OS

$(document).ready(function()
{
	//on Click Brand Drop Down
	$(document).on("click", "#brandButton",function()
	{
		check = 1;
		dropDownCheck();
		check = 0;
	});

	//on Click OS Drop Down
	$(document).on("click", "#osButton",function()
	{
		check = 2;
		dropDownCheck();
	});

	$("#search").on("click", function()
	{
		check = 0;
		dropDownCheck();
	});

	$("#wrapper").on('click', function()
	{
		check = 0;
		dropDownCheck();
	});
});

//To check Drop Down
function dropDownCheck()
{
	if (check == 0)
	{
		$("#brandList").css("display","none");
		$("#osList").css("display","none");
	}
	else if (check == 1)
	{
		$("#brandList").css("display","block");
		$("#osList").css("display","none");
	}
	else if (check == 2)
	{
		$("#brandList").css("display","none");
		$("#osList").css("display","block");
	}
}

//Remove Filters
$(document).on("click", "#removeFilter", function () 
{
	brandSelected = "";
	osSelected = "";
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
					</tr>\
					<tbody id='tableBody'>";

	//Traversing the Object Array and creating the rows
	for (let i = 0; i < products.length; i++) 
	{
		if (osSelected != "" && brandSelected != "")	//Brand & OS Filter Both are Selected
		{
			if (products[i].os == osSelected && products[i].brand == brandSelected)
			{
				tablePrint(i);
			}
		}

		else if (osSelected != "")	//Only OS Filter
		{
			if (products[i].os == osSelected)
			{
				tablePrint(i);
			}
		}

		else if (brandSelected != "")	//Only Brand Filter
		{
			if (products[i].brand == brandSelected)
			{
				tablePrint(i);
			}
		}

		else	//No Filter Selected
		{
			tablePrint(i);
		}
	}

	//Closing the Table
	html += "</tbody></table>";

	//Adding Search Bar
	html += '<input id="search" class="input" type="text" placeholder="Search..." >';

	//Adding Table to Divison for display
	$("#wrapper").html(html);
}

//Table Print
function tablePrint(i)
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
			<td style='font-size:20px' class='fa'><a href='#' class='hide-Row' data-id="+products[i].id+">&#xf00d;</a>\
			</td>\
	  </tr>";
}

//OS FILTER
$(document).ready(function () 
{
  $(document).on("click", ".os", function () {
    osSelected = $(this).data("os");
	displayFilters();
	displayTable();
	$("#osButton").html(osSelected);
  });
});

//BRAND Filter
$(document).ready(function () 
{
	$(document).on("click", ".brand", function () {
	  brandSelected = $(this).data("brand");
	  displayFilters();
	  displayTable();
	  $("#brandButton").html(brandSelected);
	});
});

//To hide row on selection.
$("#wrapper").on('click', ".hide-Row", function()
{
	$("." + $(this).data("id")).hide();
});

// //To Show row on selection
// $("#wrapper").on('click', ".hide-Row", function()
// {
// 	$("." + $(this).data("id")).show();
// });

//Search Box
$(document).ready(function(){
	$("#search").on("keyup", function()
	{
		var value = $(this).val().toLowerCase();
		$("#tableBody tr").filter(function()
		{
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

//OS DropDown Filter
$(document).ready(function(){
	$("#filterOS").on("keyup", function()
	{
		var value = $(this).val().toLowerCase();
		$(".os").filter(function()
		{
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

//Brand DropDown Filter
$(document).ready(function(){
	$("#filterbrand").on("keyup", function()
	{
		var value = $(this).val().toLowerCase();
		$(".brand").filter(function()
		{
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});
