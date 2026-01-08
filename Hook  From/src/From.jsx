import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

function From() {
    const {register, handleSubmit, control, formState} = useForm();
    const {errors} = formState    //Dev tool ko ham yaha par use kar rahi hai

    console.log(useForm());

    const onSubmit = () => {

    }
    
    return (
    <div>
        <form  onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="name">Name</label><br></br>
            <input type="text" id='name' {...register('name', {
                // yese ham validation rule ko lagate hai
                required: 'Name is required',
                minLength: {
                    value: 5,
                    message: 'Name should be at least 5 characters'
                }
            })} />
            <p className='error'>{errors.name?.message}</p>
            {/* user ko msg show hoga validation ka */}
            <br></br>
            <label htmlFor="email">Email</label><br></br>
            <input type="email" id='email' {... register('email', {
                required: 'email is required',
                minLength: {
                    value: 5,
                    message: 'Name should be at least 5 characters'
                }
            })} />
            <p className='error'>{errors.email?.message}</p>
            {/* user ko msg show hoga validation ka */}
            <br></br>
            <label htmlFor="age">Age</label><br></br>
            <input type="text" id='age' {...register('age')} />
            <p className='error'>{errors.age?.message}</p>
            {/* user ko msg show hoga validation ka */}
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        <DevTool control={control} placement='top-left' />
    </div>
    )
}

export default From
