import axios from "axios";

export default axios.create({
  baseURL: "https://eu-west-1.aws.data.mongodb-api.com/app/restaurant-reviews-thzit/endpoint/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});