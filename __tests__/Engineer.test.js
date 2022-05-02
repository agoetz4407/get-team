const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Andrew', '4407', 'agoetz4407@gmail.com', 'agoetz4407')

    expect(engineer.name).toBe('Andrew')
    expect(engineer.id).toBe('4407')
    expect(engineer.email).toBe('agoetz4407@gmail.com')
    expect(engineer.github).toBe('agoetz4407')
})

test('gets engineer name', () => {
    const engineer = new Engineer('Andrew', '4407', 'agoetz4407@gmail.com', 'agoetz4407')

    expect(engineer.getName()).toBe('Andrew')
})

test('gets engineer ID', () => {
    const engineer = new Engineer('Andrew', '4407', 'agoetz4407@gmail.com', 'agoetz4407')

    expect(engineer.getId()).toBe('4407')
})

test('gets engineer email address', () => {
    const engineer = new Engineer('Andrew', '4407', 'agoetz4407@gmail.com', 'agoetz4407')

    expect(engineer.getEmail()).toBe('agoetz4407@gmail.com')
})

test('gets engineer role', () => {
    const engineer = new Engineer('Andrew', '4407', 'agoetz4407@gmail.com', 'agoetz4407')

    expect(engineer.getRole()).toBe('Engineer')
})

test('gets engineer Github username', () => {
    const engineer = new Engineer('Andrew', '4407', 'agoetz4407@gmail.com', 'agoetz4407')

    expect(engineer.getGithub()).toBe('agoetz4407')
})