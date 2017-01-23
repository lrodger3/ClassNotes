# Git

> A version control system

- Stores a history of your files and their changes
  - Git is a lot like a timeline
- Freedom to make mistakes / experiment
- Makes working with others much easier
- Kinda like DropBox for code

## Repositories

> A Respository (repo) is basically a bucket for your code to live in

Typically, you'll create a repo for EACH project

It is _highly_ recommended that you create a repo for each exercise

Each repo has its __own__ timeline associated with the files that are a part of it

## Commits

> Commits are the events on the timeline

- Commits are made to a repository
- Commits will show all the changes to your files since the last commit
- Commit often and when you feel its appropriate


## Commands

### First-Time Setup

`git init` - initializes a repository on your _LOCAL_ machine (run this in the folder you want to be the repository)

`git remote add <remote> <url>` - adds a remote with a specific name / url
  - `git remote add origin someurl.git`
  - a remote is a place _other_ than your local machine for your code to live


### Daily Flow

`git add -A` - Adds files to tracking

`git commit -m "<message>"` - Creates a commit, or timeline entry, using the files that were `added` in the previous command
  - message is just a description of your changes
  
`git push <remote> <branch>` - push sends our timeline / files from our local repository to a remote repository
  - `git push origin master`


`git status` - shows changes / files that are tracked



Dont run this one... probably ever!
`git reset --hard HEAD`


