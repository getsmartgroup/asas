import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
import feathers from '@feathersjs/feathers';
import axios from 'axios';
export const asas = (url) => {
    const client = feathers();
    const restClient = rest(url.origin);
    client
        .configure(restClient.axios(axios.create({
        withCredentials: true
    })))
        .configure(auth());
    const oAuthLoginURL = (provider) => {
        return url.toString() + 'oauth/' + provider;
    };
    return { client, oAuthLoginURL };
};
export default asas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSx5QkFBeUIsQ0FBQTtBQUMxQyxPQUFPLElBRU4sTUFBTSxtQ0FBbUMsQ0FBQTtBQUMxQyxPQUFPLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQTtBQUMzQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFFekIsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQ25CLEdBQVEsRUFJUCxFQUFFO0lBQ0gsTUFBTSxNQUFNLEdBQUcsUUFBUSxFQUFLLENBQUE7SUFFNUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNuQyxNQUFNO1NBQ0osU0FBUyxDQUNULFVBQVUsQ0FBQyxLQUFLLENBQ2YsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNaLGVBQWUsRUFBRSxJQUFJO0tBQ3JCLENBQUMsQ0FDRixDQUNEO1NBQ0EsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDbkIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUU7UUFDMUMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUM1QyxDQUFDLENBQUE7SUFDRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUVELGVBQWUsSUFBSSxDQUFBIn0=