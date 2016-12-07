/**
 * UserController
 * The file name takes the first word, in this case User, and makes an object out of it. Adjust your code accordingly in your operations to match up with the file name
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	destroy: function (req, res) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id passed.');
        }

        User.update(id, {isEnabled: false}).exec(function (err, user) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(user);
        });
  },
	vipOnly: function (req, res) {
        User.find({vip: true}).exec(function (err, users) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(users);
        });
    },

		create: function (req, res) {
        if (!req.body) {
            return res.badRequest('No body data passed.');
        }

        User.create(req.body).exec(function (err, user) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(user);
        });
    },

    update: function (req, res) {
        if (!req.body) {
            return res.badRequest('No body data passed.');
        }

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id passed.');
        }

        User.update(id, req.body).exec(function (err, user) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(user);
        });
    },

// user: function (req,res, next){
// 	var id = req.param('id');
// 	User.findOne(id).exec(function(err, user){
// 		if (err) {
// 			return res.serverError(err);
// 		}
// 		res.view({
// 			user: user
// 		});
// 		console.log(req.param('id'));
//
// 	});
// }

user: function (req,res, next){
	var id = req.param('id');
	User.find(id).exec(function(err, user){
		if (err) {
			return res.serverError(err);
		}
		res.view({
			user: user
		});

	});
}


};
