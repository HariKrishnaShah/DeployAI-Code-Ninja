import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Register() {
    
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();
    const [view, setView] = useState(true)


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        mobile: ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setErrorMessage('');
        setFormData({
            ...formData,
            [name]: value,
        });
        setView(true)

    };

    async function handleSubmit(e) {
        e.preventDefault(); 



        if (!validateForm()) {
            return; 
        }


        try {
            const res = await axios.post("http://localhost:4000/api/v1/auth/signup", formData);

            if (res.data.success) {
                // Redirect to the dashboard page
                alert(res.data.message);
                navigate("/login");
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    }

  
    function validateForm() {
        if (formData.username.trim() === '') {
            setErrorMessage('Username is required');
            return false;
        }
        if (formData.email.trim() === '') {
            setErrorMessage('Email is required');
            return false;
        }
        if (formData.password.trim() === '') {
            setErrorMessage('Password is required');
            return false;
        }
        if (formData.address.trim() === '') {
            setErrorMessage('Address is required');
            return false;
        }
        if (formData.mobile.trim() === '') {
            setErrorMessage('Mobile number is required');
            return false;
        }

       
        if (!validateEmail(formData.email)) {
            setErrorMessage('Please enter a valid email address');
            return false;
        }


  
        const passwordValidationResult = validatePassword(formData.password);
        if (passwordValidationResult !== true) {
            setErrorMessage(passwordValidationResult);
            return false;
        }

        if (!/^\d{10}$/.test(formData.mobile)) {
            setErrorMessage('Mobile number must be 10 digits');
            return false;
        }


        setErrorMessage(''); 
        return true;
    }

    function validateEmail(email) {
       
        const re = /@gmail\.com$/;
       
        return re.test(email);
    }
    
    function validatePassword(password) {
       
        if (password.length < 6) {
            return 'Password must be at least 6 characters long';
        }

       
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const symbolRegex = /[!@#$%&*]/;

        if (!uppercaseRegex.test(password)) {
            return 'Password must contain at least one uppercase letter';
        }
        if (!lowercaseRegex.test(password)) {
            return 'Password must contain at least one lowercase letter';
        }
        if (!digitRegex.test(password)) {
            return 'Password must contain at least one digit';
        }
        if (!symbolRegex.test(password)) {
            return 'Password must contain at least one of the following symbols: !@#$%&*';
        }

        return true;
    }


    async function VerifyEmail() {
        try {
            const res = await axios.post("http://localhost:4000/api/v1/auth/signupcheck", { email: formData.email });
          
            if (res.data.success) {
                setErrorMessage('User ID already exists');
            } else {
                setErrorMessage('');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    }


    return (
        <div >
           
            <span className="text-danger d-flex align-items-center justify-content-center">{errorMessage}</span>

            <div className="d-flex align-items-center justify-content-center  " style={{ minHeight: "90vh" }}>

                <form className="col-3-lg col-6-md col-9-sm  border border-5 border-light rounded rounded-3" onSubmit={handleSubmit}>

                    <div className="m-1 rounded rounded-2  " style={{ backgroundColor: "#ffff00" }}> <h4 className="p-2 m-2">Register Page</h4></div>

                  
                    <div className="p-1 m-2">

                      
                        <input type="text" className="form-control" id="username" name="username"
                            value={formData.username} placeholder="Enter Username" onChange={handleInputChange}
                            autoFocus required
                        />
                    </div>
                    <div className="p-1 m-2">

                        
                        <input type="email" className="form-control" id="email" name="email"
                            value={formData.email} placeholder="Enter Email" onChange={handleInputChange} onKeyUp={VerifyEmail}
                            required
                        />
                        
                    </div>
                    
                    <div className="p-1 m-2 " style={{ height: "3rem" }}>
                       
                        {view ?
                            <div style={{ height: "3rem" }}>
                                <input
                                    type="password" className="form-control" id="password" name="password"
                                    value={formData.password} placeholder="Enter Password" onChange={handleInputChange}
                                    required
                                /><span className="bi bi-eye-slash-fill  "
                                    onClick={() => setView(false)}
                                    style={{ position: 'relative', left: "181px", bottom: "30px" }}
                                ></span>
                            </div> :
                            <div style={{ height: "3rem" }}>
                                <input
                                    type="text" className="form-control" id="password" name="password"
                                    value={formData.password} placeholder="Enter Password" onChange={handleInputChange}
                                    required
                                /><span className="bi bi-eye  "
                                    onClick={() => setView(true)}

                                    style={{ position: 'relative', left: "181px", bottom: "30px" }}
                                ></span>
                            </div>
                        }

                    </div>
                    <div className="p-1 m-2">

                       
                        <input type="text" className="form-control" id="address" name="address"
                            value={formData.address} placeholder="Address" onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="p-1 m-2">

                     
                        <input type="text" className="form-control" id="mobile" name="mobile"
                            value={formData.mobile} placeholder="Mobile" onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="p-1 m-2">

                        <button className="btn btn-primary w-100" >submit</button>
                    </div>
                    <div className="p-1 m-2">

                        <Link to="/login"> already have account</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}