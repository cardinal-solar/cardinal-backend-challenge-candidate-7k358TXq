# PR #1 `Cardinal shammas` Review 

- Reviewer: `Nicola Corea`
- Role: `Backend Developer`
- Date: `2021-07-21`

## Result of the review
- [x] `Approved`
- [ ] `Rejected`
### General aspects
The outcome of the tests is mostly positive.<br><br>
The application presented complies with the general outline delivered and the tests described in the documentation presented have been performed. 
<br><br>
Always keep in mind that security is a must-have, it was possible to call various APIs without having to pass an authentication method (API-KEY) in the headers.<br>
<b>NOTE:</b> `This is not a problem for this challenge cause the security part is not required, but it is a good practice to implement it.`
<br><br>
The application has a good structure, and the creation of a dedicated module for managing `Animal` was appreciated<br>
Very good as it concerns the bonuses obtained through data management using `PostgreSQL` and containerization with `docker`.

### Code quality
The quality of the source code is good, in general the structure is clear and error management on the logical-application side has been implemented. <br>
Unfortunately there is no trace of comments in the source code, which would have been useful to understand the logic behind it.<br>
<b>NOTE:</b> `It's clear that the code is self-explanatory, but it's always a good practice to comment on the code.`

### Documentation
It is not clear why it was decided to split the documentation in two by writing a first part in the HOW_TO_RUN.md file and a second part in the README.md file, overwriting its content.

### Other notes
It was noted that no OOP-related logic was implemented. This test has been created from a classic IT problem, the "deep hierarchy problem", with the aim to push the candidate to deal with deeper aspects of programming.