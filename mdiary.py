import json
import os
from datetime import date
import threading
import webbrowser
from shutil import copyfile


def readConfig(config):
    with open(config, "r") as read_file:
        data = json.load(read_file)
    return data["editor"], data["path"]


tool_path = os.path.realpath(__file__).replace("mdiary.py", "")
# Config parameters
editor, path = readConfig(tool_path+'config.json')


def buildStatic(name):
    # open the browser
    webbrowser.open(url)


if __name__ == "__main__":

    today = date.today()
    # Used as title for files
    date = today.strftime("%d/%m/%Y")
    # Replacing the / with - to not mess up paths
    date = date.replace("/", "-")
    # Textual Month
    month = today.strftime("%B")
    # Textual Year
    year = today.strftime("%Y")

    # to view the journal inside the browser
    # view = threading.Thread(target=buildStatic, args=(1,))
    # view.start()

    if not os.path.lexists(path+year):
        # create directory
        os.makedirs(path+year)

    if not os.path.lexists(path+year+"/"+month):
        os.makedirs(path+year+"/"+month)

    if not os.path.lexists(path+year+"/"+month+"/"+date+".md"):
        # copies the template and creates a new file inside the directory
        dest = path+year+"/"+month+"/"+date+".md"
        copyfile(tool_path+"template.md", dest)
        # replace {date} with actual date
        f = open(dest, "rt")
        data = f.read()
        data = data.replace('{date}', date)
        print(data)
        f.close()
        f = open(dest, "wt")
        f.write(data)
        f.close()

    # Command that is used to run
    command = editor + " " + path+year+"/"+month+"/"+date+".md"
    # open the file inside the editor
    os.system(command)
