import {Component} from "react";
import {StyledForm, StyledGreetings, StyledInput, StyledLabel, StyledLoginBtn} from "./StyledForForm";

export default class Form extends Component {
    state = {
        user: '',
        rememberMe: false
    };



    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({[input.name]: value});
    };

    handleFormSubmit = () => {
        const {user, rememberMe} = this.state;
        localStorage.setItem('rememberMe', JSON.stringify(rememberMe));
        localStorage.setItem('user', rememberMe ? user : '');
    };

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        this.setState({user, rememberMe});
    };



    render() {
        return (
            <div >
                <StyledForm data-testid="testId-form" onSubmit={this.handleFormSubmit}>
                    <StyledLabel>
                        <h4>User : </h4> <StyledInput name="user" value={this.state.user} onChange={this.handleChange}/>
                    </StyledLabel>
                    <StyledLabel>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange}
                               type="checkbox"/> Remember me
                    </StyledLabel>
                    <StyledLoginBtn type="submit">Sign In</StyledLoginBtn>
                </StyledForm>
                { this.state.user !== '' ? <StyledGreetings>
                    Welcome to studying, {this.state.user}
                </StyledGreetings> : <StyledGreetings>Let's get acquainted!</StyledGreetings>}
            </div>
        );
    }
}