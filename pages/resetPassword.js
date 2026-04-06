import { useState } from "react";
import axios from "@/services/axios";
import { useRouter } from "next/router";
import {
  Wrapper,
  Form,
  Title,
  Subtitle,
  InputGroup,
  Input,
  Button,
  BackLink,
  PasswordToggleButton
} from "@/styles/resetPassword.styles";
import Notification from "@/components/notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faArrowLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("form");

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false
  });

  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });

  const showNotification = (message, type = "success", duration = 3000) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, duration);
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      return showNotification("Completa todos los campos", "error");
    }

    if (password !== confirmPassword) {
      return showNotification("Las contraseñas no coinciden", "error");
    }

    try {
      await axios.post("/users/reset-password", {
        token,
        password,
      });
      setStatus("success");
      showNotification("Contraseña actualizada correctamente");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setStatus("error");
      showNotification(
        error.response?.data?.msg || "Error al procesar",
        "error"
      );
    }
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    setPassword("");
    setConfirmPassword("");
    setNotification({ message: "", type: "" });
    router.push("/login");
  };

  const isValid = password && confirmPassword && password === confirmPassword;

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {status === "form" && (
          <>
            <Title>Restablecer contraseña</Title>
            <Subtitle>Ingresa tu nueva contraseña</Subtitle>

            <InputGroup>
              <FontAwesomeIcon icon={faLock} />
              <Input
                type={showPassword.password ? "text" : "password"}
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordToggleButton
                type="button"
                onClick={() => togglePassword("password")}
              >
                <FontAwesomeIcon
                  icon={showPassword.password ? faEye : faEyeSlash}
                />
              </PasswordToggleButton>
            </InputGroup>

            <InputGroup>
              <FontAwesomeIcon icon={faLock} />
              <Input
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <PasswordToggleButton
                type="button"
                onClick={() => togglePassword("confirm")}
              >
                <FontAwesomeIcon
                  icon={showPassword.confirm ? faEye : faEyeSlash}
                />
              </PasswordToggleButton>
            </InputGroup>

            <Button type="submit">
              Guardar nueva contraseña
            </Button>

            <BackLink
              type="button"
              onClick={handleBackToLogin}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Regresar al inicio de sesión
            </BackLink>
          </>
        )}

        {status === "success" && (
          <Title>Redirigiendo...</Title>
        )}

        {status === "error" && (
          <>
            <Title>Ocurrió un error</Title>
            <Button onClick={() => router.push("/login")}>
              Regresar al inicio de sesión
            </Button>
          </>
        )}
      </Form>

      <Notification message={notification.message} type={notification.type} />
    </Wrapper>
  );
}