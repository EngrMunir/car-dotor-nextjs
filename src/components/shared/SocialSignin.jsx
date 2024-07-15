import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialSignin = () => {
    const router = useRouter()
    const handleSocialLogin= async(provider)=>{
        const resp = await signIn(provider)
        console.log(resp)
        if(resp.status === "authenticated"){
            router.push('/login')
        }
    }

    return (
        <div className='flex items-center justify-center space-x-3'>
            <button onClick={()=>handleSocialLogin('google')}  className='btn text-3xl flex items-center justify-center text-green-500'><FaGoogle/></button>
            <button onClick={()=>handleSocialLogin('github')} className='btn text-3xl flex items-center justify-center text-primary'><FaGithub /></button>
        </div>
    );
};

export default SocialSignin;