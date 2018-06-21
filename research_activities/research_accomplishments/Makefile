index.html: gen-publist.rb 研究成果.csv
	nkf -w < 研究成果.csv | ./gen-publist.rb index-template.html /dev/stdin > $@
