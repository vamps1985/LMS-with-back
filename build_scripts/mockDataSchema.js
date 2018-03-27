module.exports = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          unique: 'true',
          minimum: 1,
        },
        name: {
          type: 'string',
          faker: 'name.findName',
        },
        email: {
          type: 'string',
          format: 'email',
          faker: 'internet.email',
        },
        pic: {
          type: 'string',
          faker: 'internet.avatar',
        },
      },
      required: ['id', 'name', 'email', 'pic'],
    },
    required: ['user'],
  },
};
