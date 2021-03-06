<h1 align="center"> MDiary </h1> <br>
<p align="center">
   MDiary is a workflow tool for daily markdown journaling, it also converts them to a beautiful html page.
</p>

<p align="center" >
  <img alt="MDiary" title="MDiary" src="https://user-images.githubusercontent.com/36965591/110201820-5d79eb80-7e65-11eb-9484-4c2d0bcc27d9.png" height="400">


<p align="center" >
    <img alt="" title="YinYang" src="https://img.shields.io/badge/MDiary-1.0-blue">
    <img alt="" title="YinYang" src="https://img.shields.io/badge/License-MIT-blue">
    <img alt="" title="YinYang" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103">
    <img alt="" title="YinYang" src="https://img.shields.io/badge/Build%20with-Python-yellow">
  <img alt="" title="YinYang" src="https://img.shields.io/badge/GatsbyJS-purple">
  
## Features

* create new file in specified directory with current {date}.md
* creates folder and file structure following year/date/{date}.md
* define template for new diary file
* build static version with gatsby


## Installation
To install MDiary copy the command below:

```
$ git clone https://github.com/daehruoydeef/MDiary && cd MDiary/static && npm install
```

## Usage

First edit config.json and fill in your path where the Diary will be saved
MDiary will create folder based on the following structure:
```
{configPath}/1990
                /March
                    /14.03.1990.md
```

```
$ python3 mdiary.py
```
will open your specified editor with the newly created markdown file

```
$ python3 mdiary.py --build
```
will generate static files and serve them on localhost:9000



