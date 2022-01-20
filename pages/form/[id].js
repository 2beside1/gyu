import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Create() {
    const router = useRouter()

    const [btnState, setBtnState] = useState(false);
    const { id } = router.query

    return (
        <div>
            {id}
        </div>
    )
}