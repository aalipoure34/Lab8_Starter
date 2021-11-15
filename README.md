# Lab 8 - Starter
# Eamon Aalipour, 11/14/2021

### Check Your Understanding

1. I would choose to run it within a GitHub Action that runs whenever code is pushed. This is an essential aspect of Continuous Integration. Each time code is pushed to the repo, it is most efficient to have an automated tool check its correctness for you. The second option is prone for people forgetting to run tests and thus can be inconsistent. And, the third option is a terrible idea because huge things can break and we can't track their progress as easily as we can when every thing is at a small scale.
2. Checking to see if a function is returning the right value is something fairly specific and individual to the code. A unit test would be more appropriate for this.
3. No I wouldn't. Messaging is a pretty extensive feature and thus would benefit from more comprehensive testing. Unit testing is for more small-scale aspects of the code. Something like messaging is not going to be in a small encapsulated part of the code (which unit testing can handle) because it's fairly complex.
4. Yes I would. Max message length is actually a small bit of the code that is encapsulated. Something like checking to see if a string is less than 81 characters is very specific (and not that complicated) and unit testing can directly target that aspect of the code. 

### Other Notes

For the full output, refer to the screenshots labeled one and two. Otherwise, refer to the `testResultsScreenshot.png` file that just shows the end result of the 31 tests passing.
