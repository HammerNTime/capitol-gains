// import * as tokenService from '../services/tokenService';

const BASE_URL =
	"https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"

function getAllHouseApi() {
	return fetch(BASE_URL, {
        // headers: {
    //   'Authorization': `Bearer ${tokenService.getToken()}`
    // },
    }
  ).then((res) => res.json())
}

export { getAllHouseApi }
