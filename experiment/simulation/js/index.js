var line_no, lineCount = 0, num;
var remainder=0, reverse_num=0;
num = parseInt(document.getElementById('inputno').value);
function getno(){
    var num1 = document.getElementById('inputno').value;
    var letters = /[0-9]/; 
        if(num1.match(letters))
        {
            if(num1.length > 10){
                alert("Maximum 10 Digit number allowed");
            }
            else{
                document.getElementById('startbtn').style.visibility = "visible";
                document.getElementById('submitbtn').style.visibility = "hidden";
                num = num1;
                document.getElementById('inputno').style.visibility = "hidden";
                document.getElementById('input_section').innerHTML = "<br>Entered number : " + num;
                document.getElementById('input_section').style.fontSize = "1.5vw";
                document.getElementById('numblock').innerHTML = num;
                document.getElementById('numblock').style.borderColor = "white";
            }   
        }
        else{
            alert('Invalid Number');
            window.location.reload();
        }  
    }

function startProg() {
    document.getElementById('codeTextLines').style.visibility = "visible";
    document.getElementById('startbtn').innerHTML = "<b>Next</b>";
    executeCode();
}

function executeCode(){
    if(lineCount != 0)
        document.getElementById(line_no).style.color = "white";
    lineCount += 1;
    num = parseInt(num);
    //var remainder, sum=0;
    line_no = 'line' + lineCount;

    // Converts text to RED
    document.getElementById(line_no).style.color = "red";
    
    if(line_no=='line1')
    {
        //document.getElementById('numblock').style.borderColor = "white";
        document.getElementById('line1comment').style.visibility = 'visible';
    }
    if(line_no == 'line2')
    {
        document.getElementById('line1comment').style.visibility = 'hidden';
        document.getElementById('line2comment').style.visibility = 'visible';
    }
    if (line_no=='line3') 
    {
        document.getElementById('line2comment').style.visibility = 'hidden';
    }
    
    if(line_no=='line4')
    {
        document.getElementById('line4comment').style.visibility = 'visible';
        document.getElementById('numblock').innerHTML = 0;
        document.getElementById('numblock').style.borderColor = "white";
        document.getElementById('remainderblock').style.borderColor = "white";
        document.getElementById('reverse_num_block').style.borderColor = "white";
        document.getElementById('output-section').style.visibility = visible;
    }
    if(line_no=='line5')  //printf
    {
        //hide every border
        document.getElementById('line4comment').style.visibility = 'hidden';
        document.getElementById('line5comment').style.visibility = 'visible';
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('reverse_num_block').style.borderColor = "rgb(243, 80, 16)";
        document.getElementById('numblock').style.borderColor = "#546b9c";
    }
    if(line_no=='line6')  //scanf
    {
        document.getElementById('line5comment').style.visibility = 'hidden';
        document.getElementById('line6comment').style.visibility = 'visible';
        document.getElementById('input_section').style.visibility = 'visible';
        document.getElementById('submitbtn').style.visibility = 'visible';
        document.getElementById('inputno').style.visibility = 'visible';
        document.getElementById('startbtn').style.visibility = "hidden"; 
        document.getElementById('numblock').innerHTML = 0;
    }
    if(line_no=='line7') // while
    {
        document.getElementById('numblock').style.borderColor = "white";
        document.getElementById('line6comment').style.visibility = 'hidden';
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('reverse_num_block').style.borderColor = "rgb(243, 80, 16)";
        if(num>0)
        {
            document.getElementById('numblock').style.borderColor = 'green';
            document.getElementById('line7comment').innerHTML = 'Condition is true so entering while loop';
            document.getElementById('line7comment').style.visibility = 'visible';
        }
        else
        {
            document.getElementById('numblock').style.borderColor = '#f50000';
            document.getElementById('line7comment').innerHTML = 'Condition is false so exiting while loop';
            document.getElementById('line7comment').style.visibility = 'visible';
            lineCount=13;
        }
    }
    if(line_no=='line8') // {
    {
        //document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
        document.getElementById('line7comment').style.visibility = 'hidden';
        document.getElementById('numblock').style.borderColor = "#546b9c";
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('reverse_num_block').style.borderColor = "rgb(243, 80, 16)";
        document.getElementById('output-section').style.visibility = visible;
    }
    if(line_no=='line9')
    {
        remainder = num % 10;
        document.getElementById('remainderblock').innerHTML = remainder;
        document.getElementById('remainderblock').style.borderColor = "white";
        document.getElementById('numblock').style.borderColor = "white";
    }
    
    if(line_no=='line10')
    {
        reverse_num = 10 * reverse_num;
        document.getElementById('reverse_num_block').innerHTML = reverse_num;
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('reverse_num_block').style.borderColor = "white";
        document.getElementById('numblock').style.borderColor = "#546b9c";
    }
    if(line_no=='line11')
    {
        reverse_num = reverse_num + remainder;
        document.getElementById('reverse_num_block').innerHTML = reverse_num;
        document.getElementById('remainderblock').style.borderColor="white";
    }
    if(line_no=='line12')
    {
        num = num / 10;
        num = parseInt(num);
        document.getElementById('numblock').innerHTML = num;
        document.getElementById('numblock').style.borderColor = "white";
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('reverse_num_block').style.borderColor = "rgb(243, 80, 16)";
    }
    
    if(line_no=='line13')
    {
        document.getElementById('numblock').style.borderColor = "#546b9c";
        lineCount=6;
    }
    if(line_no =='line14')
    {
        //document.getElementById('demo-output').innerHTML = sum;
        document.getElementById('line7comment').style.visibility = 'hidden';
        document.getElementById('reverse_num_block').style.borderColor = "#FFD700";
        document.getElementById('reverse_num_block').style.backgroundColor = "#FFD700";
        document.getElementById('reverse_num_block').style.color = "black";
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
        document.getElementById('line13comment').style.visibility = 'visible';
    }
    if(line_no == 'line15')
    {
        //return 0 statement
        document.getElementById('line13comment').style.visibility = 'hidden';
    }
    if(line_no =='line16')
    {
        //document.getElementById('demo-output').innerHTML = sum;
        //document.getElementById('reverse_num_block').style.borderColor = "#FFD700";
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
        alert("Simulation Completed");
        window.location.reload();
    }
}
