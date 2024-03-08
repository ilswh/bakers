import { rest } from "msw";

const baseURL = "https://bakers-drfapi-cfb949bb8921.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 8,
        username: "masterbaker",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 8,
        profile_image: "https://res.cloudinary.com/df3inpq0d/image/upload/v1/media/../default_profile_dlag1p"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];