const env = process.env;

const config = {
  listPerPage: env.LIST_PER_PAGE || 10,
  orderByASC :'ASC',
  orderByDesc :'DESC'
}

module.exports = config;