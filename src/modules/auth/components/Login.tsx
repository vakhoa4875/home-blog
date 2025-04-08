import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { loginWithKeycloak } from "../services/authService";

const LoginCard: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignIn = async () => {
        try {
            const response = await loginWithKeycloak(email, password);
            login(response.access_token, response.refresh_token); // lưu vào AuthContext
            navigate("/");
        } catch (err) {
            setError("Đăng nhập thất bại");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[var(--background-color)] px-4">
            <div className="bg-white p-6 shadow-2xl rounded-2xl w-full max-w-lg">
                {/* Header */}
                <div className="relative mb-6">
                    <div className="absolute">
                        <Button icon="fi fi-rr-undo" className="p-button-text text-[var(--primary-color)]" onClick={() => navigate(-1)} />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/logo.png" alt="hyper" className="cursor-pointer h-[50px]" onClick={() => navigate("/")} />
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="text-center mb-6">
                    <h2 className="text-[var(--primary-color)] text-3xl font-semibold mb-2">Chào mừng trở lại</h2>
                    <p className="text-gray-600">
                        Bạn chưa có tài khoản?
                        <Link to="/register" className="ml-2 text-[var(--primary-color)] font-medium hover:underline">Tạo ngay hôm nay!</Link>
                    </p>
                </div>

                {error && <div className="text-red-600 mb-4">{error}</div>}
                {/* Form Section */}
                <div>
                    <label htmlFor="email" className="block text-gray-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" placeholder="Địa chỉ email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4! border border-[var(--primary-border-color)] focus:border-[var(--primary-color)]" />

                    <label htmlFor="password" className="block text-gray-900 font-medium mb-2">Mật khẩu</label>
                    <InputText id="password" type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4! border border-[var(--primary-border-color)] focus:border-[var(--primary-color)]" />

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <Checkbox inputId="rememberme" onChange={(e) => setRememberMe(e.checked ?? false)} checked={rememberMe} className="mr-2" />
                            <label htmlFor="rememberme" className="text-gray-700">Ghi nhớ đăng nhập</label>
                        </div>
                        <Link to="/forgot-password" className="text-[var(--primary-color)] text-sm font-medium hover:underline">Quên mật khẩu?</Link>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">

                        <Button label="Đăng nhập" icon="pi pi-user" className="px-10! bg-[var(--primary-color)] border-[var(--primary-border-color)] hover:bg-[var(--primary-color-hover)]" onClick={handleSignIn} />

                        <Button
                            label="Đăng nhập với Google"
                            icon="fi fi-brands-google"
                            className="btn-transparent bg-red-500 border-red-500 hover:bg-red-600 text-white"
                            onClick={() => console.log("Login with Google")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginCard;