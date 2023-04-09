const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('creates an Engineer object', () => {
    const engineer = new Engineer('John', 123, 'john@test.com', 'john123');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });

  it('gets engineer github value', () => {
    const engineer = new Engineer('John', 123, 'john@test.com', 'john123');

    expect(engineer.getGithub()).toEqual(expect.any(String));
  });

  it('gets role of employee', () => {
    const engineer = new Engineer('John', 123, 'john@test.com', 'john123');

    expect(engineer.getRole()).toEqual('Engineer');
  });
});
