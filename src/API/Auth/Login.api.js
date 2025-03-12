const URL = "https://jobaia-green.vercel.app/login";

const LoginAPI = async (setloading, setError, data, navigate) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            localStorage.setItem('token', result.token);
            setloading(false);
            navigate("/")
        } else {
            if (response.status == 400) {
                setError(result.message)
                setloading(false);
            } else if (response.status == 401) {
                console.log(result.err);

                setError(result.err)
                setloading(false);
            }
            setloading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setloading(false)
    }
}
export default LoginAPI;