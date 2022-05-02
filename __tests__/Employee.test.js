const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Andrew', '4407', 'agoetz4407@gmail.com')

    expect(employee.name).toBe('Andrew')
    expect(employee.id).toBe('4407')
    expect(employee.email).toBe('agoetz4407@gmail.com')
})