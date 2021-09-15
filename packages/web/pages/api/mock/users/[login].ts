// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import faker from 'faker'

type ResponseDataType = {
  login: string | string[]
  id: number
  avatar_url: string
  html_url: string
  name: string
  email: string
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  res.status(200).json({
    login: req.query.login,
    id: faker.datatype.number(9999999),
    avatar_url: faker.internet.avatar(),
    html_url: faker.internet.url(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    bio: faker.name.jobDescriptor(),
    public_repos: faker.datatype.number(150),
    public_gists: faker.datatype.number(150),
    followers: faker.datatype.number(999999),
    following: faker.datatype.number(99999)
  })
}
