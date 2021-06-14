import axios from "axios";
const apiKey = process.env.REACT_APP_AIRTABLE_KEY;
const baseURL = "https://api.airtable.com/v0/appMm1TVATqZCZK1R/planets";
let moonURL = `https://api.airtable.com/v0/appMm1TVATqZCZK1R/moons`
const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const getPlanetList = async () => {
  
  try {
    const res = await axios.get(baseURL, config);
    return res.data.records;
  } catch (error) {
    console.error(error);
  }
}

export const getPlanetCard = async (id) => {

  try {
    const res = await axios.get(`${baseURL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export const newPlanet = async (form) => {

  try {
    const res = await axios.post(`${baseURL}`, {fields: form}, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export const updatePlanet = async (form, id) => {
  
  try {
    const res = await axios.put(`${baseURL}/${id}`, {fields: form}, config)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const getMoonData = async (id) => {

  try {
    const res = await axios.get(`${moonURL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}