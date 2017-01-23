# More Terminal

`echo` - command that prints its arguments (console.log)

## Variables
> Making variables in the command line is very similar to JS, every variable has a name and a value

JS : var NAME = VALUE
CL : NAME=VALUE

We reference CL variables using $NAME
`echo $greeting`

`unset greeting` will delete the variable

## Alias
> Aliases are used to create custom commands

`alias NAME=VALUE`

`alias gaa="git add -A"` - allow us to just type `gaa` in the terminal and run the command in the alias

Aliases have an advantage over variables because they can take ARGUMENTS
`alias gcm="git commit -m $1"`

```javascript

function gcm($1){
    return 'git commit -m ' + $1
}

```


## .bashrc
> This is where we will put our variables and aliases so they are permenant

typically in `~/.bashrc`

You will edit this file with a text editor like `vi` / `nano`.  `nano/vi ~/.bashrc`

`sudo apt-get install nano` will install nano

After editing the `.bashrc`, you will have to either create a NEW shell tab or `source ~/.bashrc`



