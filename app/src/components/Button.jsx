const Button = ({ children, onClick }) => (
    <button onClick={onClick} type="button" class="btn btn-primary">{children}</button>
);
export default Button;
