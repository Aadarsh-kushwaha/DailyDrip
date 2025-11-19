const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  mobile: Joi.string()
  .pattern(/^[6-9]\d{9}$/).required() .messages({"string.pattern.base": "Invalid mobile number. It must be 10 digits and start with 6-9."
  }),

  message: Joi.string().min(10).required()
});

module.exports = contactSchema;
