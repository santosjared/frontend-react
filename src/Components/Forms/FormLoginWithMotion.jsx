import { useEffect, useState } from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/form/formSlice.js";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {

    const store = useSelector((state) => state.formLogin);
    const dispatch = useDispatch()

    const { formData, handleChange, setForm } = useForm({
        module:'',
        username: '',
        email: '',
        password:'',
    });
    useEffect(()=>{
        setForm(store)
    },[store])
    const [showModal, setShowModal] = useState(false);
    const [statusModel, setStatusModal] = useState('')
    const [message,setMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password === store.password){
            setStatusModal('success')
            dispatch(addUser(formData))
            setMessage(`Bienvenido: ${formData.username}`)
        }else{
            setStatusModal('error')
            setMessage(`Username/Password incorrectos!!!`)
        }
        setShowModal(true);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    const handleStatusPassword = ()=>setShowPassword(!showPassword)
    return (
        <div className="card" style={{textAlign:'center'}}>
            <div className="card-content">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ModalInfo
                        visible={showModal}
                        status={statusModel}
                        message={message}
                        onClose={onCloseModalInfo}
                    />

                    <form onSubmit={handleSubmit}>
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>{titleForm}</h3>
                        </motion.div>
                        <div style={{ marginBottom: '10px' }}>
                            <motion.div
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid-container" >
                                    <div className="grid-item" style={{ textAlign: 'right' }}><label>Module:</label></div>
                                    <div className="grid-item" style={{ textAlign: 'left' }}>
                                        <input
                                            className="text-field"
                                            disabled
                                            type="text"
                                            name="module"
                                            value={formData.module}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <motion.div
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid-container">
                                    <div className="grid-item" style={{ textAlign: 'right' }}><label>Username:</label></div>
                                    <div className="grid-item" style={{ textAlign: 'left' }}>
                                        <input
                                            className="text-field"
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <motion.div
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid-container">
                                    <div className="grid-item" style={{ textAlign: 'right' }}><label>Email:</label></div>
                                    <div className="grid-item" style={{ textAlign: 'left' }}>
                                        <input
                                            className="text-field"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <motion.div
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid-container">
                                    <div className="grid-item" style={{ textAlign: 'right' }}><label>Password:</label></div>
                                    <div className="grid-item" style={{ textAlign: 'left' }}>
                                        <input
                                            className="text-field"
                                            type={showPassword?"text":"password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        /> 
                                    </div>
                                    <div className="gri-item" style={{marginTop:'5px'}}>
                                        <span style={{backgroundColor:'#2196f3', color:'#fff', padding:'10px', borderRadius:'8px', cursor:'pointer'}} 
                                    onClick={handleStatusPassword}>{showPassword?"hidden":"show"}</span></div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button type="submit" style={{backgroundColor:'#2196f3', color:'#fff'}}>Login</button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};
export default FormWithMotionAndHook;