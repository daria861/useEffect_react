import { useRef, useState } from "react"

export function Users(){

    const [users, setUsers] = useState([])

    const name = useRef()
    const lastName = useRef()
    const email = useRef()

    const btnHandler = () =>{
        setUsers([...users, {
            name: name.current.value,
            lastName: lastName.current.value,
            email: email.current.value
        }])
    }


    return(

        <>
            <label>Name 
                <input ref={name} type="text" />
            </label>
            <label>Last name 
                <input ref={lastName} type="text" />
            </label>

            <label>Email
                <input ref={email} type="text" />
            </label>

            <button onClick={btnHandler}>Click</button>

            <ul>
                {users.map((user, idx) => <li key={idx}>{user.lastName}</li>)}
            </ul>
        </>
    )
}