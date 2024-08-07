import { test, expect }  from '@playwright/test';

import testdata from '../testdata/login.json'

/*
import dotenv from 'dotenv';
dotenv.config({
  path: `.env.${process.env.ENV}`,
  override: true
});

console.log(process.env.baseUrl)
*/

test('POST request to retrive new profile', async ({ request }) => {
  let API_TOKEN :string;
 // console.log(process.env.API_TOKEN)
const response = await request.post('api/v1/auth/login', {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
  data: testdata
 /* data: {
"email": "john@mail.com",
"password": "changeme"
  }
  */
  
});

expect(response.status()).toBe(201);
const responseBody = await response.json();
console.log(responseBody);
API_TOKEN = responseBody.access_token;

const profile_response = await request.get('api/v1/auth/profile', {
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
});

expect(profile_response.status()).toBe(200);
const responseBody_profile= await profile_response.json();
console.log(responseBody_profile);
expect(responseBody_profile).toHaveProperty( "email");
expect(responseBody_profile.avatar).toBe('https://i.imgur.com/LDOO4Qs.jpg');
});