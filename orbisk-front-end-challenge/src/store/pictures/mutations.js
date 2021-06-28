const SET_PICTURES = (state, payload) => {
    const keys = Object.keys(payload);
    keys.forEach((key) => {
     state.pictures.thePicturesList.push( { [key]: payload[key]});
    });
  };

  const SET_PICTURE = (state, payload) => {
       state.pictures.picture = payload;
  };

  export default {
    SET_PICTURES,
    SET_PICTURE
  };