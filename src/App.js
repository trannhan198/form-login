import { useEffect, useState } from "react";
import Register from "./components/Register";
import { useForm } from 'react-hook-form';

function App() {
	const [showForm, setShowFrom] = useState(true)
	const { register, handleSubmit, formState: { errors }, } = useForm();
	const [ Messes, setMesses] = useState(false)
	const [error, setError] = useState(true)

	const [user, setUser] = useState([
		{
			name: 'trannhan',
			email: 'nhantv1982000@gmail.com',
			password: '123@123a'
		}
	])

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user])

	const onHandleSubmit = (data) => {
		user.forEach((vle) => {
			if (vle.email === data.email && vle.password === data.password) {
				setMesses(!Messes)
				setError(true)
			}else{
				setError(!error)
			}
		})
	}

	return (
		<>
			<div className="App">
				{
					showForm ? <form onSubmit={handleSubmit(onHandleSubmit)}>
						<h4>Form Login</h4>
						<div className="mb-3">
							<label className="form-label">Địa chỉ Email</label>
							<input onBlur={onHandleSubmit} {...register('email', { required: true })} type="email" className="form-control" />
							{errors.email && <span className="error">không được để trống</span>}
						</div>
						<div className="mb-3">
							<label className="form-label">Mật Khẩu</label>
							<input onBlur={onHandleSubmit} {...register('password', { required: true })} type="password" className="form-control" />
							{errors.email && <span className="error">không được để trống</span>}
						</div>

						<div className="login-error">
							<span className="error">{error ? '' : 'thông tin tài khoản không đúng'}</span>
						</div>

						<button type="submit" className="btn btn-primary">Đăng nhập</button>
						<button type="button" onClick={() => { setShowFrom(!showForm) }} className="btn btn-primary">Đăng ký</button>
					</form> : <Register showForm={showForm} setShowFroms={setShowFrom} setUser={setUser} user={user} />
				}
			</div>

			<div className={ Messes ? ' overlay ' : 'hidden'}></div>
            <div className={ Messes ? ' form ' : 'hidden'}>
                <form>
                    <h4>{Messes ? 'đăng nhập thành công' : 'sai thông tin mật khẩu'}</h4>
                    <input onClick={()=>setMesses(!Messes)} className='btn btn-primary' value={'ok'}/>
                </form>
            </div>
		</>
	);
}

export default App;
