import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action';

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (evt) => {
    setEmail(evt.currentTarget.value)
  }

  const onPasswordHandler = (evt) => {
    setPassword(evt.currentTarget.value)
  }

  const onNameHandler = (evt) => {
    setName(evt.currentTarget.value)
  }

  const onConfirmPasswordHandler = (evt) => {
    setConfirmPassword(evt.currentTarget.value)
  }

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.')
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,    
    }

    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          props.history.push("/login")
        } else {
          alert("회원가입 실패")
        }
      })

  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{
        display: 'flex', flexDirection: 'column'
      }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button>
          회원가입
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
