const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Andrew', '4407', 'agoetz4407@gmail.com', 'University of Wisconsin')

    expect(intern.name).toBe('Andrew')
    expect(intern.id).toBe('4407')
    expect(intern.email).toBe('agoetz4407@gmail.com')
    expect(intern.school).toBe('University of Wisconsin')
})

test('gets intern name', () => {
    const intern = new Intern('Andrew', '4407', 'agoetz4407@gmail.com', 'University of Wisconsin')

    expect(intern.getName()).toBe('Andrew')
})

test('gets intern ID', () => {
    const intern = new Intern('Andrew', '4407', 'agoetz4407@gmail.com', 'University of Wisconsin')

    expect(intern.getId()).toBe('4407')
})

test('gets intern email address', () => {
    const intern = new Intern('Andrew', '4407', 'agoetz4407@gmail.com', 'University of Wisconsin')

    expect(intern.getEmail()).toBe('agoetz4407@gmail.com')
})

test('gets intern role', () => {
    const intern = new Intern('Andrew', '4407', 'agoetz4407@gmail.com', 'University of Wisconsin')

    expect(intern.getRole()).toBe('Intern')
})

test('gets intern school', () => {
    const intern = new Intern('Andrew', '4407', 'agoetz4407@gmail.com', 'University of Wisconsin')

    expect(intern.getSchool()).toBe('University of Wisconsin')
})