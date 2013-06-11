exports.findAll = function(req, res) {
	res.send([{name: 'a weird transact'}, {name: 'another new transact'}]);
}