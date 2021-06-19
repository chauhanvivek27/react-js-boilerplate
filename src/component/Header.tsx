import { Component } from 'react';

interface AppProps { }
interface AppState {
  name?: string;
}
class Header extends Component<AppState, AppProps>  {
    readonly state: AppState = { name: 'Vivek' }

    public render() {
        return <p> Hello ! { this.state.name }</p>
    }
}

export default Header