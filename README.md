# AlgoCasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

## JavaScript Algorithm's and Testing using Jest.

**Set-up Environment**

To begin setting up your invironment you need to install Jest.<br>
cd into project and run this line of code:
```
sudo npm install -g jest
```

**Running test**

to open up excercises change into the excercises command<br>
```
cd excercises
```
if you run 
```
'jest'
```
in the command line it will run all the tests available inside every folder.<br>
to run one batch of test 

for example the test for excersie "anagram": run the following line
```
jest anagram/test.js --watch
```
control C to stop the test runner.



## Getting practice using github

**branchout**
git fetch to make sure everything is up to date on the main branch, then checkout to a mew branch where you will be working on a particular algo. Then git remote add upstream to allow you to make changes to your own cloned repo.

```
git fetch
git checkout -b new_branch
```
>"...from a forked repo point of view. You have access to pull and push from origin, which will be your fork of the main diaspora repo. To pull in changes from this main repo, you add a remote, "upstream" in your local repo, pointing to this original and pull from it.
>So "origin" is a clone of your fork repo, from which you push and pull. "Upstream" is a name for the main repo, from where you pull and keep a clone of your fork updated, but you don't have push access to it." <br>
[from comment on stackoverflow](https://stackoverflow.com/questions/8948803/what-does-git-remote-add-upstream-help-achieve)
```
git remote add upstream https://github.com/FranciscoAndaur/AlgoCast
```
git fetch to make sure everything is up to date then checkout to a mew branch where you will be working on a particular algo. Then git remote add upstream to allow you to make changes to your own cloned repo.
git add