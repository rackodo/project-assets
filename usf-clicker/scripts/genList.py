import os

f = open("../text/fileList.txt", "w")

files = os.listdir('../images/')
for file in files:
	f.writelines(file + "\n")

f.close()