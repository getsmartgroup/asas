import rest from '@feathersjs/rest-client'
import auth, {
	AuthenticationClientOptions
} from '@feathersjs/authentication-client'
import feathers from '@feathersjs/feathers'
import axios from 'axios'

export const asas = <T = any>(
	url: URL
): {
	client: feathers.Application<T>
	oAuthLoginURL: (provider: string) => string
} => {
	const client = feathers<T>()

	const restClient = rest(url.origin)
	client
		.configure(
			restClient.axios(
				axios.create({
					withCredentials: true
				})
			)
		)
		.configure(auth())
	const oAuthLoginURL = (provider: string) => {
		return url.toString() + 'oauth/' + provider
	}
	return { client, oAuthLoginURL }
}

export default asas
