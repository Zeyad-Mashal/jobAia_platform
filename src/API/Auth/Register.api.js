const URL = "https://jobaia-green.vercel.app/register";

const RegisterAPI = async (setloading, setError, data, setIsRegistering) => {
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

        if (response.ok) {  // 200, 201, 202
            setIsRegistering(false)
            setloading(false);
        } else {
            if (response.status == 400) {
                setError(result.err)
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
export default RegisterAPI;