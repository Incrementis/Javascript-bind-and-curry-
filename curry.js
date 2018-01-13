/*
	====================================================================================================
	
	NOTE: 
	Parts of code in the functions below could be optimized, but due to simplicity and
	demonstration purpose, it is kept as it is.
	
	The topic focused content is commented with the keyword "ATTENTION"
	
	====================================================================================================
*/


"use strict";

//Purpose: Is used for currying and generates URLs
function IDs(protocol, domain, path,  id, index)
{
	
	var video = document.getElementsByClassName('video');
	
	video[index].src = protocol + "://" + domain + "/" + path + "/" + id;
	
}


//Purpose: Generates Random IDs
function generateID()
{
	var eleven 	= 0;
	
	//Contains 26x3 characters
	var signs186	= [	"ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
				"abcdefghijklmnopqrstuvwxyz",
				"-_0123456789-_0123456789-_"];
						
	
	//Youtube`s ID contains 11 characters
	for(var num = 0; num < 11; num++)
	{
		//Rolls a random number between 0 and 2 to decide which elment in "signs186" shall be taken
		var roll = Math.floor( Math.random() * 3 );
		
		//Rolls a random number between 0 and 25 to decide which character shall be taken
		var position = Math.floor( Math.random()* 26 );
		
		
		//Preventing that the first value always is "0"
		if(num === 0)
		{
			
			eleven = signs186[roll].charAt(position);
			
		}
		else
		{
			
			eleven += signs186[roll].charAt(position);
			
		}
	
	}
	
	return eleven;
	
}



/*
	===============
	BUTTONS ONCLICK
	===============
*/


//Purpose:  Calls random IDs and puts them into the html user text inputs
function RANDOM()
{
	var inputs = document.getElementsByClassName('user-input');
	
	inputs[0].value = generateID();	
	inputs[1].value = generateID();	
	inputs[2].value = generateID();
	
}


//Purpose: Takes the user Input youtube IDs and uses them to call the specific youtube video
function GO()
{

	//Converting html tag object into an Aray object
	var userInputs 	= [].slice.call(document.getElementsByClassName('user-input'));
	
	
	var IdList 	= [];	//List with all user given youtube IDs	
	var sources 	= [];	//List with url adresses which includes the IDs
	
	
	
	//Reading out user inputs
	userInputs.forEach(function(id)
	{
		IdList.push(id.value);
	});
	
	
	/*
		ATTENTION:
		Currying with the help of the method "bind"
	*/
	sources = IdList.map(IDs.bind(null,"http", "youtube.com", "embed"))
	
}
