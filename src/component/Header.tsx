import React, { Component } from 'react';
import SearchBox from './SearchBox'

interface AppProps { }
interface AppState {
  name?: string;
}
class Header extends Component<AppState, AppProps>  {
  readonly state: AppState = { name: 'Vivek' }

  public render() {
    return (
      <React.Fragment>
        <p> Hello ! {this.state.name}</p>
        <SearchBox />
      </React.Fragment>
    )
  }
}

export default Header