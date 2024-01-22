export const getCurrentUser = async () => {
    try {
        const session = await axios.get("/api/v1/users/currentuser/")
    } catch (error) {
        console.log(error);
        // toast.error("Error in loading userdata!")        
    }
}