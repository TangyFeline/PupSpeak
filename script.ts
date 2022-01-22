const puppyWords = ["puppy","puppies","walkies","dog","good","girl","walk","food","feed","leash","bite","little","sit","heel","drop"]
const puppyFullWords = ["no","yes","vet","pup","pups","pet","pets","petting"]

function woof()
{
	const inputSection = document.getElementById('input');
	const outputSection = document.getElementById('output');
	const outputPara = document.getElementById('outputP');
	const inputElement = <HTMLTextAreaElement>document.getElementById("textInput");	

	let input = inputElement.value;
	console.log(input)
	input = input.split("\n").join(" <br/> ")

	console.log(input)

	inputSection.className="hidden"	
	outputSection.className="";

	outputPara.innerHTML = splitAndSpan(input)
}

function splitAndSpan(str: string)
{
	str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
	let words = str.split(" ");
	for (let i in words){		
		if (!puppyWord(words[i]))
		{
			words[i] = `<span class="fuzz">${words[i]}</span>`
		}
		else
		{
			words[i] = `<span>${words[i]}</span>`	
		}
	}	
	return words.join(' ')
}
function puppyWord(word:string)
{
	if (puppyFullWords.indexOf(word) != -1)
	{
		return true;
	}
	for (let pword of puppyWords)
	{
		if (word.indexOf(pword) != -1)
		{
			return true;
		}
	}
	return false;
}
