const Config = require('../../config/index')

exports.checkAuthentication = async (payload) => {
	if(payload.iss == Config.iss && payload.aud == Config.aud)
		return true
	else
		return false
}