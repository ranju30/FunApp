if echo $1 | egrep -q '^[0-9]+$'; then
	node emoji.js $1 $2
else
	node emoji.js $2 $1
fi

subl output
