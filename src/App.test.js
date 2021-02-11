import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import ContactForm from './components/ContactForm';

test ( 'Contact Form Testing', () =>{
    render (<ContactForm/>);

    const firstNameInput = screen.getByPlaceholderText('Edd');
    const lastNameInput = screen.getByPlaceholderText ('Burke');
    const emailInput = screen.getByPlaceholderText ('bluebill1049@hotmail.com');
    const messageInput = screen.getByLabelText(/message/i);

    const firstName = screen.getByLabelText(/First Name*/i);


    userEvent.type(firstNameInput, 'Vince');
    expect(firstNameInput).toHaveValue('Vince');
    userEvent.type(lastNameInput, 'Garcia');
    expect(lastNameInput).toHaveValue('Garcia');
    userEvent.type(emailInput, 'blah@blah.com');
    expect(emailInput).toHaveValue('blah@blah.com');
   

})
