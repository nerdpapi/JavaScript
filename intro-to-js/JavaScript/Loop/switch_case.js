function handleUserRole(role) {
    switch (role) {
        case 'admin':
            return 'You have full access';
        case 'subadmin':
            return 'You have access to create/delete courses';
        case 'testprep':
            return 'You have access to create/delete tests';
        default:
            return 'role no recognised';
    }
}
console.log(handleUserRole('testprep'))
let Message = 'admin'
adminMessage = handleUserRole(Message)
console.log(`${adminMessage} to the administrator`)



  