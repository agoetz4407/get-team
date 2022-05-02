const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Andrew', '4407', 'agoetz4407@gmail.com')

    expect(employee.name).toBe('Andrew')
    expect(employee.id).toBe('4407')
    expect(employee.email).toBe('agoetz4407@gmail.com')
})

test('gets employee name', () => {
    const employee = new Employee('Andrew', '4407', 'agoetz4407@gmail.com')

    expect(employee.getName()).toBe('Andrew')
})

test('gets employee ID', () => {
    const employee = new Employee('Andrew', '4407', 'agoetz4407@gmail.com')

    expect(employee.getId()).toBe('4407')
})

test('gets employee email address', () => {
    const employee = new Employee('Andrew', '4407', 'agoetz4407@gmail.com')

    expect(employee.getEmail()).toBe('agoetz4407@gmail.com')
})

test('gets employee role', () => {
    const employee = new Employee('Andrew', '4407', 'agoetz4407@gmail.com')

    expect(employee.getRole()).toBe('Employee')
})