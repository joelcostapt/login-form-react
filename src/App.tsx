import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
  source: string;
  remember: boolean;
};

enum SourceEnum {
  YouTube = 'YouTube',
  Website = 'Website',
}

interface FormData {
  email: string;
  password: string;
  source: SourceEnum;
  remember: boolean;
}

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs, FormData>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data.email, data.password, data.source, data.remember);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl">something</div>
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">another text</div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input {...register('email')}
                name='email' type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input {...register('password')} name='password' type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Source</label>
              <select {...register('source')} name="source" id="" className="w-full p-2 border border-gray-300 rounded mt-1">
                <option value="YouTube">YouTube</option>
                <option value="Website">Website</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input {...register('remember')} name='remember' type="checkbox" className="h-4 w-4 text-blue-300 rounded" />
                <label htmlFor="" className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <div>
                <a href="" className="font-medium text-sm text-blue-500">Forgot Password</a>
              </div>
            </div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Submit</button>
          </form>
        </div>
    </div>
  );
}

export default App;
