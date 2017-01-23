# More Git!

> Git is a lot like a timeline, it has the history of all your files that are a part of a repository.  Commits are the entries on that timeline

--*--*--*

## Working one ONE branch locally

- `master` is default branch

`git status` - What's been changed that hasnt been committed?

`git log` - Show us the timeline - what has happened in the past

`git checkout` - Allows us to change `branches` or go back in time
- `HEAD` is where YOU are on the timeline

## Branches
 ```
 >>>> HEAD
 
 =====
 
 <<<<< nav-bar
 ```
 
> Are separate timelines in a repository.  They can come from a common ancestor, but then diverge

All branches are created using an existing branch as a base - that base is whatever branch you have checked out when the new branch is created

`git branch` - lists branches and shows which one you have `checked out`

`git branch BRANCHNAME` - creates a branch with that name
`git checkout -b BRANCHNAME` - creates AND checks out the branch

`git branch BRANCHNAME -d` - deletes the named branch

`git checkout BRANCHNAME/COMMITID` - checks out a branch or commit

`git merge BRANCHNAME` - merges the specified branch, with your checked out branch


## Git Flow
> Git flow is a Git methodology used by a lot of software companies

Caveat : almost 100% of companies will not follow this exactly

- Long-Term Branches
  - `master`      - live production code, __MUST NOT BREAK__
  - `development` - eventually merge into `master`, __SHOULD__ not break

- Short-Term Branches
  - `feature` - branched from `development`, merged back in.  Used for larger pieces of functionality
  - `bugfix` - branched from `development`, merged back in.  Used to fix broken features
  - `hotfix` - branched from `master`, merged back in. Used for fixing critical bugs / errors that prevent your application from being successful







