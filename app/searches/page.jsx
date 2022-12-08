import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter()

  router.back()

}

export default page
