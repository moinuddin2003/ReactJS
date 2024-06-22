import { useState } from 'react';

function IntermediateUseStateApp() {
    const [form, setForm] = useState({
        firstName: 'Muhammad',
        lastName: 'Moinuddin',
        Email: 'moinuddin010203@gmail.com'
    });
    return (
        <>
            <h1>Making Form by Using UseState</h1>

            <label>
                FirstName:
                <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
            </label>
            <br />
            <label>
                LastName:
                <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
            </label>
            <br />
            <label>
                Email:
                <input type="text" value={form.Email} onChange={(e) => setForm({ ...form, Email: e.target.value })} />
            </label>


            <p>
                <strong>Preview</strong>
                <br/>
                <b>{"Name: "}</b>{ form.firstName} {''}
                {form.lastName}
                <br/>
            <b>{"Email: "}</b>{form.Email}
            </p>
        </>
    );
}
export default IntermediateUseStateApp;