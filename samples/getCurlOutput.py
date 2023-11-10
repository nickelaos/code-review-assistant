def __getCurlOutput (self, url, **kwargs):
	curlcmd = "curl {0}".format(url)

	for key, value in kwargs.items():
		key = key.lower()

		if key == "origin":
			curlcmd += " -H 'Origin: {0}'".format(value)
		elif key == "contenttype":
			curlcmd += " -H 'Content-Type: {0}'".format(value)
		elif key == "referer":
			curlcmd += " -H 'Referer: {0}'".format(value)
		elif key == "cookie":
			curlcmd += " -H 'Cookie: {0}'".format(value)
		elif key == "data":
			curlcmd += " --data '{0}'".format(value)
		elif key == "verbose":
			if value == True:
				curlcmd += " --verbose"
			else:
				curlcmd += " --silent"
		elif key == "output":
			curlcmd += " --output {0}".format(value)
		else:
			print "Unsupported key: {0}".format(key)

	curlcmd += " 2>&1"

	print curlcmd

	curlout = subprocess.check_output(curlcmd,shell=True)

	return curlout
