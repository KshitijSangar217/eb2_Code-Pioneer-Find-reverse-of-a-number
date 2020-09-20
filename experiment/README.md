### Aim
Write C program to reverse a number. 

### Theory

In C different loops are used for controlling flow of program. For finding reverse of a number in the program while loop is used.The While loop is generally have condition and block of statements. In while loop the condition is checked and if given boolean condition is true, the block of statements will get executed. This will be repeated until condition becomes false. If the condition becomes false it will exit the loop and further execution of program is done. In the program to find reverse of a number, we have used while(number>0) loop with condition i.e. till number is greater than 0, then the code of block statements executes which contains statements for finding of remainder and adding remainder to "reverse_Number" variable  which is initialized as 0 in the begining and again taking modulo 10 division of number. This block of statements will be excuted repeatedly till condition given in the while loop is true. 

<b>Pseudocode</b>
1. Declare three variables to store number, remainder, and reversed number and set all variables to 0.
2. Prompt message "Enter a number".
3. Take number input from user.
4. Repeat step 5 to 8 until number>0.
5. Compute remainder of number by modulo 10 operation.
6. Multiply reversed number by 10.
7. Add remainder to reversed number.
8. Divide the number by 10.
9. Print the reversed number.

### Flowchart 
<img src="/experiment/REV_NUM.jpg"/><br><br>



### Procedure
1.Click on the button “START”. It takes to simulation screen.<br>
2."START" button will changed to "Next" button,Program Code will appear in Code block and Variable names "Number","Remainder","Reverse_Number" with initialzed value to zero in right block will appear.<br>
3.Click on "next" button for executing step by step instruction , user will get comments with every instruction executed.<br>
4.Input box will appear infront of scanf instruction when instruction for input is executed , and "Next" button will convert to "SUBMIT" button.<br>
5.After submitting input, SUBMIT turns to Next and program will execute step by step showing changes of the values in Variable names "Number","Remainder","Reverse_Number"<br>
6.After excection it will show "Execution Completed" and result is shown in Reverse_Number variable<br>

### Pre Test
1) How many times do while loop will excute if condition is false <br>
<b>a) 1 times<br></b>
b) 2 times<br>
c) infinite<br>
d) finite<br>

2) How many times the initialisation statement in for loop is executed<br>
a) as many times as loop iterates<br>
b) twice<br>
<b>c) once<br></b>
d) None of the above<br>

3) In printf, the format %i is used for? <br>
<b>a) int</b><br>
b) char<br>
c) float<br>
d) None of the above<br>

4) C was orginally devloped for<br>
a) AI langauge<br>
b) Data Science langauge<br>
c) General purpose language<br>
<b>d) System programming language </b><br>

5) C variable cannot start with <br>
a) an underscore<br>
b) an alphabet<br>
<b>c) A special symbol</b><br>
d) capital letter<br>

6) which of the following is valid C statement?<br>
a) char sample var = 'a';<br>
<b>b) char sample_var = 'a';<br></b>
c) char $sample_var= 'a';<br>
d) None of the above<br>
### Post Test
1) What is the size of int data type?<br>
a) 2 Bytes<br>
b) 4 Bytes<br>
c) 1 Bytes<br>
<b>d) Depends on system/compiler </b><br>

2) Which of the data type does not have a fixed size?<br>
a) int<br>
b) char<br>
<b>c) struct</b><br>
d) None of the above<br>

3) which function of the following C program must contain?<br>
a) printf()<br>
b) scanf()<br>
<b>c) main()</b><br>
d) system()<br>

4) which of the following is not a valid data type<br>
a) int<br>
b) char<br>
<b>c) real</b><br>
d) float<br>

5) C pre processor does<br>
a) conditional compilation<br>
b) includes header files<br>
c) take care of macros<br>
<b>d) All of the above</b><br>

6) In which stage the content of header files get inserted into code?<br>
a) During execution<br>
b) During linking<br>
<b>c) During pre-processing</b><br>
d) None of the above<br>

### References
Textbooks:

Programming with C by Bryon Gottfried, Schaum’s Outlines.<br>
Let Us C by Yashwant Kanetkar 14th Edition BPB Publication<br>
C Programming Laboratory: Handbook for Beginners by Sidnal, Wiley India Limited.<br>
http://www.spoken-tutorial.org/ NMEICT Project of Govt. Of India.<br>
Linux MAN pages Reference books<br>
C How to Program, Harvey M. Deitel , Paul J. Deitel, Abbey Deitel, Pearson Publication<br>
The `C' Programming Language, By B.W. Kernigghan and D. M. Ritchie, Pearson Education.<br>

