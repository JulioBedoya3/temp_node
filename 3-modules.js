// modules
const {john, peter} = require('./4-first_modules')
//const names = require('./4-first_modules')
const sayHi = require('./5-second_module')
const data = require('./6-alt_flav')
require('./7-mind_grenade')
sayHi('susan')
sayHi(john)
sayHi(peter)