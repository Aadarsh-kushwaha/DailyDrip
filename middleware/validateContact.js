
const ExpressError = require("./ExpressError");
const contactSchema = require("../schemas/contactSchema");

module.exports = function validateContact(req, res, next) {
    const { error } = contactSchema.validate(req.body);

    if (error) {
        let msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(msg, 400);
    }

    next();
};
