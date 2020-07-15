import React, { useState } from 'react'

export default function Knowledge_useState1() {
    const initialState = {username:"",password:""};
    const [account, setAccount] = useState(initialState);
    return (
        <form>
            <p> #Debug {JSON.stringify(account)}</p>
            <input type="text" placeholder="username" value={account.username} onChange={e => setAccount({ ...account, username: e.target.value })} /><br />
            <input type="password" placeholder="password" value ={account.password} onChange={e => setAccount({ ...account, password: e.target.value })} /><br />
            <button onClick={e => { e.preventDefault() }}>submit</button>
            <button onClick={e => { e.preventDefault(); setAccount(initialState) }}>clear</button>
        </form>
    )
}
