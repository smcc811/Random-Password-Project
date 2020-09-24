# Random-Password-Project
Creating Random Password 

Objective
---------

The objective of this project was to create a Random Generated Password using Javasript only. The requirements for this password included the following:

 1. The Password had to be at least 8 characters long an no larger than 128 characters
 2. The user could create this password using the following criteria:
    (a) password could be composed of all Uppercase Letters
    (b) password could be composed of all Lowercase Letters
    (c) password could be created of numbers only ( 0 - 9 )
    (d) password could be created with Special Characters, e.g. ? / ( ) etc.
    (e) password could be created by using all 4 selections but at least 1
        option would need to be chosen.


 Input validation
 ----------------

 Length of password - length of password will be validated to see if its greater than or equal to 8 and less than or equal to 128.  Input outside this requirement will alert the user of such and have him to re enter acceptable input.

 Options to create password - At least one option has to be chosn by the user to generate the passwod , if no option chosen , user will be notified of such and be requested to make a choice.


 Result Validation
 -----------------

 Test requirements include the following:

 (a) testing with no length input given
 (b) tesitng with input of non numerical data is entered
 (c) testing with input outside the acceptable numerical range   
 (d) review of generated password to make sure it equal length of user request and the 
     content reflects the user choices .
 (e) review results of individual options chosen. e.g. numerical only , symbol   
     only to assure that the output equal both length an type of output requested
     this also applied to multipe / all selections by the user


 Future Enhancements
 -------------------

 (a) lengthen / shorten length of password
 (b) expand on options to utilize e.g. dates , time, timestamp. etc.            