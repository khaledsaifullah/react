export const rules = {
    organization_id: [
        { required: true, message: 'Organization is required.' }
    ],
    last_name: [
        { required: true, message: 'Please input your last name' }
    ],
    email: [
        { required: true, message: 'Please input your email' },
        { type: 'email', message: 'The input is not valid email' },
    ],
    phone: [
        { required: true, message: 'Please input your mobile' }
    ],
    password: [
        { required: true, message: 'Please input your password' },
        { min: 6, message: "Password no less than 6" },
    ],
    confirm_password: [
        { required: true, message: 'Please input your confirm password!' },
        { min: 6, message: "Password no less than 6" },
    ],
    terms: [
        { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Please accept the terms of service to continue') },
    ],
};