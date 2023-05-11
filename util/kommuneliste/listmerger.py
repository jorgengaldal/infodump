"""
Tool for merging two lists about municipalities into a json-file
"""

import json

url_path = "C:\\Users\\Jørgen Galdal\\Documents\\Lokal programmering\\infodump\\util\\kommuneliste\\KommuneURL.txt"
mail_path = "C:\\Users\\Jørgen Galdal\\Documents\\Lokal programmering\\infodump\\util\\kommuneliste\\KommuneMail.txt"
result_path = "C:\\Users\\Jørgen Galdal\\Documents\\Lokal programmering\\infodump\\util\\kommuneliste\\kommuner.json"

kommuner = []

with open(url_path) as url_file:
    lines = url_file.read().split("\n")
    for line in lines:
        kommune, url = line.split("] ")
        kommuner.append({"navn": kommune,
                              "url": url})

with open(mail_path) as mail_file:
    lines = mail_file.read().split("\n")
    for i, line in enumerate(lines):
        kommune, mail = line.split("] ")
        assert kommune == kommuner[i]["navn"]
        kommuner[i]["mail"] = mail

with open(result_path, "w") as file:
    json.dump(kommuner, file)
