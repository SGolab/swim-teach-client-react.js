import styles from './AdminCreateNewSwimmerView.module.css'
import {useRef} from "react";
import {fetchPostNewSwimmer} from "../../../Utils";
import {useNavigate} from "react-router-dom";

function AdminCreateNewSwimmerView() {

    const firstName = useRef()
    const lastName = useRef()

    const navigate = useNavigate();

    const handleSubmit = function () {

        const swimmerDto = {
            firstName: firstName.current.value,
            lastName: lastName.current.value
        }

        console.log(swimmerDto)

        fetchPostNewSwimmer(swimmerDto)
            .then(response => {

                if (response.ok) {
                    console.log(JSON.stringify(response.body))
                    navigate('/admin')
                }

            })

    }

    return (
        <div className={'view'}>
            <div className={styles.contentContainer}>
                <input ref={firstName} placeholder={'First Name'}/>

                <input ref={lastName} placeholder={'Last Name'}/>

                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default AdminCreateNewSwimmerView;