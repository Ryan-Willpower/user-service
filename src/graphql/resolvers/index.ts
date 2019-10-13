import _ from 'lodash'

import register from './register'

export const resolvers = _.merge({}, register)

console.debug(resolvers)
