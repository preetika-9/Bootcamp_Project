import axios from "axios";

export const createIncome = (payload) => {
  const url = "http://localhost:3005/api/income";
  return axios
    .post(
      url,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiYWRkcmVzcyI6IkxhbGl0cHVyLCBOZXBhbCIsInBob25lIjoiOTg0MTEyMzEyMyIsImVtYWlsIjoiYWRtaW5AZ3VyenUuY29tIiwiYWN0aXZlIjoxLCJkYXRlX29mX2JpcnRoIjoiMjAyMi0wMy0wMlQyMDo1OToyOC4xMTFaIiwiaWF0IjoxNjQ2NzM2MzY5LCJleHAiOjE2NDY4MjI3Njl9.BTdrEKy1LD6hfRu0UM2yOxz-sht1ux-3n-UrLWQJmBM",
        },
      },
      {
        ...payload,
      }
    )
    .then((res) => res.data);
};

export const deleteIncome = (id) => {
  const url = `http://localhost:3005/api/income/${id}`;
  return axios.delete(url).then((res) => res.data);
};
