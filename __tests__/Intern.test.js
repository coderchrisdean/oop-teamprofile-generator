const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Dave', 123, 'dave@test.com', 'UC Berkeley');

  expect(intern.name).toBe('Dave');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
  const intern = new Intern('Dave', 123, 'dave@test.com', 'UC Berkeley');

  expect(intern.getSchool()).toEqual('UC Berkeley');
});
