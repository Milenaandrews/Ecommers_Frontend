import React from 'react'

const Profile = () => {
  return (
    <section className='flex items-center justify-center bg-cover bg-center h-screen ' style={{ backgroundImage: "url(https://source.unsplash.com/random/?books) " }}  >
        <div className='w-96 flex items-center justify-center'>
            <div className='bg-black/75 bg rounded-3xl px-8 py-10 text-center shadow-3x1 ' >
                {/* transition duration-300 ease-in-out dark:bg-slate-800  hover:border-slate-300/30 hover:shadow-lg */}
                <h1 className='mb-4 text-red-600 text-3xl font-bold'>Perfil Usuario</h1>
                <img className='mx-auto h-40 w-40 rounded-full border border-red-700 object-cover xl:h-44 xl:w-44 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgbDP9Yb-8UQ7416RbIfyv6ARcNMFFnlYuQ&usqp=CAU"/>
                <div className='mt-3 leading-6'>
                    <h3 className='text-xl font-medium text-green-300' >
                        <h2>
                            Juanita Perez
                        </h2>

                        <h3>
                            Ciudad: 
                        </h3>

                        <h3>
                            Ciudad: 
                        </h3>
                        <h3>
                            Ciudad: 
                        </h3>



                    </h3>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Profile