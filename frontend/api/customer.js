import { API_ENDPOINT } from ".";

export const getCustomer = async () => {
    const response = await fetch(`${API_ENDPOINT}/customers`);
    const customers = await response.json();

    return customers;
}

export const getCustomerById = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/customers/${id}`);
    const customer = await response.json();

    return customer;
}

export const createCustomer = async (customer) => {
    const response = await fetch(`${API_ENDPOINT}/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    });

    const newCustomer = await response.json();

    return newCustomer;
}

export const updateCustomer = async (id, customer) => {
    const response = await fetch(`${API_ENDPOINT}/customers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    });

    const updatedCustomer = await response.json();

    return updatedCustomer;
}

export const deleteCustomer = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/customers/${id}`, {
        method: 'DELETE'
    });

    return response.status;
}