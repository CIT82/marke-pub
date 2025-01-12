# Shells
This directory contains information on some shells and how to customize them.

## What is a Shell
A shell is the program that runs inside the terminal emulator application that runs the commands and outputs the results. In the terminal emulator, you can change the shell that is running. For the most part Linux uses the [`bash`](https://www.gnu.org/software/bash/) shell by default, and the Mac since 2019, uses the [`zsh`](https://zsh.sourceforge.io) shell. But there are other shells available. Some of the other shells are:
- [fish](https://fishshell.com)
- [ksh](https://www.kornshell.com)
- [tcsh](https://www.tcsh.org)
- [nushell](https://www.nushell.sh)

## Customizing the `zsh` Shell

>[!TIP]
> Before getting started with customizing the `zsh` shell, I would recommend install [`brew`](https://brew.sh) if you are on a Mac. It is an easy way to install the plugins you will need. You can install [`brew`](https://brew.sh) by running the following command:


One advantage that the `zsh` shell has over the `bash` shell is it is more customizable. There are numerous plugins that allow you to add functionality like auto-completion, auto-suggestions, and syntax highlighting. There are some plugin managers like [`oh-my-zsh`](https://ohmyz.sh) and [`zplug`](https://github) or you can create a `.zshrc` file and add the plugins you want to use.

### **Checking for `.zshrc` file**
I might be mistaken but if you are on a Mac, the `.zshrc` file might not exist. You can check by running the following command:
```bash
ls -a ~ | grep .zshrc
```
This command will list all files including dot files in your home directory represented by the tilde `~` and 'pipe' denoted by `|` the resulting output to the `grep` command. If the `.zshrc` file exists, you will see it outputed on the next line. If it does not exist, you will not see anything outputed.

### **Creating a `.zshrc` file**

You can create the `.zshrc` file several different ways I will cover a couple of ways here.
- Create using `nano` which is a built-in text editor in the terminal
    ```bash
    nano ~/.zshrc
    ```
    This will create the `.zshrc` file and open it in the `nano` text editor. You can then edit the file and add any plugins you want to use.
- Create using `vim` which is another built-in (at least for Mac)text editor in the terminal
    ```bash
    vim ~/.zshrc
    ```
    This is essential does same as the previous example but just uses `vim` instead of `nano`.

    >[!NOTE]
    > If you have never used `vim` before, I would recommend using `nano` as it is easier to use.
- Using the `touch` command and open is Visual Studio Code
    ```bash
    touch ~/.zshrc && open -a "Visual Studio Code" ~/.zshrc
    ```
    The `touch ~/.zshrc` portion of this command creates the `.zshrc` file and the `open -a "Visual Studio Code" ~/.zshrc` portion opens the file in Visual Studio Code. You can replace `Visual Studio Code` with any other text editor you prefer.

> [!NOTE]
> The `~/` in the above commands is only needed if you are not in your home directory. If you are in your home directory you can omit the `~/` and just use `.zshrc`. To check your current directory you can run `pwd`

### **Making changes to the `.zshrc` file**
So you now have the `.zshrc` file already, but what can you do with it? Lets take a look at some thing you can do with the `.zshrc` file.

#### **Change the prompt**
This is one thing that can be done in either `bash` or `zsh` shell. The prompt is the text that appears before the cursor in the terminal. It can be customized to show different information like the current directory, the time, the user, and the hostname. You can also change the color of the prompt. Here is an example of how you can change the prompt in the `.zshrc` file. One popular way of customizing the prompt is to use the `powerlevel10k` theme. But here we will look at how we can do it ourselves.

To give you an idea of what you can do with the prompt without using a theme, here is a look at mine:

![zsh prompt](../../img/prompt.png)

![zsh prompt in git repo](../../img/prompt-git.png)

<details>
<summary>Some prompt escape sequences</summary>
**Prompt escape sequences**

- %/ current working directory
- %~ current working directory with $HOME abbreviated to ~
- %? return value of last command
- %M full machine hostname
- %n username
- %@ time in 12-hour format
- %T time in 24-hour format
- %t time in 12-hour format
- %* time in 24-hour format
- %# prompt symbol (# for root, $ for user)
- %W date in mm/dd/yy format
- %w date in day-dd format

</details>

**Prompt Resources**
- [zsh documentation](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Prompt-Expansion)
- [online zsh prompt generator](https://zsh-prompt-generator.site)
- [Linux handbook](https://linuxhandbook.com/customize-zsh-prompt/)
- [terminal 256-color chart](https://robotmoon.com/256-colors/)
- [powerlevel10k](https://github.com/romkatv/powerlevel10k)
- [starship](https://starship.rs)

Lets create a simple prompt that shows our username, the short hostname, and the current directory relative to the home directory. Add the following to the `.zshrc` file:
```bash
PROMPT='%n@%m %~ %# '
# break down of the prompt
# %n - username
# @ - notice the absence of % bedore the @ any character that is not a prompt escape sequence is displayed as is
# %m - short hostname
# %~ - current directory relative to $HOME
# %# - prompt symbol (# for root, $ for user)
# any spaces or returns between the prompt escape sequences are displayed as is
# so it is possible to have multiple lines in the prompt
```
After saving the file, your current terminal session prompt will not change. You will need to either open a new terminal session or run the following command to apply the changes:
```bash
source ~/.zshrc
# or sometime I just use 
zsh # this creates new zsh instance
```
It is looking better but we can improve it by adding some color. Here is how you can add color to the prompt:
```bash
PROMPT='%F{cyan}%n@%m %F{green}%~ %F{yellow}%#%f '
# %F{color} - sets the foreground color
# %f - resets the foreground color
```
You can also add background color to the prompt:
```bash
PROMPT='%F{cyan}%K{black}%n@%m %F{green}%K{white}%~ %F{yellow}%K{black}%#%f%k '
# %K{color} - sets the background color
# %k - resets the background color
```
You can also add some text effects like bold, underline, and italic they follow the same capital, lowercase pattern as the color codes:
```bash
# %B - bold
# %b - reset bold
# %U - underline
# %u - reset underline
# %I - italic
# %i - reset italic
```
There is a lot more you can do with the prompt like adding git info, but this should get you started.

#### **Set environment variables**
Environment variable are variables that are available in each instance of the shell. There are some that are set by default like `PATH` and `HOME`. You can see these by running this command:
```bash
env
```
And to use them you can run something like this:
```bash
echo "Hello my name is $USER"
```
You can create variables like this:
```bash
MESSAGE="Hello World"
```
Creating variables like this will only make them available to you in the current shell session. Other commands will not know about them. Say you are working with a script that is expecting a `API_KEY` environment variable, you can set it like this:
```bash
export API_KEY="your-api-key"
```
But once you close the terminal session, the variable will be lost. To make it permanent you can add the same command to the `.zshrc`. This will ensure that the variable is set every time you open a new terminal session.

#### **Add aliases**
Aliases are a great way to save time when working in the terminal. You can create an alias for a long command or ones you use often. For example, if you use `ls -al` often, you can create an alias like this:
```bash
alias la='ls -al'
```
One great use for aliases especially in this class is to create aliases for the `git` commands. Here are some examples:
```bash
alias gs='git status'
alias gaa='git add *'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log'
alias glg="git log --graph --oneline --all --decorate"
```
#### **Sourcing files**
Plugins will often require you to source a file in the `.zshrc` file. This is done by adding the following line to the `.zshrc` file:
```bash
source /path/to/file
```
When the .zshrc file is read, it will also read the file you are sourcing. So `zsh` will know about the plugins you are using.

I have started sourcing a file that contains all my aliases. That way I can keep my `.zshrc` file as clean as possible. Here is how you can do it:
```bash
source ~/.aliases
```
You can create a file called `.aliases` in your home directory and add all your aliases there. Then you can source the file in the `.zshrc` file.

#### **Adding comments**
You can add comments to the `.zshrc` file by starting the line with a `#`. This is useful for documenting what you are doing in the file. Here is an example:
```bash
# Source the .aliases file
source ~/.aliases
```

### **Conclusion**
Customizing the `zsh` shell can be fun and there is so much more you can do. I recommend poking around and see what you can do.