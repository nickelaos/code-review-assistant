def open(self, *filename):
	if len(filename) > 1:
		print(("Usage:\nopen() - opens with the initialized "
			"filename\nopen(filename) - opens with given filename"))
		return 1
	if len(filename) == 1:
		self.filename = filename[0]
	if self.filename is None:
		print("No filename given")
		return 1
	self.struct_p = open_struct(self.last_error, self.error_size, \
		self.filename)
	if self.struct_p is None:
		print("Cannot open file: " + self.filename)
		return 1
	self.load_data()
	return 0
