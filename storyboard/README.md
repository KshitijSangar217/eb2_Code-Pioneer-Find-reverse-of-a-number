## Storyboard (Round 2)

Experiment 2 : write a program to reverse a number

### 1. Story Outline:

First, we consider a variable ‘Number’ consisting of the number to be reversed after that we will declare a variable named ‘Reverse_Number’.We will be using the following formula, Reverse_Number = Reverse_Number*10 + Number%10 since initially Reverse_Number is 0 and ‘Number’ consists the number to be reversed. The value of Reverse_Number will be equal to the remainder we get after dividing ‘Number’ by 10.After applying this formula we will divide ‘Number’ by 10 and update it with the value we received after division. It should look something like this, Number = Number / 10.We will repeat steps 2 and 3 until the updated value of ‘Number’ variable is > 0.
At the end variable ‘Reverse_Number’ will consist of our reversed number.

### 2. Story:

The Experiment is based on loops. Loops are used when a block of code needs to be executed several number of times. In general, statements are executed sequentially: The first statement in a function is executed first, followed by the second, and so on.Loop control statements change execution from its normal sequence. When execution leaves a scope, all automatic objects that were created in that scope are destroyed.Programming languages provide various control structures that allow for more complicated execution paths

#### 2.1 Set the Visual Stage Description:
When the student visits the link of the simulator page, he sees canvas of screen size (light orange shade) with title in top center "SUM OF DIGIT". On this canvas START button is seen to start program.Once START button is clicked button will turned to "NEXT" button. The screen is divided into two blocks one for code execution and Output Functioning . when user click on "NEXT" execution will start and when input statement is reached input box will be shown On top-centre of the screen with "SUBMIT" button.After giving input and clicking SUBMIT,It will change to NEXT button again. In Output Functioning box ,values of variables "Reverse Number","Remainder" and Number will be displayed. Code will appear on code execution block on left side.

#### 2.2 Set User Objectives & Goals:
The prime objective of the experiment is to find sum of digits of a number entered by user
To understand use of while loop
To apply concept of while loop

#### 2.3 Set the Pathway Activities:

1.Click on the button “START”. It takes to simulation screen.
2. "START" button will changed to "Next" button,Program Code will appear in Code block and Variable names "Number","Remainder","Sum" with initialzed value to zero in right block will appear.
3.Click on "next" button for executing step by step instruction , user will get comments with every instruction executed.
4.Input box will appear when instruction for input is executed , and "Next" button will convert to "SUBMIT" button.
5.After submitting input, SUBMIT turns to Next and program will execute step by step showing changes of the values in Variable names "Number","Remainder","Sum"
6.After excection it will show "Execution Completed" and result in Sum variable.
##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:

Formative assesment questions as mentioned in Round 1
Difficulty level: UNDERSTAND <br>
Q How many types of loop are avilable in C Program?<br>
A.1<br>
B.2<br>
**C.3**<br>
D.4<br><br><br>

<pre>
#include<stdio.h>
main() {
  int n=4576, sum = 0;
  for( n > 0; sum += n%10, n/= 10) {
   }
   printf("The sum of digits: %d", sum);
}
</pre>

What is the value of sum?<br>
A. 4576<br>
**B. 22**<br>
C. 23<br>
D. 34<br><br>

##### 2.5 Allow pitfalls:
Do we use semicolon in While loop? <br>
A. Yes <br>
**B. No** <br>
##### 2.6 Conclusion:
While learning C you will learn all the fundamental concepts of the programming realm. To learn these fundamental concepts there are some standard programs which when implemented give us a brief understanding of all the concepts in a practical way. C program to reverse a number is one of them which gives the learner a deep understanding of While loop and the Arithmetic operators.Answering the assessment questions will take about 5 min. Thus the total time required to perform the experiment will require around 10 minutes.

##### 2.7 Equations/formulas: NA


### 3. Flowchart 4
<img src="flowchart/reverse_of_a_number.jpg"/><br>
<br>

### 4. Mindmap:
<img src="mindmap/reverse-num.JPG"/>

### 5. Storyboard :
Storyboard: <a href="storyboard/reverse_num.gif"> HERE </a>

