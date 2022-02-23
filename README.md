# JavaScript Algorithm's and Testing using Jest.

## **Set-up Environment**

To begin setting up your invironment you need to install Jest.<br>
cd into project and run this line of code:
```
sudo npm install -g jest
```

## **Running test**

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
<br>
<br>
<br>

# Getting practice using github


## **Let's Branchout**

git fetch to make sure everything is up to date on the main branch and git status to double check everything is up to date.

```
git fetch
git status
```
it should show this
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
now branch out, checkout to a mew_branch where you will be working on a particular algo. Then git remote add upstream to allow you to make changes to your own cloned repo.
```
git checkout -b new_branch
```
>"...from a forked repo point of view. You have access to pull and push from origin, which will be your fork of the main diaspora repo. To pull in changes from this main repo, you add a remote, "upstream" in your local repo, pointing to this original and pull from it.
>So "origin" is a clone of your fork repo, from which you push and pull. "Upstream" is a name for the main repo, from where you pull and keep a clone of your fork updated, but you don't have push access to it." <br>
[from comment on stackoverflow](https://stackoverflow.com/questions/8948803/what-does-git-remote-add-upstream-help-achieve)
```
git remote add upstream https://github.com/FranciscoAndaur/AlgoCast
```
Lets try creating a test file.
```
echo "some test file" > test
```
echo will create a test file with the string "some test file" saved inside.
```
cat test
```
cat will show what's inside the test filem in our case it will print out "some test file" onto the console.
```
git status
```


  <pre>
    <div>
On branch test_branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        <span style="color:red">modified:   README.md</span>
        

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        <span style="color:red">test</span>

no changes added to commit (use "git add" and/or "git commit -a")
    </div>
  </pre>

it will show the new test file as red meaning it has some changes ready for us to upload to upload to github.

```
git add  test
```
now commit with an descriptive message of what you have done.
```
git commit -m 'Adding test file to test_branch'
git push -u origin test_branch
```

Once you push the changes to your repo, the Compare & pull request button will appear in GitHub.
<br>
<br>
<br>

## **Compare & pull request**

Now back in [Github.com](https://github.com/)<br>
We'll see the **Compare & Pull request** button<br>

>    ![image 1](/images/1.jpg)<br>

Click it and you'll be taken to this screen:<br>

>    ![image 2](/images/2.jpg)<br>

This allows the repo's maintainers to review your contribution in our case it's just us, so lets click **Create pull request**.<br>
From here, we can merge it if it is good<br>

*if someone else is reviewing your code, this is where you will do most of the communication.*<br>

>   ![image 3](/images/3.jpg)<br>

Once everything has been reviewed, click **Merge Pull Request**.<br>

>   ![image 4](/images/4.jpg)<br>

Then **Confirm Pull Request**.<br>

>   ![image 5](/images/5.jpg)<br>

### And VOILA!
you've created a test file on a different branch, created a pull request and reviewed it.👏🏼<br>

>   ![image 6](/images/6.jpg)<br>

the new file should appear on your **Main** branch now.

>   ![image 7](/images/7.jpg)<br>

now go back to main branch, fetch and merge your test branch.

```
git checkout main
git fetch
git merge test_branch
git pull
```

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)