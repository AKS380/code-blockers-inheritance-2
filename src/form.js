/*
  This example requires some changes to your config:
  
  
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Form() {
  return (
    <form >
        <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
      <div className="mx-auto max-w-3xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">inheritance.com/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

           

          

            
            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>India</option>
                  <option>china</option>
                  <option>pakistan</option>
                  
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Radius of Lobes" className="block text-sm font-medium leading-6 text-gray-900">
              Radius of Lobes
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Radius of Lobes"
                  id="Radius of Lobes"
                  autoComplete="Radius of Lobes"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Outer Perimeter of Lobes" className="block text-sm font-medium leading-6 text-gray-900">
              Outer Perimeter of Lobes
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Outer Perimeter of Lobes"
                  id="Outer Perimeter of Lobes"
                  autoComplete="Outer Perimeter of Lobes"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Mean of Surface Texture" className="block text-sm font-medium leading-6 text-gray-900">
              Mean of Surface Texture
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Mean of Surface Texture"
                  id="Mean of Surface Texture"
                  autoComplete="Mean of Surface Texture"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor=" Mean Area of Lobes" className="block text-sm font-medium leading-6 text-gray-900">
              Mean Area of Lobes
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name=" Mean Area of Lobes"
                  id="Mean Area of Lobes"
                  autoComplete=" Mean Area of Lobes"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Mean of Smoothness Levels" className="block text-sm font-medium leading-6 text-gray-900">
              Mean of Smoothness Levels
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Mean of Smoothness Levels"
                  id="Mean of Smoothness Levels"
                  autoComplete="Mean of Smoothness Levels"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Mean of Compactness" className="block text-sm font-medium leading-6 text-gray-900">
              Mean of Compactness
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Mean of Compactness"
                  id="Mean of Compactness"
                  autoComplete="Mean of Compactness"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Mean of Concavity" className="block text-sm font-medium leading-6 text-gray-900">
              Mean of Concavity
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Mean of Concavity"
                  id="Mean of Concavity"
                  autoComplete="Mean of Concavity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Mean of Concavity" className="block text-sm font-medium leading-6 text-gray-900">
              Mean of Concavity
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Mean of Concavity"
                  id="Mean of Concavity"
                  autoComplete="Mean of Concavity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Mean of Symmetry" className="block text-sm font-medium leading-6 text-gray-900">
              Mean of Symmetry
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Mean of Symmetry"
                  id="Mean of Symmetry"
                  autoComplete="Mean of Symmetry"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Mean of Fractal Dimension" className="block text-sm font-medium leading-6 text-gray-900">
              Mean of Fractal Dimension
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Mean of Fractal Dimension"
                  id="Mean of Fractal Dimension"
                  autoComplete="Mean of Fractal Dimension"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Standard Error of Radius" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of Radius
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of Radius"
                  id="Standard Error of Radius"
                  autoComplete="Standard Error of Radius"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Standard Error of Texture" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of Texture
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of Texture"
                  id="Standard Error of Texturen"
                  autoComplete="Standard Error of Texture"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Perimeter of Standard Error" className="block text-sm font-medium leading-6 text-gray-900">
              Perimeter of Standard Error
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Perimeter of Standard Error"
                  id="Perimeter of Standard Error"
                  autoComplete="Perimeter of Standard Error"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Area of Standard Error" className="block text-sm font-medium leading-6 text-gray-900">
              Area of Standard Error
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Area of Standard Error"
                  id="Area of Standard Error"
                  autoComplete="Area of Standard Error"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Standard Error of Smoothness" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of Smoothness
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of Smoothness"
                  id="Standard Error of Smoothness"
                  autoComplete="Standard Error of Smoothness"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Standard Error of Compactness" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of Compactness
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of Compactness"
                  id="Standard Error of Compactness"
                  autoComplete="Standard Error of Compactness"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Standard Error of Concavity" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of Concavity
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of Concavity"
                  id="Standard Error of Concavity"
                  autoComplete="Standard Error of Concavity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Standard Error of Concave points" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of Concave points
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of Concave points"
                  id="Standard Error of Concave points"
                  autoComplete="Standard Error of Concave points"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Standard Error of symmetry" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of symmetry
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of symmetry"
                  id="Standard Error of symmetry"
                  autoComplete="Standard Error of symmetry"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Standard Error of Fractal dimension" className="block text-sm font-medium leading-6 text-gray-900">
              Standard Error of Fractal dimension
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Standard Error of Fractal dimension"
                  id="Standard Error of Fractal dimension"
                  autoComplete="Standard Error of Fractal dimension"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Worst Radius" className="block text-sm font-medium leading-6 text-gray-900">
              Worst Radius
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worst Radius"
                  id="Worst Radius"
                  autoComplete="Worst Radius"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Worst Texture" className="block text-sm font-medium leading-6 text-gray-900">
              Worst Texture
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worst Texture"
                  id="Worst Texture"
                  autoComplete="Worst Texture"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Worst Permimeter" className="block text-sm font-medium leading-6 text-gray-900">
              Worst Permimeter
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worst Permimeter"
                  id="Worst Permimeter"
                  autoComplete="Worst Permimeter"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Worst Area" className="block text-sm font-medium leading-6 text-gray-900">
              Worst Area
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worst Area"
                  id="Worst Area"
                  autoComplete="Worst Area"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Worst Smoothness" className="block text-sm font-medium leading-6 text-gray-900">
              Worst Smoothness
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worst Smoothness"
                  id="Worst Smoothness"
                  autoComplete="Worst Smoothness"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="Worse Compactness" className="block text-sm font-medium leading-6 text-gray-900">
              Worse Compactness
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worse Compactness"
                  id="Worse Compactness"
                  autoComplete="Worse Compactness"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Worst Concavity" className="block text-sm font-medium leading-6 text-gray-900">
              Worst Concavity
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worst Concavity"
                  id="Worst Concavity"
                  autoComplete="Worst Concavity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="Worst Concave Points" className="block text-sm font-medium leading-6 text-gray-900">
              Worst Concave Points
              </label>
              <div className="mt-2">
                <input
                  type="int"
                  name="Worst Concave Points"
                  id="Worst Concave Points"
                  autoComplete="Worst Concave Points"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified about updates .</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Doctors 
                    </label>
                    <p className="text-gray-500">Get notified about good doctors .</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      medicines 
                    </label>
                    <p className="text-gray-500">Get notified about new medicines in market .</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      </div>
    </form>
  )
}
