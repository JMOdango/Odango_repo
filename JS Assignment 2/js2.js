const objects = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
{
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
},
{
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
},
{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
},
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}]

selection(objects);

function selection(obj){
    var option_selected = select_option();
    doDisplay(option_selected, obj);
}

function select_option(){
    return Number(prompt("Choose which one to display:\n1 - Male(Gender) Characters\n2 - Female(Gender) Characters\n3 - N/A(Gender) characters\n4 - Over 150 height Characters"));
}


function doDisplay(option, obj){
    switch(option){
        case 1: 
            let isMale = [];
            for(let x of obj)
            {
                if(x.gender == "male") 
                isMale.push(x.name);
                alert(isMale);
            }
            break;
        
        case 2: 
            let isFemale = [];
            for(let x of obj)
            {
                if(x.gender == "female") 
                isFemale.push(x.name);
                alert(isFemale);
            }
            break;
        case 3:
            let isNA = [];
            for(let x of obj)
            {
                if(x.gender == "n/a") 
                isNA.push(x.name);
                alert(isNA);
            }
            break;
        case 4:
            let heightArray = [];
            for(let x of obj)
            {
                if(x.height > 150) 
                heightArray.push(x.name);
                alert(heightArray);
            }
    }
}


