import json
import os
from datetime import date
import threading
import webbrowser

def readConfig(config):
    with open(config, "r") as read_file:
        data = json.load(read_file)
    return data["editor"], data["path"]

def buildStatic(name, tool_path):
    
    template_path=tool_path+"template/"
    # go into the directory
    os.system("sh " + template_path+"build.sh " + template_path )
  
    # specify web url
    url=template_path+"public/index.html"
    
    webbrowser.open(url)


if __name__ == "__main__":
    
    tool_path = os.path.realpath(__file__).replace("mdiary.py", "")
    
    # Config parameters
    editor, path = readConfig(tool_path+'config.json')
    today = date.today()
    # Used as title for files
    date=today.strftime("%d/%m/%Y")
    # Replacing the / with - to not mess up paths
    date = date.replace("/", "-")
    # Textual Month
    month=today.strftime("%B")
    # Textual Year
    year=today.strftime("%Y")
    
    # to view the journal inside the browser
    view = threading.Thread(target=buildStatic, args=(1,tool_path))
    view.start()
    print(date)
    
    if not os.path.lexists(path+year):
        print("yes")
        # create directory
        os.makedirs(path+year)
    
    if not os.path.lexists(path+year+"/"+month):
        os.makedirs(path+year+"/"+month)
        
    if not os.path.lexists(path+year+"/"+month+"/"+date+".md"):
        open(path+year+"/"+month+"/"+date+".md", "a").close()
        
    # Command that is used to run    
    command = editor + " " + path+year+"/"+month+"/"+date+".md"
    # open the file inside the editor
    os.system(command)
    
