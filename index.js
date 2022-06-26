let count;

document.getElementById("increase").onclick =function()
{
	count=document.getElementById("counter").innerHTML;
	count =Number(count);
	count=count+1;
	document.getElementById("counter").innerHTML=count;
}

document.getElementById("decrease").onclick =function()
{
	count=document.getElementById("counter").innerHTML;
	count =Number(count);
	count=count-1;
	document.getElementById("counter").innerHTML=count;
}


document.getElementById("reset").onclick =function()
{
	count=document.getElementById("counter").innerHTML;
	count =Number(count);
	count=0;
	document.getElementById("counter").innerHTML=count;
}

