import axios from "./axios"

export const createLead = (lead) => {
  return axios.post(`/leads`, lead)
}
export const getLeads = () => {
  return axios.get(`/leads`)
}