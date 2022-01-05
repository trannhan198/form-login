import { useState } from 'react';
import { useForm } from 'react-hook-form';


const Register = (props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [error, setError] = useState(true)
    const [forms, setShowForm] = useState(false)
    const setUser = props.setUser
    const user = props.user
    const showForm = props.showForm
    const setShowFroms = props.setShowFroms

    const onSubmit = (data) => {
        if (data.password === data.confirm) {
            let newObj = {
                name: data.user,
                email: data.email,
                password: data.password
            }
            setUser([...user, newObj])
            setShowForm(!forms);
        } else if(data.confirm !== ''){
            setError(!error)
        }
    }

    

    return (
        <>
            <div>
                <h4>Form Đăng Ký</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Tên đăng nhập</label>
                        <input type="text" {...register('user', { required: true })} className="form-control" />
                        {errors.user && <span className='error'>không được để trống</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Địa chỉ Email</label>
                        <input type="Email" {...register('email', { required: true })} className="form-control" />
                        {errors.email && <span className='error'>không được để trống</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mật Khẩu</label>
                        <input type="password" {...register('password', { required: true })} className="form-control" />
                        {errors.password && <span className='error'>không được để trống</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Xác nhận mật khẩu</label>
                        <input type="password" {...register('confirm', { required: true })} className="form-control" />
                        <span className='error'>{error ? '' : 'mật khẩu không trùng khớp'}</span>
                        {errors.confirm && <span className='error'>không được để trống</span>}
                    </div>
                    <button type="onsubmit" className="btn btn-primary">Đăng ký</button>
                    <button type="onsubmit" onClick={()=>setShowFroms(!showForm)} className="btn btn-primary">Đăng Nhập</button>
                </form>
            </div>

            <div className={ forms ? ' overlay ' : 'hidden'}></div>
            <div className={ forms ? ' form ' : 'hidden'}>
                <form>
                    <h4>đăng ký thành công</h4>
                    <input onClick={()=>setShowFroms(!showForm)} className='btn btn-primary' value={'ok'}/>
                </form>
            </div>
        </>
    )
}

export default Register
