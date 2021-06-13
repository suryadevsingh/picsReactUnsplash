import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID J4VfuRIaTMvPyToMgbQCt7g4gUKfxNZpDSTAwlOWN_E'
    }
})