const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Andrew', '4407', 'agoetz4407@gmail.com', '101')

    expect(manager.name).toBe('Andrew')
    expect(manager.id).toBe('4407')
    expect(manager.email).toBe('agoetz4407@gmail.com')
    expect(manager.officeNumber).toBe('101')
})

test('gets manager name', () => {
    const manager = new Manager('Andrew', '4407', 'agoetz4407@gmail.com', '101')

    expect(manager.getName()).toBe('Andrew')
})

test('gets manager ID', () => {
    const manager = new Manager('Andrew', '4407', 'agoetz4407@gmail.com', '101')

    expect(manager.getId()).toBe('4407')
})

test('gets manager email address', () => {
    const manager = new Manager('Andrew', '4407', 'agoetz4407@gmail.com', '101')

    expect(manager.getEmail()).toBe('agoetz4407@gmail.com')
})

test('gets manager role', () => {
    const manager = new Manager('Andrew', '4407', 'agoetz4407@gmail.com', '101')

    expect(manager.getRole()).toBe('Manager')
})