import styles from './ChangePasswordView.module.css'
import {useRef, useState} from "react";
import {fetchPostChangePassword} from "../../../Utils";
import useLogOut from "../../../hooks/useLogOut";

function ChangePasswordView() {

    const logout = useLogOut();

    const newPassword = useRef()
    const repeatPassword = useRef()

    const [isPasswordEqualityAlert, setIsPasswordEqualityAlert] = useState(false)

    const handleChange = function () {
        if ((newPassword.current.value || repeatPassword.current.value)
            || (!newPassword.current.value && !repeatPassword.current.value)) {

            setIsPasswordEqualityAlert(newPassword.current.value !== repeatPassword.current.value)
        }
    }

    const handleSubmit = function () {

        //todo add restrictions on password length, special signs etc.

        if (newPassword.current.value === repeatPassword.current.value) {

            const changePasswordDto = {
                newPassword: newPassword.current.value
            }

            fetchPostChangePassword(changePasswordDto)
                .then(response => {
                    if (response.ok) {
                        alert('Password successfully changed. You will be logged out.')
                        logout()
                    } else {
                        alert('error') //todo handle error
                    }
                })
        }

    }

    return (
        <div className={'view'}>
            <div className={styles.contentContainer}>

                <input className={styles.input} type={"password"} ref={newPassword} placeholder={'NEW PASSWORD'}
                       onChange={handleChange}/>

                <input className={styles.input} type={"password"} ref={repeatPassword}
                       placeholder={'REPEAT NEW PASSWORD'} onChange={handleChange}/>

                {isPasswordEqualityAlert && <div className={styles.alert}>Passwords are not identical.</div>}

                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default ChangePasswordView;
