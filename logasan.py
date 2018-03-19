import os 
dire = './espree-fuzz/crash/'
filenames = os.listdir(dire)
filenames.sort()

for filename in filenames:
	print '-----------------'
	print filename
	os.system('../webkit-190de7f/bin/jsc '+ dire+filename)
