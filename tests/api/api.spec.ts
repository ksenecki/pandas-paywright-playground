import { expect, test } from '@playwright/test';

test.describe.parallel('Test API', () => {
  const baseURL = 'https://reqres.in/api';

  test('GET: Verify correct user endpoint status', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/3`);
    expect(response.status()).toBe(200);
  });

  test('GET: Verify invalid user endpoint status', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/invalid`);
    expect(response.status()).toBe(404);
  });

  test('GET: Verify single user data', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/3`);
    const respBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(respBody.data.email).toMatch(new RegExp(`@`));
  });

  test('GET: Verify users data', async ({ request }) => {
    const response = await request.get(`${baseURL}/users`);
    const respBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);

    respBody.data.map((item: any) => {
      const userEmail = (
        item.first_name +
        '.' +
        item.last_name +
        '@reqres.in'
      ).toLowerCase();
      expect(item.email).toMatch(new RegExp(`@`));
      expect(userEmail).toMatch(item.email);
      expect(item.avatar).toMatch(new RegExp(`(?<=/faces/)(.*?)(?=\.jpg)`));
    });
  });

  test('POST: Create new user', async ({ request }) => {
    const response = await request.post(`${baseURL}/users`, {
      data: {
        name: 'Panda',
        job: 'Software Test Engineer',
        id: '500',
      },
    });
    const respBody = JSON.parse(await response.text());
    expect(response.status()).toBe(201);
    expect(respBody.name).toBe('Panda');
    expect(respBody.id).toBe('500');
    expect(respBody.job).toMatch(new RegExp('Software Test Engineer'));
    expect(respBody.createdAt).toBeTruthy();
  });

  test('POST: Register success', async ({ request }) => {
    const response = await request.post(`${baseURL}/register`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      },
    });
    const respBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(respBody.id).toBeTruthy();
    expect(respBody.token).toBeTruthy();
  });

  test('POST: Register failure', async ({ request }) => {
    const response = await request.post(`${baseURL}/register`, {
      data: {
        email: 'eve.holt@reqres.in',
      },
    });
    expect(response.status()).toBe(400);
  });

  test('POST: Login success', async ({ request }) => {
    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    });
    const respBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(respBody.token).toBeTruthy();
  });

  test('POST: Login fail', async ({ request }) => {
    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
      },
    });
    const respBody = JSON.parse(await response.text());
    expect(response.status()).toBe(400);
    expect(respBody.error).toBeTruthy();
  });

  test('PUT: update user data', async ({ request }) => {
    const response = await request.put(`${baseURL}/users/3`, {
      data: {
        name: 'new_name',
        job: 'new_job',
      },
    });
    const respBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(respBody.name).toBe('new_name');
    expect(respBody.job).toBe('new_job');
    expect(respBody.updatedAt).toBeTruthy();
  });

  test('DELETE: delete user', async ({ request }) => {
    const response = await request.delete(`${baseURL}/users/3`);
    expect(response.status()).toBe(204);
  });
});
