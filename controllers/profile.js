const Profile = require('../models/Profile');
const errorHandler = require('../utils/errorHandler');

module.exports.get = async function (req, res) {
    try {
        const profile = await Profile.find({user: req.user.id});
        res.status(200).json(profile);
    }catch (e) {
        errorHandler(res, e);
    }
};
module.exports.create = async function (req, res) {
    try {
        const profile = new Profile({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            comment: req.body.comment,
            user: req.user.id
        });
        await profile.save();
        res.status(201).json(profile);
    }catch (e) {
        errorHandler(res, e);
    }
};