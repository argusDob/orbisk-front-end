import axios from "axios";


const getAllPictures = async ({commit}) => {

     

    const theURL = "https://europe-west1-zero-foodwaste-dmz.cloudfunctions.net/orb-dmz-function-frontendcodingtest?key=17eaca20-328b-42d5-848c-65fe60985860&id=ioannis"
    console.log(theURL);
    return new Promise((resolve, reject) => {
      axios
        .get(theURL)
        .then(function(response) {
          console.log(response.data);
          commit("SET_PICTURES", response.data.results);
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  };



const updatePictures = async (context, payload) => {
  console.log(context)
  console.log(payload)
  // const theURL = "https://europe-west1-zero-foodwaste-dmz.cloudfunctions.net/orb-dmz-function-frontendcodingtest?key=17eaca20-328b-42d5-848c-65fe60985860&id=ioannis"
  // console.log(theURL,);
  // return new Promise((resolve, reject) => {
  //   axios
  //     .post(theURL, )
  //     .then(function(response) {
  //       console.log(response);
  //       resolve(response);
  //     })
  //     .catch(function(error) {
  //       reject(error);
  //     });
  // });
};
  

  export default {
    getAllPictures,
    updatePictures
  };
