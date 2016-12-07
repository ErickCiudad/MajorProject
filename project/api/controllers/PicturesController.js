/**
 * UserController
 *
 * @description :: Server-side logic for managing pictures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	destroy: function (req, res) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id passed.');
        }

        Pictures.update(id, {isEnabled: false}).exec(function (err, picture) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(picture);
        });
  },
	vipOnly: function (req, res) {
        Pictures.find({vip: true}).exec(function (err, pictures) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(pictures);
        });
    },

		create: function (req, res) {
        if (!req.body) {
            return res.badRequest('No body data passed.');
        }

        Pictures.create(req.body).exec(function (err, picture) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(picture);
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

        Pictures.update(id, req.body).exec(function (err, picture) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(picture);
        });
    },

picture: function (req,res, next){
	var id = req.param('id');
	Pictures.findOne(id).exec(function(err, picture){
		if (err) {
			return res.serverError(err);
		}
		res.view({
			picture: picture
		});
		console.log(req.param('id'));

	});
}


};
