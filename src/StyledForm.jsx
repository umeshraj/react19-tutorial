export const StyledForm = () => {
    return (
        <form className="contact-form">
            <label htmlFor="username">UserName:</label>
            <input type="text" id="username" className="htmlForm-input" />
            <br />
            <label for="email">Email:</label>
            <input type="email" id="email" className="form-input" tabIndex="1" />
        </form>

    )
}