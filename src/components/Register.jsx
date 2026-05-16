import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
    let navigate = useNavigate()
    let {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    })
   let handlesub = async (data) => {
    try {
        console.log(data);

        let res = await axios.post(
            "http://localhost:3000/api/auth/register",
            data,
            { withCredentials: true } // 👈 add this
        );

        // console.log("Response:", res.data);
        alert(res.data.message)
        navigate('/')
        reset()

    } catch (error) {
        console.log("ERROR:", error.response?.data || error.message);
    }
};
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-white tracking-tight">
                    Join the <span className="text-indigo-500">DevHub</span> community
                </h2>
                <p className="mt-2 text-center text-sm text-slate-400">
                    Already have an account?{' '}
                    <a href="/auth" className="font-medium text-indigo-400 hover:text-indigo-300">
                        Sign in
                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-800 py-8 px-4 shadow-2xl border border-slate-700 sm:rounded-xl sm:px-10">
                    <form
                        onSubmit={handleSubmit(handlesub)}
                        className="space-y-5">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    {...register('name', { required: "please fill the field" })}
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm placeholder-slate-500 bg-slate-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    {...register('email', { required: "please fill the field" })}
                                    type="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm placeholder-slate-500 bg-slate-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    {...register('password', { required: "please fill the field" })}
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm placeholder-slate-500 bg-slate-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>



                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                required
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-600 rounded bg-slate-700"
                            />
                            <label className="ml-2 block text-sm text-slate-400">
                                I agree to the <a href="#" className="text-indigo-400">Terms</a> and <a href="#" className="text-indigo-400">Privacy Policy</a>
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
